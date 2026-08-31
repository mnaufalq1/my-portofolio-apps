/**
 * ==========================================================================
 * Swiss-Cyber Editorial Portfolio Master Script
 * ==========================================================================
 * Features:
 * 1. Multi-Mode Generative Physics Background (Quantum, Hyperspace, Swarm, Matrix, Sine)
 * 2. Dynamic Color Theme Engine (Cyber Neon, Deep Obsidian, Solar Amber, Matrix Emerald, Aurora Flow, Light Swiss)
 * 3. Bilingual Support (ID / EN) with dynamic DOM localization & bilingual CV generator
 * 4. Swiss-Cyber Command Palette (Ctrl+K / Cmd+K)
 * 5. Smooth Trailing Custom Cursor & Intersection Observer Reveal Animations
 */

import { GenerativeBackground } from "./bgCanvas.js";
import { I18N_DATA } from "./i18n.js";
import { CommandPalette } from "./commandPalette.js";

// ==========================================================================
// 1. GLOBAL STATE & SINGLETONS
// ==========================================================================
let currentLang = localStorage.getItem("portfolio-lang") || "id";
let currentTheme = localStorage.getItem("portfolio-theme") || "cyber-neon";
let bgEngine = null;
let cmdPalette = null;

const THEME_LIST = [
  "cyber-neon",
  "deep-obsidian",
  "solar-amber",
  "matrix-emerald",
  "aurora-flow",
  "light"
];

const BG_MODES = [
  "quantum",
  "hyperspace",
  "swarm",
  "matrix",
  "sine",
  "off"
];

// ==========================================================================
// 2. DOCUMENT READY & INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Generative Canvas Engine
  bgEngine = new GenerativeBackground("bg-canvas");
  
  // 2. Initialize Color Themes
  initThemeEngine();
  
  // 3. Initialize Bilingual System
  initLanguageEngine();
  
  // 4. Initialize Command Palette
  initCommandPalette();
  
  // 5. Initialize Background HUD Controller
  initBackgroundHud();
  
  // 6. Initialize UI Utilities (Cursor, Scroll reveals, Contact Form, CV Downloader)
  initCustomCursor();
  initContactForm();
  initCvDownloader();
  initScrollAnimations();
});

// ==========================================================================
// 3. DYNAMIC COLOR THEME SYSTEM
// ==========================================================================
function initThemeEngine() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  
  // Apply initial theme
  applyTheme(currentTheme);
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      // Cycle through available themes
      const currentIndex = THEME_LIST.indexOf(currentTheme);
      const nextIndex = (currentIndex + 1) % THEME_LIST.length;
      const nextTheme = THEME_LIST[nextIndex];
      applyTheme(nextTheme);
    });
  }
}

export function applyTheme(themeName) {
  if (!THEME_LIST.includes(themeName)) {
    themeName = "cyber-neon";
  }
  
  currentTheme = themeName;
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("portfolio-theme", themeName);
  
  // Update background canvas colors immediately
  if (bgEngine) {
    bgEngine.updateThemeColors();
  }
  
  // Update theme toggle text
  const themeToggleText = document.getElementById("theme-toggle-text");
  if (themeToggleText) {
    const formatted = themeName.replace("-", " ").toUpperCase();
    themeToggleText.textContent = formatted;
  }
}

// ==========================================================================
// 4. BILINGUAL i18n SYSTEM (INDONESIAN & ENGLISH)
// ==========================================================================
function initLanguageEngine() {
  const langToggle = document.getElementById("lang-toggle");
  const btnId = document.getElementById("lang-btn-id");
  const btnEn = document.getElementById("lang-btn-en");
  
  // Apply initial language
  applyLanguage(currentLang);
  
  if (btnId) {
    btnId.addEventListener("click", (e) => {
      e.stopPropagation();
      applyLanguage("id");
    });
  }
  
  if (btnEn) {
    btnEn.addEventListener("click", (e) => {
      e.stopPropagation();
      applyLanguage("en");
    });
  }
}

export function applyLanguage(lang) {
  currentLang = lang === "en" ? "en" : "id";
  localStorage.setItem("portfolio-lang", currentLang);
  document.documentElement.setAttribute("lang", currentLang);
  
  const t = I18N_DATA[currentLang] || I18N_DATA.id;
  
  // Update Language Switcher UI Active state
  const btnId = document.getElementById("lang-btn-id");
  const btnEn = document.getElementById("lang-btn-en");
  if (btnId && btnEn) {
    btnId.classList.toggle("active", currentLang === "id");
    btnEn.classList.toggle("active", currentLang === "en");
  }
  
  // Update Navigation Bar
  setText("nav-logo-text", t.navLogo);
  setText("nav-item-home", t.navHome);
  setText("nav-item-skills", t.navSkills);
  setText("nav-item-portfolio", t.navPortfolio);
  setText("nav-item-contact", t.navContact);
  
  // Update Hero Section
  setText("hero-role-label", t.heroSubtitle);
  setHtml("hero-main-heading", t.heroHeading);
  setText("hero-paragraph-text", t.heroDescription);
  setText("btn-download-cv-label", t.heroDownloadCv);
  setText("contact-redirect-btn", t.heroContactMe);
  
  // Update Skills Section
  setText("skills-section-num", t.skillsSectionNum);
  setText("skills-section-title", t.skillsSectionTitle);
  setText("skill-1-num", t.skill1Num);
  setText("skill-1-title", t.skill1Title);
  setText("skill-1-desc", t.skill1Desc);
  setText("skill-1-tag-1", t.skill1Tag1);
  setText("skill-1-tag-2", t.skill1Tag2);
  setText("skill-1-tag-3", t.skill1Tag3);
  
  setText("skill-2-num", t.skill2Num);
  setText("skill-2-title", t.skill2Title);
  setText("skill-2-desc", t.skill2Desc);
  setText("skill-2-tag-1", t.skill2Tag1);
  setText("skill-2-tag-2", t.skill2Tag2);
  setText("skill-2-tag-3", t.skill2Tag3);
  
  setText("skill-3-num", t.skill3Num);
  setText("skill-3-title", t.skill3Title);
  setText("skill-3-desc", t.skill3Desc);
  setText("skill-3-tag-1", t.skill3Tag1);
  setText("skill-3-tag-2", t.skill3Tag2);
  setText("skill-3-tag-3", t.skill3Tag3);
  
  // Update Portfolio Section
  setText("portfolio-section-num", t.portfolioSectionNum);
  setText("portfolio-section-title", t.portfolioSectionTitle);
  renderProjects(t.projects, t.projectLinkText);
  
  // Update Contact Section
  setText("contact-section-num", t.contactSectionNum);
  setText("contact-section-title", t.contactSectionTitle);
  setText("contact-statement-text", t.contactStatement);
  setText("channel-email-label", t.channelEmailLabel);
  setText("channel-loc-label", t.channelLocationLabel);
  setText("location-label", t.locationValue);
  
  setText("form-name-label", t.formNameLabel);
  setPlaceholder("form-name", t.formNamePlaceholder);
  setText("form-email-label", t.formEmailLabel);
  setPlaceholder("form-email", t.formEmailPlaceholder);
  setText("form-msg-label", t.formMsgLabel);
  setPlaceholder("form-message", t.formMsgPlaceholder);
  setText("form-submit-btn", t.formSubmitBtn);
  
  // Update Notification & Success Dialog
  setText("notif-title-status", t.notifSuccessTitle);
  setText("success-notification-desc", t.notifSuccessDesc);
  setText("manual-mailto-btn", t.notifOpenEmail);
  setText("copy-email-btn", t.notifCopyEmail);
  setText("close-notification", t.notifBack);
  
  // Update Footer
  setText("footer-copy-text", t.footerCopy);
  setText("footer-time-indicator", t.footerTime);
  
  // Update Background HUD Labels
  setText("bg-hud-menu-header", t.bgHudTitle);
  updateBgHudLabel();
  
  // Update Command Palette Hints
  setText("cmd-hint-nav-label", t.cmdHintNavigate);
  setText("cmd-hint-sel-label", t.cmdHintSelect);
  setText("cmd-hint-cls-label", t.cmdHintClose);
  setPlaceholder("command-palette-input", t.cmdPlaceholder);
  
  // Refresh Command Palette if open
  if (cmdPalette && cmdPalette.isOpen) {
    cmdPalette.renderList();
  }
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}

function setHtml(id, html) {
  const el = document.getElementById(id);
  if (el && html !== undefined) el.innerHTML = html;
}

function setPlaceholder(id, placeholder) {
  const el = document.getElementById(id);
  if (el && placeholder !== undefined) el.placeholder = placeholder;
}

// ==========================================================================
// 5. BACKGROUND HUD CONTROLLER
// ==========================================================================
function initBackgroundHud() {
  const modeBtn = document.getElementById("bg-hud-mode-btn");
  const nextBtn = document.getElementById("bg-hud-next-btn");
  const hudMenu = document.getElementById("bg-hud-menu");
  const menuItems = document.querySelectorAll(".bg-hud-menu-item");
  
  // Toggle HUD dropdown menu
  if (modeBtn && hudMenu) {
    modeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      hudMenu.classList.toggle("active");
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (hudMenu && !e.target.closest("#bg-hud-container")) {
      hudMenu.classList.remove("active");
    }
  });
  
  // Switch to next background mode
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!bgEngine) return;
      const currentMode = bgEngine.getMode();
      const currentIndex = BG_MODES.indexOf(currentMode);
      const nextIndex = (currentIndex + 1) % BG_MODES.length;
      const nextMode = BG_MODES[nextIndex];
      setBgMode(nextMode);
    });
  }
  
  // Menu items click
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const mode = item.getAttribute("data-bg-mode");
      if (mode) {
        setBgMode(mode);
        if (hudMenu) hudMenu.classList.remove("active");
      }
    });
  });
  
  updateBgHudLabel();
}

export function setBgMode(mode) {
  if (!bgEngine) return;
  bgEngine.setMode(mode);
  updateBgHudLabel();
}

function updateBgHudLabel() {
  if (!bgEngine) return;
  const currentMode = bgEngine.getMode();
  const labelEl = document.getElementById("bg-hud-mode-name");
  const t = I18N_DATA[currentLang] || I18N_DATA.id;
  
  const modeNameMap = {
    quantum: t.bgModeQuantum,
    hyperspace: t.bgModeHyperspace,
    swarm: t.bgModeSwarm,
    matrix: t.bgModeMatrix,
    sine: t.bgModeSine,
    off: t.bgModeOff
  };
  
  if (labelEl) {
    labelEl.textContent = modeNameMap[currentMode] || currentMode;
  }
  
  // Update menu active class
  const menuItems = document.querySelectorAll(".bg-hud-menu-item");
  menuItems.forEach((item) => {
    const itemMode = item.getAttribute("data-bg-mode");
    item.classList.toggle("active", itemMode === currentMode);
  });
}

// ==========================================================================
// 6. COMMAND PALETTE INITIALIZATION
// ==========================================================================
function initCommandPalette() {
  cmdPalette = new CommandPalette({
    getLang: () => currentLang,
    onSelectTheme: (theme) => applyTheme(theme),
    onSelectBgMode: (mode) => setBgMode(mode),
    onSelectLang: (lang) => applyLanguage(lang),
    onDownloadCv: () => triggerCvDownload(),
    onCopyEmail: () => triggerCopyEmail()
  });
}

// ==========================================================================
// 7. SMOOTH TRAILING CUSTOM CURSOR
// ==========================================================================
function initCustomCursor() {
  const dot = document.querySelector(".custom-cursor-dot");
  const circle = document.querySelector(".custom-cursor-circle");
  
  if (!dot || !circle) return;
  
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let circleX = mouseX;
  let circleY = mouseY;
  
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });
  
  function animateCursor() {
    const lerpRatio = 0.16;
    circleX += (mouseX - circleX) * lerpRatio;
    circleY += (mouseY - circleY) * lerpRatio;
    
    circle.style.left = `${circleX}px`;
    circle.style.top = `${circleY}px`;
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  const interactiveSelectors = "a, button, .project-card, .theme-toggle-btn, .lang-toggle-btn, .cmd-trigger-btn, .bg-hud-pill, .bg-hud-menu-item, input, textarea, .social-icon-btn, .cmd-item";
  
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveSelectors)) {
      document.body.classList.add("hover-link");
    }
  });
  
  document.addEventListener("mouseout", (e) => {
    if (!e.target.closest(interactiveSelectors)) {
      document.body.classList.remove("hover-link");
    }
  });
}

// ==========================================================================
// 8. DYNAMIC PORTFOLIO GRID RENDERER
// ==========================================================================
function renderProjects(projectsList, linkText = "SUMBER KODE") {
  const gridContainer = document.getElementById("portfolio-grid");
  if (!gridContainer) return;
  
  const currentProjects = projectsList || (I18N_DATA[currentLang] || I18N_DATA.id).projects;
  
  gridContainer.innerHTML = "";
  
  currentProjects.forEach((proj, idx) => {
    const card = document.createElement("article");
    const staggerDelayClass = `reveal-delay-${(idx % 4) + 1}`;
    card.className = `project-card scroll-reveal ${staggerDelayClass} is-revealed`;
    card.id = `project-${proj.id}`;
    
    card.innerHTML = `
      <div class="project-img-container">
        <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy" />
      </div>
      <div class="project-content">
        <div class="project-meta">
          <span class="project-category mono">${proj.category}</span>
          <span class="mono text-accent" style="font-size:0.75rem;">${proj.year}</span>
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-footer">
          <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="project-link">
            <span>${linkText}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    `;
    
    gridContainer.appendChild(card);
  });
}

// ==========================================================================
// 9. CONTACT FORM SYSTEM
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  const notification = document.getElementById("form-success-notification");
  const closeNotifBtn = document.getElementById("close-notification");
  const manualMailtoBtn = document.getElementById("manual-mailto-btn");
  const copyEmailBtn = document.getElementById("copy-email-btn");
  
  if (!form || !notification) return;
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const message = document.getElementById("form-message").value.trim();
    
    if (!name || !email || !message) return;
    
    const subjectPrefix = currentLang === "en" ? "New Portfolio Inquiry from" : "Pesan Portofolio Baru dari";
    const subject = encodeURIComponent(`${subjectPrefix} ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );
    
    const mailtoUrl = `mailto:mnaufalq1@gmail.com?subject=${subject}&body=${body}`;
    
    if (manualMailtoBtn) {
      manualMailtoBtn.href = mailtoUrl;
    }
    
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.warn("Auto-mailto redirect prevented:", err);
    }
    
    notification.classList.add("active");
    form.reset();
  });
  
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      triggerCopyEmail();
    });
  }
  
  if (closeNotifBtn) {
    closeNotifBtn.addEventListener("click", () => {
      notification.classList.remove("active");
    });
  }
}

function triggerCopyEmail() {
  const emailText = "mnaufalq1@gmail.com";
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const t = I18N_DATA[currentLang] || I18N_DATA.id;
  
  navigator.clipboard.writeText(emailText).then(() => {
    if (copyEmailBtn) {
      const originalText = copyEmailBtn.textContent;
      copyEmailBtn.textContent = t.notifEmailCopied || "TERSALIN!";
      copyEmailBtn.style.backgroundColor = "var(--accent)";
      copyEmailBtn.style.color = "white";
      copyEmailBtn.style.borderColor = "var(--accent)";
      
      setTimeout(() => {
        copyEmailBtn.textContent = originalText;
        copyEmailBtn.style.backgroundColor = "";
        copyEmailBtn.style.color = "";
        copyEmailBtn.style.borderColor = "";
      }, 2000);
    }
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}

// ==========================================================================
// 10. BILINGUAL CLIENT-SIDE CV COMPILER & DOWNLOADER
// ==========================================================================
function initCvDownloader() {
  const downloadBtn = document.getElementById("download-cv-btn");
  if (!downloadBtn) return;
  
  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    triggerCvDownload();
  });
}

function triggerCvDownload() {
  const isEn = currentLang === "en";
  
  const resumeHTML = isEn ? `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Resume - Junior Fullstack Developer & Muslim Programmer</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F9F9F7; color: #1A1B1E; padding: 4rem 3rem; max-width: 800px; margin: 0 auto; line-height: 1.6; }
    header { border-bottom: 2px solid #1A1B1E; padding-bottom: 2rem; margin-bottom: 3rem; display: flex; justify-content: space-between; align-items: flex-end; }
    h1 { font-size: 2.5rem; font-weight: 700; letter-spacing: -0.04em; margin: 0; text-transform: uppercase; }
    .subtitle { font-family: monospace; font-size: 0.9rem; color: #FF4D00; text-transform: uppercase; margin-top: 0.5rem; }
    .contact-info { text-align: right; font-size: 0.9rem; }
    section { margin-bottom: 3rem; }
    h2 { font-size: 1.25rem; text-transform: uppercase; border-bottom: 1px solid #1A1B1E; padding-bottom: 0.5rem; margin-bottom: 1.5rem; letter-spacing: -0.02em; }
    .experience-item { margin-bottom: 2rem; }
    .item-header { display: flex; justify-content: space-between; font-weight: 600; margin-bottom: 0.5rem; }
    .item-role { color: #FF4D00; }
    .item-description { color: #555; font-size: 0.95rem; }
    .skills-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; font-size: 0.9rem; }
    .skill-category { font-weight: 600; margin-bottom: 0.25rem; }
  </style>
</head>
<body>
  <header>
    <div>
      <h1>Portfolio Creator</h1>
      <div class="subtitle">Junior Fullstack Developer & Muslim Programmer</div>
    </div>
    <div class="contact-info">
      <div>mnaufalq1@gmail.com</div>
      <div>Yogyakarta, Indonesia</div>
      <div>github.com/mnaufalq1</div>
    </div>
  </header>
  <section>
    <h2>Professional Profile</h2>
    <p>A junior fullstack developer who sets out to build modern web applications with efficient architecture and responsive interfaces.</p>
  </section>
  <section>
    <h2>Work Experience</h2>
    <div class="experience-item">
      <div class="item-header">
        <div>JUNIOR FULLSTACK DEVELOPER</div>
        <div>2026 — Present</div>
      </div>
      <div class="item-role">Junior Fullstack Developer</div>
      <p class="item-description">Building End-to-End Web Applications with Modern Architecture, Robust RESTful APIs, Relational Database Design, High-Performance, and Efficient User Interfaces.</p>
    </div>
  </section>
  <section>
    <h2>Technical & Core Disciplines</h2>
    <div class="skills-list">
      <div>
        <div class="skill-category">AQIDAH & THEOLOGY</div>
        <div>Tawheed, Articles of Faith, Ushuluddin, Islamic Studies</div>
      </div>
      <div>
        <div class="skill-category">FULLSTACK DEVELOPMENT</div>
        <div>TypeScript, React, Node.js, Express, PostgreSQL, REST APIs</div>
      </div>
      <div>
        <div class="skill-category">ISLAMIC HISTORY</div>
        <div>Seerah Nabawiyyah, Rashidun Caliphate, Tarikh & Civilization</div>
      </div>
    </div>
  </section>
  <footer style="border-top:1px solid #1A1B1E; padding-top:1.5rem; text-align:center; font-size:0.8rem; color:#888;">
    Compiled in real-time by the Portfolio Client Engine.
  </footer>
</body>
</html>` : `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Resume - Junior Fullstack Developer & Muslim Programmer</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F9F9F7; color: #1A1B1E; padding: 4rem 3rem; max-width: 800px; margin: 0 auto; line-height: 1.6; }
    header { border-bottom: 2px solid #1A1B1E; padding-bottom: 2rem; margin-bottom: 3rem; display: flex; justify-content: space-between; align-items: flex-end; }
    h1 { font-size: 2.5rem; font-weight: 700; letter-spacing: -0.04em; margin: 0; text-transform: uppercase; }
    .subtitle { font-family: monospace; font-size: 0.9rem; color: #FF4D00; text-transform: uppercase; margin-top: 0.5rem; }
    .contact-info { text-align: right; font-size: 0.9rem; }
    section { margin-bottom: 3rem; }
    h2 { font-size: 1.25rem; text-transform: uppercase; border-bottom: 1px solid #1A1B1E; padding-bottom: 0.5rem; margin-bottom: 1.5rem; letter-spacing: -0.02em; }
    .experience-item { margin-bottom: 2rem; }
    .item-header { display: flex; justify-content: space-between; font-weight: 600; margin-bottom: 0.5rem; }
    .item-role { color: #FF4D00; }
    .item-description { color: #555; font-size: 0.95rem; }
    .skills-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; font-size: 0.9rem; }
    .skill-category { font-weight: 600; margin-bottom: 0.25rem; }
  </style>
</head>
<body>
  <header>
    <div>
      <h1>Kreator Portofolio</h1>
      <div class="subtitle">Junior Fullstack Developer & Muslim Programmer</div>
    </div>
    <div class="contact-info">
      <div>mnaufalq1@gmail.com</div>
      <div>Jakarta, Indonesia</div>
      <div>github.com/mnaufalq1</div>
    </div>
  </header>
  <section>
    <h2>Profil Singkat</h2>
    <p>Seorang pengembang fullstack junior yang berdedikasi untuk membangun aplikasi web modern dengan arsitektur yang efisien dan antarmuka yang responsif.</p>
  </section>
  <section>
    <h2>Pengalaman Kerja</h2>
    <div class="experience-item">
      <div class="item-header">
        <div>PROGRAMMER</div>
        <div>2026 — Sekarang</div>
      </div>
      <div class="item-role">Pengembang Web Fullstack</div>
      <p class="item-description">Pengembangan aplikasi web end-to-end dengan arsitektur modern, RESTful API, manajemen basis data, performa tinggi, dan antarmuka responsif yang efisien.</p>
    </div>
  </section>
  <section>
    <h2>Keahlian Teknis & Disiplin</h2>
    <div class="skills-list">
      <div>
        <div class="skill-category">AKIDAH & TAUHID</div>
        <div>Tauhid & Rukun Iman, Ushuluddin, Pemurnian Keyakinan, Studi Islam</div>
      </div>
      <div>
        <div class="skill-category">PEMROGRAMAN FULLSTACK</div>
        <div>TypeScript, React, Node.js, Express, Basis Data SQL, RESTful API</div>
      </div>
      <div>
        <div class="skill-category">SEJARAH ISLAM</div>
        <div>Sirah Nabawiyah, Khulafaur Rasyidin, Tarikh Khilafah & Peradaban Islam</div>
      </div>
    </div>
  </section>
  <footer style="border-top:1px solid #1A1B1E; padding-top:1.5rem; text-align:center; font-size:0.8rem; color:#888;">
    Disusun secara dinamis langsung di dalam peramban melalui Portfolio Engine.
  </footer>
</body>
</html>`;

  const blob = new Blob([resumeHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  
  const virtualLink = document.createElement("a");
  virtualLink.href = url;
  virtualLink.download = isEn ? "RESUME_CREATIVE_PORTFOLIO.html" : "RESUME_PORTOFOLIO_KREATIF.html";
  document.body.appendChild(virtualLink);
  virtualLink.click();
  
  document.body.removeChild(virtualLink);
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 150);
}

// ==========================================================================
// 11. SCROLL INTERSECTION OBSERVER
// ==========================================================================
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".scroll-reveal");
  
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-revealed"));
    return;
  }
  
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.12
  };
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  revealElements.forEach((el) => {
    observer.observe(el);
  });
}
