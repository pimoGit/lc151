// parte di preparazione
// selezione elemento di hamburger
const menuButton = document.getElementById("menu-toggle");
// selezioniamo elemento di mobile
const mobileMenu = document.querySelector(".mobile-menu");
// seleziono elemento di chiusura
const closeButton = document.querySelector(".close");

// gestione apertura menù
menuButton.addEventListener("click", () => mobileMenu.classList.add("active"));

// gestione chiusura menù
closeButton.addEventListener("click",
    () => {
        // chiudi sto maledetto menù
        mobileMenu.classList.remove("active");
    }
)