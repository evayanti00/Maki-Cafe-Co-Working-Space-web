
(() => {
  const imgs = Array.from(document.querySelectorAll('.gallery-card img'));
  if (!imgs.length) return;

  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalContent = modal.querySelector('.modal-content');
  const closeEl = modal.querySelector('.close');
  let currentIndex = 0;
  const prevBtn = document.createElement('button');
  prevBtn.className = 'modal-prev';
  prevBtn.setAttribute('aria-label', 'Previous');
  prevBtn.innerHTML = '&#8249;';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'modal-next';
  nextBtn.setAttribute('aria-label', 'Next');
  nextBtn.innerHTML = '&#8250;';

  modalContent.appendChild(prevBtn);
  modalContent.appendChild(nextBtn);

  function openModal(i) {
    currentIndex = i;
    const src = imgs[i].getAttribute('src');
    const alt = imgs[i].getAttribute('alt') || '';
    modalImg.style.opacity = 0;
    modalImg.onload = () => {
      modalImg.style.opacity = 1;
      modalImg.onload = null;
    };
    modalImg.src = src;
    modalImg.alt = alt;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeEl.focus();
  }

  window.closeModal = function () {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    document.body.style.overflow = '';
  };

  imgs.forEach((img, i) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openModal(i));
  });

  closeEl.addEventListener('click', window.closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) window.closeModal();
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    openModal(currentIndex);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % imgs.length;
    openModal(currentIndex);
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') window.closeModal();
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % imgs.length;
      openModal(currentIndex);
    }
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
      openModal(currentIndex);
    }
  });

})();
