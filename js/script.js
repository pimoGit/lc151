// selezione elemento di interazioe
const paragrafo = document.getElementById("outputPage");

// gestisco evennto
paragrafo.addEventListener("click",

    function () {
        if (paragrafo.classList.contains("changeColors")) {
            // rimuovo la calsse
            paragrafo.classList.remove("changeColors");
        } else {
            // aggiungo la classe
            paragrafo.classList.add("changeColors");
        }
    }
);