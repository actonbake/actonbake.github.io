// ========================================
// GSAP ScrollTrigger - Stacked Card Peel
// ========================================
gsap.registerPlugin(ScrollTrigger);

// Pin the hero section while the products card "peels" over it
const cardSections = gsap.utils.toArray('.card-section');

// Hero pinning: hero stays fixed while first card scrolls over
ScrollTrigger.create({
  trigger: '.section-hero',
  start: 'top top',
  end: 'bottom top',
  pin: true,
  pinSpacing: false,
});

// Each card section peels over the previous one
cardSections.forEach((section, i) => {
  if (i < cardSections.length - 1) {
    ScrollTrigger.create({
      trigger: section,
      start: 'bottom bottom',
      end: () => '+=' + section.offsetHeight,
      pin: true,
      pinSpacing: false,
    });
  }
});

// ========================================
// Navbar scroll effect
// ========================================
ScrollTrigger.create({
  trigger: '.section-story',
  start: 'top 80px',
  onEnter: () => document.getElementById('topnav').classList.add('scrolled'),
  onLeaveBack: () => document.getElementById('topnav').classList.remove('scrolled'),
});

// ========================================
// Fade-up animations
// ========================================
gsap.utils.toArray('.fade-up').forEach((el, i) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    onEnter: () => el.classList.add('is-visible'),
  });
});

// Stagger product cards
const productCards = gsap.utils.toArray('.product-card.fade-up');
productCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

// ========================================
// Mobile menu toggle
// ========================================
const menuToggle = document.querySelector('.menu-toggle');
const topnavLinks = document.querySelector('.topnav-links');

menuToggle.addEventListener('click', () => {
  topnavLinks.classList.toggle('open');
});

topnavLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    topnavLinks.classList.remove('open');
  });
});

// ========================================
// Filter buttons
// ========================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});
