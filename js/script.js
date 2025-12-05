// Invocazione/esecuzione funzione
const somma1 = sommaNumeri(49, 2);
const somma2 = sommaNumeri(5, 7);


// console.log(sommaNumeri(49, 2));


// 100LOC
// somma 
// somma...

const totaleAddizionato = somma1 + somma2;
const totaleMoltiplicato = somma1 * somma2;


console.log(totaleAddizionato, totaleMoltiplicato);



// console.log(somma, somma2); // 51

sommaAlert(5, 10);
// console.log(sommaNumeri(49, 2));


// console.log(risultato); // "ReferenceError: risultato is not defined





// FUNZIONI
// Dichiarazione funzione

// funzione che somma due numeri e ritorna il risultato
function sommaNumeri(num1, num2) {

    const risultato = num1 + num2;

    return risultato;

}

// funzione che somma due numeri e fa oputput del risultato direttamente in alert
function sommaAlert(num1, num2) {
    alert(num1 + num2);
}