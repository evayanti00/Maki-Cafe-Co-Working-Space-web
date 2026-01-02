
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

/*console.log("JS aktif");
console.log("Jumlah gambar:", images.length);*/

let index = 0;
let autoSlide;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
  clearInterval(autoslide);
  startAutoSlide();
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

startAutoSlide();