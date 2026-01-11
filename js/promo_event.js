console.log("Script sudah jalan");

// bagian generate gambar otomatis
const images = [
  { src: "assets/img/promo1.png", alt: "promo"},
  { src: "assets/img/promo2.png", alt: "promo"},
  { src: "assets/img/event.png", alt: "event"},
];

const promoSection = document.getElementById("promoEvent");

images.forEach(img => {
  const div = document.createElement("div");
  div.classList.add("img-container");

  const images = document.createElement("img");
  images.src = img.src;
  images.alt = img.alt;
  images.classList.add("clickable");

  div.appendChild(images);
  promoSection.appendChild(div);
});

// bagian modal
const modal = document.getElementById("modal");
const modalimg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("close");


document.querySelectorAll(".clickable").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalimg.src = img.src;
    captionText.textContent = img.alt;
  });
});

//Tombol close
closeBtn.onclick = () => {
  modal.style.display = "none";
};

//Tambahan: klik di luar gambar untuk menutup modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
