(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  const themeToggle = document.getElementById('themeToggle');
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  // Menu mobile
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Thème clair/sombre avec préférence sauvegardée
  const THEME_KEY = 'theme-preference';
  const getStoredTheme = () => localStorage.getItem(THEME_KEY);
  const setStoredTheme = (theme) => localStorage.setItem(THEME_KEY, theme);

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
    themeToggle.textContent = theme === 'dark' ? '🌜' : '🌞';
  };

  // Initialisation thème
  (function initTheme() {
    const stored = getStoredTheme();
    if (stored) {
      applyTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  })();

  // Bascule thème
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      setStoredTheme(next);
    });
  }

  // Soumission du formulaire (simulation côté client)
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      // Validation très simple
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        formStatus.textContent = 'Oups, remplis tous les champs 🙂';
        return;
      }

      formStatus.textContent = 'Merci beaucoup ! Ton message est bien reçu 💌';
      form.reset();
    });
  }

  // Défilement doux
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Reveal on scroll (IntersectionObserver)
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (revealElements.length) {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    }, { threshold: 0.2 });

    revealElements.forEach((el) => io.observe(el));
  }

  // Duplicate logos track for seamless marquee
  const track = document.querySelector('.logos .track');
  if (track) {
    const clone = track.cloneNode(true);
    track.parentElement.appendChild(clone);
  }

  // Typewriter effect
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    const texts = [
      "Passionné par la rééducation",
      "Écoute et bienveillance",
      "Exercices thérapeutiques",
      "Prévention et conseils",
      "Accompagnement personnalisé"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause avant de commencer à effacer
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500; // Pause avant de commencer le nouveau texte
      }
      
      setTimeout(typeWriter, typeSpeed);
    }
    
    // Démarrer l'effet après un délai
    setTimeout(typeWriter, 1000);
  }
})();


