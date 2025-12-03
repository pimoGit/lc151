const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur'];
const names = [];
const numbers = [1, 2, 3];
const colours = ['Red', 'Blue', 'Yellow'];
const keys = ['q', 'w', 'e', 'r', 't', 'y'];
const countries = ['Bolivia', 'Jordan', 'Greenland'];
const fruits = ['Apple', 'Orange', 'Pear'];

// 1. Aggiungi Fred all'array names
names.push("Fred");
console.log(names);

// 2. Aggiungi 4 alla fine dell'array numbers
numbers.push(4);
console.log(numbers);

// 3. Aggiungi Rio all'inizio dell'array cities
cities.unshift("Rio");
console.log(cities);

// 4. Rimuovi il primo colore dall'array colours
colours.shift();
console.log(colours);

// 5. Rimuovi l'ultimo elemento dall'array keys
keys.pop();
console.log(keys);

// 6. Rimuovi Jordan dall'array countries
// mi ricavo l'indice di posizione dell'elemento
const index = countries.indexOf("Jordan");
console.log(index);

// lo uso un splice per cancellarlo
countries.splice(index, 1);
console.log(countries);


