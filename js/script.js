
// parte di revert della parola
const parolaRevertata = revertaStringa("Ciao") //oaiC
const parolaRevertata2 = revertaStringa("Vacanza")

console.log(parolaRevertata, parolaRevertata2);


// parte di capitalizzazione parola
const inputUser = prompt("inserisci una parola");

const upperString = capitalizzaParola(inputUser);

console.log(upperString);



// const miastrainga = "Simone";
// console.log(miastrainga[1]);


// FUNZIONI

// funzione che mi ritona una stringa capovolta
function revertaStringa(string) {

    let risultato = "";

    for (let i = string.length - 1; i >= 0; i--) {
        risultato = risultato + string[i];
    }

    return risultato

}

// funzione che capitalizza una parola
function capitalizzaParola(parola) {

    // estrapolo primo carattere e lo forzo a maiuscolo
    const primaLettera = parola[0].toUpperCase();
    // estrapolo resto della stringa e la forzo a minuscolo
    const restoParola = parola.substring(1).toLowerCase();

    // riconpongo la parola
    const stringaCompleta = primaLettera + restoParola;

    // ristorno la parola modificata
    return stringaCompleta;

}