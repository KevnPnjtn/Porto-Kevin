
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
      id: "Aplikasi pariwisata yang mengintegrasikan informasi destinasi, acara, galeri, dan pemesanan tiket secara online.",
      en: "A tourism mobile application that brings destination discovery, local events, galleries, and online ticketing into one platform.",
    },
    description: {
      id: "Guide Me merupakan aplikasi mobile pariwisata yang dikembangkan untuk memudahkan pengguna dalam menjelajahi berbagai destinasi wisata. Pengguna dapat menemukan informasi destinasi, melihat acara dan galeri foto, serta melakukan pemesanan tiket secara langsung melalui aplikasi. Platform ini bertujuan memberikan pengalaman digital yang lebih mudah diakses dalam memperoleh informasi dan menjelajahi potensi pariwisata.",
      en: "Guide Me is a mobile tourism application developed to make exploring local destinations more convenient. Users can discover tourism destinations, explore events and photo galleries, and order tickets directly through the application. The platform aims to provide a more accessible and engaging digital experience for discovering tourism opportunities.",
    },
    role: {
      id: "Anggota tim pengembang",
      en: "Project team member",
    },
    images: [
      "/projects/guideme/guideme-home.webp",
      "/projects/guideme/guideme-2.webp",
      "/projects/guideme/guideme-3.webp",
      "/projects/guideme/guideme-4.webp",
      "/projects/guideme/guideme-5.webp",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
    features: [
      {
        id: "Penelusuran destinasi wisata",
        en: "Tourism destination discovery",
      },
      {
        id: "Informasi acara dan galeri foto wisata",
        en: "Tourism events and photo galleries",
      },
      {
        id: "Pemesanan tiket secara online",
        en: "Online ticket ordering",
      },
      {
        id: "Layanan aplikasi berbasis Firebase",
        en: "Firebase-powered application services",
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
      id: "Aplikasi pembelajaran mobile yang menyajikan materi dalam modul singkat dan terarah.",
      en: "A mobile learning application that delivers knowledge through short and focused learning modules.",
    },
    description: {
      id: "MicroLearning merupakan aplikasi mobile yang dirancang untuk memberikan pengalaman belajar melalui materi pembelajaran yang ringkas dan terarah. Aplikasi ini berfokus pada penyajian konten edukasi dalam modul-modul singkat sehingga pengguna dapat mempelajari berbagai materi melalui sesi belajar yang lebih fleksibel dan mudah diikuti.",
      en: "MicroLearning is a mobile application designed to make learning more accessible through concise and focused learning materials. It provides a digital learning experience centered around bite-sized modules, allowing users to explore educational content in shorter and more manageable sessions.",
    },
    role: {
      id: "Anggota tim pengembang",
      en: "Project team member",
    },
    images: [
      "/projects/microlearning/microlearning-1.webp",
      "/projects/microlearning/microlearning-2.webp",
      "/projects/microlearning/microlearning-3.webp",
      "/projects/microlearning/microlearning-4.webp",
      "/projects/microlearning/microlearning-5.webp",
    ],
    techStack: [],
    features: [
      {
        id: "Modul pembelajaran singkat",
        en: "Bite-sized learning modules",
      },
      {
        id: "Konten edukasi yang terarah",
        en: "Focused educational content",
      },
      {
        id: "Pengalaman belajar melalui perangkat mobile",
        en: "Mobile-based learning experience",
      },
    ],
  },
];
