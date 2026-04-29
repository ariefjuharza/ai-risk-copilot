---

### **Informasi Peserta**

| No | Nama | Email Dicoding |
| :---: | :---: | :---: |
| 1 | [Arif Juharza] | [ariefjuharza@gmail.com] |

* ### **Topik : Kepatuhan Regulasi dan Keamanan Data** 

* ### **Ringkasan Eksekutif**

Banyak organisasi saat ini memiliki Standar Operasional Prosedur (SOP) dan alur kerja (*workflow*) yang sering kali secara tidak sadar mengekspos data sensitif, seperti akses universal untuk seluruh karyawan atau pembagian *public link* ke pihak vendor eksternal. Ironisnya, proses *review compliance* umumnya masih berjalan lambat dan manual, sehingga pelanggaran perlindungan data acap kali baru disadari setelah insiden (kebocoran data) terjadi (*after the fact*).

Proyek **AI Compliance & Risk Copilot (RiskCopilot)** dirancang sebagai *painkiller* atas kendala tersebut. Kami membangun instrumen preventif proaktif yang memungkinkan spesialis IT, *Compliance Officer*, maupun pimpinan perusahaan untuk memvalidasi alur kerja sebelum instruksi tersebut diaplikasikan ke lapangan. Terinspirasi oleh konsep *"Shift-Left Security"*, aplikasi cerdas ini akan memindai narasi kebijakan, menemukan anomali keamanan, dan memetakannya langsung pada kerangka aturan perundang-undangan seperti **UU Perlindungan Data Pribadi (UU PDP)** serta standar internasional **ISO/IEC 27001**. 

* ### **Deskripsi Product/Aplikasi**

**RiskCopilot** adalah sebuah aplikasi web interaktif berbasis arsitektur *copilot* pencegahan risiko (Preventative Risk Copilot). 

Fungsi utama dari produk ini adalah membaca input teks berupa dokumen Standar Operasional Prosedur (SOP) atau instruksi kerja harian, lalu secara sistematis melakukan audit kepatuhan. RiskCopilot memecahkan masalah kelambanan mitigasi dengan seketika menyoroti kalimat ambigu pada layar (*Document Highlighter*), menampilkan Skor Risiko Kepatuhan visual, merangkum celah bahayanya, serta mendiktekan rekomendasi perbaikan (*Next Best Action*). Melalui pendekatan *one-page workspace*, alat bantu cerdas ini membuat proses perancangan kebijakan operasional menjadi lebih cepat, terstruktur, dan selaras dengan instrumen hukum.

* ### **Fitur Utama dan Teknologi yang Digunakan**

Berikut adalah penjabaran fitur-fitur utama beserta dukungan teknologi pada RiskCopilot:

* **Smart Document Highlighter:** Logika pemetaan berbasis UI yang sanggup menyoroti lokasi pasti potensi bahaya di dalam tumpukan paragraf.
* **Heuristic Engine & Regulatory Mapping:** Modul mesin deteksi terstruktur yang menilai keparahan (Rendah/Sedang/Tinggi) dan menyocokkan celah tersebut dengan regulasi seperti **UU PDP Pasal 46** atau **ISO 27001**.
* **One-Click Export PDF Report:** Generator laporan audit instan siap cetak untuk diserahkan ke tingkat manajemen (*Board of Directors*).
* **Dual-Mode AI Architecture (Demo & Azure Target):** Dirancang dengan skema *environment-ready*, aplikasi ini berjalan optimal menggunakan simulasi lokal *Heuristic* (sangat dianjurkan untuk reliabilitas demo di panggung tanpa jeda API) dan telah dipersiapkan arsitekturnya untuk terkoneksi ke layanan Azure AI Language.
* **Framework:** Next.js 14 (App Router) dengan TypeScript.
* **Styling & UI:** Tailwind CSS, Framer Motion (untuk animasi dan transisi modern), dan Lucide React (ikon berkualitas enterprise).
* **Deployment Readiness:** Arsitektur yang dirancang 100% kompatibel dan *free-tier friendly* untuk Microsoft Azure Static Web Apps.

* ### **Cara Penggunaan Product**

**Alur Penggunaan dari Sudut Pandang Pengguna (End-User):**

1.  **Akses Workspace:** Pengguna membuka platform (URL Web). Tampilan akan langsung menyuguhkan kolom *Plain Text Editor* tanpa *dashboard* statistik generik yang membingungkan.
2.  **Input Dokumen:** Pengguna menempelkan (*paste*) draft prosedur atau deskripsi alur kerja operasional. (Bagi dewan juri, telah disediakan tombol 3 "Skenario Eksperimen" seperti *Public File Sharing* atau *Ambiguous Handling* untuk otomatis mengisi editor).
3.  **Proses Audit AI:** Pengguna mengklik tombol **"Analisis Risiko"**. Layar akan mengunci proses dengan animasi pemindaian selama beberapa detik untuk memastikan data terurai.
4.  **Tinjau Hasil:** Layar berpindah ke halaman Hasil Audit. Pengguna melihat:
    *   Teks dokumennya telah diwarnai merah/kuning untuk letak pelanggaran spesifik.
    *   Meteran *Risk Score Gauge* (Skor Risiko Keseluruhan).
    *   Kartu *Next Best Action* beserta referensi *Mapping Regulasi*.
5.  **Ekspor Laporan:** Pengguna menekan tombol "Unduh Laporan" (PDF) untuk mendapatkan bentuk fisik atau digital dari kesimpulan audit tersebut.

* ### **Informasi Pendukung [Opsional]**

*   **Repository Kode Sumber (GitHub):** [https://github.com/ariefjuharza/ai-risk-copilot](https://github.com/ariefjuharza/ai-risk-copilot)
*   **Visi Pengembangan Lanjutan (Post-Hackathon):** Integrasi sistem otentikasi **Microsoft Entra ID** bagi internal *Compliance Officer*, serta penyelarasan dengan **Azure DevOps** agar penemuan risiko Kritis bisa langsung dikonversi menjadi sebuah *Tiket Pekerjaan/IT Task*. Kami juga merencanakan penggunaan **Azure Document Intelligence** (OCR) di tahap akhir, sehingga aplikasi ini mampu menelan langsung format PDF orisinal peraturan alih-alih terbatas pada teks *(plain-text)* saja. 
---
