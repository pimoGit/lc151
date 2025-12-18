const students = [
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Luigi', lastName: 'Verdi' },
    { firstName: 'Margherita', lastName: 'Bianchi' }
];

// RISULTATO: ['Mario Rossi', 'Luigi Verdi', 'Marghertita Bianchi']

const names = students.map((studentObjet) => {
    return `${studentObjet.firstName} ${studentObjet.lastName}`
});

console.log(names);

// versione forEach
const names2 = [];
students.forEach((studentObjet2) => {
    names2.push(`${studentObjet2.firstName} ${studentObjet2.lastName}`)
});

console.log(names2);

// versione for tradizionale
const names3 = [];
for (let i = 0; i < students.length; i++) {

    const studentObjet3 = students[i];

    names3.push(`${studentObjet3.firstName} ${studentObjet3.lastName}`)
}

console.log(names3);
