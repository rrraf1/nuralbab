
export const identity = {
  name: "Nur Albab Nusantara",
  established: "Cilegon, 04 Oktober 2023",
  address: "Jl. Raya Merak Link. Tegal Wangi No.64 RT.006 RW.007 Rawa Arum Gerogol Kota Cilegon Banten 42436",
  phone: "08993700085",
  email: "yayasancintanuralbab@gmail.com",
  founder: "Edi Haryadi",
  chairman: "Muhamad Darojat",
  viceChairman: "Irwandi",
  secretary: "Rifqiyadi",
  treasurer: "Eva Huriyati",
  activities: "Keagamaan, sosial dan kemanusiaan",
};

export const vision = "Menjadi yayasan sosial yang terdepan, dikenal luas, peduli, amanah dan mandiri serta memberikan pelayanan yang terbaik. Memberdayakan dan mengapresiasi guru ngaji sebagai ujung tombak pendidikan islam. Mendukung dan mendorong terselenggaranya kegiatan di bidang keagamaan, pendidikan, dan sosial guna meningkatkan kualitas dan kepedulian masyarakat.";

export const mission = [
  "Memberikan supporting, jum’at berkah dan silaturahmi kepada guru ngaji.",
  "Menyediakan mobil ambulance jenazah kepada masyarakat.",
  "Memberikan dukungan medis bagi anak penderita thalasemia.",
  "Menyelenggarakan berbagai layanan sosial dalam membantu pemberdayaan umat manusia.",
  "Memberikan supporting kepada peserta posyandu di setiap bulan nya.",
];

export const legalitasImages = [
  { src: "/assets/Legalitas Nur Albab/akta pendirian yayasan.jpg", alt: "Akta Pendirian Yayasan" },
  { src: "/assets/Legalitas Nur Albab/Npwp.jpg", alt: "NPWP Yayasan" },
];

export const legalitasDocs = [
  { name: "Keputusan Menteri Hukum dan HAM RI", url: "/assets/Legalitas Nur Albab/keputusan menteri hukum dan HAM RI.pdf" },
  { name: "Nomor Induk Berusaha (NIB)", url: "/assets/Legalitas Nur Albab/Nomor Induk Berusaha.pdf" },
  { name: "Formulir Pemberitahuan Ormas", url: "/assets/Legalitas Nur Albab/Formulir isian pemberitahuan keberadaan organisasi kemasyarakatan.pdf" },
];

export interface ActivityCategory {
  title: string;
  description?: string;
  images: string[];
}

export const activityCategories: ActivityCategory[] = [
  {
    title: "Apresiasi Guru Ngaji",
    images: [
      "/assets/Apresiasi guru ngaji/IMG-20260126-WA0010.jpg",
      "/assets/Apresiasi guru ngaji/IMG-20260126-WA0011.jpg",
      "/assets/Apresiasi guru ngaji/IMG-20260126-WA0012.jpg",
      "/assets/Apresiasi guru ngaji/IMG-20260126-WA0013.jpg",
      "/assets/Apresiasi guru ngaji/IMG-20260126-WA0014.jpg",
      "/assets/Apresiasi guru ngaji/IMG-20260126-WA0016.jpg",
    ]
  },
  {
    title: "Bantuan Sosial",
    images: [
      "/assets/Bantuan sosial/IMG-20260126-WA0033.jpg",
      "/assets/Bantuan sosial/IMG-20260126-WA0034.jpg",
      "/assets/Bantuan sosial/IMG-20260126-WA0035.jpg",
      "/assets/Bantuan sosial/IMG-20260126-WA0036.jpg",
      "/assets/Bantuan sosial/IMG-20260126-WA0038.jpg",
      "/assets/Bantuan sosial/IMG-20260126-WA0039.jpg",
      "/assets/Bantuan sosial/IMG-20260126-WA0040.jpg",
    ]
  },
  {
    title: "Posyandu",
    images: [
      "/assets/Posyandu/IMG-20260126-WA0000.jpg",
      "/assets/Posyandu/IMG-20260126-WA0001.jpg",
      "/assets/Posyandu/IMG-20260126-WA0002.jpg",
      "/assets/Posyandu/IMG-20260126-WA0003.jpg",
      "/assets/Posyandu/IMG-20260126-WA0004.jpg",
      "/assets/Posyandu/IMG-20260126-WA0005.jpg",
      "/assets/Posyandu/IMG-20260126-WA0006.jpg",
      "/assets/Posyandu/IMG-20260126-WA0007.jpg",
      "/assets/Posyandu/IMG-20260126-WA0008.jpg",
    ]
  },
  {
    title: "Santunan Anak Yatim",
    images: [
      "/assets/Santunan anak yatim/IMG-20260126-WA0031.jpg",
      "/assets/Santunan anak yatim/IMG-20260126-WA0032.jpg",
    ]
  },
  {
    title: "Menjenguk Warga Sakit",
    images: [
      "/assets/Menjenguk warga yang sakit/IMG-20260126-WA0025.jpg",
      "/assets/Menjenguk warga yang sakit/IMG-20260126-WA0026.jpg",
      "/assets/Menjenguk warga yang sakit/IMG-20260126-WA0027.jpg",
      "/assets/Menjenguk warga yang sakit/IMG-20260126-WA0028.jpg",
      "/assets/Menjenguk warga yang sakit/IMG-20260126-WA0029.jpg",
      "/assets/Menjenguk warga yang sakit/IMG-20260126-WA0030.jpg",
    ]
  },
   {
    title: "Bantuan Thalassemia",
    images: [
       "/assets/Bantuan kepada anak penderita thalassemia/IMG-20260126-WA0044.jpg",
       "/assets/Bantuan kepada anak penderita thalassemia/IMG-20260126-WA0046.jpg",
       "/assets/Bantuan kepada anak penderita thalassemia/IMG-20260126-WA0048.jpg",
       "/assets/Bantuan kepada anak penderita thalassemia/IMG-20260126-WA0050.jpg",
       "/assets/Bantuan kepada anak penderita thalassemia/IMG-20260126-WA0052.jpg",
       "/assets/Bantuan kepada anak penderita thalassemia/IMG-20260126-WA0054.jpg",
       "/assets/Bantuan kepada anak penderita thalassemia/IMG-20260126-WA0056.jpg",
    ]
  },
  {
    title: "Support Kegiatan Olahraga",
    images: [
       "/assets/Support kegiatan olahraga/IMG-20260126-WA0041.jpg",
       "/assets/Support kegiatan olahraga/IMG-20260126-WA0042.jpg",
    ]
  },
  {
    title: "Kegiatan Sosial Lainnya",
    description: "Sampah bank lestari & Santunan janda door to door",
    images: [
       "/assets/Sampah bank lestari santunan janda door to door/IMG-20260126-WA0017.jpg",
       "/assets/Sampah bank lestari santunan janda door to door/IMG-20260126-WA0018.jpg",
       "/assets/Sampah bank lestari santunan janda door to door/IMG-20260126-WA0019.jpg",
       "/assets/Sampah bank lestari santunan janda door to door/IMG-20260126-WA0020.jpg",
       "/assets/Sampah bank lestari santunan janda door to door/IMG-20260126-WA0021.jpg",
       "/assets/Sampah bank lestari santunan janda door to door/IMG-20260126-WA0022.jpg",
       "/assets/Sampah bank lestari santunan janda door to door/IMG-20260126-WA0023.jpg",
       "/assets/Sampah bank lestari santunan janda door to door/IMG-20260126-WA0024.jpg",
    ]
  }
];
