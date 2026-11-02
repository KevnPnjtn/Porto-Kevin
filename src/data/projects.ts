
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
      id: "Platform layanan digital yang membantu UMKM memperkirakan biaya layanan melalui sistem kalkulasi anggaran berbasis aturan.",
      en: "A digital service platform that helps UMKM estimate service costs through a rule-based budgeting system.",
    },
    description: {
      id: "WEBKITA merupakan platform layanan digital yang dirancang untuk membantu UMKM mengidentifikasi dan memperkirakan biaya kebutuhan digital mereka. Platform ini menyediakan kalkulator anggaran berbasis aturan yang memproses pilihan layanan dan kebutuhan pengguna untuk menghasilkan estimasi biaya. Selain itu, WEBKITA mengintegrasikan proses pemilihan layanan, pemesanan, pembayaran, dan pengelolaan administrasi dalam satu platform.",
      en: "WEBKITA is a digital service platform designed to help UMKM identify and estimate the costs of their digital needs. It features a rule-based budget calculator that processes user-selected services and requirements to generate cost estimates. The platform also provides an integrated workflow for service selection, orders, payments, and administrative management.",
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
    techStack: ["React", "TypeScript", "Supabase", "REST API"],
    features: [
      {
        id: "Kalkulasi anggaran berbasis aturan berdasarkan kebutuhan pengguna",
        en: "Rule-based budget calculation using user requirements",
      },
      {
        id: "Pemilihan paket dan fitur layanan digital",
        en: "Digital service package and feature selection",
      },
      {
        id: "Pengelolaan pesanan dan pembayaran klien",
        en: "Client order and payment management",
      },
      {
        id: "Pengelolaan paket, pengguna, dan pesanan oleh admin",
        en: "Administrative management for packages, users, and orders",
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
      id: "Sistem berbasis web untuk mengelola inventaris gudang dan mendukung pemantauan stok secara lebih terstruktur.",
      en: "A web-based system designed to organize warehouse inventory and support more structured stock management.",
    },
    description: {
      id: "Warehouse Management System merupakan aplikasi web yang dikembangkan untuk mendukung operasional gudang melalui pengelolaan inventaris terpusat. Sistem ini menyediakan pengelolaan data barang dan pemantauan informasi stok agar proses administrasi serta pengelolaan persediaan menjadi lebih terorganisir.",
      en: "Warehouse Management System is a web application developed to support warehouse operations through centralized inventory management. It provides a structured way to manage inventory data and monitor stock information, helping make warehouse administration more organized and accessible.",
    },
    role: {
      id: "Anggota tim pengembang",
      en: "Project team member",
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
        id: "Pengelolaan data inventaris terpusat",
        en: "Centralized inventory data management",
      },
      {
        id: "Pemantauan stok barang gudang",
        en: "Warehouse stock monitoring",
      },
      {
        id: "Administrasi inventaris yang terstruktur",
        en: "Structured inventory administration",
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
  },

]
  
