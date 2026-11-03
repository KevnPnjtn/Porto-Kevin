
export type ProjectLink = {
  label: string;
  url: string;
};

export type LocalizedText = {
  id: string;
  en: string;
};

export type Project = {
  id: string;
  title: string;
  category: LocalizedText;
  year?: string;
  shortDescription: LocalizedText;
  description: LocalizedText;
  role: LocalizedText;
  images: string[];
  techStack: string[];
  features: LocalizedText[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "webkita",
    title: "WEBKITA",
    category: {
      id: "Aplikasi Web",
      en: "Web Application",
    },
    shortDescription: {
      id: "Platform layanan digital untuk UMKM yang dikembangkan dalam kompetisi, dengan kalkulator anggaran interaktif untuk merekomendasikan paket layanan sesuai kebutuhan pengguna.",
      en: "A competition-developed digital service platform for UMKM, featuring an interactive budget calculator that recommends service packages based on user requirements.",
    },
    description: {
      id: "WEBKITA merupakan platform layanan digital berbasis web yang dikembangkan sebagai bagian dari proyek kompetisi untuk membantu UMKM merencanakan kebutuhan transformasi digital melalui informasi layanan dan estimasi biaya yang lebih transparan. Platform ini menyediakan katalog layanan seperti pengembangan website, desain UI/UX, dan optimasi digital. Fitur utamanya adalah Kalkulator Budget interaktif yang menggunakan Rule-Based System dengan metode Forward Chaining untuk mencocokkan anggaran pengguna dengan rentang harga pada database, kemudian menghasilkan rekomendasi paket layanan beserta spesifikasinya. Selain itu, pengguna dapat mengajukan pesanan proyek dan memantau progres pengerjaan melalui dashboard klien, sedangkan admin dapat mengelola paket layanan serta memantau pesanan melalui dashboard administrasi.",
      en: "WEBKITA is a web-based digital service platform developed as part of a competition project to help UMKM plan their digital transformation needs through accessible service information and more transparent cost estimates. The platform provides a catalog of digital services, including website development, UI/UX design, and digital optimization. Its core feature is an interactive Budget Calculator powered by a Rule-Based System using Forward Chaining to match user budgets against pricing ranges stored in the database and generate relevant service package recommendations with their specifications. Users can also submit project requests and monitor development progress through a client dashboard, while administrators can manage service packages and monitor orders through an administrative dashboard.",
    },
    role: {
      id: "Anggota tim pengembang",
      en: "Project team member",
    },
    images: [
      "/projects/webkita/hero-webkita.webp",
      "/projects/webkita/webkita-1.webp",
      "/projects/webkita/webkita-2.webp",
      "/projects/webkita/webkita-3.webp",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Supabase",
      "REST API",
      "Forward Chaining",
    ],
    features: [
      {
        id: "Kalkulator Budget interaktif untuk menghasilkan rekomendasi paket berdasarkan anggaran pengguna",
        en: "Interactive Budget Calculator that recommends service packages based on user budgets",
      },
      {
        id: "Sistem rekomendasi berbasis aturan menggunakan metode Forward Chaining",
        en: "Rule-based recommendation system using the Forward Chaining method",
      },
      {
        id: "Katalog paket layanan digital dengan informasi harga dan spesifikasi fitur",
        en: "Digital service package catalog with pricing and feature specifications",
      },
      {
        id: "Pengajuan pesanan proyek dan pemantauan progres pengerjaan melalui dashboard klien",
        en: "Project order submission and progress monitoring through a client dashboard",
      },
      {
        id: "Dashboard admin untuk mengelola paket layanan dan memantau pesanan",
        en: "Admin dashboard for managing service packages and monitoring orders",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/KevnPnjtn/Webkita_App",
      },
    ],
  },


  {
    id: "inventori",
    title: "Warehouse Management System",
    category: {
      id: "Aplikasi Web",
      en: "Web Application",
    },
    shortDescription: {
      id: "Aplikasi manajemen inventaris berbasis web untuk mengelola data produk, memantau pergerakan stok, dan menyajikan laporan persediaan.",
      en: "A web-based inventory management application for managing product data, monitoring stock movements, and generating inventory reports.",
    },
    description: {
      id: "Warehouse Management System merupakan aplikasi inventaris berbasis web yang dirancang untuk mendigitalisasi pengelolaan aset dan persediaan barang gudang. Sistem ini menyediakan dashboard untuk memantau kondisi inventaris, pengelolaan data produk dan kategori, serta pencatatan transaksi barang masuk dan keluar yang secara otomatis memperbarui jumlah stok. Selain itu, tersedia fitur stok opname untuk mencocokkan data sistem dengan kondisi fisik barang, serta modul pelaporan yang menyajikan informasi riwayat stok, nilai inventaris, harga pokok penjualan (HPP), omzet, dan laba bersih. Seluruh fitur terintegrasi untuk mendukung proses pengelolaan inventaris yang lebih terstruktur dan akurat.",
      en: "Warehouse Management System is a web-based inventory application designed to digitalize warehouse asset and stock management. The system provides a monitoring dashboard, product and category management, and incoming and outgoing stock transaction records that automatically update inventory quantities. It also includes stock opname functionality to reconcile system records with physical inventory, along with reporting modules that present stock history, inventory value, cost of goods sold (COGS), revenue, and net profit. These features work together to support more structured and accurate inventory management.",
    },
    role: {
      id: "Pengembang Aplikasi Inventaris",
      en: "Inventory Application Developer",
    },
    images: [
      "/projects/inventori/inventori-1.webp",
      "/projects/inventori/inventori-2.webp",
      "/projects/inventori/inventori-3.webp",
      "/projects/inventori/inventori-4.webp",
      "/projects/inventori/inventori-5.webp",
    ],
    techStack: ["PHP", "Laravel", "React", "Tailwind CSS", "MySQL"],
    features: [
      {
        id: "Dashboard pemantauan stok, jumlah produk, pergerakan barang, dan ringkasan keuangan",
        en: "Dashboard for monitoring stock levels, product counts, stock movements, and financial summaries",
      },
      {
        id: "Pengelolaan data produk, kategori, kode barang, dan batas stok minimum",
        en: "Product, category, item code, and minimum stock level management",
      },
      {
        id: "Pencatatan transaksi barang masuk dan keluar dengan pembaruan stok otomatis",
        en: "Incoming and outgoing stock transaction records with automatic inventory updates",
      },
      {
        id: "Stok opname untuk mencocokkan dan menyesuaikan data stok sistem dengan kondisi fisik",
        en: "Stock opname for reconciling and adjusting system records against physical inventory",
      },
      {
        id: "Laporan stok opname, kartu stok, serta laporan laba rugi yang dapat diekspor ke Excel",
        en: "Stock opname, stock card, and profit and loss reports with Excel export",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/KevnPnjtn/Warehouse-System",
      },
    ],
  },


  {
    id: "guideme",
    title: "Guide Me",
    category: {
      id: "Aplikasi Mobile",
      en: "Mobile Application",
    },
    shortDescription: {
      id: "Aplikasi pariwisata digital untuk menjelajahi destinasi, event, dan galeri wisata, serta melakukan pemesanan tiket secara online.",
      en: "A digital tourism application for exploring destinations, events, and photo galleries, with online ticket booking.",
    },
    description: {
      id: "Guide Me merupakan aplikasi pariwisata berbasis mobile yang dikembangkan untuk membantu wisatawan menjelajahi berbagai destinasi wisata di Kota Batam. Aplikasi ini menyediakan informasi destinasi, event, galeri foto, serta rekomendasi wisata yang dapat ditelusuri melalui fitur pencarian dan kategori. Pengguna juga dapat melihat detail destinasi, merencanakan perjalanan melalui peta dan navigasi rute, melakukan pemesanan tiket, serta memantau status transaksi. Selain itu, tersedia fitur ulasan dan rating serta forum diskusi untuk mendukung interaksi antar pengguna. Aplikasi dilengkapi dengan dashboard admin untuk mengelola konten wisata, akun pengguna, dan transaksi.",
      en: "Guide Me is a mobile-based tourism application developed to help travelers explore various tourist destinations in Batam. It provides destination information, local events, photo galleries, and tourism recommendations accessible through search and category filters. Users can view destination details, plan trips using interactive maps and route navigation, book tickets, and track transaction status. The application also includes reviews and ratings, along with a discussion forum to encourage user interaction. An integrated admin dashboard is provided to manage tourism content, user accounts, and transactions.",
    },
    role: {
      id: "Frontend Developer & System Analyst (Proyek Tim)",
      en: "Frontend Developer & System Analyst (Team Project)",
    },
    images: [
      "/projects/guideme/guideme-home.webp",
      "/projects/guideme/guideme-2.webp",
      "/projects/guideme/guideme-3.webp",
      "/projects/guideme/guideme-4.webp",
      "/projects/guideme/guideme-5.webp",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Midtrans"],
    features: [
      {
        id: "Penelusuran destinasi wisata, event, dan galeri foto",
        en: "Tourism destination, event, and photo gallery exploration",
      },
      {
        id: "Pencarian, filter kategori, dan rekomendasi destinasi wisata",
        en: "Search, category filtering, and tourism destination recommendations",
      },
      {
        id: "Peta interaktif dan navigasi rute perjalanan",
        en: "Interactive maps and travel route navigation",
      },
      {
        id: "Pemesanan tiket dan simulasi pembayaran online",
        en: "Ticket booking and online payment simulation",
      },
      {
        id: "Ulasan dan rating serta forum diskusi pengguna",
        en: "User reviews and ratings, along with discussion forums",
      },
      {
        id: "Dashboard admin untuk pengelolaan destinasi, event, pengguna, dan transaksi",
        en: "Admin dashboard for managing destinations, events, users, and transactions",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/RikardoAnju/Guide-Me-v2",
      },
    ],
  },


  {
    id: "microlearning",
    title: "MicroLearning",
    category: {
      id: "Aplikasi Mobile",
      en: "Mobile Application",
    },
    shortDescription: {
      id: "Aplikasi pembelajaran mobile yang memfasilitasi akses modul materi, video pembelajaran, dan forum diskusi antara siswa dan guru.",
      en: "A mobile learning application providing access to learning modules, educational videos, and discussion forums between students and teachers.",
    },
    description: {
      id: "MicroLearning merupakan aplikasi pembelajaran berbasis mobile yang dikembangkan untuk mendukung proses belajar mengajar di SMAIT Ulil Albab Batam. Aplikasi ini memungkinkan siswa mengakses materi pembelajaran dalam bentuk modul dan video berdasarkan mata pelajaran serta kategori kelas. Selain itu, tersedia forum diskusi yang memfasilitasi interaksi antara siswa dan guru terkait materi pembelajaran. Sistem juga menyediakan pengelolaan konten bagi guru serta manajemen pengguna dan data pembelajaran bagi admin.",
      en: "MicroLearning is a mobile learning application developed to support the teaching and learning process at SMAIT Ulil Albab Batam. It allows students to access learning materials through modules and educational videos organized by subjects and class categories. The application also features discussion forums that facilitate interaction between students and teachers. Additionally, it provides content management for teachers and user and learning data administration for administrators.",
    },
    role: {
      id: "Pengembang Frontend (Proyek Tim)",
      en: "Frontend Developer (Team Project)",
    },
    images: [
      "/projects/microlearning/microlearning-1.webp",
      "/projects/microlearning/microlearning-2.webp",
      "/projects/microlearning/microlearning-3.webp",
      "/projects/microlearning/microlearning-4.webp",
      "/projects/microlearning/microlearning-5.webp",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
    ],
    features: [
      {
        id: "Akses modul materi dan video pembelajaran berdasarkan mata pelajaran dan kategori kelas",
        en: "Access to learning modules and educational videos organized by subjects and class categories",
      },
      {
        id: "Forum diskusi untuk interaksi antara siswa dan guru",
        en: "Discussion forums for interaction between students and teachers",
      },
      {
        id: "Pengelolaan dan publikasi konten pembelajaran oleh guru",
        en: "Learning content management and publishing by teachers",
      },
      {
        id: "Manajemen akun pengguna, kategori kelas, dan mata pelajaran oleh admin",
        en: "User account, class category, and subject management by administrators",
      },
      {
        id: "Pengelolaan profil pengguna dan akses informasi siswa",
        en: "User profile management and student information access",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/fadliaditya06/Microlearning-Mobile",
      },
    ],
  },

]

