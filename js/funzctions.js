//  prevedere una funzione che accetti due argomenti un array e un valore 
//  e ci ritorni un boolenao che ci dice se il valore è presente nell'array

const isInArray = (myArray, myValue) => {

    // setto una variabile di flag/stato che mi indicherà se è stato trovato
    let found = false;

    // cerchiamo nell'array il valore
    for (let i = 0; i < myArray.length; i++) {

        let elementNumI = myArray[i];

        if (elementNumI === myValue) {
            found = true;
        }

    }


    // ritorno il valore della variabile flag/stato
    return found
}