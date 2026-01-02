document.querySelectorAll('.menu-card').forEach(card => {
  const descEl = card.querySelector('.desc');
  if (!descEl) return;


  if (!card.querySelector('.hover-desc')) {
    const overlay = document.createElement('div');
    overlay.className = 'hover-desc';
    overlay.textContent = descEl.textContent; 
    card.appendChild(overlay);
  }
});


const buttons = document.querySelectorAll('.filter-container button');
const cards = document.querySelectorAll('.menu-card');

function applyFilter(category) {
  cards.forEach(card => {
    const isMatch = category === 'all' || card.classList.contains(category);

    card.hidden = !isMatch;
  });


  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
}


applyFilter('all');


buttons.forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
});


const modal = document.getElementById('modal');
const mImg = document.getElementById('modal-img');
const mTitle = document.getElementById('modal-title');
const mDesc = document.getElementById('modal-description');
const mPrice = document.getElementById('modal-price');


document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    const title = card.querySelector('h2');
    const desc = card.querySelector('.desc');
    const price = card.querySelector('.price');

    if (img)  mImg.src = img.getAttribute('src');
    if (img)  mImg.alt = img.getAttribute('alt') || 'Menu';
    if (title) mTitle.textContent = title.textContent || '';
    if (desc)  mDesc.textContent = desc.textContent || '';
    if (price) mPrice.textContent = price.textContent || '';

    modal.classList.add('open');
  });
});

window.closeModal = function(){ modal.classList.remove('open'); };
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
``


