// ===== Menu mobile =====
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

btnMobile.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ===== Filtro de projetos =====
const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.item');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter.active').classList.remove('active');
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    items.forEach(item => {
      item.style.display = cat === 'all' || item.dataset.cat === cat ? 'block' : 'none';
    });
  });
});

// ===== Modal de detalhes =====
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalVideo = document.getElementById('modal-video');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');

items.forEach(item => {
  item.addEventListener('click', () => {
    modalTitle.textContent = item.querySelector('figcaption').textContent;
    modalVideo.src = item.querySelector('video').src.replace('-thumb', '');
    modalDesc.textContent = 'Descrição detalhada do projeto.';
    modalLink.href = '#'; // link real
    modal.classList.remove('hidden');
  });
});

document.getElementById('modal-close').onclick = () => modal.classList.add('hidden');
window.onclick = e => e.target === modal && modal.classList.add('hidden');

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