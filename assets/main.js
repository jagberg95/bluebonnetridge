// main.js - Enchanted Interactivity for Bluebonnet Ridge

// Hamburger menu toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Smooth scroll for "Explore the Magic" button
const exploreBtn = document.querySelector('a.btn-outline[href="#overview"]');
if (exploreBtn) {
  exploreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('overview').scrollIntoView({ behavior: 'smooth' });
  });
}

// Calendly popup for tour buttons
function openCalendly() {
  window.open('https://calendly.com/', '_blank');
}
['calendlyBtn', 'calendlyBtn2'].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener('click', openCalendly);
});

// Floating petals animation (simple, lightweight)
function createPetal() {
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (4 + Math.random() * 4) + 's';
  petal.style.opacity = 0.5 + Math.random() * 0.5;
  document.querySelector('.floating-petals')?.appendChild(petal);
  setTimeout(() => petal.remove(), 8000);
}
setInterval(createPetal, 1200);

// Petal CSS (injected for demo, move to CSS for production)
const petalStyle = document.createElement('style');
petalStyle.innerHTML = `
.petal {
  position: absolute;
  top: -40px;
  width: 24px; height: 24px;
  background: radial-gradient(circle at 60% 40%, #4A90E2 70%, #fff 100%);
  border-radius: 50% 60% 60% 50% / 60% 50% 60% 50%;
  opacity: 0.7;
  pointer-events: none;
  animation: petal-float linear forwards;
}
@keyframes petal-float {
  0% { transform: translateY(0) scale(1) rotate(0deg); }
  100% { transform: translateY(110vh) scale(0.8) rotate(180deg); }
}`;
document.head.appendChild(petalStyle);
