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


// ===== Calculo de idade ===== //
const nascimento = new Date(2002, 6, 7); // ANO, MES, DIA
const hoje = new Date();
let idade = hoje.getFullYear() - nascimento.getFullYear();
const m = hoje.getMonth() - nascimento.getMonth();
if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
  idade--;
}
document.getElementById('idade').textContent = idade;

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



