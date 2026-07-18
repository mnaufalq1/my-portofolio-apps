/**
 * ==========================================================================
 * Swiss Minimalist / Clean Editorial Portfolio Scripts
 * ==========================================================================
 */

// ==========================================================================
// 1. PROJECT DATA ARCHIVE
// ==========================================================================
// To add new projects, simply add a new object to this array.
// Each object represents a project card in the dynamic portfolio gallery.
const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "ARSIP ARSITEKTUR",
    category: "Ruang / Editorial",
    description: "Situs web arsip spasial yang dirancang dengan tipografi minimalis dan citra struktural besar, menciptakan galeri konsep arsitektur virtual.",
    image: "/src/assets/images/project_architecture_1784270605927.jpg",
    link: "https://github.com",
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
    image: "/src/assets/images/project_editorial_1784270617189.jpg", // re-use clean print visual as placeholder
    link: "https://github.com",
    year: "2025"
  }
];

// ==========================================================================
// 2. DOCUMENT READY & BOOTSTRAP
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCustomCursor();
  renderProjects();
  initContactForm();
  initCvDownloader();
  initScrollAnimations();
});

// ==========================================================================
// 3. THEME MANAGER (LIGHT / DARK SYSTEM)
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;
  
  const themeText = themeToggleBtn.querySelector(".theme-text");
  
  // Get preferred theme from localStorage or system defaults
  const savedTheme = localStorage.getItem("portfolio-theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
  
  setTheme(initialTheme, themeText);
  
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme, themeText);
  });
}

function setTheme(theme, textElement) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  
  if (textElement) {
    textElement.textContent = theme === "dark" ? "TERANG" : "GELAP";
  }
}

// ==========================================================================
// 4. SMOOTH TRAILING CUSTOM CURSOR
// ==========================================================================
function initCustomCursor() {
  const dot = document.querySelector(".custom-cursor-dot");
  const circle = document.querySelector(".custom-cursor-circle");
  
  if (!dot || !circle) return;
  
  // Mouse Coordinates
  let mouseX = 0;
  let mouseY = 0;
  
  // Smooth interpolated coordinates (lerping)
  let circleX = 0;
  let circleY = 0;
  
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Tiny dot immediately moves with cursor for extreme responsiveness
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });
  
  // Animation Loop for lerped circular trailing cursor (Silky smooth 60fps)
  function animateCursor() {
    // Linear Interpolation: NewPos = CurrentPos + (TargetPos - CurrentPos) * LerpRatio
    const lerpRatio = 0.15;
    circleX += (mouseX - circleX) * lerpRatio;
    circleY += (mouseY - circleY) * lerpRatio;
    
    circle.style.left = `${circleX}px`;
    circle.style.top = `${circleY}px`;
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Hover states detection
  const interactiveSelectors = "a, button, .project-card, .theme-toggle-btn, input, textarea, .social-icon-btn";
  
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
// 5. DYNAMIC PORTFOLIO GRID RENDERER
// ==========================================================================
function renderProjects() {
  const gridContainer = document.getElementById("portfolio-grid");
  if (!gridContainer) return;
  
  gridContainer.innerHTML = ""; // Clear existing placeholder markup
  
  PORTFOLIO_PROJECTS.forEach((proj) => {
    const card = document.createElement("article");
    card.className = "project-card";
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
            LIHAT PROYEK
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
// 6. CONTACT FORM SYSTEM (PERSISTENT & INTERACTIVE)
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
    
    // Construct mailto link to send the message directly to the portfolio owner's email
    const subject = encodeURIComponent(`Pesan Portofolio Baru dari ${name}`);
    const body = encodeURIComponent(
      `Nama Lengkap: ${name}\n` +
      `Alamat Email: ${email}\n\n` +
      `Isi Pesan:\n${message}`
    );
    
    const mailtoUrl = `mailto:mnaufalq1@gmail.com?subject=${subject}&body=${body}`;
    
    // Set the link on the success modal button so they can click it directly
    if (manualMailtoBtn) {
      manualMailtoBtn.href = mailtoUrl;
    }
    
    // Try to open email client automatically
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.warn("Auto-mailto redirect prevented:", err);
    }
    
    // Trigger Success Notification Micro-animation
    notification.classList.add("active");
    
    // Reset Form fields
    form.reset();
  });
  
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const emailText = "mnaufalq1@gmail.com";
      navigator.clipboard.writeText(emailText).then(() => {
        const originalText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = "TERSALIN!";
        copyEmailBtn.style.backgroundColor = "var(--accent)";
        copyEmailBtn.style.color = "white";
        copyEmailBtn.style.borderColor = "var(--accent)";
        
        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
          copyEmailBtn.style.backgroundColor = "";
          copyEmailBtn.style.color = "";
          copyEmailBtn.style.borderColor = "";
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
    });
  }
  
  if (closeNotifBtn) {
    closeNotifBtn.addEventListener("click", () => {
      notification.classList.remove("active");
    });
  }
}

// ==========================================================================
// 7. CLIENT-SIDE CV COMPILER & DYNAMIC DOWNLOAD
// ==========================================================================
function initCvDownloader() {
  const downloadBtn = document.getElementById("download-cv-btn");
  if (!downloadBtn) return;
  
  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Generate a beautiful offline HTML Swiss resume document
    const resumeHTML = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Resume - Portofolio Desain Kreatif</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #F9F9F7;
      color: #1A1B1E;
      padding: 4rem 3rem;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.6;
    }
    header {
      border-bottom: 2px solid #1A1B1E;
      padding-bottom: 2rem;
      margin-bottom: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: -0.04em;
      margin: 0;
      text-transform: uppercase;
    }
    .subtitle {
      font-family: monospace;
      font-size: 0.9rem;
      color: #FF4D00;
      text-transform: uppercase;
      margin-top: 0.5rem;
    }
    .contact-info {
      text-align: right;
      font-size: 0.9rem;
    }
    section {
      margin-bottom: 3rem;
    }
    h2 {
      font-size: 1.25rem;
      text-transform: uppercase;
      border-bottom: 1px solid #1A1B1E;
      padding-bottom: 0.5rem;
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
    }
    .experience-item {
      margin-bottom: 2rem;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .item-role {
      color: #FF4D00;
    }
    .item-description {
      color: #555;
      font-size: 0.95rem;
    }
    .skills-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      font-size: 0.9rem;
    }
    .skill-category {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
  </style>
</head>
<body>
  <header>
    <div>
      <h1>Kreator Portofolio</h1>
      <div class="subtitle">Direktur Kreatif & Desainer Grafis</div>
    </div>
    <div class="contact-info">
      <div>mnaufalq1@gmail.com</div>
      <div>linkedin.com/in/creator</div>
      <div>github.com/creator</div>
    </div>
  </header>
  
  <section>
    <h2>Profil Singkat</h2>
    <p>Spesialis desainer digital berpengalaman merancang pengalaman fisik-digital khusus. Berfokus pada tipografi editorial berkontras tinggi, keselarasan grid minimalis, dan interaksi klien berkinerja tinggi. Memanfaatkan prinsip Desain Swiss untuk menyusun metadata arsitektur yang kompleks secara elegan.</p>
  </section>

  <section>
    <h2>Pengalaman Kerja</h2>
    <div class="experience-item">
      <div class="item-header">
        <div>STUDIO METADATA</div>
        <div>2024 — Sekarang</div>
      </div>
      <div class="item-role">Arsitek Antarmuka Utama</div>
      <p class="item-description">Merintis kerangka kerja editorial interaktif untuk agensi arsitektur internasional. Memimpin tim desainer untuk membangun mesin tata letak tipografi taktil yang menghasilkan peningkatan konsistensi tata letak sebesar 40%.</p>
    </div>
    <div class="experience-item">
      <div class="item-header">
        <div>GRID & BRUSH CO.</div>
        <div>2022 — 2024</div>
      </div>
      <div class="item-role">Desainer Grafis Senior</div>
      <p class="item-description">Mengelola alur branding dan portofolio digital untuk galeri seni mewah. Merancang ulang basis kode tata letak visual untuk rendering perangkat seluler berlatensi rendah yang mulus.</p>
    </div>
  </section>

  <section>
    <h2>Keahlian Teknis</h2>
    <div class="skills-list">
      <div>
        <div class="skill-category">PENGARAHAN SENI</div>
        <div>Grid Editorial, Tata Letak Spasial, Pemasangan Tipografi, Kurasi Poster Swiss</div>
      </div>
      <div>
        <div class="skill-category">REKAYASA ANTARMUKA</div>
        <div>HTML5 Vanilla, CSS3 Berkinerja Tinggi, JS Berpresisi Tinggi, Rendering SVG</div>
      </div>
      <div>
        <div class="skill-category">ARSIP PERALATAN</div>
        <div>Figma, Adobe Creative Suite, Visual Studio, Kontrol Git, Sistem Webpack</div>
      </div>
    </div>
  </section>

  <section style="border-top:1px solid #1A1B1E; padding-top:1.5rem; text-align:center; font-size:0.8rem; color:#888;">
    Disusun secara dinamis langsung di dalam peramban melalui Portfolio Engine. Terima kasih telah membaca.
  </section>
</body>
</html>`;

    // Create file blob and trigger virtual download element
    const blob = new Blob([resumeHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    
    // Attempt opening in a new tab for instant rendering if download is sandboxed
    try {
      const newTab = window.open();
      if (newTab) {
        newTab.document.write(resumeHTML);
        newTab.document.close();
      }
    } catch (err) {
      console.warn("New tab blocked by browser popup settings:", err);
    }
    
    const virtualLink = document.createElement("a");
    virtualLink.href = url;
    virtualLink.download = "RESUME_PORTOFOLIO_KREATIF.html";
    document.body.appendChild(virtualLink);
    virtualLink.click();
    
    // Clean up
    document.body.removeChild(virtualLink);
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 150);
  });
}

// ==========================================================================
// 8. SCROLL INTERSECTION OBSERVER (SWISS ENTRANCE ANIMATIONS)
// ==========================================================================
function initScrollAnimations() {
  const animElements = document.querySelectorAll(".skill-card, .project-card, .contact-form, .contact-info");
  
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        obs.unobserve(entry.target); // Trigger only once for high performance
      }
    });
  }, observerOptions);
  
  animElements.forEach((el) => {
    // Set initial entrance styles
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
    observer.observe(el);
  });
}
