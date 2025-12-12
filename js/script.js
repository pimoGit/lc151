// generiamo un conutdown di capodanno

// selezioniamo l'elemento di output
const myOutput = document.getElementById("show");

// variabile di inizio conteggio
let seconds = 10;

// // inseriamo output aggiornato secondi
myOutput.innerText = seconds;

// gestiamo ogni secondo l'aggiornamento dell'output
const clock = setInterval(() => {
    // SE siamo alla fine (secondi sono 0) - fermiamo il conteggio e diamo messaggio nuovo
    if (seconds === 0) {
        // blocco la ripetizione temporale
        clearInterval(clock);
        myOutput.innerText = "Bauo anno!!!!";
    } else {
        // decrementiamo seconds
        seconds = seconds - 1;
        // inseriamo output aggiornato secondi
        myOutput.innerText = seconds;
    }

}, 1000)
// ogni secondo scala una unità
