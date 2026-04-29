import { Scenario } from '@/types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'demo-1',
    title: 'Public File Sharing',
    description: 'Risiko eksposur data karena eksport rutin',
    text: `PROSES EKSPORT MINGGUAN:\nSetiap hari Jumat pukul 17:00, admin akan mengkompilasi data pelanggan dari sistem CRM. Data pelanggan diekspor setiap minggu ke spreadsheet dan dibagikan ke vendor eksternal menggunakan public link agar semua pihak mudah mengakses. Tidak ada validasi lebih lanjut setelah link dibagikan.`,
  },
  {
    id: 'demo-2',
    title: 'Unclear Access Control',
    description: 'Risiko akses luas dan approval tidak jelas',
    text: `SOP PENANGANAN KELUHAN:\nKetika ada keluhan terkait karyawan, HR akan membuat dokumen investigasi. Semua anggota tim dapat mengakses catatan karyawan internal jika diperlukan untuk mempercepat proses. Pemilik proses biasanya memeriksa perubahan belakangan jika ada masalah yang dilaporkan.`,
  },
  {
    id: 'demo-3',
    title: 'Ambiguous Handling',
    description: 'Penanganan data sensitif tanpa kontrol ketat',
    text: `WORKFLOW HELPDESK:\nTiket laporan masuk melalui chatbot. Tim dukungan lini pertama akan membaca laporan tersebut. Keluhan pelanggan yang berisi detail pribadi disalin dari chat ke dokumen bersama untuk ditindaklanjuti oleh beberapa departemen. Proses ini dilakukan tanpa approval manajer.`,
  }
];
