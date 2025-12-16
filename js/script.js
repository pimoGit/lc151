const myArr = ["primo valore", "secondo valore", "terzo valore", "quarto valore"];

// const primoValore = myArr[0];
// const secondoValore = myArr[1];
// const quartoValore = myArr[3];

const [primoValore, secondoValore, , quartoValore] = myArr;


console.log(primoValore, secondoValore, quartoValore);
