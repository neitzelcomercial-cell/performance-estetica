/* ============================================
   PERFORMANCE — Estética & Bem-Estar
   Interactivity & Animations
   ============================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     PARTICLES
     ========================================== */
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.width = p.style.height = (2 + Math.random() * 5) + 'px';
      p.style.animationDuration = (6 + Math.random() * 8) + 's';
      p.style.animationDelay = Math.random() * 10 + 's';
      p.style.opacity = 0.2 + Math.random() * 0.3;
      particlesContainer.appendChild(p);
    }
  }

  /* ==========================================
     NAVBAR
     ========================================== */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ==========================================
     MOBILE MENU
     ========================================== */
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('open');
      });
    });
  }

  /* ==========================================
     SCROLL SPY
     ========================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => spyObserver.observe(s));

  /* ==========================================
     SMOOTH SCROLL
     ========================================== */
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ==========================================
     REVEAL ON SCROLL
     ========================================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .team-single-card, .contact-card, .gallery-item').forEach(el => {
    el.style.animationPlayState = 'paused';
    revealObserver.observe(el);
  });

  /* ==========================================
     HERO PARALLAX
     ========================================== */
  const heroBg = document.getElementById('heroBgLogo');
  if (heroBg) {
    document.getElementById('hero').addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      heroBg.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  /* ==========================================
     CONSOLE BRANDING
     ========================================== */
  console.log(
    '%c Performance ',
    'background: linear-gradient(135deg, #f43f5e, #ec4899); color: white; font-size: 18px; font-weight: bold; padding: 10px 20px;'
  );
  console.log(
    '%c Estética & Bem-Estar — Sua beleza, nossa paixão',
    'color: #f43f5e; font-size: 12px;'
  );
});
