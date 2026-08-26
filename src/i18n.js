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
    skillsSectionNum: "01 / KEMAMPUAN",
    skillsSectionTitle: "KEAHLIAN & DISIPLIN UTAMA",
    skill1Num: "01",
    skill1Title: "PENGARAHAN SENI",
    skill1Desc: "Menyusun hierarki tipografi, keselarasan spasial, dan komposisi responsif minimalis yang dipengaruhi oleh tata letak grid cetak Swiss klasik.",
    skill1Tag1: "Sistem Grid",
    skill1Tag2: "Editorial",
    skill1Tag3: "Figma",

    skill2Num: "02",
    skill2Title: "SISTEM ANTARMUKA",
    skill2Desc: "Membangun alur browser semantik yang sangat ringan dengan kode murni (vanilla), memastikan kinerja luar biasa dan interaksi yang lancar.",
    skill2Tag1: "HTML5 / CSS3",
    skill2Tag2: "Vanilla JS",
    skill2Tag3: "Kinerja Web",

    skill3Num: "03",
    skill3Title: "ASET GEOMETRIS",
    skill3Desc: "Mensintesis peta vektor berpresisi tinggi, simulasi kanvas matematis, dan animasi dinamis menggunakan logika matriks vanilla.",
    skill3Tag1: "Tata Letak SVG",
    skill3Tag2: "API Canvas",
    skill3Tag3: "Grafis Matematika",

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
        image: "assets/images/Picture27082017.jpg",
        link: "https://github.com/mnaufalq1/money_dashboard",
        year: "2026"
      },
      {
        id: 2,
        title: "GEOMETRI SWISS",
        category: "Tipografi / Cetak",
        description: "Tata letak editorial dan seri poster yang mengeksplorasi grid legendaris Josef Müller-Brockmann. Berfokus pada aksen merah menyala dan tata letak struktural.",
        image: "/src/assets/images/project_editorial_1784270617189.jpg",
        link: "https://github.com",
        year: "2025"
      },
      {
        id: 3,
        title: "ANTARMUKA GRAFIS SENSORIK",
        category: "Digital / UI UX",
        description: "Panel instrumen keuangan mode gelap yang memanfaatkan widget kontras tinggi, grafik bersih, dan kontrol taktil untuk analitik visual berlatensi rendah.",
        image: "/src/assets/images/project_interface_1784270631676.jpg",
        link: "https://github.com",
        year: "2026"
      },
      {
        id: 4,
        title: "MONOGRAM KINETIK",
        category: "Gerak / Kode",
        description: "Area bermain tipografi generatif yang menampilkan monogram geometris khusus sebagai respons terhadap interaksi mouse pengguna secara real-time.",
        image: "/src/assets/images/project_editorial_1784270617189.jpg",
        link: "https://github.com",
        year: "2025"
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
    skillsSectionNum: "01 / CAPABILITIES",
    skillsSectionTitle: "CORE DISCIPLINES & SKILLS",
    skill1Num: "01",
    skill1Title: "ART DIRECTION",
    skill1Desc: "Composing typographic hierarchies, spatial alignments, and minimalist responsive compositions influenced by classic Swiss print grid layouts.",
    skill1Tag1: "Grid Systems",
    skill1Tag2: "Editorial",
    skill1Tag3: "Figma",

    skill2Num: "02",
    skill2Title: "INTERFACE SYSTEMS",
    skill2Desc: "Engineering ultra-lightweight semantic browser flows with pure vanilla code, ensuring exceptional responsiveness and low-latency client rendering.",
    skill2Tag1: "HTML5 / CSS3",
    skill2Tag2: "Vanilla JS",
    skill2Tag3: "Web Performance",

    skill3Num: "03",
    skill3Title: "GEOMETRIC ASSETS",
    skill3Desc: "Synthesizing high-precision vector maps, mathematical canvas simulations, and dynamic particle animations using pure matrix logic.",
    skill3Tag1: "SVG Layouts",
    skill3Tag2: "Canvas API",
    skill3Tag3: "Math Graphics",

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
        image: "assets/images/Picture27082017.jpg",
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
