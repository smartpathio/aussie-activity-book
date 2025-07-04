 // Efekt przycisku CTA (hover + focus)
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.boxShadow = "0 4px 16px #81c784aa";
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener('mouseout', () => {
    btn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
    btn.style.transform = "scale(1)";
  });
  btn.addEventListener('focus', () => {
    btn.style.outline = "2px solid #26a69a";
    btn.style.outlineOffset = "2px";
  });
  btn.addEventListener('blur', () => {
    btn.style.outline = "none";
  });
});

// Automatyczny slider opinii rodziców
const reviews = [
  "“My daughter loves the bright pages and fun puzzles – perfect for rainy days in Sydney!”",
  "“A wonderful activity book that keeps my kids engaged and learning without screens. Highly recommend!”",
  "“Great value for money and perfect for car trips and holidays.”"
];
let reviewIndex = 0;
const reviewSlider = document.querySelector('.testimonials-list');
function showReview() {
  if (reviewSlider) {
    reviewSlider.innerHTML = `<blockquote>${reviews[reviewIndex]}</blockquote>`;
    reviewIndex = (reviewIndex + 1) % reviews.length;
  }
}
if (reviewSlider) {
  showReview();
  setInterval(showReview, 5000);
}

// Płynne przewijanie do sekcji po kliknięciu w linki nawigacyjne (jeśli dodasz menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animacje fade-in dla sekcji podczas scrollowania
const faders = document.querySelectorAll('.fade-in');
function fadeInOnScroll() {
  faders.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
