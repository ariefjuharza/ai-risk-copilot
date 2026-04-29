import { AuditResult, Finding, RiskLevel } from '@/types';

// Rule definition for heuristics
interface Rule {
  id: string;
  pattern: RegExp;
  severity: RiskLevel;
  category: string;
  explanation: string;
  recommendation: string;
  regulationMapping?: string;
}

const RULES: Rule[] = [
  {
    id: 'rule-public-link',
    pattern: /public link/i,
    severity: 'High',
    category: 'Data Exposure',
    explanation: 'Penggunaan public link untuk membagikan data berpotensi besar menyebabkan akses tidak sah oleh pihak luar.',
    recommendation: 'Ganti public link dengan akses terbatas yang mensyaratkan autentikasi (misal: sharing via internal drive dengan permissions).',
    regulationMapping: 'UU PDP Pasal 46 (Kegagalan Perlindungan Data Pribadi)'
  },
  {
    id: 'rule-external-vendor',
    pattern: /dibagikan ke vendor eksternal/i,
    severity: 'Medium',
    category: 'Third-Party Risk',
    explanation: 'Membagikan data ke vendor eksternal tanpa kontrol lanjutan dapat melanggar NDA atau kebijakan retensi data.',
    recommendation: 'Terapkan proses signing NDA, dan gunakan secure portal untuk transmisi data ke eksternal bukan file spreadsheet utuh.',
    regulationMapping: 'ISO/IEC 27001:2022 A.5.8 (Information Security in Supplier Relationships)'
  },
  {
    id: 'rule-all-access',
    pattern: /semua anggota tim dapat mengakses/i,
    severity: 'High',
    category: 'Access Control',
    explanation: 'Memberikan akses universal melanggar prinsip "least privilege" dan membahayakan kerahasiaan data internal/karyawan.',
    recommendation: 'Batasi akses secara ketat berdasarkan Role (Role-Based Access Control) hanya untuk staf HR atau investigator yang ditugaskan.',
    regulationMapping: 'ISO/IEC 27001:2022 A.8.1.1 (Access Control Policy)'
  },
  {
    id: 'rule-check-later',
    pattern: /memeriksa perubahan belakangan/i,
    severity: 'Medium',
    category: 'Compliance Control',
    explanation: 'Model "check later" (tanpa proactive approval) berisiko karena insiden bisa terjadi sebelum proses pemeriksaan dilakukan.',
    recommendation: 'Tambahkan step "Approval Manajerial" wajib sebelum perubahan dokumen dapat disimpan atau diaplikasikan.',
    regulationMapping: 'COBIT 2019: BAI06.01 (Manage IT Changes)'
  },
  {
    id: 'rule-copy-personal-chat',
    pattern: /disalin dari chat ke dokumen bersama/i,
    severity: 'High',
    category: 'Data Handling',
    explanation: 'Menyalin data identitas personal (PII) dari platform tidak terstruktur ke dokumen kolaboratif mencederai protokol perlindungan PII.',
    recommendation: 'Gunakan sistem tiket terpusat (Zendesk/Jira) di mana PII bisa ditandai atau diretrik, jangan memindahkannya ke dokumen terbuka.',
    regulationMapping: 'UU PDP Pasal 38 (Pemrosesan Data Pribadi Sesuai Tujuannya)'
  },
  {
    id: 'rule-without-approval',
    pattern: /tanpa approval manajer/i,
    severity: 'Medium',
    category: 'Governance',
    explanation: 'Langkah operasional krusial tanpa approval menandakan absennya "maker-checker" control yang merupakan standar kepatuhan operasional.',
    recommendation: 'Tentukan matriks eskalasi, buat workflow agar tiket sensitive meng-trigger notifikasi approval.',
    regulationMapping: 'ISO/IEC 27001:2022 A.12.1.2 (Change Management)'
  }
];

export async function analyzeText(text: string, mode: 'demo' | 'azure' = 'demo'): Promise<AuditResult> {
  // Simulate network delay for effect
  await new Promise(resolve => setTimeout(resolve, 1500));

  const findings: Finding[] = [];
  let score = 100;

  // Run heuristics (Demo Mode)
  for (const rule of RULES) {
    const match = rule.pattern.exec(text);
    if (match) {
      findings.push({
        id: rule.id + '-' + Date.now(),
        excerpt: match[0],
        severity: rule.severity,
        category: rule.category,
        explanation: rule.explanation,
        recommendation: rule.recommendation,
        regulationMapping: rule.regulationMapping,
      });

      if (rule.severity === 'High') score -= 30;
      if (rule.severity === 'Medium') score -= 15;
      if (rule.severity === 'Low') score -= 5;
    }
  }

  score = Math.max(0, score); // clamp to 0 minimum

  let overallRisk: RiskLevel = 'Low';
  if (score < 50) overallRisk = 'High';
  else if (score < 80) overallRisk = 'Medium';

  let summary = 'Proses terlihat aman tanpa celah kepatuhan mayor.';
  if (overallRisk === 'High') {
    summary = 'Proses memiliki celah kepatuhan kritis. Perbaikan kontrol akses dan perlindungan data diperlukan segera sebelum implementasi.';
  } else if (overallRisk === 'Medium') {
    summary = 'Terdapat beberapa langkah yang belum memiliki standar kontrol keamanan yang baik. Disarankan menerapkan mitigasi yang dianjurkan.';
  }

  return {
    overallRisk,
    score,
    findings,
    summary,
  };
}
