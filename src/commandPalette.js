/**
 * ==========================================================================
 * Swiss-Cyber Command Palette (Ctrl+K / Cmd+K)
 * ==========================================================================
 */

import { I18N_DATA } from "./i18n.js";

export class CommandPalette {
  constructor(options = {}) {
    this.modal = document.getElementById("command-palette-modal");
    this.input = document.getElementById("command-palette-input");
    this.listContainer = document.getElementById("command-palette-list");
    this.closeBtn = document.getElementById("command-palette-close");
    this.triggerBtn = document.getElementById("nav-cmd-trigger");
    
    this.getLang = options.getLang || (() => "id");
    this.onSelectTheme = options.onSelectTheme || (() => {});
    this.onSelectBgMode = options.onSelectBgMode || (() => {});
    this.onSelectLang = options.onSelectLang || (() => {});
    this.onDownloadCv = options.onDownloadCv || (() => {});
    this.onCopyEmail = options.onCopyEmail || (() => {});
    
    this.isOpen = false;
    this.selectedIndex = 0;
    this.filteredCommands = [];
    
    this.bindEvents();
  }

  bindEvents() {
    // Keyboard shortcut (Ctrl+K or Cmd+K)
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        this.toggle();
      } else if (e.key === "Escape" && this.isOpen) {
        this.close();
      }
    });

    if (this.triggerBtn) {
      this.triggerBtn.addEventListener("click", () => this.open());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.close());
    }

    if (this.modal) {
      this.modal.addEventListener("click", (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    if (this.input) {
      this.input.addEventListener("input", () => {
        this.selectedIndex = 0;
        this.renderList();
      });

      this.input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          this.moveSelection(1);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          this.moveSelection(-1);
        } else if (e.key === "Enter") {
          e.preventDefault();
          this.executeSelected();
        }
      });
    }
  }

  open() {
    if (!this.modal) return;
    this.isOpen = true;
    this.modal.classList.add("active");
    if (this.input) {
      this.input.value = "";
      this.input.focus();
    }
    this.selectedIndex = 0;
    this.renderList();
  }

  close() {
    if (!this.modal) return;
    this.isOpen = false;
    this.modal.classList.remove("active");
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  getCommands() {
    const lang = this.getLang();
    const isEn = lang === "en";

    return [
      // Navigation
      {
        id: "nav-home",
        category: isEn ? "Navigation" : "Navigasi",
        title: isEn ? "Go to Home / Overview" : "Pergi ke Beranda",
        icon: "🏠",
        action: () => {
          window.location.hash = "#home";
        }
      },
      {
        id: "nav-skills",
        category: isEn ? "Navigation" : "Navigasi",
        title: isEn ? "Go to Skills & Disciplines" : "Lihat Keahlian & Disiplin",
        icon: "⚡",
        action: () => {
          window.location.hash = "#skills";
        }
      },
      {
        id: "nav-portfolio",
        category: isEn ? "Navigation" : "Navigasi",
        title: isEn ? "Go to Selected Works & Archive" : "Jelajahi Arsip Karya",
        icon: "📁",
        action: () => {
          window.location.hash = "#portfolio";
        }
      },
      {
        id: "nav-contact",
        category: isEn ? "Navigation" : "Navigasi",
        title: isEn ? "Go to Contact / Correspondence" : "Buka Formulir Kontak",
        icon: "✉️",
        action: () => {
          window.location.hash = "#contact";
        }
      },

      // Color Themes
      {
        id: "theme-cyber-neon",
        category: isEn ? "Color Themes" : "Tema Warna",
        title: isEn ? "Theme: Cyber Neon (Default Orange)" : "Tema: Cyber Neon (Oranye)",
        icon: "🔥",
        action: () => this.onSelectTheme("cyber-neon")
      },
      {
        id: "theme-deep-obsidian",
        category: isEn ? "Color Themes" : "Tema Warna",
        title: isEn ? "Theme: Deep Obsidian (Cyan/Teal)" : "Tema: Deep Obsidian (Sian)",
        icon: "💎",
        action: () => this.onSelectTheme("deep-obsidian")
      },
      {
        id: "theme-solar-amber",
        category: isEn ? "Color Themes" : "Tema Warna",
        title: isEn ? "Theme: Solar Amber (Gold/Yellow)" : "Tema: Solar Amber (Emas)",
        icon: "☀️",
        action: () => this.onSelectTheme("solar-amber")
      },
      {
        id: "theme-matrix-emerald",
        category: isEn ? "Color Themes" : "Tema Warna",
        title: isEn ? "Theme: Matrix Emerald (Green)" : "Tema: Matrix Emerald (Hijau)",
        icon: "🟢",
        action: () => this.onSelectTheme("matrix-emerald")
      },
      {
        id: "theme-aurora-flow",
        category: isEn ? "Color Themes" : "Tema Warna",
        title: isEn ? "Theme: Aurora Flow (Purple)" : "Tema: Aurora Flow (Ungu)",
        icon: "🔮",
        action: () => this.onSelectTheme("aurora-flow")
      },
      {
        id: "theme-light",
        category: isEn ? "Color Themes" : "Tema Warna",
        title: isEn ? "Theme: Swiss Editorial Light" : "Tema: Swiss Editorial Light (Terang)",
        icon: "⚪",
        action: () => this.onSelectTheme("light")
      },

      // Generative Background Modes
      {
        id: "bg-quantum",
        category: isEn ? "Background Physics" : "Latar Belakang Fisika",
        title: "Quantum Constellation (Interactive Nodes)",
        icon: "⚛️",
        action: () => this.onSelectBgMode("quantum")
      },
      {
        id: "bg-hyperspace",
        category: isEn ? "Background Physics" : "Latar Belakang Fisika",
        title: "Hyperspace Warp (3D Velocity Stars)",
        icon: "🚀",
        action: () => this.onSelectBgMode("hyperspace")
      },
      {
        id: "bg-swarm",
        category: isEn ? "Background Physics" : "Latar Belakang Fisika",
        title: "Gravitational Swarm (Magnetic Cursor Orbit)",
        icon: "🪐",
        action: () => this.onSelectBgMode("swarm")
      },
      {
        id: "bg-matrix",
        category: isEn ? "Background Physics" : "Latar Belakang Fisika",
        title: "Cyber Matrix (Vertical Glyph Rain)",
        icon: "💻",
        action: () => this.onSelectBgMode("matrix")
      },
      {
        id: "bg-sine",
        category: isEn ? "Background Physics" : "Latar Belakang Fisika",
        title: "Harmonic Sine Waves (Fluid Interferometry)",
        icon: "🌊",
        action: () => this.onSelectBgMode("sine")
      },
      {
        id: "bg-off",
        category: isEn ? "Background Physics" : "Latar Belakang Fisika",
        title: isEn ? "Static Clean Grid (Physics Off)" : "Grid Statis (Fisika Mati)",
        icon: "⏹️",
        action: () => this.onSelectBgMode("off")
      },

      // Language Switcher
      {
        id: "lang-id",
        category: isEn ? "Language" : "Bahasa",
        title: "Bahasa Indonesia (ID)",
        icon: "🇮🇩",
        action: () => this.onSelectLang("id")
      },
      {
        id: "lang-en",
        category: isEn ? "Language" : "Bahasa",
        title: "English (EN)",
        icon: "🇬🇧",
        action: () => this.onSelectLang("en")
      },

      // Utility Actions
      {
        id: "act-cv",
        category: isEn ? "Actions" : "Aksi",
        title: isEn ? "Download Compiled CV / Resume (HTML)" : "Unduh Berkas CV / Resume (HTML)",
        icon: "📄",
        action: () => this.onDownloadCv()
      },
      {
        id: "act-email",
        category: isEn ? "Actions" : "Aksi",
        title: isEn ? "Copy Direct Email (mnaufalq1@gmail.com)" : "Salin Alamat Email (mnaufalq1@gmail.com)",
        icon: "📋",
        action: () => this.onCopyEmail()
      }
    ];
  }

  renderList() {
    if (!this.listContainer) return;
    const query = (this.input ? this.input.value : "").trim().toLowerCase();
    const allCommands = this.getCommands();
    
    this.filteredCommands = allCommands.filter(cmd => {
      if (!query) return true;
      return (
        cmd.title.toLowerCase().includes(query) ||
        cmd.category.toLowerCase().includes(query)
      );
    });

    this.listContainer.innerHTML = "";

    if (this.filteredCommands.length === 0) {
      const t = I18N_DATA[this.getLang()] || I18N_DATA.id;
      this.listContainer.innerHTML = `<div class="cmd-empty">${t.cmdNoResults || "Tidak ada hasil."}</div>`;
      return;
    }

    let currentCategory = "";
    this.filteredCommands.forEach((cmd, idx) => {
      if (cmd.category !== currentCategory) {
        currentCategory = cmd.category;
        const catHeader = document.createElement("div");
        catHeader.className = "cmd-group-title mono";
        catHeader.textContent = currentCategory.toUpperCase();
        this.listContainer.appendChild(catHeader);
      }

      const itemEl = document.createElement("div");
      itemEl.className = `cmd-item ${idx === this.selectedIndex ? "active" : ""}`;
      itemEl.innerHTML = `
        <div class="cmd-item-left">
          <span class="cmd-item-icon">${cmd.icon}</span>
          <span class="cmd-item-title">${cmd.title}</span>
        </div>
      `;

      itemEl.addEventListener("click", () => {
        this.selectedIndex = idx;
        this.executeSelected();
      });

      this.listContainer.appendChild(itemEl);
    });

    this.scrollSelectedIntoView();
  }

  moveSelection(delta) {
    if (this.filteredCommands.length === 0) return;
    this.selectedIndex = (this.selectedIndex + delta + this.filteredCommands.length) % this.filteredCommands.length;
    this.updateActiveItem();
  }

  updateActiveItem() {
    const items = this.listContainer.querySelectorAll(".cmd-item");
    items.forEach((item, idx) => {
      item.classList.toggle("active", idx === this.selectedIndex);
    });
    this.scrollSelectedIntoView();
  }

  scrollSelectedIntoView() {
    const activeEl = this.listContainer.querySelector(".cmd-item.active");
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }

  executeSelected() {
    if (this.filteredCommands.length > 0 && this.filteredCommands[this.selectedIndex]) {
      const selected = this.filteredCommands[this.selectedIndex];
      this.close();
      if (selected.action) {
        setTimeout(() => selected.action(), 50);
      }
    }
  }
}
