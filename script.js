(function () {
  let contentData = null;

  // Load content from JSON file
  async function loadContent() {
    try {
      const response = await fetch('./content.json');
      contentData = await response.json();
      populateContent();
    } catch (error) {
      console.error('Error loading content:', error);
      // Fallback to default content if JSON fails to load
      useDefaultContent();
    }
  }

  // Use default content as fallback
  function useDefaultContent() {
    contentData = {
      personal: { name: "Cylian Lacoppola" },
      meta: { 
        title: "Cylian Lacoppola — Étudiant en Kinésithérapie",
        description: "Étudiant en kinésithérapie — présentation, services encadrés, et contact."
      },
      navigation: [
        { href: "#accueil", text: "Accueil" },
        { href: "#apropos", text: "À propos" },
        { href: "#services", text: "Services" },
        { href: "#competences", text: "Compétences" },
        { href: "#temoignages", text: "Témoignages" },
        { href: "#contact", text: "Contact" }
      ],
      hero: {
        greeting: "Étudiant en 3ème année de Kinésithérapie 👋",
        typewriterTexts: ["Passionné par la rééducation", "Écoute et bienveillance"]
      }
    };
    populateContent();
  }

  // Populate all content from JSON
  function populateContent() {
    if (!contentData) return;

    // Update meta tags
    updateMetaTags();
    
    // Populate navigation
    populateNavigation();
    
    // Populate hero section
    populateHero();
    
    // Populate about section
    populateAbout();
    
    // Populate services section
    populateServices();
    
    // Populate logos section
    populateLogos();
    
    // Populate skills section
    populateSkills();
    
    // Populate testimonials section
    populateTestimonials();
    
    // Populate contact section
    populateContact();
    
    // Populate footer
    populateFooter();
    
    // Update schema.org
    updateSchemaOrg();
    
    // Initialize interactive features
    initializeFeatures();
  }

  function updateMetaTags() {
    const { meta, personal } = contentData;
    
    document.getElementById('page-title').textContent = meta.title;
    document.getElementById('page-description').setAttribute('content', meta.description);
    document.getElementById('og-title').setAttribute('content', meta.ogTitle);
    document.getElementById('og-description').setAttribute('content', meta.ogDescription);
    document.getElementById('brand-name').textContent = personal.name;
  }

  function populateNavigation() {
    const nav = document.getElementById('main-navigation');
    nav.innerHTML = contentData.navigation.map(item => 
      `<li><a href="${item.href}">${item.text}</a></li>`
    ).join('');
  }

  function populateHero() {
    const { hero, personal } = contentData;
    
    document.getElementById('hero-title').textContent = hero.greeting;
    document.getElementById('hero-subtitle').textContent = personal.subtitle;
    
    const actionsContainer = document.getElementById('hero-actions');
    actionsContainer.innerHTML = hero.buttons.map(button => 
      `<a class="${button.class}" href="${button.href}" data-reveal>${button.text}</a>`
    ).join('');
  }

  function populateAbout() {
    const { about, personal } = contentData;
    
    document.getElementById('about-title').textContent = about.title;
    
    const contentContainer = document.getElementById('about-content');
    contentContainer.innerHTML = about.paragraphs.map(p => 
      `<p data-reveal>${p}</p>`
    ).join('');
    
    const highlightsList = document.getElementById('about-highlights');
    highlightsList.innerHTML = about.highlights.map(highlight => 
      `<li>${highlight}</li>`
    ).join('');
    
    const profileInfo = document.getElementById('profile-info');
    profileInfo.textContent = `${personal.university} • ${personal.year} • ${personal.ranking}`;
    
    const badgesContainer = document.getElementById('about-badges');
    badgesContainer.innerHTML = about.badges.map(badge => 
      `<span class="badge">${badge}</span>`
    ).join('');
  }

  function populateServices() {
    const { services } = contentData;
    
    document.getElementById('services-title').textContent = services.title;
    document.getElementById('services-note').textContent = services.note;
    
    const cardsContainer = document.getElementById('services-cards');
    cardsContainer.innerHTML = services.items.map(service => 
      `<article class="card service">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>`
    ).join('');
  }

  function populateLogos() {
    const track = document.getElementById('logos-track');
    const logos = contentData.logos;
    
    track.innerHTML = logos.map((logo, index) => 
      `<span class="logo ${index % 2 === 0 ? 'bounce' : ''}">${logo}</span>`
    ).join('');
  }

  function populateSkills() {
    const { skills } = contentData;
    
    document.getElementById('skills-title').textContent = skills.title;
    
    const badgesContainer = document.getElementById('skills-badges');
    badgesContainer.innerHTML = skills.items.map(skill => 
      `<span class="badge">${skill}</span>`
    ).join('');
  }

  function populateTestimonials() {
    const { testimonials } = contentData;
    
    document.getElementById('testimonials-title').textContent = testimonials.title;
    
    const container = document.getElementById('testimonials-container');
    container.innerHTML = testimonials.items.map(testimonial => 
      `<blockquote class="card">
        <p>« ${testimonial.quote} »</p>
        <cite>— ${testimonial.author}</cite>
      </blockquote>`
    ).join('');
  }

  function populateContact() {
    const { contact } = contentData;
    
    document.getElementById('contact-title').textContent = contact.title;
    document.getElementById('contact-description').textContent = contact.description;
    
    // Quick links
    const quickLinksContainer = document.getElementById('contact-quick-links');
    quickLinksContainer.innerHTML = contact.quickLinks.map(link => 
      `<a class="btn" href="${link.href}">${link.text}</a>`
    ).join('');
    
    // Form fields
    const fieldsContainer = document.getElementById('contact-form-fields');
    fieldsContainer.innerHTML = contact.form.fields.map(field => {
      if (field.type === 'textarea') {
        return `<div class="form-row">
          <label for="${field.id}">${field.label}</label>
          <textarea id="${field.id}" name="${field.id}" rows="${field.rows}" 
                    placeholder="${field.placeholder}" ${field.required ? 'required' : ''}></textarea>
          ${field.hint ? `<div class="hint">${field.hint}</div>` : ''}
        </div>`;
      } else {
        return `<div class="form-row">
          <label for="${field.id}">${field.label}</label>
          <input id="${field.id}" name="${field.id}" type="${field.type}" 
                 placeholder="${field.placeholder}" ${field.required ? 'required' : ''} />
          ${field.hint ? `<div class="hint">${field.hint}</div>` : ''}
        </div>`;
      }
    }).join('');
    
    // Form buttons
    const actionsContainer = document.getElementById('contact-form-actions');
    actionsContainer.innerHTML = contact.form.buttons.map(button => 
      `<button type="${button.type}" class="${button.class}">${button.text}</button>`
    ).join('');
  }

  function populateFooter() {
    document.getElementById('footer-text').textContent = contentData.footer.text;
  }

  function updateSchemaOrg() {
    const { personal } = contentData;
    const schemaScript = document.getElementById('schema-org');
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": personal.name,
      "description": personal.title,
      "email": `mailto:${personal.email}`
    };
    schemaScript.textContent = JSON.stringify(schemaData, null, 2);
  }

  // Initialize all interactive features
  function initializeFeatures() {
    initMobileMenu();
    initThemeToggle();
    initContactForm();
    initSmoothScroll();
    initRevealOnScroll();
    initLogosMarquee();
    initTypewriter();
  }

  // Mobile menu functionality
  function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('nav');
    
    if (navToggle && nav) {
      navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
      });
    }
  }

  // Theme toggle functionality
  function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const THEME_KEY = 'theme-preference';
    
    const getStoredTheme = () => localStorage.getItem(THEME_KEY);
    const setStoredTheme = (theme) => localStorage.setItem(THEME_KEY, theme);

    const applyTheme = (theme) => {
      document.documentElement.dataset.theme = theme;
      themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
      themeToggle.textContent = theme === 'dark' ? '🌜' : '🌞';
    };

    // Initialize theme
    const stored = getStoredTheme();
    if (stored) {
      applyTheme(stored);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Theme toggle event
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.dataset.theme || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        setStoredTheme(next);
      });
    }
  }

  // Contact form functionality
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Simple validation
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
          formStatus.textContent = 'Oups, remplis tous les champs 🙂';
          return;
        }

        formStatus.textContent = 'Merci beaucoup ! Ton message est bien reçu 💌';
        form.reset();
      });
    }
  }

  // Smooth scroll functionality
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  // Reveal on scroll functionality
  function initRevealOnScroll() {
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
  }

  // Logos marquee functionality
  function initLogosMarquee() {
    const track = document.getElementById('logos-track');
    if (track) {
      const clone = track.cloneNode(true);
      track.parentElement.appendChild(clone);
    }
  }

  // Typewriter effect functionality
  function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement && contentData?.hero?.typewriterTexts) {
      const texts = contentData.hero.typewriterTexts;
      
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
          typeSpeed = 2000; // Pause before deleting
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          typeSpeed = 500; // Pause before new text
        }
        
        setTimeout(typeWriter, typeSpeed);
      }
      
      // Start typewriter effect after delay
      setTimeout(typeWriter, 1000);
    }
  }

  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadContent);
  } else {
    loadContent();
  }
})();


