const miaLIsta = document.getElementById("lista_output");

console.log(miaLIsta);


// stampiamo in log i numeri da 100 a 1

// console.log(0,1,2,3);

//  usiamo un ciclo FOR per farlo
for (let i = 99; i >= 1; i--) {
    if (i % 2 === 1) { // se il numero è dispari
        let contenutoUlMomentaneo = miaLIsta.innerHTML;
        console.log(contenutoUlMomentaneo);
        // miaLIsta.innerHTML = miaLIsta.innerHTML + `<li> il numero è ${i} </li>`;
        miaLIsta.innerHTML += `<li> il numero è ${i} </li>`;
    }
    // console.log(i);

}

console.log("fine ciclo");


for (let index = 0; index < 10; index++) {
    // istruzioni da ripetere
    console.log(index);

}

// console.log(index);


let index = 0;
while (index < 10) {
    // istruzioni da ripetere
    console.log(index);
    // istruzione che ci porta ad uscire dal ciclo
    index++;
}
console.log("il valore di index fuori dal ciclo è: ", index);



while (condizione) {

    // istruzione che ad un certo punto porterà a false la condizione
}

do {
    // fai quello che devi dal ciclo almeno una volta
} while (condition);