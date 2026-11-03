
export type Locale = "id" | "en";

export const siteConfig = {
  name: "Kevin Reynaldi Panjaitan",
  cvPath: "/cv/cv-kevin-reynaldi-panjaitan.pdf",
  profileImage: "/profile.jpg",
  email: "kevinpanjaitan09@gmail.com",
  github: "https://github.com/KevnPnjtn",
  linkedin: "https://www.linkedin.com/in/kevinnreynaldi/",
  instagram: "https://www.instagram.com/ray_pnjtn",
};

export const navIds = [
  "home",
  "about",
  "skills",
  "projects",
] as const;

export type SectionId = (typeof navIds)[number];

// Bahasa Indonesia
const id = {
  nav: {
    home: "Beranda",
    about: "Tentang Saya",
    skills: "Keahlian",
    projects: "Proyek",
  } satisfies Record<SectionId, string>,

  ui: {
    toggleTheme: "Ganti tema",
    language: "Bahasa",
    openMenu: "Buka menu",
    switchTo: "Ganti ke",
    closeMenu: "Tutup menu",
    mainNav: "Navigasi utama",
    opensInNewTab: "dibuka di tab baru",
  },

  hero: {
    greeting: "Halo, saya",
    firstLine: "Kevin",
    lastName: "Reynaldi Panjaitan",
    role: "Web & Mobile Developer",
    description:
      "Saya mengembangkan aplikasi web dan mobile dengan memanfaatkan teknologi modern untuk menghadirkan solusi digital yang fungsional, praktis, dan berorientasi pada kebutuhan pengguna.",
    viewProjects: "Lihat Proyek",
    downloadCv: "Unduh CV",
    badge: "Web & Mobile Developer",
    scrollDown: "Jelajahi Lebih Lanjut",
    scrollHint: "Gulir untuk menjelajahi",
    openingTitle: "Mengubah Ide Menjadi Pengalaman Digital",
    profileAlt: "Foto profil Kevin Reynaldi Panjaitan",
    socialLabel: "Media sosial dan kontak",
    availability: "Terbuka untuk Kolaborasi",
  },

  about: {
    eyebrow: "Siapa Saya",
    heading: "Tentang",
    headingAccent: "Saya",
    paragraphs: [
      "Saya lulusan Teknik Informatika yang bersemangat membangun solusi digital yang praktis melalui pengembangan web dan mobile. Saya senang mengubah ide menjadi aplikasi yang berfungsi, mulai dari merancang pengalaman pengguna hingga mengembangkan fitur andal yang menjawab kebutuhan nyata.",
      "Melalui proyek akademik, magang, dan pengembangan dalam tim, saya memperoleh pengalaman di berbagai tahap proses pengembangan. Saya senang berkolaborasi, menerima tantangan, dan terus mempelajari teknologi baru untuk meningkatkan cara saya membangun dan menyelesaikan masalah.",
    ],
    details: [
      { label: "Fokus", value: "Pengembangan Web & Mobile" },
      { label: "Pendidikan", value: "Teknik Informatika" },
      { label: "Berdomisili di", value: "Batam, Indonesia" },
    ],
    codeFile: "about-me.tsx",
    codeAlt: "Editor kode yang menampilkan lingkungan kerja pemrograman",
    status: "membangun & belajar",
    experienceLink: "Selengkapnya tentang pengalaman saya",
  },

  projects: {
    eyebrow: "Proyek & Sertifikat",
    heading: "Karya Pilihan",
    description:
      "Kumpulan proyek, eksperimen, dan pengalaman digital yang pernah saya kerjakan.",
  },

  skills: {
    eyebrow: "Teknologi yang Digunakan",
    title: "Keahlian &",
    titleAccent: "Teknologi",
    description:
      "Berbagai teknologi yang saya gunakan dalam pengembangan aplikasi web dan mobile, mencakup bahasa pemrograman, frontend, backend, database, hingga tools pendukung pengembangan.",
    categories: {
      languages: "Bahasa Pemrograman",
      frontend: "Frontend & Mobile",
      backend: "Backend & API",
      database: "Database",
      tools: "Tools & Alur Kerja",
    },
  },
};

export type Dictionary = typeof id;

// English
const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
  },

  ui: {
    toggleTheme: "Toggle theme",
    language: "Language",
    openMenu: "Open menu",
    switchTo: "Switch to",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    opensInNewTab: "opens in a new tab",
  },

  hero: {
    greeting: "Hello, I'm",
    firstLine: "Kevin",
    lastName: "Reynaldi Panjaitan",
    role: "Web & Mobile Developer",
    description:
      "I develop web and mobile applications using modern technologies to deliver functional, practical, and user-focused digital solutions.",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    badge: "Web & Mobile Developer",
    scrollDown: "Explore More",
    scrollHint: "Scroll to explore",
    openingTitle: "Building Ideas into Digital Experiences",
    profileAlt: "Portrait of Kevin Reynaldi Panjaitan",
    socialLabel: "Social media and contact",
    availability: "Available for Collaboration",
  },

  about: {
    eyebrow: "Who I am",
    heading: "About",
    headingAccent: "Me",
    paragraphs: [
      "I'm an Informatics Engineering graduate with a passion for building practical digital solutions through web and mobile development. I enjoy turning ideas into functional applications, from designing user experiences to developing reliable features that solve real-world needs.",
      "Through academic projects, internships, and team-based development, I've gained experience working across different stages of the development process. I enjoy collaborating with others, taking on challenges, and continuously learning new technologies to improve how I build and solve problems.",
    ],
    details: [
      { label: "Focus", value: "Web & Mobile Development" },
      { label: "Education", value: "Informatics Engineering" },
      { label: "Based in", value: "Batam, Indonesia" },
    ],
    codeFile: "about-me.tsx",
    codeAlt: "Code editor showing a programming workspace",
    status: "building & learning",
    experienceLink: "More about my experience",
  },

  projects: {
    eyebrow: "Projects & Certificates",
    heading: "Selected Work",
    description:
      "A collection of projects, experiments, and digital experiences I've worked on.",
  },

  skills: {
    eyebrow: "Technologies I Use",
    title: "Skills &",
    titleAccent: "Technologies",
    description:
      "A range of technologies I use in web and mobile application development, covering programming languages, frontend, backend, databases, and development tools.",
    categories: {
      languages: "Programming Languages",
      frontend: "Frontend & Mobile",
      backend: "Backend & API",
      database: "Database",
      tools: "Tools & Workflow",
    },
  },
};

export const dictionary: Record<Locale, Dictionary> = {
  id,
  en,
};
