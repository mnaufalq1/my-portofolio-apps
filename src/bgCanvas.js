/**
 * ==========================================================================
 * Multi-Mode Generative Physics Background Canvas Engine
 * ==========================================================================
 * Modes:
 * 1. quantum: Dynamic particle network with elastic repulsion & cosmic links
 * 2. hyperspace: 3D starfield warp drive responsive to mouse trajectory
 * 3. swarm: Multi-orbital gravitational particles orbiting mouse cursor
 * 4. matrix: Digital rain streaming matrix glyphs & binary pulses
 * 5. sine: Mathematical multi-harmonic wave ribbon interference
 * 6. off: Clean static grid (disables canvas loop for zero CPU consumption)
 */

export class GenerativeBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    
    this.mode = localStorage.getItem("portfolio-bg-mode") || "quantum";
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.animationFrameId = null;
    
    // Mouse state
    this.mouse = {
      x: this.width / 2,
      y: this.height / 2,
      targetX: this.width / 2,
      targetY: this.height / 2,
      vx: 0,
      vy: 0,
      isHovered: true,
      lastX: this.width / 2,
      lastY: this.height / 2
    };

    // Ripples for click interactions
    this.ripples = [];
    
    // Colors derived from theme
    this.themeColors = {
      accent: "#FF4D00",
      accentRgb: [255, 77, 0],
      text: "#1A1B1E",
      bg: "#F4F4F0",
      isDark: false
    };

    this.initCanvas();
    this.updateThemeColors();
    this.initMode(this.mode);
    this.bindEvents();
    this.startLoop();
  }

  initCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(dpr, dpr);
  }

  updateThemeColors() {
    const rootStyle = getComputedStyle(document.documentElement);
    const accent = rootStyle.getPropertyValue("--accent").trim() || "#FF4D00";
    const accentRgbStr = rootStyle.getPropertyValue("--accent-rgb").trim() || "255, 77, 0";
    const text = rootStyle.getPropertyValue("--text").trim() || "#1A1B1E";
    const bg = rootStyle.getPropertyValue("--bg").trim() || "#F4F4F0";
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    
    const rgbParts = accentRgbStr.split(",").map(n => parseInt(n.trim(), 10));
    
    this.themeColors = {
      accent,
      accentRgb: rgbParts.length === 3 ? rgbParts : [255, 77, 0],
      text,
      bg,
      isDark: theme !== "light"
    };
  }

  bindEvents() {
    window.addEventListener("resize", () => {
      this.initCanvas();
      this.initMode(this.mode);
    });

    window.addEventListener("mousemove", (e) => {
      this.mouse.vx = e.clientX - this.mouse.x;
      this.mouse.vy = e.clientY - this.mouse.y;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.isHovered = true;
    });

    window.addEventListener("mouseleave", () => {
      this.mouse.isHovered = false;
      this.mouse.x = this.width / 2;
      this.mouse.y = this.height / 2;
    });

    window.addEventListener("click", (e) => {
      this.ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 180,
        opacity: 0.8
      });
    });
  }

  setMode(mode) {
    this.mode = mode;
    localStorage.setItem("portfolio-bg-mode", mode);
    this.initMode(mode);
  }

  getMode() {
    return this.mode;
  }

  initMode(mode) {
    this.particles = [];
    const countMultiplier = Math.min(this.width, this.height) / 1000;
    
    switch (mode) {
      case "quantum": {
        const particleCount = Math.floor(65 * Math.max(0.6, countMultiplier));
        for (let i = 0; i < particleCount; i++) {
          this.particles.push({
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            radius: Math.random() * 2.2 + 1.2,
            baseRadius: Math.random() * 2.2 + 1.2,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.02 + 0.005
          });
        }
        break;
      }
      case "hyperspace": {
        const starCount = Math.floor(180 * Math.max(0.6, countMultiplier));
        for (let i = 0; i < starCount; i++) {
          this.particles.push({
            x: (Math.random() - 0.5) * this.width * 2,
            y: (Math.random() - 0.5) * this.height * 2,
            z: Math.random() * this.width,
            pz: Math.random() * this.width,
            size: Math.random() * 1.5 + 0.5
          });
        }
        break;
      }
      case "swarm": {
        const swarmCount = Math.floor(80 * Math.max(0.6, countMultiplier));
        for (let i = 0; i < swarmCount; i++) {
          this.particles.push({
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            vx: 0,
            vy: 0,
            orbitDistance: Math.random() * 240 + 40,
            orbitAngle: Math.random() * Math.PI * 2,
            orbitSpeed: (Math.random() * 0.03 + 0.008) * (Math.random() > 0.5 ? 1 : -1),
            size: Math.random() * 2.5 + 1
          });
        }
        break;
      }
      case "matrix": {
        const columns = Math.floor(this.width / 26);
        this.particles = [];
        const chars = "0101アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン∑∏∆∇∂∫≈≠≤≥≡√∛0123456789";
        for (let i = 0; i < columns; i++) {
          this.particles.push({
            x: i * 26,
            y: Math.random() * -this.height,
            speed: Math.random() * 2.5 + 1.2,
            chars: chars,
            fontSize: Math.floor(Math.random() * 4 + 11),
            history: []
          });
        }
        break;
      }
      case "sine": {
        this.sineTime = 0;
        break;
      }
      case "off":
      default:
        break;
    }
  }

  startLoop() {
    const render = () => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      
      if (this.mode !== "off") {
        this.renderRipples();
        
        switch (this.mode) {
          case "quantum":
            this.renderQuantum();
            break;
          case "hyperspace":
            this.renderHyperspace();
            break;
          case "swarm":
            this.renderSwarm();
            break;
          case "matrix":
            this.renderMatrix();
            break;
          case "sine":
            this.renderSine();
            break;
        }
      }

      this.animationFrameId = requestAnimationFrame(render);
    };

    render();
  }

  renderRipples() {
    const [r, g, b] = this.themeColors.accentRgb;
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const rip = this.ripples[i];
      rip.radius += 3.5;
      rip.opacity -= 0.015;

      if (rip.opacity <= 0 || rip.radius >= rip.maxRadius) {
        this.ripples.splice(i, 1);
        continue;
      }

      this.ctx.beginPath();
      this.ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${rip.opacity * 0.4})`;
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();
    }
  }

  renderQuantum() {
    const [r, g, b] = this.themeColors.accentRgb;
    const isDark = this.themeColors.isDark;
    const nodeAlpha = isDark ? 0.35 : 0.25;
    const lineAlphaBase = isDark ? 0.18 : 0.12;
    const linkDistance = 140;

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      // Gentle bounds bounce
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse interactive deflection / pull
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const mouseRadius = 160;

      if (dist < mouseRadius) {
        const force = (1 - dist / mouseRadius) * 2;
        p.x -= (dx / dist) * force;
        p.y -= (dy / dist) * force;
      }

      // Draw particle dot
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${nodeAlpha})`;
      this.ctx.fill();

      // Connect with nearby particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);

        if (dist2 < linkDistance) {
          const alpha = (1 - dist2 / linkDistance) * lineAlphaBase;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }

      // Connect to mouse if near
      if (dist < mouseRadius) {
        const alpha = (1 - dist / mouseRadius) * (lineAlphaBase * 1.8);
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        this.ctx.lineWidth = 1.2;
        this.ctx.stroke();
      }
    }
  }

  renderHyperspace() {
    const [r, g, b] = this.themeColors.accentRgb;
    const cx = this.width / 2;
    const cy = this.height / 2;
    
    // Warp speed calculation influenced by mouse distance from center
    const mdx = (this.mouse.x - cx) * 0.0008;
    const mdy = (this.mouse.y - cy) * 0.0008;
    const speed = 12;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.pz = p.z;
      p.z -= speed;

      if (p.z <= 0) {
        p.z = this.width;
        p.pz = this.width;
        p.x = (Math.random() - 0.5) * this.width * 2;
        p.y = (Math.random() - 0.5) * this.height * 2;
      }

      // Perspective projection
      const k = 250 / p.z;
      const px = p.x * k + cx + mdx * (this.width - p.z);
      const py = p.y * k + cy + mdy * (this.height - p.z);

      const pk = 250 / p.pz;
      const prevX = p.x * pk + cx + mdx * (this.width - p.pz);
      const prevY = p.y * pk + cy + mdy * (this.height - p.pz);

      const alpha = Math.min(1, (1 - p.z / this.width) * 0.6);

      this.ctx.beginPath();
      this.ctx.moveTo(prevX, prevY);
      this.ctx.lineTo(px, py);
      this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      this.ctx.lineWidth = Math.max(0.5, (1 - p.z / this.width) * 2.5);
      this.ctx.stroke();
    }
  }

  renderSwarm() {
    const [r, g, b] = this.themeColors.accentRgb;
    const targetX = this.mouse.x;
    const targetY = this.mouse.y;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.orbitAngle += p.orbitSpeed;

      const destX = targetX + Math.cos(p.orbitAngle) * p.orbitDistance;
      const destY = targetY + Math.sin(p.orbitAngle) * (p.orbitDistance * 0.65);

      // Spring physics towards destination
      p.vx += (destX - p.x) * 0.035;
      p.vy += (destY - p.y) * 0.035;
      p.vx *= 0.92;
      p.vy *= 0.92;

      p.x += p.vx;
      p.y += p.vy;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.38)`;
      this.ctx.fill();

      // Trace line towards center if close
      const distToCenter = Math.hypot(p.x - targetX, p.y - targetY);
      if (distToCenter < 120) {
        const lineAlpha = (1 - distToCenter / 120) * 0.12;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(targetX, targetY);
        this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
        this.ctx.lineWidth = 0.8;
        this.ctx.stroke();
      }
    }
  }

  renderMatrix() {
    const [r, g, b] = this.themeColors.accentRgb;
    this.ctx.font = "12px monospace";

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y += p.speed;

      if (p.y > this.height) {
        p.y = Math.random() * -100;
        p.speed = Math.random() * 2.5 + 1.2;
      }

      // Random character
      const charIndex = Math.floor(Math.random() * p.chars.length);
      const char = p.chars[charIndex];

      const mouseDist = Math.hypot(this.mouse.x - p.x, this.mouse.y - p.y);
      const isNearby = mouseDist < 120;

      const alpha = isNearby ? 0.75 : 0.22;
      this.ctx.fillStyle = isNearby ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${alpha})`;
      this.ctx.fillText(char, p.x, p.y);
    }
  }

  renderSine() {
    const [r, g, b] = this.themeColors.accentRgb;
    if (!this.sineTime) this.sineTime = 0;
    this.sineTime += 0.015;

    const wavesCount = 5;
    const step = 8;

    for (let w = 0; w < wavesCount; w++) {
      this.ctx.beginPath();
      const waveAlpha = 0.08 + w * 0.04;
      this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${waveAlpha})`;
      this.ctx.lineWidth = 1.2 + w * 0.3;

      const frequency = 0.0025 + w * 0.001;
      const amplitude = 40 + w * 18 + (this.mouse.y / this.height) * 30;
      const phase = this.sineTime * (1 + w * 0.4);
      const baseY = this.height * 0.5 + (w - 2) * 55;

      for (let x = 0; x <= this.width + step; x += step) {
        const mouseInfluence = Math.exp(-Math.pow((x - this.mouse.x) / 220, 2)) * 35;
        const y = baseY + Math.sin(x * frequency + phase) * amplitude + mouseInfluence;
        if (x === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.stroke();
    }
  }
}
