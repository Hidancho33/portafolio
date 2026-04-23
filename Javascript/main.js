// ── Textos en español e inglés ──────────────────────────

var textos = {
  es: {
    "nav-stack":           "Stack",
    "nav-projects":        "Proyecto",
    "nav-education":       "Educación",
    "nav-contact":         "Contacto",
    "btn-contact-me":      "Contáctame",

    "hero-status":         "Cali, Colombia · Disponible para proyectos",
    "btn-project":         "Ver Proyecto",
    "btn-cv":              "Descargar CV",

    "stack-tools-label":   "Herramientas & Tecnologías",
    "stack-subtitle":      "Tecnologías que domino para construir productos digitales robustos, desde la interfaz hasta la base de datos.",
    "stack-frontend-desc": "Interfaces accesibles, rápidas y optimizadas para móviles con énfasis en UX.",
    "stack-backend-desc":  "Arquitecturas escalables con Node.js, diseño RESTful y autenticación segura.",
    "stack-db-desc":       "Modelado de datos relacionales y NoSQL, control de versiones y metodologías ágiles.",

    "proj-label":          "Proyecto en Desarrollo",
    "proj-heading-1":      "Lo que he",
    "proj-heading-2":      "construido",
    "proj-desc":           "Plataforma integral para gestión de expediciones de deportes extremos.",
    "proj-stat-1":         "Responsivo",
    "proj-btn-soon":       "Pronto..",
    "proj-btn-code":       "Código",
    "proj-features-title": "Características del Proyecto",
    "proj-stack-label":    "Stack Utilizado",
    "feat-1-title":        "Diseño 100% Responsivo",
    "feat-1-desc":         "Interfaz adaptativa Mobile First que garantiza una experiencia fluida en cualquier dispositivo, desde móvil hasta escritorio.",
    "feat-2-title":        "Filtrado Dinámico en JavaScript",
    "feat-2-desc":         "Sistema de filtros en tiempo real por categoría, dificultad y precio sin recargar la página.",
    "feat-3-title":        "Carrito con Persistencia",
    "feat-3-desc":         "Gestión de reservas con persistencia en LocalStorage, manteniendo el estado del usuario entre sesiones.",
    "feat-4-title":        "Arquitectura API REST",
    "feat-4-desc":         "Backend con Node.js + Express.js siguiendo principios REST, con endpoints documentados y autenticación JWT.",
    "feat-5-title":        "Base de Datos MySQL",
    "feat-5-desc":         "Modelo relacional normalizado con tablas de usuarios, expediciones, reservas y pagos.",

    "edu-label":           "Formación Académica",
    "edu-heading-1":       "Mi",
    "edu-heading-2":       "Educación",
    "edu-badge-current":   "EN CURSO",
    "edu-badge-cert":      "CERTIFICADO ✓",
    "edu-sys-title":       "Ingeniería de Sistemas",
    "edu-sys-date":        "2023 – Presente",
    "edu-sys-desc":        "Formación en fundamentos de algoritmos, estructuras de datos, bases de datos, redes y arquitectura de software.",
    "edu-adso-title":      "Bootcamp · ADSO Full Stack",
    "edu-adso-desc":       "Programa intensivo con enfoque práctico en HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB y Scrum. Proyecto final: Velocity Adventures.",

    "contact-label":       "¿Hablamos?",
    "contact-heading-1":   "Trabajemos",
    "contact-heading-2":   "Juntos",
    "contact-desc":        "Estoy abierto a nuevas oportunidades laborales, proyectos freelance y colaboraciones creativas.",
    "contact-location":    "Cali, Colombia · Abierto a trabajo remoto 🌎",

    "footer-built":        "Construido con ♥ con HTML5 + Tailwind CSS",

    "typing-words":        ["Full Stack Developer", "Estudiante de Ingeniería"]
  },

  en: {
    "nav-stack":           "Stack",
    "nav-projects":        "Projects",
    "nav-education":       "Education",
    "nav-contact":         "Contact",
    "btn-contact-me":      "Contact Me",

    "hero-status":         "Cali, Colombia · Available for projects",
    "btn-project":         "View Project",
    "btn-cv":              "Download CV",

    "stack-tools-label":   "Tools & Technologies",
    "stack-subtitle":      "Technologies I master to build robust digital products, from the interface to the database.",
    "stack-frontend-desc": "Accessible, fast, mobile-optimized interfaces with a strong focus on UX.",
    "stack-backend-desc":  "Scalable architectures with Node.js, RESTful design, and secure authentication.",
    "stack-db-desc":       "Relational and NoSQL data modeling, version control and agile methodologies.",

    "proj-label":          "Project in Development",
    "proj-heading-1":      "What I have",
    "proj-heading-2":      "built",
    "proj-desc":           "Comprehensive platform for managing extreme sports expeditions.",
    "proj-stat-1":         "Responsive",
    "proj-btn-soon":       "Coming soon..",
    "proj-btn-code":       "Code",
    "proj-features-title": "Project Features",
    "proj-stack-label":    "Tech Stack Used",
    "feat-1-title":        "100% Responsive Design",
    "feat-1-desc":         "Mobile First adaptive interface that ensures a smooth experience on any device, from mobile to desktop.",
    "feat-2-title":        "Dynamic JavaScript Filtering",
    "feat-2-desc":         "Real-time filter system by category, difficulty and price without reloading the page.",
    "feat-3-title":        "Cart with Persistence",
    "feat-3-desc":         "Booking management with LocalStorage persistence, maintaining user state between sessions.",
    "feat-4-title":        "REST API Architecture",
    "feat-4-desc":         "Backend with Node.js + Express.js following REST principles, with documented endpoints and JWT authentication.",
    "feat-5-title":        "MySQL Database",
    "feat-5-desc":         "Normalized relational model with tables for users, expeditions, reservations and payments.",

    "edu-label":           "Academic Background",
    "edu-heading-1":       "My",
    "edu-heading-2":       "Education",
    "edu-badge-current":   "IN PROGRESS",
    "edu-badge-cert":      "CERTIFIED ✓",
    "edu-sys-title":       "Systems Engineering",
    "edu-sys-date":        "2023 – Present",
    "edu-sys-desc":        "Training in algorithm fundamentals, data structures, databases, networking and software architecture.",
    "edu-adso-title":      "Bootcamp · ADSO Full Stack",
    "edu-adso-desc":       "Intensive program with hands-on focus on HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB and Scrum. Final project: Velocity Adventures.",

    "contact-label":       "Let's Talk?",
    "contact-heading-1":   "Let's Work",
    "contact-heading-2":   "Together",
    "contact-desc":        "I'm open to new job opportunities, freelance projects and creative collaborations.",
    "contact-location":    "Cali, Colombia · Open to remote work 🌎",

    "footer-built":        "Built with ♥ using HTML5 + Tailwind CSS",

    "typing-words":        ["Full Stack Developer", "Systems Engineering Student"]
  }
};

// Idioma guardado o español por defecto
var idiomaActual = localStorage.getItem("idioma") || "es";

// ── Cuando carga la página ───────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  cambiarTextos();
  menuMovil();
  animacionEscritura();
  aparecerAlScroll();
  navbarAlScroll();
  linkActivoNavbar();
  botonIdioma();
});

// ── Cambiar todos los textos según el idioma ────────────
function cambiarTextos() {
  var t = textos[idiomaActual];

  // Busca todos los elementos con data-i18n y les cambia el texto
  var elementos = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < elementos.length; i++) {
    var el  = elementos[i];
    var key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  }

  // El footer tiene un ♥ con color, ese lo ponemos aparte con innerHTML
  var footer = document.querySelector("[data-i18n='footer-built']");
  if (footer) {
    if (idiomaActual === "es") {
      footer.innerHTML = 'Construido con <span class="text-emerald-400">♥</span> con HTML5 + Tailwind CSS';
    } else {
      footer.innerHTML = 'Built with <span class="text-emerald-400">♥</span> using HTML5 + Tailwind CSS';
    }
  }

  // La bio del hero también tiene negritas de color, igual que el footer
  var bio = document.querySelector("[data-i18n='hero-bio-html']");
  if (bio) {
    if (idiomaActual === "es") {
      bio.innerHTML = 'Desarrollador Full Stack enfocado en soluciones digitales escalables y optimización de experiencia de usuario. Graduado del Bootcamp <strong class="text-emerald-400">Talento Tech (ADSO) 2026</strong>, cursando Ingeniería de Sistemas en <strong class="text-white">UNICATÓLICA</strong>.';
    } else {
      bio.innerHTML = 'Full Stack Developer focused on scalable digital solutions and user experience optimization. <strong class="text-emerald-400">Talento Tech (ADSO) 2026</strong> Bootcamp graduate, studying Systems Engineering at <strong class="text-white">UNICATÓLICA</strong>.';
    }
  }

  // Botón del idioma: si estás en español muestra EN, y al revés
  var boton = document.getElementById("lang-text");
  if (boton) {
    boton.textContent = idiomaActual === "es" ? "EN" : "ES";
  }

  // Cambiar el PDF del CV según el idioma
  var linkCV = document.getElementById("cv-link");
  if (linkCV) {
    if (idiomaActual === "es") {
      linkCV.href = "Cv/Hoja de Vida Ivan Bejarano.pdf";
    } else {
      linkCV.href = "Cv/Hoja de Vida Ivan Bejarano_EN.pdf";
    }
  }

  // Actualizar el atributo lang del HTML (buena práctica de accesibilidad)
  document.documentElement.lang = idiomaActual;
}

// ── Botón para cambiar idioma ────────────────────────────
function botonIdioma() {
  var btn = document.getElementById("lang-toggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    // Fade rápido para que el cambio no se vea brusco
    document.body.style.transition = "opacity 0.15s";
    document.body.style.opacity = "0";

    setTimeout(function () {
      // Alternar entre es y en
      if (idiomaActual === "es") {
        idiomaActual = "en";
      } else {
        idiomaActual = "es";
      }

      localStorage.setItem("idioma", idiomaActual);
      cambiarTextos();
      reiniciarEscritura();

      document.body.style.opacity = "1";
    }, 150);
  });
}

// ── Menú hamburguesa en móvil ────────────────────────────
function menuMovil() {
  var botonMenu = document.getElementById("hamburger");
  var menu      = document.getElementById("mobile-menu");
  if (!botonMenu || !menu) return;

  botonMenu.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
}

function closeMobileMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.remove("open");
}

// ── Animación de escritura en el Hero ───────────────────
var timerEscritura = null;

function animacionEscritura() {
  iniciarEscritura();
}

function reiniciarEscritura() {
  if (timerEscritura) clearTimeout(timerEscritura);
  var texto = document.getElementById("typed-text");
  if (texto) texto.textContent = "";
  iniciarEscritura();
}

function iniciarEscritura() {
  var texto = document.getElementById("typed-text");
  if (!texto) return;

  var frases     = textos[idiomaActual]["typing-words"];
  var cual       = 0;   // qué frase
  var letra      = 0;   // en qué letra vamos
  var borrando   = false;
  var velocidad  = 100;

  function escribir() {
    var fraseActual = frases[cual];

    if (borrando) {
      texto.textContent = fraseActual.substring(0, letra - 1);
      letra--;
      velocidad = 50;
    } else {
      texto.textContent = fraseActual.substring(0, letra + 1);
      letra++;
      velocidad = 100;
    }

    // Terminó de escribir → esperar y empezar a borrar
    if (!borrando && letra === fraseActual.length) {
      borrando  = true;
      velocidad = 2000;
    }

    // Terminó de borrar → pasar a la siguiente frase
    if (borrando && letra === 0) {
      borrando = false;
      cual     = (cual + 1) % frases.length;
      velocidad = 500;
    }

    timerEscritura = setTimeout(escribir, velocidad);
  }

  escribir();
}

// ── Aparición suave de secciones al hacer scroll ────────
function aparecerAlScroll() {
  var elementos = document.querySelectorAll(".reveal");
  if (!elementos.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.12 });

  elementos.forEach(function (el) {
    observer.observe(el);
  });
}

// ── Navbar más compacto al hacer scroll ─────────────────
function navbarAlScroll() {
  var navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      navbar.style.paddingTop    = "0.6rem";
      navbar.style.paddingBottom = "0.6rem";
    } else {
      navbar.style.paddingTop    = "";
      navbar.style.paddingBottom = "";
    }
  });
}

// ── Marcar el link activo en la navbar ──────────────────
function linkActivoNavbar() {
  var secciones = document.querySelectorAll("section[id]");
  var links     = document.querySelectorAll("nav a[href^='#']");
  if (!secciones.length || !links.length) return;

  window.addEventListener("scroll", function () {
    var seccionVisible = "";

    secciones.forEach(function (sec) {
      if (window.scrollY >= sec.offsetTop - 120) {
        seccionVisible = sec.getAttribute("id");
      }
    });

    links.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(seccionVisible)) {
        link.classList.add("active");
      }
    });
  });
}