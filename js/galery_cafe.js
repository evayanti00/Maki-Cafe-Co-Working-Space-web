const galleryData = [
  {
  id: 'Area Outdoor',
    title: 'Area Outdoor Maki Cafe',
    img: 'assets/img/od.jpeg', 
  },
  {
    id: 'Area Lantai 1',
    title: 'Area Indoor Maki Cafe Lantai 1',
    img: "assets/img/lt1.jpeg",
  },
  {
    id: 'Area Lantai 2',
    title:'Area Lantai 2 Co-Working Space Maki Cafe',
    img: 'assets/img/lt2.jpeg' ,
  },
  {
    id: 'Area private',
    title: 'Area Private Meeting Room Maki Cafe',
    img: 'assets/img/prv.jpeg' ,
  },
  {
    id: 'nasi-goreng',
    title: 'Nasi Goreng',
    img: "assets/img/nasgor.jpg",
  },
  {
    id: 'double-beef-cheeseburger-fries',
    title: 'Double Beef Cheeseburger + Fries',
    img: "assets/img/beef burger.jpg",
  },
  {
    id: 'crispy-chicken-burger',
    title: 'Crispy Chicken Burger',
    img: 'assets/img/chicken burger.jpg',
  },
  {
    id: 'grilled-chicken-salad',
    title: 'Grilled Chicken Salad',
    img: 'assets/img/chiken grilled n sald.jpg',
  },
  {
    id: 'fish-and-chips',
    title: 'Fish & Chips',
    img: 'assets/img/fish n chips.jpg',
  },
  {
    id: 'spaghetti-aglio-e-olio',
    title: 'Spaghetti Aglio e Olio',
    img: 'assets/img/spagethi.jpg',
  },
  {
    id: 'iced-americano',
    title: 'Iced Americano',
    img: 'assets/img/americano.jpg',
  },
  {
    id: 'caffe-latte',
    title: 'Caffè Latte',
    img: 'assets/img/coffee latte.jpg',
  },
  {
    id: 'cappuccino',
    title: 'Cappuccino',
    img: 'assets/img/cappucino.jpg',
  },
  {
    id: 'iced-tea',
    title: 'Iced Tea',
    img: 'assets/img/teh manis.jpg',
  },
  {
    id: 'lychee-tea',
    title: 'Lychee Tea',
    img: 'assets/img/lechy tea.jpg',
  },
  {
    id: 'hot-green-tea',
    title: 'Hot Green Tea',
    img: 'assets/img/green tea.jpg',
  },
  {
    id: 'hot-black-tea',
    title: 'Hot Black Tea',
    img: 'assets/img/black tea.jpg',
  },
  {
    id: 'hot-chocolate',
    title: 'Hot Chocolate',
    img: 'assets/img/hot chocholate.jpg',
  },
  {
    id: 'banana-milkshake',
    title: 'Banana Milkshake',
    img: 'assets/img/milkshake.jpg',
  },
  {
    id: 'strawberry-banana-smoothie',
    title: 'Strawberry Banana Smoothie',
    img: 'assets/img/smoothie.jpg',
  },
  {
    id: 'iced-matcha-latte',
    title: 'Iced Matcha Latte',
    img: 'assets/img/matcha.jpg',
  },
  {
    id: 'beer-bintang',
    title: 'Beer Bintang',
    img: 'assets/img/beer bintang.jpg',
  },
  {
    id: 'bagel-cream-cheese',
    title: 'Bagel with Cream Cheese',
    img: 'assets/img/begel and cream.jpg',
  },
  {
    id: 'brownies-a-la-mode',
    title: 'Brownies à la Mode',
    img: 'assets/img/brownies.jpg',
  },
  {
    id: 'classic-tiramisu',
    title: 'Classic Tiramisu',
    img: 'assets/img/tiramisu.jpg',
  },
  {
    id: 'chocolate-almond-croissant',
    title: 'Chocolate Almond Croissant',
    img: 'assets/img/croissant.jpg',
  },
  {
    id: 'churros',
    title: 'Churros',
    img: 'assets/img/churros.jpg',
  },
];



const container = document.getElementById('gallery-container');   
const modal      = document.getElementById('modal');               
const modalImg   = document.getElementById('modal-img');           
const closeBtn   = modal?.querySelector('.close');                 
let currentIndex = -1;

function renderGallery() {
  const fragment = document.createDocumentFragment();

  galleryData.forEach((item, idx) => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-card';
    figure.tabIndex = 0; 

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title || 'Galeri Maki Cafe'; 

    const cap = document.createElement('figcaption');
    cap.textContent = item.title;

    
    const open = () => openModal(idx);
    img.addEventListener('click', open);
    figure.addEventListener('click', (e) => {
      
      if (e.target.tagName.toLowerCase() !== 'img') open();
    });
   
    figure.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });

    figure.appendChild(img);
    figure.appendChild(cap);
    fragment.appendChild(figure);
  });

  container.innerHTML = '';
  container.appendChild(fragment);
}


function openModal(index) {
  currentIndex = index;
  const { img, title } = galleryData[currentIndex];
  modalImg.src = img;
  modalImg.alt = title || 'Preview gambar';
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('open');
  closeBtn?.focus();
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
  currentIndex = -1;
}

function showPrev() {
  if (currentIndex < 0) return;
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  const { img, title } = galleryData[currentIndex];
  modalImg.src = img;
  modalImg.alt = title || 'Preview gambar';
}

function showNext() {
  if (currentIndex < 0) return;
  currentIndex = (currentIndex + 1) % galleryData.length;
  const { img, title } = galleryData[currentIndex];
  modalImg.src = img;
  modalImg.alt = title || 'Preview gambar';
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

closeBtn?.addEventListener('click', closeModal);


document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});


function ensureModalNavButtons() {
  if (!modal.querySelector('.modal-prev')) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'modal-prev';
    prevBtn.setAttribute('aria-label', 'Gambar sebelumnya');
    prevBtn.textContent = '‹';
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrev();
    });
    modal.querySelector('.modal-content')?.appendChild(prevBtn);
  }

  if (!modal.querySelector('.modal-next')) {
    const nextBtn = document.createElement('button');
    nextBtn.className = 'modal-next';
    nextBtn.setAttribute('aria-label', 'Gambar berikutnya');
    nextBtn.textContent = '›';
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showNext();
    });
    modal.querySelector('.modal-content')?.appendChild(nextBtn);
  }
}

renderGallery();
ensureModalNavButtons();
