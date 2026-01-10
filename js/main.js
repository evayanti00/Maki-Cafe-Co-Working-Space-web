// Daftar button text + link
const buttons = [
    {text: "Home", link: "index.html" },
    {text: "Menu", link: "menu.html" },
    {text: "Gallery Cafe", link: "galeri_cafe.html" },
    {text: "Promo & Event", link: "promosi_event.html" },
    {text: "Contact & Lokasi", link: "contact.html" }
];

// ambil container
const filterContainer = document.getElementById("filterContainer");

buttons.forEach(btn => {
    const button = document.createElement("button");
    button.textContent = btn.text;
    button.addEventListener("click", () => {
        window.location.href = btn.link;
    });
    filterContainer.appendChild(button);
});

