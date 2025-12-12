// creiamo un cronometro

// PREPARAZIONE

// selezioniamo tutti gli elementi di input e output di pagina
// input
const startButton = document.querySelector(".btn-success");
const stopButton = document.querySelector(".btn-danger");
// output
const display = document.getElementById("display");

// variabile globale per interval
let timer;



// ELABORAZIONE (e OUTPUT)

// -------
// gestione dello start
startButton.addEventListener("click", () => {

    // gestire disable dei bottoni
    startButton.disabled = true;
    stopButton.disabled = false;

    // gestiamo il timer
    let seconds = 0;
    display.innerText = seconds;

    // interval con incremento dei secondi
    timer = setInterval(function () {
        // vado a incrementare secondi e aggiorno output
        display.innerText = ++seconds;
    }, 1000);

});


// -------
// gestione dello stop
stopButton.addEventListener("click", () => {
    // gestire disable dei bottoni
    startButton.disabled = false;
    stopButton.disabled = true;

    // blocchiamo il timer
    clearInterval(timer);
})



// FUNZIONI
function incrementTimer(conteggio) {
    // vado a incrementare secondi e aggiorno output
    display.innerText = ++conteggio;
}