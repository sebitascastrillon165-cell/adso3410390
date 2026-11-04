// ==========================================
// MENÚ HAMBURGUESA
// ==========================================
const mburger = document.getElementById('mburger');
const options = document.querySelector('nav.options');

if (mburger && options) {
  mburger.addEventListener('click', function () {
    this.classList.toggle('active');
    options.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace (mejor UX en móvil)
  options.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mburger.classList.remove('active');
      options.classList.remove('active');
    });
  });
}

// ==========================================
// FUNCIONALIDAD DE LOS CARRUSELES
// ==========================================
function setupCarousel(carouselId, prevBtnId, nextBtnId) {
  const carousel = document.getElementById(carouselId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  if (!carousel || !prevBtn || !nextBtn) return;

  // Calcula dinámicamente el ancho de la tarjeta + el gap
  const getStep = () => {
    const card = carousel.querySelector('.card, .actors');
    if (!card) return 300;
    const styles = getComputedStyle(carousel);
    const gap = parseFloat(styles.columnGap || styles.gap) || 32;
    return card.clientWidth + gap;
  };

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: getStep(), behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });
}

// Inicializar carruseles
setupCarousel('carouselCartelera', 'prevBtnCartelera', 'nextBtnCartelera');
setupCarousel('carouselActores', 'prevBtnActores', 'nextBtnActores');

// ==========================================
// RESIZE — recalcular scroll al cambiar de tamaño
// ==========================================
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.querySelectorAll('.carousel').forEach(c => {
      c.scrollTo({ left: 0, behavior: 'auto' });
    });
  }, 250);
});