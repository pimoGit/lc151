// selezione elemento di interazioe
const paragrafo = document.getElementById("outputPage");

// gestisco evennto
paragrafo.addEventListener("click",

    function () {
        if (paragrafo.classList.contains("changeColors")) {
            // rimuovo la calsse
            paragrafo.classList.remove("changeColors");
            // rimetto contenuto originale
            paragrafo.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo accusamus aliquid veniam quos dolore velit pariatur ad iste illum maiores consectetur sit assumenda officia quo, dolor, quas doloribus! Molestias.";

        } else {
            // aggiungo la classe
            paragrafo.classList.add("changeColors");
            // cambio anche contenuto paragrafo
            paragrafo.innerText = "altro contenuto";
        }
        // paragrafo.classList.toggle("changeColors");
    }
);