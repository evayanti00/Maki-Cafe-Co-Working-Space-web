
// Galeri: buka modal saat gambar diklik
const modal   = document.getElementById('modal');
const mImg    = document.getElementById('modal-img');
const mTitle  = document.getElementById('modal-title');
const mDesc   = document.getElementById('modal-description');

document.querySelectorAll('.gallery-card').forEach(card => {
  const img = card.querySelector('img');
  const cap = card.querySelector('figcaption');
  card.addEventListener('click', () => {
    mImg.src = img.currentSrc || img.src;
    mImg.alt = img.alt || 'Foto Galeri';
    mTitle.textContent = cap?.textContent || 'Foto';
    mDesc.textContent  = img.dataset.desc || '';
    modal.classList.add('open');
  });
});

// Tutup modal
window.closeModal = () => modal.classList.remove('open');
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
