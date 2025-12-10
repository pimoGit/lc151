/* 
Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>”, 
il colore del nome deve essere azzurro o rosa a seconda del sesso inserito */



// fase di preparazione
// selezione elemento output
const pOutput = document.getElementById("outputPage");

// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
const nomeUser = prompt("inserisci il tuo nome");
const genere = prompt("scegli tra M e F");

console.log(pOutput, nomeUser, genere);

// Sulla pagina html deve apparire “Ciao <nome>”, 
pOutput.innerText = nomeUser;

// il colore del nome deve essere azzurro o rosa a seconda del sesso inserito */
// let myColor;

// if (genere === "F") {
//     myColor = "pink";
// } else {
//     myColor = "blue";
// }

const myColor = genere === "F" ? "pink" : "blue";

pOutput.style.color = myColor;