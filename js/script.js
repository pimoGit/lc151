// volgiamo chiedere all'utente due età e dirgli ci è più vecchio


// SETTAGGIO PARTE INIZIALE
let messaggio;

// INPUT (variabili e dati in ingresso)
// chiediamo a User le età (e le salviamo)
const etaUtente1 = parseInt(prompt("Inserisci la prima età"));
const etaUtente2 = parseInt(prompt("Inserisci la seconda età"));
console.log(etaUtente1, etaUtente2);

// const numberEtaUtente1 = parseInt(etaUtente1);
// console.log(typeof numberEtaUtente1);



// ELABORAZIONE
// valuto se l'età uno è maggiore della due
if (etaUtente1 > etaUtente2) {
    // console.log("Utente uno più vecchio");
    messaggio = "Utente uno più vecchio";
} else if (etaUtente1 < etaUtente2) { // valuto se l'età uno è minore della due
    // console.log("Utente uno più giovane");
    messaggio = "Utente uno più giovane"
} else { // valuto se età sono uguali
    // console.log("Gli Utenti hanno la stessa età");
    messaggio = "Gli Utenti hanno la stessa età";
}


// OUTPUT
console.log(messaggio);
