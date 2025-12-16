// funzione che somma dei numeri
function sommaNUmeri(...numeri) {

    let somma = 0;

    for (let index = 0; index < numeri.length; index++) {
        const numero = numeri[index];
        somma += numero
    }

    return somma
}

console.log(sommaNUmeri(3, 7, 8, 2, 10));
