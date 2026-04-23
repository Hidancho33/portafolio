/* ═══════════════════════════════════════════════════════
   PORTFOLIO — Ivan Felipe Bejarano
   main.js · Lógica e interacciones
════════════════════════════════════════════════════════ */

/* ─── Tailwind config (debe ejecutarse antes del CDN) ───── */
/* Este objeto se define aquí pero se inyecta al <head> desde
   el HTML mediante un <script> inline antes de cargar Tailwind.
   Ver comentario en index.html. */
const TAILWIND_CONFIG = {
  theme: {
    extend: {
      colors: {
        navy:           '#0f172a',
        emerald:        '#10b981',
        'emerald-dim':  '#059669',
        'emerald-glow': '#34d399',
        slate: {
          850: '#1a2540',
          900: '#0f172a',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        blink:     'blink 1.1s step-end infinite',
        shimmer:   'shimmer 3s linear infinite',
        float:     'float 4s ease-in-out infinite',
      },
    },
  },
};

/* ════════════════════════════════════════════════════════
   INICIALIZACIÓN — espera a que el DOM esté listo
════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  initMobileMenu();
  initTypingAnimation();
  initScrollReveal();
  initNavbarScroll();
  initActiveNavLinks();

});

/* ─── 1. Menú móvil (hamburger) ─────────────────────────── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

/* Función global para cerrar el menú desde los links */
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

/* ─── 2. Animación de escritura (typing effect) ─────────── */
function initTypingAnimation() {
  const typedEl = document.getElementById('typed-text');
  if (!typedEl) return;

  const phrases = [
    'Desarrollador Full Stack',
    'Estudiante de Ing. Sistemas',
    'Bootcamp Talento Tech',
    'Construyendo para la web',
  ];

  const speed = { type: 75, delete: 40, pause: 1800 };

  let currentPhrase = 0;
  let currentChar   = 0;
  let isDeleting    = false;

  function typeEffect() {
    const phrase = phrases[currentPhrase];

    if (!isDeleting) {
      typedEl.textContent = phrase.slice(0, ++currentChar);
      if (currentChar === phrase.length) {
        isDeleting = true;
        return setTimeout(typeEffect, speed.pause);
      }
    } else {
      typedEl.textContent = phrase.slice(0, --currentChar);
      if (currentChar === 0) {
        isDeleting    = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? speed.delete : speed.type);
  }

  typeEffect();
}

/* ─── 3. Scroll Reveal (IntersectionObserver) ───────────── */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));
}

/* ─── 4. Efecto compacto en navbar al hacer scroll ──────── */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.style.paddingTop    = '0.6rem';
      navbar.style.paddingBottom = '0.6rem';
    } else {
      navbar.style.paddingTop    = '';
      navbar.style.paddingBottom = '';
    }
  }, { passive: true });
}

/* ─── 5. Resaltado de link activo en navegación ─────────── */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.id;
      }
    });

    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === '#' + current;
      link.classList.toggle('text-emerald-400', isActive);
    });
  }, { passive: true });
}
