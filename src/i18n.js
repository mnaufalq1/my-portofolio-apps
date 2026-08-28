/**
 * ==========================================================================
 * Bilingual Dictionary & i18n System (Indonesian & English)
 * ==========================================================================
 */

import pictureFinance from "./assets/images/Picture1.png";
import pictureConverter from "./assets/images/Picture2.jpg";
import pictureWeather from "./assets/images/Picture3.png";

export const I18N_DATA = {
  id: {
    // Navigation
    navLogo: "PALTOFOLIO",
    navHome: "BERANDA",
    navSkills: "KEAHLIAN",
    navPortfolio: "KARYA",
    navContact: "KONTAK",
    navCmdPalette: "COMMAND (CTRL+K)",
    themeToggleText: "TEMA",

    // Hero Section
    heroSubtitle: "JUNIOR FULLSTACK DEVELOPER",
    heroHeading: "DEVELOPING CUSTOM<br />WEB APPLICATIONS &<br />MUSLIM PROGRAMMER",
    heroDescription: "Membangun aplikasi web end-to-end dengan arsitektur modern, RESTful API yang andal, manajemen basis data, performa tinggi, dan antarmuka responsif yang efisien.",
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
        image: pictureFinance,
        link: "https://github.com/mnaufalq1/money_dashboard",
        year: "2026"
      },
      {
        id: 2,
        title: "KONVERTER VIDEO",
        category: "Digital / Aplikasi",
        description: "Aplikasi berbasis web yang dirancang sederhana untuk membantu individu dalam mengonversi video ke format lain.",
        image: pictureConverter,
        link: "https://github.com/mnaufalq1/converter-video-apps",
        year: "2026"
      },
      {
        id: 3,
        title: "WEATHER APPS",
        category: "Digital / UI UX",
        description: "Aplikasi berbasis web yang dirancang sederhana untuk membantu individu mengecek cuaca di kota tertentu dengan antarmuka yang bersih dan ramah pengguna.",
        image: pictureWeather,
        link: "https://github.com/mnaufalq1/weather-apps",
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
    navLogo: "PALTFOLIO",
    navHome: "HOME",
    navSkills: "SKILLS",
    navPortfolio: "WORKS",
    navContact: "CONTACT",
    navCmdPalette: "COMMAND (CTRL+K)",
    themeToggleText: "THEME",

    // Hero Section
    heroSubtitle: "JUNIOR FULLSTACK DEVELOPER",
    heroHeading: "DEVELOPING CUSTOM<br />WEB APPLICATIONS &<br />MUSLIM PROGRAMMER",
    heroDescription: "Building end-to-end web applications with modern architecture, robust RESTful APIs, relational database design, high-performance, and efficient user interfaces.",
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
        image: pictureFinance,
        link: "https://github.com/mnaufalq1/money_dashboard",
        year: "2026"
      },
      {
        id: 2,
        title: "VIDEO CONVERTER APPS",
        category: "Digital / Application",
        description: "A web apps designed to help individuals convert videos to other formats with a clean and user-friendly interface.",
        image: pictureConverter,
        link: "https://github.com/mnaufalq1/converter-video-apps",
        year: "2026"
      },
      {
        id: 3,
        title: "WEATHER APPS",
        category: "Digital / UI UX",
        description: "A web apps designed to help individuals check the weather in a specific city with a clean and user-friendly interface.",
        image: pictureWeather,
        link: "https://github.com/mnaufalq1/weather-apps",
        year: "2026"
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
