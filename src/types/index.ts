export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface Finding {
  id: string;
  excerpt: string; // The exact text snippet that is problematic
  severity: RiskLevel;
  category: string; // e.g., 'Data Exposure', 'Access Control', 'Ambiguity'
  explanation: string;
  recommendation: string;
  regulationMapping?: string;
}

export interface AuditResult {
  overallRisk: RiskLevel;
  score: number; // 0-100 (100 being perfectly safe, 0 being highly critical)
  findings: Finding[];
  summary: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  text: string;
}
