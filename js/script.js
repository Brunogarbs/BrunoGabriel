// ===== Menu mobile =====
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

btnMobile.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ====== Scroll ===== //
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== Efeito Digitação ===== //
const texto = `Oi, eu sou o Bruno Gabriel, tenho 23 anos e sou apaixonado por tecnologia e inovação. 
Formado em Engenharia da Computação, atuo como desenvolvedor Full Stack, unindo o melhor do front-end e back-end 
para criar soluções práticas e elegantes para web e mobile. 
Adoro transformar ideias em produtos digitais que fazem a diferença no dia a dia das pessoas — e estou sempre buscando aprender e me desafiar com novas tecnologias.`;

const elemento = document.querySelector('.sobre-grid p');
elemento.textContent = '';
elemento.classList.add('typing');

let i = 0;
function digitar() {
  if (i < texto.length) {
    elemento.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 40);
  } else {
    elemento.classList.remove('typing');
  }
}

digitar();


// ===== Carrossel de vídeos ===== //
let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const videos = document.querySelectorAll('.carousel-track video');

function updateCarousel() {
  const videoWidth = videos[0].offsetWidth + 16; // 16 = gap
  track.style.transform = `translateX(-${currentIndex * videoWidth}px)`;
}

function nextVideo() {
  const visibleVideos = Array.from(document.querySelectorAll('.video-wrapper'))
    .filter(v => v.style.display !== 'none');

  if (visibleVideos.length === 0) return; // Nenhum vídeo visível

  if (currentIndex < visibleVideos.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function prevVideo() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}
window.addEventListener('resize', updateCarousel);

// ===== MODAL =====//
function showModal(wrapper) {
  const modal = wrapper.querySelector('.video-modal');
  modal.style.opacity = '1';
}

function hideModal(wrapper) {
  const modal = wrapper.querySelector('.video-modal');
  modal.style.opacity = '0';
}

//===== FIltros ======//
const filters = document.querySelectorAll('.filter');
const wrappers = document.querySelectorAll('.video-wrapper');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    btn.classList.add('active');

    const cat = btn.dataset.cat;

    // Resetar carrossel
    currentIndex = 0;
    updateCarousel();

    wrappers.forEach(wrapper => {
      const match = cat === 'all' || wrapper.dataset.cat === cat;
      wrapper.style.display = match ? 'block' : 'none';
    });
  });
});

// ===== Dark Mode ===== //
function toggleDarkMode(event) {
  event.preventDefault(); // impede o scroll imediato para #home
  document.body.classList.toggle('dark-mode');

  // scroll suave manual para #home
  const homeSection = document.querySelector('#home');
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: 'smooth' });
  }
}





