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
  const titleElement = document.querySelector('.parallax-1 h1');
  if (titleElement) {
    typewriterEffect(titleElement, 'Luan Gs', 100);
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
