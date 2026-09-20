const sections = document.querySelectorAll('.section, .hero');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting));
}, { threshold: 0.15 });
sections.forEach((section) => observer.observe(section));

