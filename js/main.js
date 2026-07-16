/* =============================================
   MATHIAS AUTO LOCKSMITH — main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* --- NAV: scroll class --- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- NAV: mobile hamburger --- */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- NAV: mark active page --- */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPath = href.replace(/\/$/, '') || '/';
    if (linkPath === currentPath) link.classList.add('active');
  });

  /* --- FAQ ACCORDION --- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all others
      document.querySelectorAll('.faq-item.open').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.toggle('open', !isOpen);
    });
  });

  /* --- CONTACT FORM: success banner --- */
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('sent') === '1') {
    const banner = document.getElementById('form-success');
    if (banner) {
      banner.style.display = 'block';
      banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

});
