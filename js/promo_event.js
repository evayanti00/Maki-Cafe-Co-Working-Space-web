console.log("Script sudah jalan");

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

closeBtn.onclick = () => {
  modal.style.display = "none";
};







