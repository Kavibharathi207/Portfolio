const sections = document.querySelectorAll('.fade-up');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

const sectionsForNav = document.querySelectorAll('main section[id]');
const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.target.id) return;
      const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  { threshold: 0.35 }
);

sectionsForNav.forEach(section => navObserver.observe(section));
