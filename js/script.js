
const numeRandom = generaNumRandInRange(50, 150);

const nuovoNumRandom = generaNumRandInRange(30, 90);

console.log(numeRandom, nuovoNumRandom);

// const numeRandom = Math.floor(Math.random() * (150 - 50)) + 50;

console.log(valutaPariODispari(numeRandom), valutaPariODispari(nuovoNumRandom));




// FUNZIONI
// funzione che genera un numero random in un range (min-max)
function generaNumRandInRange(min, max) {

    const risultato = Math.floor(Math.random() * (max - min)) + min;

    return risultato
}

// funzione che mi indica se un numero è pari o dispari
function valutaPariODispari(numero) {

    if (numero % 2 === 0) {
        return "pari";
    } else {
        return "dispari"
    }

}

