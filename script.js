const button = document.querySelector('.button');
button?.addEventListener('click', () => {
  document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' });
});

const cards = document.querySelectorAll('.card, .step');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

cards.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});
