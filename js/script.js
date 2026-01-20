// ===== FRASES MOTIVACIONAIS ROTATIVAS =====
const motivationalPhrases = [
  'Transforme seu corpo, sua energia e sua vida.',
  'Acredite no seu potencial!',
  'O seu futuro começa agora!',
  'Desafie seus limites todos os dias.',
  'Você é mais forte do que imagina!',
  'Resultados incríveis começam com uma decisão.'
];

function rotateMotivationalPhrase() {
  const phraseElement = document.querySelector('.parallax-2 h3');
  if (!phraseElement) return;
  let idx = 0;
  setInterval(() => {
    phraseElement.textContent = motivationalPhrases[idx];
    idx = (idx + 1) % motivationalPhrases.length;
  }, 3500);
}

window.addEventListener('DOMContentLoaded', rotateMotivationalPhrase);

// ===== EFEITO DE PARTÍCULAS NO FUNDO =====
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-bg';
  Object.assign(particlesContainer.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 0,
    overflow: 'hidden',
  });
  document.body.appendChild(particlesContainer);

  for (let i = 0; i < 36; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 8 + 4;
    Object.assign(particle.style, {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #00ffd0, #ff2e6e)',
      opacity: Math.random() * 0.5 + 0.2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      filter: 'blur(0.5px)',
      transition: 'all 1s',
    });
    particlesContainer.appendChild(particle);
  }

  function animateParticles() {
    const particles = particlesContainer.querySelectorAll('.particle');
    particles.forEach(particle => {
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = Math.random() * 0.5 + 0.2;
    });
  }
  setInterval(animateParticles, 3500);
}

window.addEventListener('DOMContentLoaded', createParticles);

$(document).ready(function () {
    // Menu mobile toggle
    $(".menubar").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });

    // Fechar menu ao clicar em um link
    $(".nav-link").click(function() {
        $("#menubar").prop("checked", false);
    });
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== ANIMAÇÃO DE DIGITAÇÃO NO TÍTULO =====
function typewriterEffect(element, text, speed = 100) {
  element.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Ativar typewriter quando a página carrega
window.addEventListener('load', function() {
  const titleElement = document.querySelector('.hero-title');
  if (titleElement) {
    typewriterEffect(titleElement, 'Thiago Bazillio', 80);
  }
  // Animação de destaque no botão CTA
  const ctaBtn = document.querySelector('.btn-cta');
  if (ctaBtn) {
    setInterval(() => {
      ctaBtn.style.boxShadow = '0 0 24px 6px #00ffd088';
      setTimeout(() => ctaBtn.style.boxShadow = '0 2px 12px #0005', 600);
    }, 2000);
  }
});

// ===== BOTÃO VOLTAR AO TOPO =====
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<ion-icon name="arrow-up-outline"></ion-icon>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 247, 255, 0.9), rgba(0, 247, 255, 0.7));
  border: 2px solid #00f7ff;
  color: #000;
  font-size: 24px;
  cursor: pointer;
  display: none;
  z-index: 999;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 247, 255, 0.4);
  align-items: center;
  justify-content: center;
`;

document.body.appendChild(scrollToTopBtn);

// Mostrar/esconder botão e animar
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'flex';
    scrollToTopBtn.style.animation = 'slideInUp 0.5s ease-out';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Função de scroll ao topo
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hover effects
scrollToTopBtn.addEventListener('mouseenter', function() {
  this.style.background = 'linear-gradient(135deg, #00f7ff, #00d9ff)';
  this.style.transform = 'scale(1.1)';
  this.style.boxShadow = '0 10px 30px rgba(0, 247, 255, 0.6)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
  this.style.background = 'linear-gradient(135deg, rgba(0, 247, 255, 0.9), rgba(0, 247, 255, 0.7))';
  this.style.transform = 'scale(1)';
  this.style.boxShadow = '0 5px 20px rgba(0, 247, 255, 0.4)';
});

// ===== CONTADOR ANIMADO NAS SKILLS =====
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 50);
  
  function updateCounter() {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current) + '%';
      setTimeout(updateCounter, 50);
    } else {
      element.textContent = target + '%';
    }
  }
  
  updateCounter();
}

// ===== INDICADOR DE SEÇÃO ATIVA =====
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.module, .conteudo, .conteudo1');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight) {
      // Seção ativa
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => link.style.color = 'var(--light)');
    }
  });
});

// ===== PARALLAX MELHORADO =====
window.addEventListener('scroll', function() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach(element => {
    const scrollPosition = window.scrollY;
    const elementOffset = element.offsetTop;
    const distance = scrollPosition - elementOffset;
    
    element.style.backgroundPosition = `50% ${distance * 0.5}px`;
  });
});

// ===== SCROLL REVEAL MELHORADO =====
window.sr = ScrollReveal({ reset: false });

sr.reveal('.logo', {
  origin: 'top',
  distance: '50px',
  duration: 800,
  delay: 0,
  rotate: { x: 0, y: 80, z: 0 },
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
});

sr.reveal('.skill-card', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 300,
  interval: 100,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
});

sr.reveal('.social-links', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  delay: 200,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
});

sr.reveal('.motivation-text', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
});

// ===== EFEITO DE RIPPLE AO CLICAR =====
document.querySelectorAll('.skill-card, .social-btn, .contact-btn').forEach(element => {
  element.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(0, 247, 255, 0.5);
      border-radius: 50%;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      animation: ripple-animation 0.6s ease-out;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// ===== ANIMAÇÃO DE RIPPLE =====
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple-animation {
    to {
      width: 300px;
      height: 300px;
      opacity: 0;
      left: -150px;
      top: -150px;
    }
  }
`;
document.head.appendChild(style);

// ===== FADE IN AO SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.conteudo, .conteudo1').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.8s ease-out';
  observer.observe(el);
});

// ===== ESTILO DINÂMICO PARA BOTÕES DE COMPRA =====
function styleAllBuyButtons() {
  const style = document.createElement('style');
  style.innerHTML = `
    .btn-comprar {
      font-size: 1.5rem !important;
      font-weight: bold !important;
      padding: 18px 64px !important;
      border-radius: 16px !important;
      background: linear-gradient(90deg, #ff2e6e 60%, #00ffd0 100%) !important;
      color: #fff !important;
      border: none !important;
      box-shadow: 0 0 24px 4px #ff2e6e55, 0 0 32px 8px #00ffd055 !important;
      transition: background 0.3s, transform 0.2s, box-shadow 0.2s, filter 0.2s !important;
      letter-spacing: 1px !important;
      text-shadow: 0 2px 8px #0008 !important;
      cursor: pointer !important;
      animation: destaque-btn-pop 2.5s infinite alternate !important;
      filter: brightness(1.08) drop-shadow(0 0 12px #ff2e6e88) !important;
      display: inline-block !important;
    }
    .btn-comprar:hover {
      background: linear-gradient(90deg, #00ffd0 60%, #ff2e6e 100%) !important;
      color: #181c2f !important;
      transform: scale(1.07) !important;
      box-shadow: 0 8px 32px #00ffd088, 0 4px 16px #ff2e6e88 !important;
      filter: brightness(1.18) drop-shadow(0 0 18px #00ffd0) !important;
    }
    @keyframes destaque-btn-pop {
      0% { filter: brightness(1); }
      100% { filter: brightness(1.18) drop-shadow(0 0 12px #ff2e6e); }
    }
  `;
  document.head.appendChild(style);
}
window.addEventListener('DOMContentLoaded', styleAllBuyButtons);
