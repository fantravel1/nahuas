/* ============================================================
   NAHUAS.COM - Core JavaScript
   Navigation, Interactions, Accessibility, Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ──────────── Mobile Navigation ────────────
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.body;

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      mobileNav.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      body.style.overflow = isOpen ? '' : 'hidden';
      mobileToggle.setAttribute('aria-expanded', !isOpen);
      mobileToggle.setAttribute('aria-label',
        isOpen ? NahuasI18n.t('a11y.menu.open') : NahuasI18n.t('a11y.menu.close')
      );
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileToggle.classList.remove('active');
        body.style.overflow = '';
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ──────────── Language Switcher ────────────
  const langBtn = document.querySelector('.lang-switcher__btn');
  const langDropdown = document.querySelector('.lang-switcher__dropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });

    langDropdown.querySelectorAll('button[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        NahuasI18n.setLanguage(btn.getAttribute('data-lang'));
        langDropdown.classList.remove('open');
      });
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('open');
    });
  }

  // Mobile language buttons
  document.querySelectorAll('.mobile-lang-buttons button[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      NahuasI18n.setLanguage(btn.getAttribute('data-lang'));
    });
  });

  // ──────────── FAQ Accordion ────────────
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all other FAQ items
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open');
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

  // ──────────── Tabs Component ────────────
  document.querySelectorAll('.tabs').forEach(tabContainer => {
    const buttons = tabContainer.querySelectorAll('.tabs__nav button');
    const panels = tabContainer.querySelectorAll('.tabs__panel');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');

        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const panel = tabContainer.querySelector(`[data-tab-panel="${target}"]`);
        if (panel) panel.classList.add('active');
      });
    });
  });

  // ──────────── Scroll Animations ────────────
  const animatedElements = document.querySelectorAll('.fade-in, .slide-up');

  if ('IntersectionObserver' in window && animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  }

  // ──────────── Sticky Header Shadow ────────────
  const header = document.querySelector('.site-header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
      } else {
        header.style.boxShadow = '';
      }
      lastScroll = scrollY;
    }, { passive: true });
  }

  // ──────────── Smooth Scroll for Anchor Links ────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ──────────── Timeline Era Filter ────────────
  const eraButtons = document.querySelectorAll('[data-era-filter]');
  const timelineItems = document.querySelectorAll('[data-era]');

  if (eraButtons.length && timelineItems.length) {
    eraButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const era = btn.getAttribute('data-era-filter');

        eraButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        timelineItems.forEach(item => {
          if (era === 'all' || item.getAttribute('data-era') === era) {
            item.style.display = '';
            item.classList.add('fade-in', 'visible');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // ──────────── Dictionary Search ────────────
  const searchInput = document.querySelector('.dictionary-search input');
  const wordCards = document.querySelectorAll('.word-card');

  if (searchInput && wordCards.length) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      wordCards.forEach(card => {
        const term = (card.querySelector('.word-card__term')?.textContent || '').toLowerCase();
        const def = (card.querySelector('.word-card__definition')?.textContent || '').toLowerCase();
        card.style.display = (term.includes(query) || def.includes(query)) ? '' : 'none';
      });
    });
  }

  // ──────────── Map Control Buttons ────────────
  document.querySelectorAll('.map-control-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.map-controls');
      if (group) {
        group.querySelectorAll('.map-control-btn').forEach(b => b.classList.remove('active'));
      }
      btn.classList.add('active');
    });
  });

  // ──────────── Calendar Interaction ────────────
  const calendarDays = [
    { glyph: '\u{1F40A}', nahuatl: 'Cipactli', en: 'Crocodile', es: 'Cocodrilo' },
    { glyph: '\u{1F32C}\uFE0F', nahuatl: 'Ehecatl', en: 'Wind', es: 'Viento' },
    { glyph: '\u{1F3E0}', nahuatl: 'Calli', en: 'House', es: 'Casa' },
    { glyph: '\u{1F98E}', nahuatl: 'Cuetzpalin', en: 'Lizard', es: 'Lagartija' },
    { glyph: '\u{1F40D}', nahuatl: 'Coatl', en: 'Serpent', es: 'Serpiente' },
    { glyph: '\u{1F480}', nahuatl: 'Miquiztli', en: 'Death', es: 'Muerte' },
    { glyph: '\u{1F98C}', nahuatl: 'Mazatl', en: 'Deer', es: 'Venado' },
    { glyph: '\u{1F430}', nahuatl: 'Tochtli', en: 'Rabbit', es: 'Conejo' },
    { glyph: '\u{1F4A7}', nahuatl: 'Atl', en: 'Water', es: 'Agua' },
    { glyph: '\u{1F415}', nahuatl: 'Itzcuintli', en: 'Dog', es: 'Perro' },
    { glyph: '\u{1F412}', nahuatl: 'Ozomatli', en: 'Monkey', es: 'Mono' },
    { glyph: '\u{1F33E}', nahuatl: 'Malinalli', en: 'Grass', es: 'Hierba' },
    { glyph: '\u{1F8B4}', nahuatl: 'Acatl', en: 'Reed', es: 'Caña' },
    { glyph: '\u{1F405}', nahuatl: 'Ocelotl', en: 'Jaguar', es: 'Jaguar' },
    { glyph: '\u{1F985}', nahuatl: 'Cuauhtli', en: 'Eagle', es: 'Águila' },
    { glyph: '\u{1F983}', nahuatl: 'Cozcacuauhtli', en: 'Vulture', es: 'Buitre' },
    { glyph: '\u{1F4AB}', nahuatl: 'Ollin', en: 'Movement', es: 'Movimiento' },
    { glyph: '\u{1F5E1}\uFE0F', nahuatl: 'Tecpatl', en: 'Flint Knife', es: 'Cuchillo' },
    { glyph: '\u{1F327}\uFE0F', nahuatl: 'Quiahuitl', en: 'Rain', es: 'Lluvia' },
    { glyph: '\u{1F33B}', nahuatl: 'Xochitl', en: 'Flower', es: 'Flor' }
  ];

  const calendarGlyph = document.querySelector('.calendar-wheel__glyph');
  const calendarName = document.querySelector('.calendar-wheel__day-name');
  const calendarMeaning = document.querySelector('.calendar-wheel__day-meaning');

  if (calendarGlyph && calendarName && calendarMeaning) {
    // Show today's day sign based on tonalpohualli cycle
    const dayIndex = Math.floor(Date.now() / 86400000) % 20;
    const day = calendarDays[dayIndex];
    const lang = typeof NahuasI18n !== 'undefined' ? NahuasI18n.getCurrentLang() : 'en';

    calendarGlyph.textContent = day.glyph;
    calendarName.textContent = day.nahuatl;
    calendarMeaning.textContent = day[lang] || day.en;

    // Allow clicking to cycle through day signs
    let currentDay = dayIndex;
    const wheel = document.querySelector('.calendar-wheel');
    if (wheel) {
      wheel.style.cursor = 'pointer';
      wheel.addEventListener('click', () => {
        currentDay = (currentDay + 1) % 20;
        const d = calendarDays[currentDay];
        const currentLang = typeof NahuasI18n !== 'undefined' ? NahuasI18n.getCurrentLang() : 'en';
        calendarGlyph.textContent = d.glyph;
        calendarName.textContent = d.nahuatl;
        calendarMeaning.textContent = d[currentLang] || d.en;
      });
    }
  }

  // ──────────── Back to Top Button ────────────
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
