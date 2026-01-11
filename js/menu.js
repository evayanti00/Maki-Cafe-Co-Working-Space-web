
const menuData = [
  // --- MAKANAN ---
  {
    id: 'nasi-goreng',
    title: 'Nasi Goreng',
    desc: 'Nasi goreng berbumbu khas Indonesia dengan potongan ayam, telur mata sapi, mentimun, tomat, dan daun bawang.',
    price: 'Rp 32.000',
    category: 'makanan',
    img: 'assets/img/nasgor.jpg' ,
  },
  {
    id: 'double-beef-cheeseburger-fries',
    title: 'Double Beef Cheeseburger + Fries',
    desc: 'Dua lapis beef patty juicy, cheddar meleleh, selada, saus spesial, dengan kentang goreng renyah.',
    price: 'Rp 75.000',
    category: 'makanan',
    img: "assets/img/beef burger.jpg",
  },
  {
    id: 'crispy-chicken-burger',
    title: 'Crispy Chicken Burger',
    desc: 'Ayam crispy dengan selada segar dan mayo spesial dalam roti lembut.',
    price: 'Rp 48.000',
    category: 'makanan',
    img: 'assets/img/chicken burger.jpg',
  },
  {
    id: 'grilled-chicken-salad',
    title: 'Grilled Chicken Salad',
    desc: 'Ayam panggang juicy, avocado, jagung, tomat cherry, mentimun, dan creamy herb dressing.',
    price: 'Rp 55.000',
    category: 'makanan',
    img: 'assets/img/chiken grilled n sald.jpg',
  },
  {
    id: 'fish-and-chips',
    title: 'Fish & Chips',
    desc: 'Ikan goreng tepung renyah, kentang goreng, lemon, dan saus tartar.',
    price: 'Rp 58.000',
    category: 'makanan',
    img: 'assets/img/fish n chips.jpg',
  },
  {
    id: 'spaghetti-aglio-e-olio',
    title: 'Spaghetti Aglio e Olio',
    desc: 'Spaghetti dengan minyak zaitun, bawang putih, cabai kering, parsley, dan parmesan.',
    price: 'Rp 48.000',
    category: 'makanan',
    img: 'assets/img/spagethi.jpg',
  },

  // --- MINUMAN ---
  {
    id: 'iced-americano',
    title: 'Iced Americano',
    desc: 'Espresso dingin dengan es, pahit segar dan clean.',
    price: 'Rp 22.000',
    category: 'minuman',
    img: 'assets/img/americano.jpg',
  },
  {
    id: 'caffe-latte',
    title: 'Caffè Latte',
    desc: 'Espresso dengan steamed milk creamy dan latte art.',
    price: 'Rp 25.000',
    category: 'minuman',
    img: 'assets/img/coffee latte.jpg',
  },
  {
    id: 'cappuccino',
    title: 'Cappuccino',
    desc: 'Espresso, susu, dan foam lembut; taburan kayu manis.',
    price: 'Rp 25.000',
    category: 'minuman',
    img: 'assets/img/cappucino.jpg',
  },
  {
    id: 'iced-tea',
    title: 'Iced Tea',
    desc: 'Teh hitam dingin manis dalam jar berisi es.',
    price: 'Rp 10.000',
    category: 'minuman',
    img: 'assets/img/teh manis.jpg',
  },
  {
    id: 'lychee-tea',
    title: 'Lychee Tea',
    desc: 'Teh dingin dengan buah leci dan daun mint.',
    price: 'Rp 18.000',
    category: 'minuman',
    img: 'assets/img/lechy tea.jpg',
  },
  {
    id: 'hot-green-tea',
    title: 'Hot Green Tea',
    desc: 'Teh hijau hangat, rasa earthy lembut.',
    price: 'Rp 12.000',
    category: 'minuman',
    img: 'assets/img/green tea.jpg',
  },
  {
    id: 'hot-black-tea',
    title: 'Hot Black Tea',
    desc: 'Teh hitam panas klasik, aroma pekat.',
    price: 'Rp 10.000',
    category: 'minuman',
    img: 'assets/img/black tea.jpg',
  },
  {
    id: 'hot-chocolate',
    title: 'Hot Chocolate',
    desc: 'Coklat panas rich & creamy dengan whipped cream.',
    price: 'Rp 25.000',
    category: 'minuman',
    img: 'assets/img/hot chocholate.jpg',
  },
  {
    id: 'banana-milkshake',
    title: 'Banana Milkshake',
    desc: 'Milkshake pisang kental dengan whipped cream.',
    price: 'Rp 28.000',
    category: 'minuman',
    img: 'assets/img/milkshake.jpg',
  },
  {
    id: 'strawberry-banana-smoothie',
    title: 'Strawberry Banana Smoothie',
    desc: 'Smoothie stroberi & pisang, segar dan kental.',
    price: 'Rp 30.000',
    category: 'minuman',
    img: 'assets/img/smoothie.jpg',
  },
  {
    id: 'iced-matcha-latte',
    title: 'Iced Matcha Latte',
    desc: 'Matcha premium dengan susu segar, disajikan dingin.',
    price: 'Rp 28.000',
    category: 'minuman',
    img: 'assets/img/matcha.jpg',
  },
  {
    id: 'beer-bintang',
    title: 'Beer Bintang',
    desc: 'Bir Bintang dingin menyegarkan.',
    price: 'Rp 35.000',
    category: 'minuman',
    img: 'assets/img/beer bintang.jpg',
  },

  // --- DESSERT ---
  {
    id: 'bagel-cream-cheese',
    title: 'Bagel with Cream Cheese',
    desc: 'Bagel hangat dengan wijen & poppy, cream cheese lembut.',
    price: 'Rp 18.000',
    category: 'dessert',
    img: 'assets/img/begel and cream.jpg',
  },
  {
    id: 'brownies-a-la-mode',
    title: 'Brownies à la Mode',
    desc: 'Brownies fudgy dengan satu scoop vanilla ice cream, saus karamel & cokelat.',
    price: 'Rp 32.000',
    category: 'dessert',
    img: 'assets/img/brownies.jpg',
  },
  {
    id: 'classic-tiramisu',
    title: 'Classic Tiramisu',
    desc: 'Ladyfinger kopi, mascarpone lembut, taburan cocoa powder dengan raspberry.',
    price: 'Rp 38.000',
    category: 'dessert',
    img: 'assets/img/tiramisu.jpg',
  },
  {
    id: 'chocolate-almond-croissant',
    title: 'Chocolate Almond Croissant',
    desc: 'Croissant flaky dengan cokelat premium dan almond slice.',
    price: 'Rp 28.000',
    category: 'dessert',
    img: 'assets/img/croissant.jpg',
  },
  {
    id: 'churros',
    title: 'Churros',
    desc: 'Churros goreng keemasan, renyah di luar, balutan gula halus.',
    price: 'Rp 18.000',
    category: 'dessert',
    img: 'assets/img/churros.jpg',
  },
];


function createMenuCard(item) {
  const card = document.createElement('div');
  card.className = `menu-card ${item.category}`;
  card.dataset.id = item.id;

  const imgEl = document.createElement('img');
  imgEl.src = item.img || IMG_PLACEHOLDER;
  imgEl.alt = item.title || 'Menu';
  imgEl.loading = 'lazy';
  imgEl.decoding = 'async';
  imgEl.onerror = () => {
    imgEl.onerror = null;
    imgEl.src = IMG_PLACEHOLDER;
    imgEl.classList.add('img-fallback');
  };

  const titleEl = document.createElement('h2');
  titleEl.textContent = item.title;

  const descEl = document.createElement('p');
  descEl.className = 'desc';
  descEl.textContent = item.desc;

  const priceEl = document.createElement('p');
  priceEl.className = 'price';
  priceEl.textContent = item.price;

  const overlay = document.createElement('div');
  overlay.className = 'hover-desc';
  overlay.textContent = item.desc;

  card.appendChild(imgEl);
  card.appendChild(titleEl);
  card.appendChild(descEl);
  card.appendChild(priceEl);
  card.appendChild(overlay);

  
  card.addEventListener('click', () => openModal(item));
  return card;
}

const container = document.getElementById('menu-container');

function renderMenu(category = 'all') {
  
  container.innerHTML = '';
  const frag = document.createDocumentFragment();

  const data = category === 'all'
    ? menuData
    : menuData.filter(it => it.category === category);

  data.forEach(item => frag.appendChild(createMenuCard(item)));
  container.appendChild(frag);

  
  document.querySelectorAll('.filter-container button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
}


function debounce(fn, wait = 160) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}


function renderMenuItems(items) {
  container.innerHTML = '';
  const frag = document.createDocumentFragment();
  items.forEach(item => frag.appendChild(createMenuCard(item)));
  container.appendChild(frag);
}

function handleSearchInput(e) {
  const q = (e.target.value || '').trim().toLowerCase();
  const announce = document.getElementById('searchResultAnnounce');
  if (!q) {
    renderMenu('all');
    if (announce) announce.textContent = '';
    return;
  }
  const filtered = menuData.filter(item =>
    item.title.toLowerCase().includes(q) ||
    (item.desc && item.desc.toLowerCase().includes(q)) ||
    (item.category && item.category.toLowerCase().includes(q)) ||
    (item.price && item.price.toLowerCase().includes(q))
  );
  renderMenuItems(filtered);
  if (announce) announce.textContent = `${filtered.length} hasil untuk "${e.target.value}"`;
}


document.querySelectorAll('.filter-container button').forEach(btn => {
  btn.addEventListener('click', () => {
    const searchEl = document.getElementById('menuSearch');
    if (searchEl) searchEl.value = '';
    renderMenu(btn.dataset.filter);
  });
});


const searchEl = document.getElementById('menuSearch');
if (searchEl) searchEl.addEventListener('input', debounce(handleSearchInput, 180));

const modal = document.getElementById('modal');
const mImg = document.getElementById('modal-img');
const mTitle = document.getElementById('modal-title');
const mDesc = document.getElementById('modal-description');
const mPrice = document.getElementById('modal-price');

function openModal(item) {
  mImg.src = item.img || IMG_PLACEHOLDER;
  mImg.alt = item.title || 'Menu';
  mTitle.textContent = item.title || '';
  mDesc.textContent = item.desc || '';
  mPrice.textContent = item.price || '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

window.closeModal = closeModal;
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
const closeBtn = document.getElementById('closeModal');
if (closeBtn) closeBtn.addEventListener('click', closeModal);


renderMenu('all');