const arr1 = [2, 4, 7, 8];
const arr2 = [12, 14, 17, 18]

// NON crea una clone ma duplica il ref allo stesso array
const arrCopiaFinta = arr1;

// clone array reale
const arrCopiaReale = [...arr1, 18, 20];

arr1.push(10);

// nuovo array con concatenazione di altri due
const arrTotale = [...arr1, ...arr2, 33];

console.log(arrTotale);

