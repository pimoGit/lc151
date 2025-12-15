/* 
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.
 */

//  * Crea 10 oggetti che rappresentano una zucchina, 
//  * indicandone per ognuno varietà, peso e lunghezza.

const zucchine = [
    { varieta: "Nera di Milano", peso: 250, lunghezza: 18 },
    { varieta: "Romanesca", peso: 300, lunghezza: 22 },
    { varieta: "Chiara di Faenza", peso: 280, lunghezza: 20 },
    { varieta: "Tonda di Nizza", peso: 350, lunghezza: 12 },
    { varieta: "Lunga Fiorentina", peso: 400, lunghezza: 30 },
    { varieta: "Striata d'Italia", peso: 270, lunghezza: 19 },
    { varieta: "Bianca Triestina", peso: 320, lunghezza: 24 },
    { varieta: "Greyzini", peso: 290, lunghezza: 21 },
    { varieta: "Cocozelle", peso: 360, lunghezza: 26 },
    { varieta: "Nera di Milano", peso: 310, lunghezza: 23 }
];

//  * Calcola quanto pesano tutte le zucchine.

// settiamo una var per accumulare il totale dei pesi
let sommaPesoZucchine = 0;

// cicliamo la lista delle zucchine
for (let index = 0; index < zucchine.length; index++) {

    // estrapoliamo ogni volta una zucchina diversa
    const zucchina = zucchine[index];

    console.log(zucchina.peso);
    // incrementiamo il peso totale
    sommaPesoZucchine = sommaPesoZucchine + zucchina.peso;

    console.log("il progresso della somma è: ", sommaPesoZucchine);


}


// stampiamo il peso totale
console.log("il peso totale delle zucchine è: ", sommaPesoZucchine);
