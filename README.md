# RiskCopilot - AI Compliance & Risk Copilot

![RiskCopilot Banner](/public/copilot-icon.svg) <!-- Opsional: Anda dapat mengganti dengan banner logo buatan sendiri -->

**RiskCopilot** adalah platform cerdas (copilot) berbasis teks yang dirancang untuk mencegah pelanggaran kepatuhan operasional (compliance) dan kebocoran data. Aplikasi ini memungkinkan para profesional IT, Compliance Officer, dan pemangku kepentingan untuk mengaudit Prosedur Operasi Standar (SOP) dan alur kerja (workflow) **sebelum** proses tersebut diimplementasikan.

Dibangun khusus untuk **Microsoft Elevate Training Center x Dicoding AI Impact Challenge Hackathon**, mengusung tema *"Kepatuhan Regulasi dan Keamanan Data"*.

## 🌟 Nilai Utama (Value Proposition)
*"Audit SOP dan alur data operasional Anda sebelum risiko berubah menjadi insiden."*

Alih-alih menjadi "chatbot AI" generik, RiskCopilot hadir sebagai sistem ulasan proaktif (preventative review) yang mampu secara cerdas mengidentifikasi celah keamanan yang ambigu, memetakan risiko ke regulasi yang relevan (seperti UU PDP atau ISO 27001), dan memberikan rekomendasi solusi *(Next Best Action)* secara langsung.

## ✨ Fitur Inti
- **Sistem Pemindaian SOP Cepat**: Tempelkan teks alur kerja dan lihat masalah kepatuhan dalam sekejap.
- **Smart Document Highlighter**: Menyoroti kata atau kalimat presisi yang mengandung potensi bahaya.
- **Pemetaan Standar Regulasi**: Langsung memetakan celah keamanan ke standar regulasi seperti *UU Perlindungan Data Pribadi (PDP)* dan *ISO/IEC 27001*.
- **Dashboard Skor Risiko (Risk Score)**: Menyajikan representasi visual tingkat bahaya (Kritis, Sedang, Rendah).
- **Laporan Audit Terintegrasi**: Dapat mencetak hasil audit interaktif ke format PDF rapi *(Ready for Management Report)*.
- **Dual-Mode Architecture**: Mendukung "Demo Mode" yang 100% stabil untuk presentasi, sekaligus dirancang arsitektur "Azure Mode" untuk implementasi level production ke depan.

## 🚀 Persiapan dan Instalasi (Local Development)

Proyek ini dibangun menggunakan **Next.js 14**, **TailwindCSS**, dan **TypeScript**. Sangat ringan dan dirancang *deployment-ready* ke **Azure Static Web Apps**.

### 1. Kloning Repositori
```bash
git clone https://github.com/ariefjuharza/ai-risk-copilot.git
cd ai-risk-copilot
```

### 2. Instalasi Dependensi
```bash
npm install
# Dependensi utama: lucide-react, framer-motion, react-to-print
```

### 3. Menjalankan Server Lokal
```bash
npm run dev
```
Buka peramban (browser) Anda dan arahkan ke [http://localhost:3001](http://localhost:3001) (atau `3000` sesuai ketersediaan port terminal Anda).

## 🛠 Panduan Demonstrasi (Khusus Hackathon)

Aplikasi ini sudah dilengkapi dengan 3 buah **Template Eksperimen** untuk mendemokan kapabilitas penuh alat ini tanpa perlu mencari-cari teks sampel:
1. Pilih **"Public File Sharing"** untuk mendemokan eksposur data eksternal.
2. Pilih **"Unclear Access Control"** untuk mendemokan celah kebijakan *least privilege*.
3. Pilih **"Ambiguous Handling"** untuk mendemokan pelanggaran kerahasiaan PII.

Klik tombol uji, dan perhatikan bagaimana RiskCopilot menyoroti risiko dan merekomendasikan solusi terstruktur.

---

**Dibuat dengan ❤️ untuk Hackathon Microsoft Elevate x Dicoding.**
