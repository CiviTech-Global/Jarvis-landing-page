// ===== NAV SCROLL EFFECT =====
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

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
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== GALLERY CAROUSEL =====
const track = document.querySelector('.gallery-track');
const dots = document.querySelectorAll('.gallery-dot');
const prevBtn = document.querySelector('.gallery-btn-prev');
const nextBtn = document.querySelector('.gallery-btn-next');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentSlide = 0;

function getItemWidth() {
  if (!galleryItems.length) return 0;
  const item = galleryItems[0];
  const style = getComputedStyle(item);
  return item.offsetWidth + parseInt(style.marginRight || 0) + 24; // 24 = gap
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
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function updateActiveItem() {
  galleryItems.forEach((item, i) => {
    item.classList.toggle('active', i === currentSlide);
  });
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => scrollToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => scrollToSlide(currentSlide + 1));
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => scrollToSlide(i));
});

// Update active on scroll
if (track) {
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
}

// Init gallery
if (galleryItems.length) {
  updateActiveItem();
  updateDots();
}

// ===== HERO PARALLAX (Desktop Only) =====
const heroPhone = document.querySelector('.hero-phone-wrapper');
if (heroPhone && window.matchMedia('(min-width: 768px)').matches) {
  document.querySelector('.hero').addEventListener('mousemove', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroPhone.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`;
  });

  document.querySelector('.hero').addEventListener('mouseleave', () => {
    heroPhone.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    heroPhone.style.transition = 'transform 0.5s ease-out';
    setTimeout(() => { heroPhone.style.transition = ''; }, 500);
  });
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
