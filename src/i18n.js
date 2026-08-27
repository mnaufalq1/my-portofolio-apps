/**
 * ==========================================================================
 * Bilingual Dictionary & i18n System (Indonesian & English)
 * ==========================================================================
 */

export const I18N_DATA = {
  id: {
    // Navigation
    navLogo: "PORTOFOLIO",
    navHome: "BERANDA",
    navSkills: "KEAHLIAN",
    navPortfolio: "KARYA",
    navContact: "KONTAK",
    navCmdPalette: "COMMAND (CTRL+K)",
    themeToggleText: "TEMA",

    // Hero Section
    heroSubtitle: "DIREKTUR KREATIF & DESAINER GRAFIS",
    heroHeading: "MERANCANG ANTARMUKA<br />DIGITAL KHUSUS &<br />GEOMETRI EDITORIAL.",
    heroDescription: "Mendesain tata letak struktural yang bersih dan berkontras tinggi berlandaskan prinsip Desain Swiss, keselarasan grid yang kokoh, serta interaksi sisi klien yang berkinerja tinggi.",
    heroDownloadCv: "UNDUH CV",
    heroContactMe: "HUBUNGI SAYA",

    // Skills Section
    skillsSectionNum: "01 / KEAHLIAN",
    skillsSectionTitle: "KEAHLIAN & STUDI KEILMUAN",
    skill1Num: "01",
    skill1Title: "AKIDAH & TAUHID",
    skill1Desc: "Pemahaman komprehensif mengenai tauhid, rukun iman, pemurnian keyakinan, serta prinsip-prinsip dasar teologi Islam berlandaskan Al-Qur'an dan As-Sunnah.",
    skill1Tag1: "Tauhid & Rukun Iman",
    skill1Tag2: "Ushuluddin",
    skill1Tag3: "Tazkiyatun Nafs",

    skill2Num: "02",
    skill2Title: "PEMROGRAMAN WEB FULLSTACK",
    skill2Desc: "Membangun aplikasi web end-to-end dengan arsitektur modern, RESTful API yang andal, manajemen basis data, performa tinggi, dan antarmuka responsif yang efisien.",
    skill2Tag1: "TypeScript / React",
    skill2Tag2: "Node.js / Express",
    skill2Tag3: "Database & REST API",

    skill3Num: "03",
    skill3Title: "SEJARAH PERADABAN ISLAM",
    skill3Desc: "Pengetahuan mendalam seputar Sirah Nabawiyah, era Khulafaur Rasyidin, dinasti kekhalifahan Islam, serta kontribusi keilmuan peradaban Islam bagi dunia.",
    skill3Tag1: "Sirah Nabawiyah",
    skill3Tag2: "Khulafaur Rasyidin",
    skill3Tag3: "Tarikh Islam",

    // Portfolio Section
    portfolioSectionNum: "02 / ARSIP",
    portfolioSectionTitle: "KARYA PROYEK SPASIAL & DIGITAL PILIHAN",
    projectLinkText: "LIHAT PROYEK",
    
    projects: [
      {
        id: 1,
        title: "MANAJEMEN KEUANGAN PERSONAL",
        category: "Digital / Aplikasi",
        description: "Aplikasi berbasis web yang dirancang sederhana untuk membantu individu dalam mengelola keuangan pribadi.",
        image: "/src/assets/images/Picture27082017.jpg",
        link: "https://github.com/mnaufalq1/money_dashboard",
        year: "2026"
      },
      {
        id: 2,
        title: "KONVERTER VIDEO",
        category: "Digital / Aplikasi",
        description: "Aplikasi berbasis web yang dirancang sederhana untuk membantu individu dalam mengonversi video ke format lain.",
        image: "/src/assets/images/Picture2.png",
        link: "https://github.com/mnaufalq1/converter-video-apps",
        year: "2026"
      },
      {
        id: 3,
        title: "ANTARMUKA GRAFIS SENSORIK",
        category: "Digital / UI UX",
        description: "Panel instrumen keuangan mode gelap yang memanfaatkan widget kontras tinggi, grafik bersih, dan kontrol taktil untuk analitik visual berlatensi rendah.",
        image: "/src/assets/images/project_interface_1784270631676.jpg",
        link: "https://github.com",
        year: "2026"
      }
    ],

    // Contact Section
    contactSectionNum: "03 / KORESPONDENSI",
    contactSectionTitle: "KIRIM PESAN LANGSUNG",
    contactStatement: "MEMILIKI IDE DESAIN ATAU EKSPERIMEN SISTEM DIGITAL? KIRIM PESAN UNTUK MEMBAHAS KECOCOKAN PROYEK.",
    channelEmailLabel: "SURAT ELEKTRONIK (EMAIL)",
    channelLocationLabel: "LOKASI",
    locationValue: "Yogyakarta, Indonesia",
    formNameLabel: "NAMA LENGKAP",
    formNamePlaceholder: "misal: Josef Müller",
    formEmailLabel: "ALAMAT EMAIL",
    formEmailPlaceholder: "misal: josef@muller.ch",
    formMsgLabel: "ISI PESAN KORESPONDENSI",
    formMsgPlaceholder: "Tulis rencana pesan atau proyek Anda di sini...",
    formSubmitBtn: "KIRIM PESAN",
    
    // Notification & Dialogs
    notifSuccessTitle: "PESAN DITERIMA",
    notifSuccessDesc: "Pesan telah disiapkan. Klik tombol di bawah untuk membukanya di klien email Anda.",
    notifOpenEmail: "BUKA EMAIL",
    notifCopyEmail: "SALIN ALAMAT EMAIL",
    notifEmailCopied: "TERSALIN!",
    notifBack: "KEMBALI",

    // Footer
    footerCopy: "© 2026 STUDIO DESAIN. HAK CIPTA DILINDUNGI SECARA LOKAL.",
    footerTime: "JAKARTA / INDONESIA",

    // Background HUD Controller
    bgHudTitle: "LATAR BELAKANG GENERATIF",
    bgModeQuantum: "Quantum Constellation",
    bgModeHyperspace: "Hyperspace Warp",
    bgModeSwarm: "Gravitational Swarm",
    bgModeMatrix: "Cyber Matrix",
    bgModeSine: "Harmonic Sine Waves",
    bgModeOff: "Grid Statis (Off)",

    // Command Palette
    cmdPlaceholder: "Ketik perintah atau cari bagian (contoh: tema, karya, kontak)...",
    cmdNoResults: "Tidak ada perintah yang cocok ditemukan.",
    cmdCatNav: "Navigasi Cepat",
    cmdCatThemes: "Sistem Tema Warna",
    cmdCatBg: "Latar Belakang Generatif",
    cmdCatLang: "Pilihan Bahasa",
    cmdCatActions: "Aksi & Utilitas",
    cmdHintSelect: "Pilih",
    cmdHintNavigate: "Navigasi",
    cmdHintClose: "Tutup"
  },

  en: {
    // Navigation
    navLogo: "PORTFOLIO",
    navHome: "HOME",
    navSkills: "SKILLS",
    navPortfolio: "WORKS",
    navContact: "CONTACT",
    navCmdPalette: "COMMAND (CTRL+K)",
    themeToggleText: "THEME",

    // Hero Section
    heroSubtitle: "CREATIVE DIRECTOR & GRAPHIC ENGINEER",
    heroHeading: "CRAFTING BESPOKE<br />DIGITAL INTERFACES &<br />EDITORIAL GEOMETRY.",
    heroDescription: "Designing clean, high-contrast structural layouts rooted in Swiss Design principles, uncompromising grid alignments, and hyper-performant client-side interactions.",
    heroDownloadCv: "DOWNLOAD CV",
    heroContactMe: "GET IN TOUCH",

    // Skills Section
    skillsSectionNum: "01 / DISCIPLINES",
    skillsSectionTitle: "CORE SKILLS & DISCIPLINES",
    skill1Num: "01",
    skill1Title: "AQIDAH & THEOLOGY",
    skill1Desc: "Comprehensive understanding of Tawheed, Articles of Faith (Iman), purification of creed, and fundamental Islamic theological principles rooted in the Quran and Sunnah.",
    skill1Tag1: "Tawheed & Creed",
    skill1Tag2: "Ushuluddin",
    skill1Tag3: "Tazkiyatun Nafs",

    skill2Num: "02",
    skill2Title: "FULLSTACK WEB DEVELOPMENT",
    skill2Desc: "Building scalable, end-to-end web applications with modern architecture, robust RESTful APIs, relational database design, and high-performance user interfaces.",
    skill2Tag1: "TypeScript / React",
    skill2Tag2: "Node.js / Express",
    skill2Tag3: "Database & REST API",

    skill3Num: "03",
    skill3Title: "ISLAMIC HISTORY & CIVILIZATION",
    skill3Desc: "In-depth knowledge of the prophetic biography (Seerah), the Rightly Guided Caliphs, Islamic dynasties, and the intellectual legacy of Islamic civilization.",
    skill3Tag1: "Seerah Nabawiyyah",
    skill3Tag2: "Rashidun Caliphate",
    skill3Tag3: "Islamic History",

    // Portfolio Section
    portfolioSectionNum: "02 / ARCHIVE",
    portfolioSectionTitle: "SELECTED SPATIAL & DIGITAL WORKS",
    projectLinkText: "VIEW PROJECT",
    
    projects: [
      {
        id: 1,
        title: "PERSONAL FINANCE MANAGEMENT",
        category: "Digital / Application",
        description: "A streamlined web application designed to help individuals track, organize, and manage personal expenses and financial habits.",
        image: "/src/assets/images/Picture27082017.jpg",
        link: "https://github.com/mnaufalq1/money_dashboard",
        year: "2026"
      },
      {
        id: 2,
        title: "SWISS GEOMETRY",
        category: "Typography / Print",
        description: "Editorial layout and poster series exploring Josef Müller-Brockmann's legendary grid systems, focusing on stark crimson accents and structured columns.",
        image: "/src/assets/images/project_editorial_1784270617189.jpg",
        link: "https://github.com",
        year: "2025"
      },
      {
        id: 3,
        title: "SENSORY GRAPHIC UI",
        category: "Digital / UI UX",
        description: "Dark-mode financial telemetry instrument panel leveraging high-contrast widgets, crisp graphs, and tactile dials for real-time visual analytics.",
        image: "/src/assets/images/project_interface_1784270631676.jpg",
        link: "https://github.com",
        year: "2026"
      },
      {
        id: 4,
        title: "KINETIC MONOGRAM",
        category: "Motion / Code",
        description: "Generative typographic playground that synthesizes custom geometric monograms responsive to real-time mouse velocities and physics vectors.",
        image: "/src/assets/images/project_editorial_1784270617189.jpg",
        link: "https://github.com",
        year: "2025"
      }
    ],

    // Contact Section
    contactSectionNum: "03 / CORRESPONDENCE",
    contactSectionTitle: "SEND DIRECT MESSAGE",
    contactStatement: "HAVE A DESIGN CONCEPT OR DIGITAL SYSTEM EXPERIMENT IN MIND? SEND A MESSAGE TO DISCUSS PROJECT FIT.",
    channelEmailLabel: "ELECTRONIC MAIL (EMAIL)",
    channelLocationLabel: "LOCATION",
    locationValue: "Yogyakarta, Indonesia",
    formNameLabel: "FULL NAME",
    formNamePlaceholder: "e.g., Josef Müller",
    formEmailLabel: "EMAIL ADDRESS",
    formEmailPlaceholder: "e.g., josef@muller.ch",
    formMsgLabel: "CORRESPONDENCE MESSAGE",
    formMsgPlaceholder: "Describe your project or message here...",
    formSubmitBtn: "SEND MESSAGE",
    
    // Notification & Dialogs
    notifSuccessTitle: "MESSAGE PREPARED",
    notifSuccessDesc: "Your message has been formatted. Click the button below to launch your email client.",
    notifOpenEmail: "LAUNCH EMAIL",
    notifCopyEmail: "COPY EMAIL ADDRESS",
    notifEmailCopied: "COPIED!",
    notifBack: "BACK",

    // Footer
    footerCopy: "© 2026 DESIGN STUDIO. ALL RIGHTS RESERVED LOCALLY.",
    footerTime: "JAKARTA / INDONESIA",

    // Background HUD Controller
    bgHudTitle: "GENERATIVE BACKGROUND",
    bgModeQuantum: "Quantum Constellation",
    bgModeHyperspace: "Hyperspace Warp",
    bgModeSwarm: "Gravitational Swarm",
    bgModeMatrix: "Cyber Matrix",
    bgModeSine: "Harmonic Sine Waves",
    bgModeOff: "Static Grid (Off)",

    // Command Palette
    cmdPlaceholder: "Type a command or search section (e.g., theme, works, contact)...",
    cmdNoResults: "No matching commands found.",
    cmdCatNav: "Quick Navigation",
    cmdCatThemes: "Color Theme Palettes",
    cmdCatBg: "Generative Backgrounds",
    cmdCatLang: "Language Switcher",
    cmdCatActions: "Actions & Utilities",
    cmdHintSelect: "Select",
    cmdHintNavigate: "Navigate",
    cmdHintClose: "Close"
  }
};
