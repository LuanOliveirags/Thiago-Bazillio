// ===== DESTAQUE ANIMADO PARA PROTOCOLO E PREÇO =====
window.addEventListener('DOMContentLoaded', function() {
  const titulo = document.querySelector('.destaque-titulo');
  const preco = document.querySelector('.destaque-preco');
  if (titulo && preco) {
    // Adiciona animação de brilho
    titulo.style.transition = 'box-shadow 0.7s, color 0.7s';
    preco.style.transition = 'box-shadow 0.7s, color 0.7s';
    setInterval(() => {
      titulo.style.boxShadow = '0 0 32px 8px #ff2e6e88, 0 0 8px 2px #00f7ff88';
      titulo.style.color = '#fff';
      preco.style.boxShadow = '0 0 24px 6px #00f7ff88, 0 0 8px 2px #ff2e6e88';
      preco.style.color = '#fff';
      setTimeout(() => {
        titulo.style.boxShadow = '';
        titulo.style.color = '#ff2e6e';
        preco.style.boxShadow = '';
        preco.style.color = '#fff';
      }, 900);
    }, 3500);
    // Efeito de shake leve ao passar o mouse
    [titulo, preco].forEach(el => {
      el.addEventListener('mouseenter', function() {
        this.style.animation = 'shake-protocolo 0.5s';
      });
      el.addEventListener('mouseleave', function() {
        this.style.animation = '';
      });
    });
    // Adiciona o CSS da animação shake
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
      @keyframes shake-protocolo {
        0% { transform: translateX(0); }
        20% { transform: translateX(-6px); }
        40% { transform: translateX(6px); }
        60% { transform: translateX(-4px); }
        80% { transform: translateX(4px); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(shakeStyle);
  }
});
// ===== MENSAGEM DE BOAS-VINDAS ANIMADA =====
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const welcome = document.createElement('div');
    welcome.textContent = 'Bem-vinda! Prepare-se para transformar seu corpo!';
    welcome.style.cssText = `
      position: fixed;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(90deg, #ff2e6e, #00f7ff);
      color: #fff;
      font-size: 1.2rem;
      padding: 14px 32px;
      border-radius: 30px;
      box-shadow: 0 4px 24px #0005;
      z-index: 2000;
      opacity: 0;
      transition: opacity 0.7s;
      font-family: 'Montserrat', Arial, sans-serif;
      letter-spacing: 1px;
    `;
    document.body.appendChild(welcome);
    setTimeout(() => { welcome.style.opacity = 1; }, 100);
    setTimeout(() => { welcome.style.opacity = 0; }, 3500);
    setTimeout(() => { welcome.remove(); }, 4200);
  }, 800);
});

// ===== ANIMAÇÃO DE PULSO NOS BOTÕES COMPRAR =====
document.querySelectorAll('.btn-comprar').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.animation = 'pulse-btn 0.6s';
  });
  btn.addEventListener('mouseleave', function() {
    this.style.animation = '';
  });
});

const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
  @keyframes pulse-btn {
    0% { transform: scale(1); box-shadow: 0 0 0 #ff2e6e44; }
    50% { transform: scale(1.08); box-shadow: 0 0 16px #ff2e6e44; }
    100% { transform: scale(1); box-shadow: 0 0 0 #ff2e6e44; }
  }
`;
document.head.appendChild(pulseStyle);

// ===== DESTAQUE AO PASSAR O MOUSE NOS CARDS DE RESULTADO =====
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 0 32px 0 #00f7ff55';
    this.style.transform = 'scale(1.04)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.boxShadow = '';
    this.style.transform = '';
  });
});
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
