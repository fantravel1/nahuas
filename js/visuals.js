/* ============================================================
   NAHUAS.COM - Visual Enhancement JavaScript
   SVG Generation, Animations, Counters, Parallax
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ──────────── SVG Illustration Library ────────────
  const SVGLib = {
    // Mesoamerican-inspired color palettes
    palettes: {
      jade: ['#1b4332', '#2d6a4f', '#40916c', '#52b69a', '#74c69d'],
      gold: ['#b8860b', '#d4a843', '#e9c46a', '#f4e8c1', '#faf3e0'],
      obsidian: ['#0a0a0a', '#1a1a2e', '#16213e', '#1e3a5f', '#2a4a7f'],
      terracotta: ['#7f2b0e', '#c1440e', '#e76f51', '#f4a261', '#f4c5a0'],
      turquoise: ['#0b4d4a', '#2a9d8f', '#52b69a', '#76c893', '#b7e4c7'],
      earth: ['#3e2723', '#5d4037', '#795548', '#a1887f', '#d7ccc8']
    },

    // Generate Templo Mayor SVG
    temploMayor(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 800 600');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of the Templo Mayor of Tenochtitlan');
      svg.innerHTML = `
        <defs>
          <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1a1a2e"/>
            <stop offset="40%" stop-color="#16213e"/>
            <stop offset="70%" stop-color="#e76f51" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#f4a261" stop-opacity="0.5"/>
          </linearGradient>
          <linearGradient id="stone-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#a1887f"/>
            <stop offset="100%" stop-color="#795548"/>
          </linearGradient>
          <linearGradient id="temple-blue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2a9d8f"/>
            <stop offset="100%" stop-color="#0b4d4a"/>
          </linearGradient>
          <linearGradient id="temple-red" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#c1440e"/>
            <stop offset="100%" stop-color="#7f2b0e"/>
          </linearGradient>
        </defs>
        <!-- Sky -->
        <rect width="800" height="600" fill="url(#sky-grad)"/>
        <!-- Stars -->
        <circle cx="100" cy="50" r="1.5" fill="#fff" opacity="0.6"/>
        <circle cx="200" cy="80" r="1" fill="#fff" opacity="0.5"/>
        <circle cx="350" cy="30" r="1.5" fill="#fff" opacity="0.7"/>
        <circle cx="500" cy="60" r="1" fill="#fff" opacity="0.4"/>
        <circle cx="650" cy="40" r="1.5" fill="#fff" opacity="0.6"/>
        <circle cx="720" cy="90" r="1" fill="#fff" opacity="0.5"/>
        <circle cx="150" cy="120" r="1" fill="#fff" opacity="0.3"/>
        <circle cx="450" cy="100" r="1.5" fill="#fff" opacity="0.5"/>
        <!-- Mountains background -->
        <polygon points="0,400 100,280 200,320 300,260 400,300 500,250 600,290 700,270 800,310 800,600 0,600" fill="#1b4332" opacity="0.3"/>
        <!-- Temple Platform Base -->
        <rect x="150" y="450" width="500" height="50" rx="2" fill="url(#stone-grad)"/>
        <rect x="180" y="420" width="440" height="30" rx="2" fill="#8d6e63"/>
        <!-- Second tier -->
        <rect x="210" y="380" width="380" height="40" rx="2" fill="url(#stone-grad)"/>
        <rect x="230" y="355" width="340" height="25" rx="2" fill="#8d6e63"/>
        <!-- Third tier -->
        <rect x="260" y="320" width="280" height="35" rx="2" fill="url(#stone-grad)"/>
        <rect x="275" y="300" width="250" height="20" rx="2" fill="#8d6e63"/>
        <!-- Twin temples -->
        <!-- Tlaloc temple (left, blue) -->
        <rect x="290" y="220" width="100" height="80" rx="2" fill="url(#temple-blue)"/>
        <polygon points="290,220 340,180 390,220" fill="#2a9d8f"/>
        <rect x="325" y="250" width="30" height="50" fill="#0b4d4a"/>
        <!-- Huitzilopochtli temple (right, red) -->
        <rect x="410" y="220" width="100" height="80" rx="2" fill="url(#temple-red)"/>
        <polygon points="410,220 460,180 510,220" fill="#c1440e"/>
        <rect x="445" y="250" width="30" height="50" fill="#7f2b0e"/>
        <!-- Central stairway -->
        <rect x="370" y="300" width="60" height="200" fill="#795548" opacity="0.6"/>
        <!-- Stair lines -->
        ${Array.from({length: 15}, (_, i) =>
          `<line x1="370" y1="${305 + i*13}" x2="430" y2="${305 + i*13}" stroke="#6d4c41" stroke-width="1" opacity="0.5"/>`
        ).join('')}
        <!-- Side stairs -->
        <line x1="290" y1="300" x2="290" y2="450" stroke="#6d4c41" stroke-width="2" opacity="0.3"/>
        <line x1="510" y1="300" x2="510" y2="450" stroke="#6d4c41" stroke-width="2" opacity="0.3"/>
        <!-- Decorative elements on temples -->
        <circle cx="340" cy="205" r="8" fill="#e9c46a" opacity="0.8"/>
        <circle cx="460" cy="205" r="8" fill="#e9c46a" opacity="0.8"/>
        <!-- Smoke/incense from temples -->
        <ellipse cx="340" cy="170" rx="15" ry="8" fill="#fff" opacity="0.1"/>
        <ellipse cx="340" cy="155" rx="10" ry="6" fill="#fff" opacity="0.08"/>
        <ellipse cx="460" cy="170" rx="15" ry="8" fill="#fff" opacity="0.1"/>
        <ellipse cx="460" cy="155" rx="10" ry="6" fill="#fff" opacity="0.08"/>
        <!-- Ground/platform decoration -->
        <rect x="150" y="500" width="500" height="100" fill="#5d4037"/>
        <!-- Water at base -->
        <rect x="0" y="520" width="800" height="80" fill="#0b4d4a" opacity="0.4"/>
        <path d="M0 540 Q50 530 100 540 Q150 550 200 540 Q250 530 300 540 Q350 550 400 540 Q450 530 500 540 Q550 550 600 540 Q650 530 700 540 Q750 550 800 540 V600 H0 Z" fill="#2a9d8f" opacity="0.2"/>
        <!-- Foreground vegetation -->
        <ellipse cx="60" cy="510" rx="40" ry="20" fill="#2d6a4f" opacity="0.4"/>
        <ellipse cx="740" cy="510" rx="40" ry="20" fill="#2d6a4f" opacity="0.4"/>
      `;
      container.appendChild(svg);
    },

    // Generate Quetzalcoatl Serpent
    quetzalcoatl(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 600 400');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of Quetzalcoatl, the Feathered Serpent');
      svg.innerHTML = `
        <defs>
          <linearGradient id="feather-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#2a9d8f"/>
            <stop offset="50%" stop-color="#52b69a"/>
            <stop offset="100%" stop-color="#40916c"/>
          </linearGradient>
          <linearGradient id="serpent-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2d6a4f"/>
            <stop offset="100%" stop-color="#1b4332"/>
          </linearGradient>
          <radialGradient id="sun-glow" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#e9c46a" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#e9c46a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <!-- Background -->
        <rect width="600" height="400" fill="#1a1a2e"/>
        <circle cx="300" cy="200" r="180" fill="url(#sun-glow)"/>
        <!-- Central sun disc -->
        <circle cx="300" cy="200" r="60" fill="none" stroke="#d4a843" stroke-width="3" opacity="0.4"/>
        <circle cx="300" cy="200" r="45" fill="none" stroke="#d4a843" stroke-width="2" opacity="0.3"/>
        <circle cx="300" cy="200" r="30" fill="#d4a843" opacity="0.15"/>
        <!-- Sun rays -->
        ${Array.from({length: 16}, (_, i) => {
          const angle = (i * 22.5) * Math.PI / 180;
          const x1 = 300 + Math.cos(angle) * 65;
          const y1 = 200 + Math.sin(angle) * 65;
          const x2 = 300 + Math.cos(angle) * 90;
          const y2 = 200 + Math.sin(angle) * 90;
          return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#d4a843" stroke-width="1.5" opacity="0.3"/>`;
        }).join('')}
        <!-- Serpent body - sinuous curve -->
        <path d="M100,300 C130,260 160,220 200,200 C240,180 270,210 300,200 C330,190 360,160 400,180 C440,200 460,240 500,260"
              stroke="url(#serpent-body)" stroke-width="28" fill="none" stroke-linecap="round"/>
        <!-- Scales pattern -->
        ${Array.from({length: 20}, (_, i) => {
          const t = i / 19;
          const x = 100 + t * 400;
          const y = 300 - Math.sin(t * Math.PI * 2) * 60 - t * 40;
          return `<circle cx="${x}" cy="${y}" r="4" fill="#40916c" opacity="0.4"/>`;
        }).join('')}
        <!-- Feathers along body -->
        ${Array.from({length: 12}, (_, i) => {
          const t = (i + 2) / 15;
          const x = 100 + t * 400;
          const y = 300 - Math.sin(t * Math.PI * 2) * 60 - t * 40 - 18;
          const angle = -30 + Math.sin(t * Math.PI * 3) * 20;
          return `<ellipse cx="${x}" cy="${y}" rx="4" ry="16" fill="url(#feather-grad)" opacity="0.7" transform="rotate(${angle},${x},${y})"/>`;
        }).join('')}
        <!-- Head -->
        <circle cx="120" cy="290" r="25" fill="#2d6a4f"/>
        <circle cx="120" cy="290" r="22" fill="#40916c"/>
        <!-- Eye -->
        <circle cx="112" cy="283" r="8" fill="#faf3e0"/>
        <circle cx="112" cy="283" r="4" fill="#1a1a2e"/>
        <circle cx="110" cy="281" r="1.5" fill="#fff"/>
        <!-- Jaw/mouth -->
        <path d="M95,300 L85,305 L95,295" fill="#c1440e"/>
        <!-- Head crest feathers -->
        <ellipse cx="135" cy="268" rx="5" ry="22" fill="#2a9d8f" transform="rotate(-20,135,268)"/>
        <ellipse cx="145" cy="265" rx="4" ry="25" fill="#52b69a" transform="rotate(-10,145,265)"/>
        <ellipse cx="153" cy="264" rx="4" ry="28" fill="#40916c" transform="rotate(0,153,264)"/>
        <ellipse cx="160" cy="266" rx="4" ry="24" fill="#2a9d8f" transform="rotate(10,160,266)"/>
        <!-- Tail feathers -->
        <ellipse cx="510" cy="245" rx="5" ry="30" fill="#2a9d8f" transform="rotate(30,510,245)" opacity="0.8"/>
        <ellipse cx="520" cy="240" rx="4" ry="35" fill="#52b69a" transform="rotate(40,520,240)" opacity="0.7"/>
        <ellipse cx="528" cy="238" rx="4" ry="40" fill="#40916c" transform="rotate(50,528,238)" opacity="0.6"/>
        <ellipse cx="534" cy="240" rx="3" ry="35" fill="#74c69d" transform="rotate(60,534,240)" opacity="0.5"/>
        <!-- Small decorative elements -->
        <circle cx="180" cy="350" r="3" fill="#d4a843" opacity="0.3"/>
        <circle cx="350" cy="340" r="2" fill="#d4a843" opacity="0.2"/>
        <circle cx="450" cy="330" r="2.5" fill="#d4a843" opacity="0.25"/>
      `;
      container.appendChild(svg);
    },

    // Generate Sun Stone
    sunStone(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 500 500');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of the Aztec Sun Stone calendar');
      const cx = 250, cy = 250;
      let rays = '';
      for (let i = 0; i < 20; i++) {
        const angle = (i * 18) * Math.PI / 180;
        const x1 = cx + Math.cos(angle) * 200;
        const y1 = cy + Math.sin(angle) * 200;
        const x2 = cx + Math.cos(angle) * 230;
        const y2 = cy + Math.sin(angle) * 230;
        rays += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#d4a843" stroke-width="3" opacity="0.4"/>`;
      }
      let daySignPositions = '';
      const dayGlyphs = ['🐊','🌪','🏠','🦎','🐍','💀','🦌','🐇','💧','🐕','🐒','🌾','🎋','🐆','🦅','🦃','💫','🗡','🌧','🌻'];
      for (let i = 0; i < 20; i++) {
        const angle = ((i * 18) - 90) * Math.PI / 180;
        const x = cx + Math.cos(angle) * 170;
        const y = cy + Math.sin(angle) * 170;
        daySignPositions += `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="14">${dayGlyphs[i]}</text>`;
      }

      svg.innerHTML = `
        <defs>
          <radialGradient id="stone-radial" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#a1887f"/>
            <stop offset="60%" stop-color="#8d6e63"/>
            <stop offset="100%" stop-color="#6d4c41"/>
          </radialGradient>
          <radialGradient id="center-glow" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#e9c46a" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#d4a843" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <!-- Background -->
        <rect width="500" height="500" fill="#1a1a2e"/>
        <!-- Outer glow -->
        <circle cx="250" cy="250" r="240" fill="url(#center-glow)"/>
        <!-- Main stone disc -->
        <circle cx="250" cy="250" r="220" fill="url(#stone-radial)" stroke="#d4a843" stroke-width="3"/>
        <!-- Outer ring with rays -->
        ${rays}
        <!-- Ring decorations -->
        <circle cx="250" cy="250" r="200" fill="none" stroke="#d4a843" stroke-width="2" opacity="0.5"/>
        <circle cx="250" cy="250" r="195" fill="none" stroke="#5d4037" stroke-width="1"/>
        <!-- Day signs ring -->
        <circle cx="250" cy="250" r="170" fill="none" stroke="#d4a843" stroke-width="1.5" opacity="0.3" stroke-dasharray="8,4"/>
        ${daySignPositions}
        <!-- Inner decorative ring -->
        <circle cx="250" cy="250" r="145" fill="none" stroke="#d4a843" stroke-width="2" opacity="0.5"/>
        <!-- Four previous suns -->
        <!-- Nahui Ocelotl (top-left) -->
        <rect x="195" y="195" width="45" height="45" rx="6" fill="#795548" stroke="#d4a843" stroke-width="1.5" opacity="0.8"/>
        <text x="217" y="222" text-anchor="middle" dominant-baseline="central" font-size="20">🐆</text>
        <!-- Nahui Ehecatl (top-right) -->
        <rect x="260" y="195" width="45" height="45" rx="6" fill="#795548" stroke="#d4a843" stroke-width="1.5" opacity="0.8"/>
        <text x="282" y="222" text-anchor="middle" dominant-baseline="central" font-size="20">🌪</text>
        <!-- Nahui Quiahuitl (bottom-left) -->
        <rect x="195" y="260" width="45" height="45" rx="6" fill="#795548" stroke="#d4a843" stroke-width="1.5" opacity="0.8"/>
        <text x="217" y="287" text-anchor="middle" dominant-baseline="central" font-size="20">🌧</text>
        <!-- Nahui Atl (bottom-right) -->
        <rect x="260" y="260" width="45" height="45" rx="6" fill="#795548" stroke="#d4a843" stroke-width="1.5" opacity="0.8"/>
        <text x="282" y="287" text-anchor="middle" dominant-baseline="central" font-size="20">💧</text>
        <!-- Central face - Tonatiuh / Nahui Ollin -->
        <circle cx="250" cy="250" r="35" fill="#8d6e63" stroke="#d4a843" stroke-width="2"/>
        <circle cx="250" cy="250" r="28" fill="#a1887f"/>
        <!-- Face features -->
        <circle cx="240" cy="244" r="5" fill="#5d4037"/>
        <circle cx="260" cy="244" r="5" fill="#5d4037"/>
        <circle cx="240" cy="244" r="2" fill="#1a1a2e"/>
        <circle cx="260" cy="244" r="2" fill="#1a1a2e"/>
        <path d="M242,260 Q250,268 258,260" fill="none" stroke="#5d4037" stroke-width="2.5"/>
        <!-- Tongue/knife -->
        <rect x="247" y="265" width="6" height="12" rx="2" fill="#c1440e"/>
        <!-- Cardinal direction markers -->
        <polygon points="250,35 244,52 256,52" fill="#d4a843" opacity="0.6"/>
        <polygon points="250,465 244,448 256,448" fill="#d4a843" opacity="0.6"/>
        <polygon points="35,250 52,244 52,256" fill="#d4a843" opacity="0.6"/>
        <polygon points="465,250 448,244 448,256" fill="#d4a843" opacity="0.6"/>
      `;
      container.appendChild(svg);
    },

    // Generate Chinampa Scene
    chinampa(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 800 400');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of chinampa floating gardens of Xochimilco');
      svg.innerHTML = `
        <defs>
          <linearGradient id="water-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2a9d8f" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#0b4d4a"/>
          </linearGradient>
          <linearGradient id="earth-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#5d4037"/>
            <stop offset="100%" stop-color="#3e2723"/>
          </linearGradient>
        </defs>
        <!-- Sky -->
        <rect width="800" height="200" fill="#16213e"/>
        <circle cx="650" cy="60" r="30" fill="#e9c46a" opacity="0.3"/>
        <circle cx="650" cy="60" r="20" fill="#e9c46a" opacity="0.5"/>
        <!-- Mountains -->
        <polygon points="0,200 80,120 160,160 240,100 320,140 400,110 480,150 560,90 640,130 720,100 800,150 800,200" fill="#1b4332" opacity="0.4"/>
        <!-- Water -->
        <rect x="0" y="200" width="800" height="200" fill="url(#water-grad)"/>
        <!-- Water reflections -->
        <path d="M0 280 Q40 275 80 280 Q120 285 160 280 Q200 275 240 280 Q280 285 320 280 Q360 275 400 280 Q440 285 480 280 Q520 275 560 280 Q600 285 640 280 Q680 275 720 280 Q760 285 800 280" fill="none" stroke="#52b69a" stroke-width="1" opacity="0.3"/>
        <path d="M0 300 Q40 295 80 300 Q120 305 160 300 Q200 295 240 300 Q280 305 320 300 Q360 295 400 300 Q440 305 480 300" fill="none" stroke="#52b69a" stroke-width="1" opacity="0.2"/>
        <!-- Chinampa 1 (left) -->
        <rect x="50" y="220" width="200" height="40" rx="4" fill="url(#earth-grad)"/>
        <!-- Willow trees on chinampa -->
        <line x1="80" y1="220" x2="80" y2="170" stroke="#5d4037" stroke-width="3"/>
        <ellipse cx="80" cy="165" rx="30" ry="25" fill="#2d6a4f" opacity="0.7"/>
        <ellipse cx="80" cy="160" rx="25" ry="20" fill="#40916c" opacity="0.6"/>
        <!-- Crops on chinampa 1 -->
        ${Array.from({length: 8}, (_, i) =>
          `<line x1="${120 + i*15}" y1="220" x2="${120 + i*15}" y2="${200 - Math.random()*15}" stroke="#40916c" stroke-width="2"/>
           <circle cx="${120 + i*15}" cy="${197 - Math.random()*15}" r="4" fill="#52b69a" opacity="0.7"/>`
        ).join('')}
        <!-- Chinampa 2 (center) -->
        <rect x="300" y="240" width="220" height="35" rx="4" fill="url(#earth-grad)"/>
        <line x1="330" y1="240" x2="330" y2="185" stroke="#5d4037" stroke-width="3"/>
        <ellipse cx="330" cy="180" rx="28" ry="22" fill="#2d6a4f" opacity="0.7"/>
        <ellipse cx="330" cy="175" rx="22" ry="18" fill="#40916c" opacity="0.6"/>
        <!-- Crops -->
        ${Array.from({length: 10}, (_, i) =>
          `<line x1="${370 + i*14}" y1="240" x2="${370 + i*14}" y2="${222 - Math.random()*12}" stroke="#40916c" stroke-width="1.5"/>
           <ellipse cx="${370 + i*14}" cy="${220 - Math.random()*12}" rx="5" ry="3" fill="#74c69d" opacity="0.6"/>`
        ).join('')}
        <!-- Chinampa 3 (right) -->
        <rect x="570" y="230" width="180" height="35" rx="4" fill="url(#earth-grad)"/>
        <line x1="600" y1="230" x2="600" y2="180" stroke="#5d4037" stroke-width="3"/>
        <ellipse cx="600" cy="175" rx="25" ry="20" fill="#2d6a4f" opacity="0.7"/>
        ${Array.from({length: 7}, (_, i) =>
          `<line x1="${635 + i*14}" y1="230" x2="${635 + i*14}" y2="${215 - Math.random()*10}" stroke="#40916c" stroke-width="1.5"/>
           <circle cx="${635 + i*14}" cy="${213 - Math.random()*10}" r="3" fill="#e9c46a" opacity="0.5"/>`
        ).join('')}
        <!-- Canoe -->
        <path d="M420,310 Q430,300 460,300 Q490,300 500,310 Q490,316 460,316 Q430,316 420,310Z" fill="#795548"/>
        <line x1="460" y1="298" x2="460" y2="275" stroke="#5d4037" stroke-width="2"/>
        <!-- Person in canoe -->
        <circle cx="450" cy="295" r="6" fill="#a1887f"/>
        <line x1="450" y1="301" x2="450" y2="310" stroke="#795548" stroke-width="2"/>
        <!-- Second canoe -->
        <path d="M150,330 Q158,322 180,322 Q202,322 210,330 Q202,335 180,335 Q158,335 150,330Z" fill="#795548" opacity="0.7"/>
      `;
      container.appendChild(svg);
    },

    // Generate Eagle Warrior
    eagleWarrior(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 400 500');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of a Mexica Eagle Warrior');
      svg.innerHTML = `
        <defs>
          <linearGradient id="armor-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e9c46a"/>
            <stop offset="100%" stop-color="#b8860b"/>
          </linearGradient>
          <radialGradient id="shield-grad" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#e9c46a"/>
            <stop offset="60%" stop-color="#d4a843"/>
            <stop offset="100%" stop-color="#b8860b"/>
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="#1a1a2e"/>
        <!-- Background glow -->
        <circle cx="200" cy="250" r="200" fill="#d4a843" opacity="0.03"/>
        <!-- Body -->
        <rect x="165" y="280" width="70" height="100" rx="8" fill="#e9c46a" opacity="0.9"/>
        <!-- Legs -->
        <rect x="175" y="380" width="22" height="60" rx="4" fill="#a1887f"/>
        <rect x="205" y="380" width="22" height="60" rx="4" fill="#a1887f"/>
        <!-- Feet -->
        <ellipse cx="186" cy="443" rx="16" ry="7" fill="#795548"/>
        <ellipse cx="216" cy="443" rx="16" ry="7" fill="#795548"/>
        <!-- Arms -->
        <rect x="135" y="290" width="30" height="70" rx="8" fill="#a1887f" transform="rotate(-10,150,325)"/>
        <rect x="235" y="290" width="30" height="70" rx="8" fill="#a1887f" transform="rotate(10,250,325)"/>
        <!-- Shield (left hand) -->
        <circle cx="130" cy="350" r="32" fill="url(#shield-grad)" stroke="#b8860b" stroke-width="2"/>
        <circle cx="130" cy="350" r="22" fill="none" stroke="#795548" stroke-width="1.5"/>
        <circle cx="130" cy="350" r="12" fill="none" stroke="#795548" stroke-width="1"/>
        <!-- Shield feathers -->
        <ellipse cx="100" cy="370" rx="4" ry="15" fill="#c1440e" transform="rotate(20,100,370)"/>
        <ellipse cx="105" cy="375" rx="4" ry="15" fill="#e9c46a" transform="rotate(15,105,375)"/>
        <ellipse cx="110" cy="378" rx="4" ry="15" fill="#2a9d8f" transform="rotate(10,110,378)"/>
        <!-- Macuahuitl (right hand) -->
        <rect x="258" y="280" width="8" height="90" rx="2" fill="#795548"/>
        <!-- Obsidian blades on macuahuitl -->
        ${Array.from({length: 6}, (_, i) =>
          `<rect x="266" y="${285 + i*13}" width="10" height="6" rx="1" fill="#1a1a2e"/>
           <rect x="248" y="${285 + i*13}" width="10" height="6" rx="1" fill="#1a1a2e"/>`
        ).join('')}
        <!-- Chest decoration -->
        <circle cx="200" cy="310" r="12" fill="#d4a843" opacity="0.6"/>
        <circle cx="200" cy="310" r="8" fill="#2a9d8f" opacity="0.8"/>
        <!-- Eagle headdress -->
        <ellipse cx="200" cy="260" rx="50" ry="35" fill="#e9c46a"/>
        <!-- Eagle beak -->
        <polygon points="200,240 210,220 220,235 200,250 180,235 190,220" fill="#d4a843"/>
        <polygon points="200,240 208,225 200,235 192,225" fill="#b8860b"/>
        <!-- Eagle eyes -->
        <circle cx="188" cy="252" r="6" fill="#fff"/>
        <circle cx="212" cy="252" r="6" fill="#fff"/>
        <circle cx="188" cy="252" r="3" fill="#1a1a2e"/>
        <circle cx="212" cy="252" r="3" fill="#1a1a2e"/>
        <!-- Eagle head feathers -->
        <ellipse cx="170" cy="235" rx="6" ry="20" fill="#e9c46a" transform="rotate(-20,170,235)"/>
        <ellipse cx="185" cy="228" rx="5" ry="22" fill="#d4a843" transform="rotate(-10,185,228)"/>
        <ellipse cx="200" cy="225" rx="5" ry="25" fill="#e9c46a"/>
        <ellipse cx="215" cy="228" rx="5" ry="22" fill="#d4a843" transform="rotate(10,215,228)"/>
        <ellipse cx="230" cy="235" rx="6" ry="20" fill="#e9c46a" transform="rotate(20,230,235)"/>
        <!-- Face visible below beak -->
        <circle cx="200" cy="270" r="16" fill="#a1887f"/>
        <!-- War paint -->
        <line x1="190" y1="268" x2="185" y2="275" stroke="#1a1a2e" stroke-width="2"/>
        <line x1="210" y1="268" x2="215" y2="275" stroke="#1a1a2e" stroke-width="2"/>
        <!-- Back feathers (cape) -->
        ${Array.from({length: 7}, (_, i) => {
          const x = 170 + i * 10;
          const angle = -15 + i * 5;
          return `<ellipse cx="${x}" cy="285" rx="4" ry="30" fill="${i % 2 ? '#c1440e' : '#2a9d8f'}" opacity="0.6" transform="rotate(${angle},${x},285)"/>`;
        }).join('')}
      `;
      container.appendChild(svg);
    },

    // Generate Codex Page illustration
    codexPage(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 600 400');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of a Nahua codex manuscript page');
      svg.innerHTML = `
        <defs>
          <linearGradient id="parchment" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f4e8c1"/>
            <stop offset="100%" stop-color="#e8d5a3"/>
          </linearGradient>
        </defs>
        <!-- Parchment background -->
        <rect x="20" y="20" width="560" height="360" rx="4" fill="url(#parchment)" stroke="#d4a843" stroke-width="2"/>
        <!-- Aging/texture effects -->
        <rect x="20" y="20" width="560" height="360" rx="4" fill="#8d6e63" opacity="0.03"/>
        <!-- Fold line -->
        <line x1="300" y1="20" x2="300" y2="380" stroke="#c4a882" stroke-width="1" opacity="0.5"/>
        <!-- Border decorations -->
        <rect x="35" y="35" width="530" height="330" rx="2" fill="none" stroke="#c1440e" stroke-width="1.5" opacity="0.4"/>
        <rect x="40" y="40" width="520" height="320" rx="2" fill="none" stroke="#d4a843" stroke-width="1" opacity="0.3"/>
        <!-- Glyphs and figures (left panel) -->
        <!-- Figure 1: Deity sitting -->
        <circle cx="120" cy="120" r="20" fill="#c1440e" opacity="0.6"/>
        <rect x="105" y="140" width="30" height="40" rx="4" fill="#2a9d8f" opacity="0.5"/>
        <rect x="100" y="180" width="18" height="25" rx="2" fill="#a1887f" opacity="0.4"/>
        <rect x="122" y="180" width="18" height="25" rx="2" fill="#a1887f" opacity="0.4"/>
        <!-- Speech scroll -->
        <path d="M140,110 Q160,100 170,110 Q180,120 175,130 Q165,125 160,130 Q155,120 150,115" fill="none" stroke="#2d6a4f" stroke-width="1.5" opacity="0.5"/>
        <!-- Day sign glyphs row -->
        ${['#c1440e','#2d6a4f','#d4a843','#2a9d8f','#795548'].map((color, i) =>
          `<rect x="${70 + i*35}" y="230" width="28" height="28" rx="4" fill="${color}" opacity="0.3" stroke="${color}" stroke-width="1" stroke-opacity="0.5"/>
           <circle cx="${84 + i*35}" cy="244" r="6" fill="${color}" opacity="0.5"/>`
        ).join('')}
        <!-- Right panel - larger scene -->
        <!-- Pyramid -->
        <polygon points="420,250 380,140 460,140" fill="#8d6e63" opacity="0.5" stroke="#795548" stroke-width="1"/>
        <line x1="395" y1="195" x2="445" y2="195" stroke="#6d4c41" stroke-width="0.5" opacity="0.4"/>
        <line x1="390" y1="215" x2="450" y2="215" stroke="#6d4c41" stroke-width="0.5" opacity="0.4"/>
        <!-- Temple on top -->
        <rect x="400" y="130" width="40" height="20" rx="2" fill="#c1440e" opacity="0.4"/>
        <!-- Figures near pyramid -->
        <circle cx="360" cy="240" r="10" fill="#a1887f" opacity="0.5"/>
        <rect x="354" y="250" width="12" height="20" rx="2" fill="#2a9d8f" opacity="0.4"/>
        <circle cx="480" cy="235" r="10" fill="#a1887f" opacity="0.5"/>
        <rect x="474" y="245" width="12" height="20" rx="2" fill="#d4a843" opacity="0.4"/>
        <!-- Footprints (migration path) -->
        ${Array.from({length: 5}, (_, i) =>
          `<ellipse cx="${340 + i*25}" cy="${290 + (i%2)*8}" rx="4" ry="6" fill="#795548" opacity="0.3" transform="rotate(${-30 + i*15},${340 + i*25},${290 + (i%2)*8})"/>`
        ).join('')}
        <!-- Nahuatl text lines (simulated) -->
        ${Array.from({length: 5}, (_, i) =>
          `<rect x="340" y="${310 + i*12}" width="${100 + Math.random()*80}" height="3" rx="1" fill="#5d4037" opacity="0.2"/>`
        ).join('')}
        <!-- Top border design -->
        ${Array.from({length: 14}, (_, i) =>
          `<rect x="${55 + i*38}" y="48" width="25" height="6" rx="2" fill="#d4a843" opacity="0.2"/>`
        ).join('')}
        <!-- Bottom border design -->
        ${Array.from({length: 14}, (_, i) =>
          `<circle cx="${68 + i*38}" cy="350" r="5" fill="none" stroke="#c1440e" stroke-width="1" opacity="0.25"/>`
        ).join('')}
      `;
      container.appendChild(svg);
    },

    // Generate Tenochtitlan City Map SVG
    tenochtitlanMap(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 600 600');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Map illustration of Tenochtitlan on Lake Texcoco');
      svg.innerHTML = `
        <defs>
          <radialGradient id="lake-grad" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#2a9d8f" stop-opacity="0.5"/>
            <stop offset="70%" stop-color="#0b4d4a" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#1a1a2e"/>
          </radialGradient>
        </defs>
        <!-- Lake -->
        <rect width="600" height="600" fill="#1a1a2e"/>
        <circle cx="300" cy="300" r="280" fill="url(#lake-grad)"/>
        <!-- Surrounding land -->
        <path d="M0,0 L600,0 L600,60 Q500,80 400,50 Q300,20 200,70 Q100,100 0,80 Z" fill="#3e2723" opacity="0.6"/>
        <path d="M0,600 L600,600 L600,530 Q500,510 400,550 Q300,580 200,530 Q100,500 0,540 Z" fill="#3e2723" opacity="0.6"/>
        <path d="M0,0 L0,600 L70,600 Q90,500 50,400 Q20,300 60,200 Q80,100 50,0 Z" fill="#3e2723" opacity="0.6"/>
        <path d="M600,0 L600,600 L530,600 Q510,500 550,400 Q580,300 540,200 Q520,100 550,0 Z" fill="#3e2723" opacity="0.6"/>
        <!-- Island of Tenochtitlan -->
        <ellipse cx="300" cy="300" rx="80" ry="70" fill="#5d4037" stroke="#8d6e63" stroke-width="2"/>
        <!-- Causeways -->
        <rect x="295" y="100" width="10" height="130" fill="#8d6e63" opacity="0.8"/> <!-- North -->
        <rect x="295" y="370" width="10" height="140" fill="#8d6e63" opacity="0.8"/> <!-- South -->
        <rect x="130" y="295" width="90" height="10" fill="#8d6e63" opacity="0.8"/> <!-- West -->
        <rect x="380" y="295" width="100" height="10" fill="#8d6e63" opacity="0.8"/> <!-- East -->
        <!-- Templo Mayor (center) -->
        <rect x="280" y="275" width="40" height="30" rx="2" fill="#c1440e" opacity="0.7"/>
        <rect x="285" y="280" width="14" height="20" rx="1" fill="#2a9d8f" opacity="0.8"/>
        <rect x="301" y="280" width="14" height="20" rx="1" fill="#c1440e" opacity="0.8"/>
        <!-- Market (Tlatelolco) -->
        <rect x="270" y="250" width="25" height="15" rx="2" fill="#d4a843" opacity="0.5"/>
        <!-- Palace -->
        <rect x="310" y="310" width="20" height="15" rx="2" fill="#e9c46a" opacity="0.5"/>
        <!-- Canals -->
        <line x1="260" y1="270" x2="260" y2="330" stroke="#2a9d8f" stroke-width="1.5" opacity="0.4"/>
        <line x1="340" y1="270" x2="340" y2="330" stroke="#2a9d8f" stroke-width="1.5" opacity="0.4"/>
        <line x1="260" y1="290" x2="340" y2="290" stroke="#2a9d8f" stroke-width="1.5" opacity="0.4"/>
        <line x1="260" y1="310" x2="340" y2="310" stroke="#2a9d8f" stroke-width="1.5" opacity="0.4"/>
        <!-- Chinampas around island -->
        ${Array.from({length: 12}, (_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const x = 300 + Math.cos(angle) * 110;
          const y = 300 + Math.sin(angle) * 100;
          return `<rect x="${x-12}" y="${y-6}" width="24" height="12" rx="2" fill="#2d6a4f" opacity="0.4" transform="rotate(${i*30},${x},${y})"/>`;
        }).join('')}
        <!-- Surrounding cities labels -->
        <circle cx="480" cy="300" r="8" fill="#d4a843" opacity="0.5"/>
        <text x="480" y="325" text-anchor="middle" fill="#d4a843" font-size="10" font-family="serif" opacity="0.7">Texcoco</text>
        <circle cx="130" cy="300" r="6" fill="#d4a843" opacity="0.4"/>
        <text x="130" y="325" text-anchor="middle" fill="#d4a843" font-size="10" font-family="serif" opacity="0.7">Tlacopan</text>
        <circle cx="300" cy="100" r="6" fill="#d4a843" opacity="0.4"/>
        <text x="300" y="85" text-anchor="middle" fill="#d4a843" font-size="10" font-family="serif" opacity="0.7">Tepeyac</text>
        <!-- City label -->
        <text x="300" y="355" text-anchor="middle" fill="#e9c46a" font-size="13" font-family="serif" font-weight="bold" letter-spacing="2">TENOCHTITLAN</text>
        <!-- Compass rose -->
        <g transform="translate(530,530)">
          <circle cx="0" cy="0" r="20" fill="none" stroke="#d4a843" stroke-width="1" opacity="0.4"/>
          <polygon points="0,-18 3,-6 -3,-6" fill="#d4a843" opacity="0.6"/>
          <polygon points="0,18 3,6 -3,6" fill="#d4a843" opacity="0.3"/>
          <polygon points="-18,0 -6,3 -6,-3" fill="#d4a843" opacity="0.3"/>
          <polygon points="18,0 6,3 6,-3" fill="#d4a843" opacity="0.3"/>
          <text x="0" y="-22" text-anchor="middle" fill="#d4a843" font-size="8" opacity="0.6">N</text>
        </g>
      `;
      container.appendChild(svg);
    },

    // Five Suns individual backgrounds
    sunBackground(container, sunNumber) {
      const configs = {
        1: { bg1: '#3e2723', bg2: '#1a1a2e', accent: '#d4a843', symbol: 'Jaguars roam' },
        2: { bg1: '#16213e', bg2: '#1a1a2e', accent: '#52b69a', symbol: 'Winds spiral' },
        3: { bg1: '#7f2b0e', bg2: '#1a1a2e', accent: '#e76f51', symbol: 'Fire rains' },
        4: { bg1: '#0b4d4a', bg2: '#1a1a2e', accent: '#2a9d8f', symbol: 'Waters rise' },
        5: { bg1: '#b8860b', bg2: '#3e2723', accent: '#e9c46a', symbol: 'Movement' }
      };
      const c = configs[sunNumber] || configs[5];
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 400 200');
      svg.innerHTML = `
        <defs>
          <linearGradient id="sun-bg-${sunNumber}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${c.bg1}"/>
            <stop offset="100%" stop-color="${c.bg2}"/>
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#sun-bg-${sunNumber})"/>
        <circle cx="200" cy="100" r="50" fill="${c.accent}" opacity="0.1"/>
        <circle cx="200" cy="100" r="35" fill="${c.accent}" opacity="0.15"/>
        <circle cx="200" cy="100" r="20" fill="${c.accent}" opacity="0.2"/>
        <text x="200" y="105" text-anchor="middle" fill="${c.accent}" font-size="28" font-family="serif" font-weight="bold" opacity="0.3">${sunNumber}</text>
        ${Array.from({length: 8}, (_, i) => {
          const angle = (i * 45) * Math.PI / 180;
          const x1 = 200 + Math.cos(angle) * 55;
          const y1 = 100 + Math.sin(angle) * 55;
          const x2 = 200 + Math.cos(angle) * 75;
          const y2 = 100 + Math.sin(angle) * 75;
          return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c.accent}" stroke-width="2" opacity="0.15"/>`;
        }).join('')}
      `;
      container.appendChild(svg);
    },

    // Jaguar Warrior
    jaguarWarrior(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 400 500');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of a Mexica Jaguar Warrior');
      svg.innerHTML = `
        <defs>
          <linearGradient id="jag-pelt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#d4a843"/><stop offset="100%" stop-color="#b8860b"/>
          </linearGradient>
          <radialGradient id="jag-shield" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#2a9d8f"/><stop offset="100%" stop-color="#0b4d4a"/>
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="#1a1a2e"/>
        <circle cx="200" cy="250" r="200" fill="#d4a843" opacity="0.03"/>
        <!-- Body in jaguar pelt -->
        <rect x="165" y="280" width="70" height="100" rx="8" fill="url(#jag-pelt)"/>
        ${Array.from({length:12},(_, i)=>{const x=170+Math.random()*55,y=285+Math.random()*90;return `<circle cx="${x}" cy="${y}" r="3" fill="#5d4037" opacity="0.5"/>`;}).join('')}
        <!-- Legs -->
        <rect x="175" y="380" width="22" height="60" rx="4" fill="#d4a843"/>
        <rect x="205" y="380" width="22" height="60" rx="4" fill="#d4a843"/>
        ${Array.from({length:6},(_, i)=>`<circle cx="${180+Math.random()*14}" cy="${385+i*9}" r="2" fill="#5d4037" opacity="0.4"/><circle cx="${210+Math.random()*14}" cy="${385+i*9}" r="2" fill="#5d4037" opacity="0.4"/>`;).join('')}
        <ellipse cx="186" cy="443" rx="16" ry="7" fill="#795548"/>
        <ellipse cx="216" cy="443" rx="16" ry="7" fill="#795548"/>
        <!-- Arms -->
        <rect x="135" y="290" width="30" height="70" rx="8" fill="#d4a843" transform="rotate(-10,150,325)"/>
        <rect x="235" y="290" width="30" height="70" rx="8" fill="#d4a843" transform="rotate(10,250,325)"/>
        <!-- Shield -->
        <circle cx="128" cy="350" r="32" fill="url(#jag-shield)" stroke="#2a9d8f" stroke-width="2"/>
        <circle cx="128" cy="350" r="20" fill="none" stroke="#0b4d4a" stroke-width="1.5"/>
        <ellipse cx="98" cy="370" rx="4" ry="15" fill="#e9c46a" transform="rotate(20,98,370)"/>
        <ellipse cx="104" cy="375" rx="4" ry="15" fill="#c1440e" transform="rotate(15,104,375)"/>
        <ellipse cx="110" cy="378" rx="4" ry="15" fill="#2a9d8f" transform="rotate(10,110,378)"/>
        <!-- Spear (tepoztopilli) -->
        <rect x="260" y="240" width="6" height="130" rx="2" fill="#795548"/>
        <polygon points="263,240 253,215 273,215" fill="#1a1a2e"/>
        <polygon points="263,222 257,215 269,215" fill="#333"/>
        <!-- Jaguar headdress -->
        <ellipse cx="200" cy="260" rx="55" ry="38" fill="#d4a843"/>
        ${Array.from({length:15},(_, i)=>{const x=160+Math.random()*80,y=232+Math.random()*55;return `<circle cx="${x}" cy="${y}" r="3.5" fill="#5d4037" opacity="0.5"/>`;}).join('')}
        <!-- Jaguar jaw -->
        <path d="M165,268 Q180,285 200,280 Q220,285 235,268" fill="#b8860b" stroke="#795548" stroke-width="1"/>
        <!-- Teeth -->
        ${Array.from({length:6},(_, i)=>`<polygon points="${175+i*10},268 ${178+i*10},278 ${172+i*10},278" fill="#faf3e0"/>`;).join('')}
        <!-- Jaguar eyes -->
        <circle cx="182" cy="248" r="8" fill="#e9c46a"/>
        <circle cx="218" cy="248" r="8" fill="#e9c46a"/>
        <circle cx="182" cy="248" r="4" fill="#1a1a2e"/>
        <circle cx="218" cy="248" r="4" fill="#1a1a2e"/>
        <!-- Jaguar ears -->
        <ellipse cx="165" cy="232" rx="12" ry="10" fill="#d4a843"/>
        <ellipse cx="235" cy="232" rx="12" ry="10" fill="#d4a843"/>
        <ellipse cx="165" cy="232" rx="7" ry="6" fill="#b8860b"/>
        <ellipse cx="235" cy="232" rx="7" ry="6" fill="#b8860b"/>
        <!-- Face visible below jaw -->
        <circle cx="200" cy="275" r="14" fill="#a1887f"/>
        <line x1="192" y1="273" x2="187" y2="280" stroke="#1a1a2e" stroke-width="2"/>
        <line x1="208" y1="273" x2="213" y2="280" stroke="#1a1a2e" stroke-width="2"/>
        <!-- Chest decoration -->
        <circle cx="200" cy="310" r="10" fill="#2a9d8f" opacity="0.6"/>
        <circle cx="200" cy="310" r="6" fill="#e9c46a" opacity="0.8"/>
      `;
      container.appendChild(svg);
    },

    // Marketplace Scene
    marketplace(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 800 400');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of the great Tlatelolco marketplace');
      svg.innerHTML = `
        <defs>
          <linearGradient id="mkt-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#16213e"/><stop offset="100%" stop-color="#2a9d8f" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#mkt-sky)"/>
        <!-- Mountains -->
        <polygon points="0,200 60,140 120,170 200,110 280,150 360,120 440,160 520,100 600,140 680,130 760,160 800,140 800,200" fill="#1b4332" opacity="0.3"/>
        <!-- Temple silhouette -->
        <polygon points="380,180 360,120 400,120" fill="#1a1a2e" opacity="0.5"/>
        <rect x="365" y="110" width="30" height="15" rx="1" fill="#1a1a2e" opacity="0.5"/>
        <!-- Ground -->
        <rect x="0" y="250" width="800" height="150" fill="#5d4037"/>
        <rect x="0" y="245" width="800" height="10" fill="#795548"/>
        <!-- Market awnings -->
        ${[80,200,320,440,560,680].map((x,i)=>`
          <rect x="${x-35}" y="180" width="70" height="70" rx="2" fill="#795548" opacity="0.8"/>
          <polygon points="${x-40},180 ${x},160 ${x+40},180" fill="${['#c1440e','#2a9d8f','#d4a843','#c1440e','#2a9d8f','#d4a843'][i]}" opacity="0.7"/>
          <rect x="${x-30}" y="200" width="20" height="10" rx="2" fill="${['#e9c46a','#e76f51','#52b69a','#f4a261','#d4a843','#74c69d'][i]}" opacity="0.6"/>
          <rect x="${x}" y="205" width="15" height="8" rx="2" fill="${['#52b69a','#d4a843','#e76f51','#74c69d','#e9c46a','#f4a261'][i]}" opacity="0.6"/>
          <circle cx="${x-15}" cy="220" r="4" fill="${['#40916c','#e9c46a','#c1440e','#52b69a','#e76f51','#d4a843'][i]}" opacity="0.5"/>
          <circle cx="${x+5}" cy="218" r="3" fill="${['#e9c46a','#c1440e','#40916c','#d4a843','#52b69a','#e76f51'][i]}" opacity="0.5"/>
        `).join('')}
        <!-- Figures (simplified people) -->
        ${Array.from({length:18},(_, i)=>{
          const x=50+i*42, y=260+Math.random()*20;
          const c=['#a1887f','#8d6e63','#795548'][i%3];
          return `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>
                  <rect x="${x-4}" y="${y+5}" width="8" height="14" rx="2" fill="${['#2a9d8f','#c1440e','#d4a843','#e76f51'][i%4]}" opacity="0.7"/>`;
        }).join('')}
        <!-- Pottery display -->
        <ellipse cx="140" cy="240" rx="8" ry="6" fill="#a1887f" opacity="0.7"/>
        <ellipse cx="155" cy="242" rx="6" ry="5" fill="#8d6e63" opacity="0.7"/>
        <ellipse cx="170" cy="241" rx="7" ry="5" fill="#795548" opacity="0.7"/>
        <!-- Textile display -->
        <rect x="280" y="235" width="30" height="15" rx="1" fill="#c1440e" opacity="0.5"/>
        <rect x="285" y="237" width="8" height="4" fill="#e9c46a" opacity="0.4"/>
        <rect x="296" y="237" width="8" height="4" fill="#2a9d8f" opacity="0.4"/>
        <!-- Produce -->
        ${Array.from({length:8},(_, i)=>`<circle cx="${470+i*8}" cy="${240-Math.random()*5}" r="3" fill="${['#40916c','#e9c46a','#c1440e','#52b69a'][i%4]}" opacity="0.6"/>`;).join('')}
        <!-- Border decoration at bottom -->
        <rect x="0" y="390" width="800" height="10" fill="#3e2723"/>
      `;
      container.appendChild(svg);
    },

    // Xochiquetzal Goddess
    xochiquetzal(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 500 600');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of Xochiquetzal, goddess of beauty and flowers');
      svg.innerHTML = `
        <defs>
          <radialGradient id="xq-glow" cx="50%" cy="40%">
            <stop offset="0%" stop-color="#e9c46a" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#e9c46a" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="xq-dress" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2a9d8f"/><stop offset="100%" stop-color="#0b4d4a"/>
          </linearGradient>
        </defs>
        <rect width="500" height="600" fill="#16213e"/>
        <circle cx="250" cy="280" r="250" fill="url(#xq-glow)"/>
        <!-- Floating flowers -->
        ${Array.from({length:20},(_, i)=>{
          const x=50+Math.random()*400, y=50+Math.random()*500, s=6+Math.random()*8;
          const c=['#e76f51','#e9c46a','#c1440e','#f4a261','#d4a843','#52b69a'][i%6];
          return `<circle cx="${x}" cy="${y}" r="${s}" fill="${c}" opacity="${0.1+Math.random()*0.15}"/>`;
        }).join('')}
        <!-- Butterflies -->
        ${Array.from({length:5},(_, i)=>{
          const x=80+i*80, y=100+Math.random()*100;
          return `<path d="M${x},${y} Q${x-12},${y-10} ${x-8},${y} Q${x-12},${y+10} ${x},${y}" fill="#e9c46a" opacity="0.2"/>
                  <path d="M${x},${y} Q${x+12},${y-10} ${x+8},${y} Q${x+12},${y+10} ${x},${y}" fill="#d4a843" opacity="0.2"/>`;
        }).join('')}
        <!-- Body/dress -->
        <path d="M210,350 Q200,400 180,500 L320,500 Q300,400 290,350 Z" fill="url(#xq-dress)"/>
        <!-- Dress decoration -->
        ${Array.from({length:8},(_, i)=>`<circle cx="${210+i*10}" cy="${400+i*10}" r="3" fill="#e9c46a" opacity="0.3"/>`;).join('')}
        <!-- Arms -->
        <path d="M210,350 Q180,380 160,370" stroke="#a1887f" stroke-width="12" fill="none" stroke-linecap="round"/>
        <path d="M290,350 Q320,380 340,370" stroke="#a1887f" stroke-width="12" fill="none" stroke-linecap="round"/>
        <!-- Flowers in hands -->
        <circle cx="158" cy="365" r="10" fill="#e76f51" opacity="0.7"/>
        <circle cx="158" cy="365" r="5" fill="#e9c46a" opacity="0.8"/>
        <circle cx="342" cy="365" r="10" fill="#c1440e" opacity="0.7"/>
        <circle cx="342" cy="365" r="5" fill="#d4a843" opacity="0.8"/>
        <!-- Head -->
        <circle cx="250" cy="310" r="30" fill="#a1887f"/>
        <!-- Face -->
        <circle cx="240" cy="305" r="4" fill="#5d4037"/>
        <circle cx="260" cy="305" r="4" fill="#5d4037"/>
        <circle cx="240" cy="305" r="1.5" fill="#1a1a2e"/>
        <circle cx="260" cy="305" r="1.5" fill="#1a1a2e"/>
        <path d="M244,318 Q250,323 256,318" fill="none" stroke="#795548" stroke-width="1.5"/>
        <!-- Jewelry -->
        <circle cx="250" cy="335" r="6" fill="#e9c46a"/>
        <circle cx="250" cy="335" r="3" fill="#2a9d8f"/>
        <circle cx="235" cy="330" r="3" fill="#e9c46a" opacity="0.7"/>
        <circle cx="265" cy="330" r="3" fill="#e9c46a" opacity="0.7"/>
        <!-- Elaborate headdress -->
        <!-- Quetzal feathers -->
        ${Array.from({length:9},(_, i)=>{
          const angle=-40+i*10, x=250, y=275;
          const len=40+Math.random()*20;
          const c=['#2a9d8f','#52b69a','#40916c','#74c69d'][i%4];
          return `<ellipse cx="${x}" cy="${y-len/2}" rx="5" ry="${len}" fill="${c}" opacity="0.7" transform="rotate(${angle},${x},${y})"/>`;
        }).join('')}
        <!-- Flowers in headdress -->
        ${[{x:220,y:270,c:'#e76f51'},{x:235,y:260,c:'#e9c46a'},{x:250,y:255,c:'#c1440e'},{x:265,y:260,c:'#f4a261'},{x:280,y:270,c:'#e76f51'}].map(f=>
          `<circle cx="${f.x}" cy="${f.y}" r="8" fill="${f.c}" opacity="0.8"/>
           <circle cx="${f.x}" cy="${f.y}" r="4" fill="#e9c46a" opacity="0.6"/>`
        ).join('')}
        <!-- Gold headband -->
        <path d="M215,285 Q250,275 285,285" fill="none" stroke="#d4a843" stroke-width="3"/>
        <!-- Ear ornaments -->
        <circle cx="218" cy="315" r="6" fill="#e9c46a"/>
        <circle cx="282" cy="315" r="6" fill="#e9c46a"/>
      `;
      container.appendChild(svg);
    },

    // Ball Game
    ballGame(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 700 400');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of the Mesoamerican ritual ball game');
      svg.innerHTML = `
        <defs>
          <linearGradient id="bg-court" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1a1a2e"/><stop offset="100%" stop-color="#3e2723"/>
          </linearGradient>
          <linearGradient id="bg-stone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#5d4037"/>
          </linearGradient>
        </defs>
        <rect width="700" height="400" fill="url(#bg-court)"/>
        <!-- Torches -->
        ${[100,600].map(x=>`
          <rect x="${x-3}" y="60" width="6" height="100" fill="#795548"/>
          <ellipse cx="${x}" cy="55" rx="10" ry="15" fill="#e76f51" opacity="0.6"/>
          <ellipse cx="${x}" cy="50" rx="6" ry="10" fill="#e9c46a" opacity="0.5"/>
          <ellipse cx="${x}" cy="45" rx="3" ry="6" fill="#fff" opacity="0.3"/>
        `).join('')}
        <!-- Court walls (sloped) -->
        <polygon points="150,150 150,350 200,300 200,200" fill="url(#bg-stone)"/>
        <polygon points="550,150 550,350 500,300 500,200" fill="url(#bg-stone)"/>
        <!-- Wall texture -->
        ${Array.from({length:6},(_, i)=>`
          <line x1="155" y1="${160+i*32}" x2="195" y2="${205+i*16}" stroke="#6d4c41" stroke-width="0.5" opacity="0.4"/>
          <line x1="545" y1="${160+i*32}" x2="505" y2="${205+i*16}" stroke="#6d4c41" stroke-width="0.5" opacity="0.4"/>
        `).join('')}
        <!-- Court floor -->
        <polygon points="200,200 500,200 550,150 150,150" fill="#795548" opacity="0.3"/>
        <polygon points="200,300 500,300 550,350 150,350" fill="#5d4037" opacity="0.4"/>
        <rect x="200" y="200" width="300" height="100" fill="#6d4c41" opacity="0.5"/>
        <!-- Center line -->
        <line x1="350" y1="200" x2="350" y2="300" stroke="#d4a843" stroke-width="2" opacity="0.4"/>
        <!-- Stone rings on walls -->
        <circle cx="175" cy="240" r="18" fill="none" stroke="#a1887f" stroke-width="4"/>
        <circle cx="175" cy="240" r="8" fill="#3e2723"/>
        <circle cx="525" cy="240" r="18" fill="none" stroke="#a1887f" stroke-width="4"/>
        <circle cx="525" cy="240" r="8" fill="#3e2723"/>
        <!-- Player 1 (left) -->
        <circle cx="290" cy="245" r="10" fill="#a1887f"/>
        <rect x="284" y="255" width="12" height="20" rx="3" fill="#2a9d8f"/>
        <ellipse cx="290" cy="262" rx="15" ry="6" fill="#8d6e63" opacity="0.6"/>
        <!-- Player 2 (right) -->
        <circle cx="410" cy="255" r="10" fill="#a1887f"/>
        <rect x="404" y="265" width="12" height="20" rx="3" fill="#c1440e"/>
        <ellipse cx="410" cy="272" rx="15" ry="6" fill="#8d6e63" opacity="0.6"/>
        <!-- Ball -->
        <circle cx="350" cy="240" r="12" fill="#3e2723" stroke="#1a1a2e" stroke-width="1.5"/>
        <circle cx="350" cy="240" r="10" fill="#5d4037"/>
        <path d="M343,235 Q350,230 357,235" fill="none" stroke="#3e2723" stroke-width="1"/>
        <!-- Spectators (top) -->
        ${Array.from({length:12},(_, i)=>{
          const x=200+i*27;
          return `<circle cx="${x}" cy="${140-Math.random()*15}" r="4" fill="${['#a1887f','#8d6e63','#795548'][i%3]}"/>`;
        }).join('')}
        <!-- Spectators (bottom) -->
        ${Array.from({length:12},(_, i)=>{
          const x=200+i*27;
          return `<circle cx="${x}" cy="${360+Math.random()*15}" r="4" fill="${['#a1887f','#8d6e63','#795548'][i%3]}"/>`;
        }).join('')}
        <!-- Temple silhouette background -->
        <polygon points="340,60 330,30 350,10 370,30 360,60" fill="#1a1a2e" opacity="0.3"/>
      `;
      container.appendChild(svg);
    },

    // Aqueduct Scene
    aqueduct(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 800 350');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of the Chapultepec aqueduct of Tenochtitlan');
      svg.innerHTML = `
        <defs>
          <linearGradient id="aq-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#16213e"/><stop offset="60%" stop-color="#2a9d8f" stop-opacity="0.2"/><stop offset="100%" stop-color="#0b4d4a" stop-opacity="0.4"/>
          </linearGradient>
        </defs>
        <rect width="800" height="350" fill="url(#aq-sky)"/>
        <!-- Mountains -->
        <polygon points="0,180 80,120 140,150 220,100 300,130 400,110 500,140 580,100 660,130 750,120 800,150 800,200 0,200" fill="#1b4332" opacity="0.25"/>
        <!-- Lake water -->
        <rect x="0" y="250" width="800" height="100" fill="#0b4d4a" opacity="0.5"/>
        <path d="M0 270 Q40 265 80 270 Q120 275 160 270 Q200 265 240 270 Q280 275 320 270 Q360 265 400 270 Q440 275 480 270 Q520 265 560 270 Q600 275 640 270 Q680 265 720 270 Q760 275 800 270" fill="none" stroke="#2a9d8f" stroke-width="1" opacity="0.3"/>
        <!-- Chapultepec hill (left) -->
        <ellipse cx="60" cy="220" rx="80" ry="50" fill="#2d6a4f" opacity="0.5"/>
        <ellipse cx="50" cy="200" rx="30" ry="40" fill="#40916c" opacity="0.4"/>
        <ellipse cx="80" cy="210" rx="25" ry="35" fill="#2d6a4f" opacity="0.4"/>
        <!-- Spring source -->
        <circle cx="60" cy="235" r="8" fill="#2a9d8f" opacity="0.5"/>
        <text x="60" y="180" text-anchor="middle" fill="#d4a843" font-size="9" font-family="serif" opacity="0.6">Chapultepec</text>
        <!-- Aqueduct pillars and channel -->
        ${Array.from({length:14},(_, i)=>{
          const x=100+i*45;
          return `
            <rect x="${x-3}" y="210" width="6" height="40" fill="#8d6e63"/>
            <rect x="${x-8}" y="208" width="16" height="6" rx="1" fill="#a1887f"/>
            ${i<13?`<rect x="${x+2}" y="205" width="43" height="4" rx="1" fill="#a1887f"/>
            <rect x="${x+5}" y="202" width="37" height="3" rx="1" fill="#2a9d8f" opacity="0.5"/>`:``}
          `;
        }).join('')}
        <!-- Water flow on top -->
        <path d="M100 203 L720 203" stroke="#2a9d8f" stroke-width="2" opacity="0.4"/>
        <!-- City buildings (right) -->
        <rect x="700" y="190" width="30" height="50" rx="2" fill="#795548" opacity="0.6"/>
        <rect x="720" y="200" width="25" height="40" rx="2" fill="#8d6e63" opacity="0.5"/>
        <rect x="740" y="195" width="20" height="45" rx="2" fill="#795548" opacity="0.5"/>
        <rect x="755" y="205" width="25" height="35" rx="2" fill="#6d4c41" opacity="0.5"/>
        <!-- Temple at city end -->
        <polygon points="760,190 750,170 770,170" fill="#c1440e" opacity="0.4"/>
        <text x="740" y="180" text-anchor="middle" fill="#d4a843" font-size="9" font-family="serif" opacity="0.6">Tenochtitlan</text>
        <!-- Canoe -->
        <path d="M400,280 Q410,273 430,273 Q450,273 460,280 Q450,285 430,285 Q410,285 400,280Z" fill="#795548" opacity="0.6"/>
        <!-- Labels -->
        <text x="400" y="195" text-anchor="middle" fill="#d4a843" font-size="10" font-family="serif" opacity="0.5">Aqueduct of Chapultepec</text>
      `;
      container.appendChild(svg);
    },

    // Mictlan Underworld
    mictlan(container) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 500 700');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Illustration of Mictlan, the nine levels of the Nahua underworld');
      const levels = [
        {y:0,h:70,color:'#1a1a2e',label:'Surface World',accent:'#52b69a'},
        {y:70,h:70,color:'#16213e',label:'Apanohuayan — River Crossing',accent:'#2a9d8f'},
        {y:140,h:70,color:'#1a1a2e',label:'Tepetl Monamictia — Clashing Mountains',accent:'#8d6e63'},
        {y:210,h:70,color:'#0a0a0a',label:'Itztepetl — Obsidian Wind',accent:'#a1887f'},
        {y:280,h:70,color:'#16213e',label:'Cehueloya — Freezing Wind',accent:'#2a9d8f'},
        {y:350,h:70,color:'#1a1a2e',label:'Pancuecuetlaca — Flayed Banners',accent:'#c1440e'},
        {y:420,h:70,color:'#0a0a0a',label:'Temiminaloyan — Arrow Piercing',accent:'#e76f51'},
        {y:490,h:70,color:'#16213e',label:'Teocoyolcualloya — Heart Devouring',accent:'#7f2b0e'},
        {y:560,h:70,color:'#1a1a2e',label:'Apanohualoyan — Final Waters',accent:'#0b4d4a'},
        {y:630,h:70,color:'#0a0a0a',label:'Chicunamictlan — The Ninth Level',accent:'#d4a843'}
      ];
      svg.innerHTML = `
        ${levels.map((l,i)=>`
          <rect x="0" y="${l.y}" width="500" height="${l.h}" fill="${l.color}"/>
          ${i>0?`<line x1="0" y1="${l.y}" x2="500" y2="${l.y}" stroke="${l.accent}" stroke-width="0.5" opacity="0.3"/>`:``}
          <text x="250" y="${l.y+20}" text-anchor="middle" fill="${l.accent}" font-size="9" font-family="serif" opacity="0.6">${l.label}</text>
        `).join('')}
        <!-- Level 1: River with dog -->
        <path d="M100,110 Q200,100 300,110 Q400,120 450,110" fill="none" stroke="#2a9d8f" stroke-width="2" opacity="0.4"/>
        <ellipse cx="350" cy="115" rx="10" ry="6" fill="#a1887f" opacity="0.5"/>
        <!-- Level 2: Clashing mountains -->
        <polygon points="150,200 180,160 210,200" fill="#5d4037" opacity="0.3"/>
        <polygon points="290,200 320,160 350,200" fill="#5d4037" opacity="0.3"/>
        <!-- Level 3: Obsidian shards -->
        ${Array.from({length:8},(_, i)=>`<polygon points="${120+i*35},270 ${125+i*35},240 ${130+i*35},270" fill="#1a1a2e" stroke="#333" stroke-width="0.5" opacity="0.5"/>`;).join('')}
        <!-- Level 4: Wind lines -->
        ${Array.from({length:5},(_, i)=>`<path d="M${80+i*80},310 Q${100+i*80},300 ${120+i*80},310 Q${140+i*80},320 ${160+i*80},310" fill="none" stroke="#2a9d8f" stroke-width="1" opacity="0.3"/>`;).join('')}
        <!-- Level 5: Banners -->
        ${Array.from({length:4},(_, i)=>{
          const x=150+i*60;
          return `<rect x="${x}" y="365" width="3" height="30" fill="#795548" opacity="0.4"/>
                  <rect x="${x+3}" y="367" width="15" height="8" rx="1" fill="#c1440e" opacity="0.3"/>`;
        }).join('')}
        <!-- Level 6: Arrows -->
        ${Array.from({length:6},(_, i)=>`<line x1="${100+i*60}" y1="455" x2="${130+i*60}" y2="435" stroke="#a1887f" stroke-width="1.5" opacity="0.3"/>`;).join('')}
        <!-- Level 7: Heart symbol -->
        <text x="250" y="535" text-anchor="middle" font-size="20" opacity="0.2">&#10084;</text>
        <!-- Level 8: Final waters -->
        <path d="M50,595 Q150,585 250,595 Q350,605 450,595" fill="none" stroke="#0b4d4a" stroke-width="2" opacity="0.4"/>
        <!-- Level 9: Mictlantecuhtli (skeletal figure) -->
        <circle cx="250" cy="665" r="15" fill="none" stroke="#d4a843" stroke-width="1.5" opacity="0.5"/>
        <circle cx="244" cy="661" r="3" fill="#1a1a2e"/>
        <circle cx="256" cy="661" r="3" fill="#1a1a2e"/>
        <line x1="248" y1="668" x2="252" y2="668" stroke="#d4a843" stroke-width="1" opacity="0.5"/>
        <line x1="244" y1="672" x2="256" y2="672" stroke="#d4a843" stroke-width="1" opacity="0.4"/>
        <!-- Descending souls (dots from top to bottom) -->
        ${Array.from({length:9},(_, i)=>`<circle cx="${250+Math.sin(i)*30}" cy="${60+i*70}" r="3" fill="#d4a843" opacity="${0.4-i*0.03}"/>`;).join('')}
        <!-- Bone motifs along edges -->
        ${Array.from({length:14},(_, i)=>`
          <ellipse cx="20" cy="${50+i*48}" rx="3" ry="8" fill="#a1887f" opacity="0.1"/>
          <ellipse cx="480" cy="${50+i*48}" rx="3" ry="8" fill="#a1887f" opacity="0.1"/>
        `).join('')}
      `;
      container.appendChild(svg);
    }
  };

  // ──────────── Render SVG Illustrations ────────────
  document.querySelectorAll('[data-svg]').forEach(container => {
    const type = container.getAttribute('data-svg');
    const param = container.getAttribute('data-svg-param');
    switch (type) {
      case 'templo-mayor': SVGLib.temploMayor(container); break;
      case 'quetzalcoatl': SVGLib.quetzalcoatl(container); break;
      case 'sun-stone': SVGLib.sunStone(container); break;
      case 'chinampa': SVGLib.chinampa(container); break;
      case 'eagle-warrior': SVGLib.eagleWarrior(container); break;
      case 'codex-page': SVGLib.codexPage(container); break;
      case 'tenochtitlan-map': SVGLib.tenochtitlanMap(container); break;
      case 'sun-bg': SVGLib.sunBackground(container, parseInt(param) || 5); break;
      case 'jaguar-warrior': SVGLib.jaguarWarrior(container); break;
      case 'marketplace': SVGLib.marketplace(container); break;
      case 'xochiquetzal': SVGLib.xochiquetzal(container); break;
      case 'ball-game': SVGLib.ballGame(container); break;
      case 'aqueduct': SVGLib.aqueduct(container); break;
      case 'mictlan': SVGLib.mictlan(container); break;
    }
  });

  // ──────────── Animated Number Counters ────────────
  const counterElements = document.querySelectorAll('[data-counter]');
  if (counterElements.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter'));
          const suffix = el.getAttribute('data-counter-suffix') || '';
          const prefix = el.getAttribute('data-counter-prefix') || '';
          const duration = 2000;
          const start = performance.now();

          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // ──────────── Parallax Effect on Hero ────────────
  const heroContent = document.querySelector('.hero__content');
  const heroGlyphs = document.querySelector('.hero__floating-glyphs');
  if (heroContent && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
        heroContent.style.opacity = 1 - (scrollY / (window.innerHeight * 0.8));
        if (heroGlyphs) {
          heroGlyphs.style.transform = `translateY(${scrollY * 0.05}px)`;
        }
      }
    }, { passive: true });
  }

  // ──────────── Gallery Lightbox ────────────
  document.querySelectorAll('.visual-gallery__item').forEach(item => {
    item.addEventListener('click', () => {
      const caption = item.querySelector('.visual-gallery__caption');
      if (caption) {
        caption.style.transform = caption.style.transform === 'translateY(0px)' ? '' : 'translateY(0px)';
      }
    });
  });
});
