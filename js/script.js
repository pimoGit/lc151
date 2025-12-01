// volgiamo chiedere all'utente due parole e dirgli quale è più lunga


// SETTAGGIO PARTE INIZIALE
let messaggio;

// INPUT (variabili e dati in ingresso)
// chiediamo a User le età (e le salviamo)
const parola1 = prompt("Inserisci la prima parola");
const parola2 = prompt("Inserisci la seconda parola");
console.log(parola1, parola2);

// const numberEtaUtente1 = parseInt(etaUtente1);
// console.log(typeof numberEtaUtente1);
const lungParola1 = parola1.length;
const lungParola2 = parola2.length;



// ELABORAZIONE
// valuto se la prima parola  è più lunga della seconda
if (lungParola1 > lungParola2) {
    // console.log("Utente uno più vecchio");
    messaggio = "parola  è più lunga della seconda";
} else if (lungParola1 < lungParola2) { // valuto se la prima parola  è più corta della seconda
    // console.log("Utente uno più giovane");
    messaggio = "prima parola  è più corta della seconda"
} else { // valuto se le parole sono lunghe uguali
    // console.log("Gli Utenti hanno la stessa età");
    messaggio = "le parole sono lunghe uguali";
}


// OUTPUT
console.log(messaggio);
document.getElementById("mio_id").innerHTML = messaggio;
