// ===== NAV SCROLL EFFECT =====
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
  // Trigger on load in case page is already scrolled
  nav.classList.toggle('scrolled', window.scrollY > 50);
}

// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = hamburger.classList.contains('active');
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');

    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && mobileMenu.classList.contains('open')) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ===== INTERSECTION OBSERVER — SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== GALLERY CAROUSEL (Index page only) =====
const track = document.querySelector('.gallery-track');
if (track) {
  const dots = document.querySelectorAll('.gallery-dot');
  const prevBtn = document.querySelector('.gallery-btn-prev');
  const nextBtn = document.querySelector('.gallery-btn-next');
  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentSlide = 0;

  function getItemWidth() {
    if (!galleryItems.length) return 0;
    const item = galleryItems[0];
    const style = getComputedStyle(item);
    return item.offsetWidth + parseInt(style.marginRight || 0) + 24;
  }

  function scrollToSlide(index) {
    if (index < 0) index = 0;
    if (index >= galleryItems.length) index = galleryItems.length - 1;
    currentSlide = index;
    const itemWidth = getItemWidth();
    const trackWidth = track.offsetWidth;
    const scrollPos = (itemWidth * index) - (trackWidth / 2) + (itemWidth / 2);
    track.scrollTo({ left: scrollPos, behavior: 'smooth' });
    updateDots();
    updateActiveItem();
  }

  function updateDots() {
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
  }

  function updateActiveItem() {
    galleryItems.forEach((item, i) => item.classList.toggle('active', i === currentSlide));
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => scrollToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => scrollToSlide(currentSlide + 1));
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => scrollToSlide(i)));

  track.addEventListener('scroll', () => {
    const itemWidth = getItemWidth();
    if (itemWidth === 0) return;
    const scrollCenter = track.scrollLeft + track.offsetWidth / 2;
    const newIndex = Math.round((scrollCenter - itemWidth / 2) / itemWidth);
    if (newIndex !== currentSlide && newIndex >= 0 && newIndex < galleryItems.length) {
      currentSlide = newIndex;
      updateDots();
      updateActiveItem();
    }
  });

  updateActiveItem();
  updateDots();
}

// ===== HERO PARALLAX (Index page, desktop only) =====
const heroPhone = document.querySelector('.hero-phone-wrapper');
const heroSection = document.querySelector('.hero');
if (heroPhone && heroSection && window.matchMedia('(min-width: 768px)').matches) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroPhone.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`;
  });

  heroSection.addEventListener('mouseleave', () => {
    heroPhone.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    heroPhone.style.transition = 'transform 0.5s ease-out';
    setTimeout(() => { heroPhone.style.transition = ''; }, 500);
  });
}

// ===== ACCORDION (Investors page) =====
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains('open');

    // Close all other accordions in same group
    item.closest('.accordion')?.querySelectorAll('.accordion-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.accordion-body').style.maxHeight = null;
      }
    });

    // Toggle current
    item.classList.toggle('open', !isOpen);
    const body = item.querySelector('.accordion-body');
    if (!isOpen) {
      body.style.maxHeight = body.scrollHeight + 'px';
    } else {
      body.style.maxHeight = null;
    }
  });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
