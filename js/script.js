const numbers = [3, 51, 2, 70, 8, 12, 13, 33];

console.log("la lunghezza dell'array numbers é: ", numbers.length);



// stampiamo  i numeri dispari dell'array
for (let i = 0; i < numbers.length; i++) {

    let numberIesimo = numbers[i];

    // stampiamo solo i numeri (dell'array) che sono dispari
    if (numberIesimo % 2 !== 0) {
        // console.log("al giro del for numero", i, "le'lemento dellarray è: ", numberIesimo);
        console.log(numberIesimo);
    }

}

// stampiano tutti i numeri dispari da 1 a 100

// for (let i = 1; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }

// }