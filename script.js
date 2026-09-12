const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('section, .project-card, .timeline-item').forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(18px)';
  element.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(element);
});

document.querySelectorAll('.is-visible').forEach((element) => {
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
});

const style = document.createElement('style');
style.textContent = '.is-visible{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
