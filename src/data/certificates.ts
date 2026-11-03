
export type Certificate = {
    id: string;
    title: string;
    issuer: string;
    category: string;
    period?: string;
    image: string;
    description: string;
    learnings: string[];
    skills: string[];
};

export const certificates: Certificate[] = [
    {
        id: "pelatihan",
        title: "Sertifikat Pelatihan",
        issuer: "CertNexus",
        category: "Fullstack Developer Associate",
        period: "2026",
        image: "/certificates/sertifikat-pelatihan.webp",
        description:
            "Mengikuti program pelatihan Fullstack Developer pada 21–23 Juli 2026 melalui sesi pembelajaran daring bersama instruktur menggunakan Zoom. Program ini mencakup kegiatan pembelajaran untuk mengembangkan pengetahuan dan keterampilan praktis dalam pengembangan aplikasi full-stack. Pada 25 Juli 2026, program diakhiri dengan ujian tertulis dan pengumpulan proyek untuk menunjukkan penerapan pengetahuan serta keterampilan yang telah diperoleh selama pelatihan.",
        learnings: [
            "Mengikuti sesi pelatihan daring bersama instruktur melalui Zoom",
            "Mengerjakan ujian tertulis pada 25 Juli 2026",
            "Menyusun dan mengumpulkan proyek sebagai bagian dari penilaian pelatihan",
        ],
        skills: ["Pengembangan Full-stack", "Pengembangan Web"],
    },

    {
        id: "lomba",
        title: "Juara 1 KMIPN VII 2025",
        issuer: "Politeknik Negeri Padang",
        category: "Perencanaan Bisnis Bidang TIK",
        period: "2025",
        image: "/certificates/sertifikat-kmipn.webp",
        description:
            "Meraih Juara 1 kategori Prototype pada bidang Perencanaan Bisnis Bidang TIK dalam Kompetisi Mahasiswa Informatika Politeknik Nasional (KMIPN) VII 2025 melalui proyek WEBKITA. Sebagai Ketua Tim 404’s Not Found, saya berkontribusi dalam merancang konsep layanan digital yang menyediakan solusi pengembangan website dan aplikasi mobile bagi UMKM hingga perusahaan. WEBKITA mengusung sistem layanan modular dengan pilihan paket yang fleksibel berdasarkan kebutuhan dan anggaran klien, serta fitur Budget Recommendation untuk membantu calon klien memahami layanan yang dapat diperoleh sesuai anggaran mereka.",
        learnings: [
            "Menyusun konsep dan perencanaan bisnis berbasis teknologi informasi",
            "Merancang model layanan digital dengan pendekatan modular untuk berbagai segmen pasar",
            "Mengembangkan strategi produk berdasarkan kebutuhan pengguna dan peluang pasar",
            "Memimpin koordinasi tim dalam penyusunan proposal dan persiapan kompetisi",
            "Mempresentasikan gagasan bisnis dan inovasi teknologi dalam kompetisi",
        ],
        skills: [
            "Perencanaan Bisnis TIK",
            "Business Model Development",
            "Project Leadership",
            "Market Analysis",
            "Team Collaboration",
            "Presentation Skills",
        ],
    },

    {
        id: "magang",
        title: "Sertifikat Magang Industri",
        issuer: "PT Harapan Jaya Sentosa",
        category: "Magang Industri",
        period: "2025–2026",
        image: "/certificates/sertifikat-magang.webp",
        description:
            "Melaksanakan program Magang Industri di PT Harapan Jaya Sentosa sebagai IT Support pada periode 1 Agustus 2025 hingga 1 April 2026. Selama kegiatan magang, saya bertanggung jawab melakukan pemeliharaan perangkat keras dan perangkat lunak operasional kantor serta menangani troubleshooting untuk mendukung kelancaran aktivitas kerja. Selain itu, saya merancang dan mengembangkan Inventaris System, sebuah aplikasi berbasis web untuk mendigitalisasi pengelolaan aset dan stok barang perusahaan. Aplikasi ini dilengkapi dashboard pemantauan, manajemen produk, pencatatan barang masuk dan keluar, stok opname, serta laporan inventaris dan keuangan yang dapat diekspor ke Microsoft Excel.",
        learnings: [
            "Melakukan pemeliharaan perangkat keras dan perangkat lunak serta menangani troubleshooting operasional",
            "Merancang dan mengembangkan aplikasi inventaris berbasis web sesuai kebutuhan perusahaan",
            "Mengelola data produk, kategori, stok minimal, dan transaksi mutasi barang",
            "Mengimplementasikan proses stok opname untuk mencocokkan data persediaan sistem dengan kondisi fisik",
            "Menyusun laporan stok opname, kartu stok, dan laba rugi yang dapat diekspor ke Microsoft Excel",
            "Beradaptasi dengan perubahan kebutuhan sistem serta melakukan penyesuaian fitur dan antarmuka aplikasi",
        ],
        skills: [
            "IT Support",
            "Web Application Development",
            "Inventory Management System",
            "Troubleshooting",
            "Database Management",
            "Git & GitHub",
            "Microsoft Excel",
        ],
    },

    {
        id: "sems4",
        title: "Sertifikat Project Based Learning (PBL)",
        issuer: "Politeknik Negeri Batam",
        category: "Project Based Learning",
        period: "2025",
        image: "/certificates/sertifikat-pbl-sems4.webp",
        description:
            "Menyelesaikan Project Based Learning (PBL) IF-10 melalui pengembangan MicroLearning, sebuah aplikasi pembelajaran berbasis mobile yang dirancang untuk mendukung kegiatan belajar mengajar di SMAIT Ulil Albab Batam. Aplikasi ini menyediakan akses modul materi dan video pembelajaran berdasarkan mata pelajaran serta kategori kelas, dilengkapi forum diskusi untuk memfasilitasi interaksi antara siswa dan guru. Dalam proyek tim ini, saya berkontribusi dalam penyusunan sequence diagram, perancangan mockup, dan implementasi frontend aplikasi. Saya juga terlibat dalam penyusunan laporan teknis, manual book, video demonstrasi produk, serta pengurusan luaran proyek berupa HKI dan Berita Acara Serah Terima (BAST).",
        learnings: [
            "Menganalisis alur interaksi sistem melalui sequence diagram",
            "Merancang mockup antarmuka berdasarkan kebutuhan pengguna",
            "Mengimplementasikan frontend aplikasi mobile menggunakan Flutter",
            "Mendokumentasikan proses pengembangan melalui laporan teknis dan manual book",
            "Mempersiapkan video demonstrasi dan dokumentasi luaran proyek",
            "Berkolaborasi dalam penyelesaian luaran proyek, termasuk HKI dan BAST",
        ],
        skills: [
            "Flutter",
            "Dart",
            "Firebase",
            "Mobile App Development",
            "UI Implementation",
            "UML Modeling",
            "Technical Documentation",
        ],
    },

    {
        id: "sems3",
        title: "Sertifikat Project Based Learning (PBL)",
        issuer: "Politeknik Negeri Batam",
        category: "Project Based Learning",
        period: "2024",
        image: "/certificates/sertifikat-pbl-sems3.webp",
        description:
            "Menyelesaikan Project Based Learning (PBL) IF-13 melalui pengembangan Guide Me, sebuah aplikasi pariwisata berbasis mobile dan Progressive Web App (PWA) yang dirancang untuk membantu wisatawan menjelajahi destinasi wisata di Kota Batam. Aplikasi ini menyediakan informasi destinasi, event, galeri wisata, pencarian dan kategori, pemesanan tiket, peta interaktif, serta ulasan dan rating. Dalam proyek tim ini, saya berkontribusi pada analisis kebutuhan dan perancangan sistem, termasuk penyusunan use case, activity diagram, dan sequence diagram. Saya juga bertanggung jawab mengembangkan frontend untuk pengguna dan admin, membuat desain serta prototype antarmuka admin, dan melakukan pengujian aplikasi.",
        learnings: [
            "Menganalisis kebutuhan fungsional dan nonfungsional berdasarkan kebutuhan sistem",
            "Menyusun pemodelan sistem menggunakan use case, activity diagram, dan sequence diagram",
            "Merancang mockup dan prototype antarmuka untuk kebutuhan admin",
            "Mengimplementasikan frontend aplikasi untuk pengguna dan admin menggunakan Flutter",
            "Melakukan pengujian untuk memastikan fungsionalitas aplikasi berjalan sesuai kebutuhan",
        ],
        skills: [
            "Flutter",
            "Dart",
            "Firebase",
            "System Analysis",
            "UI Implementation",
            "Software Testing",
            "UML Modeling",
        ],
    },
];

