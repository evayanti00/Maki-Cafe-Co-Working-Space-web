document.addEventListener('DOMContentLoaded', () => {
    /* klik header kembali ke home */
    const header = document.getElementById('header');
    if (header) {
        header.addEventListener('click', () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    
/* slideshow otomatis */
const slides = document.querySelector('.slides');
    const slideImages = slides.querySelectorAll('img');
    const totalSlides = slideImages.length;
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;
        slides.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }
    /* auto slide tiap 5 detik */
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
    /* tampilkan slide pertama saat halaman load*/
    showSlide(0);
});

