const people = [
    { id: 4, name: 'Paolo', age: 32 },
    { id: 3, name: 'Clelia', age: 34 },
];

// trova la person con id 3
const myPerson = people.find((person) => {
    return person.id === 3;
});

//RISULTATO: { id: 3, name: 'Clelia', age: 34 }

console.log(myPerson);


// versione con for tradizionale
let myPerson2;

for (let i = 0; i < people.length; i++) {
    const person2 = people[i];

    if (person2.id === 3) {
        myPerson2 = person2;
    }
}

console.log(myPerson2);
