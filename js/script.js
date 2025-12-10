// parte di preparazione
// selezione elemento di hamburger
const menuButton = document.getElementById("menu-toggle");
// selezioniamo elemento di mobile
const mobileMenu = document.querySelector(".mobile-menu");

// gestione apertura menù
menuButton.addEventListener("click",
    function () {
        // apri sto maledetto menù
        mobileMenu.classList.add("active");
    }
)