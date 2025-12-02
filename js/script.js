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

