const students = [
    {
        id: 1,
        name: 'Luca Bianchi',
        age: 32,
        userClass: '3C',
        vote: 9
    },
    {
        id: 2,
        name: 'Andrea Rossi',
        age: 18,
        userClass: '4A',
        vote: 7
    },
    {
        id: 3,
        name: 'Giovanni Verdi',
        age: 33,
        userClass: '5B',
        vote: 7
    },
    {
        id: 4,
        name: 'Francesco Esposito',
        age: 25,
        userClass: '5B',
        vote: 7
    },
    {
        id: 5,
        name: 'Matteo Ferri',
        age: 57,
        userClass: '5B',
        vote: 10
    },
];

// Stampa in console i nomi di tutti gli studenti
students.forEach((student) => {
    console.log(student.name);

})

// Crea un array con la lista  di tutti i nomi degli studenti
const studentsName = students.map((student) => {
    return student.name
})
console.log(studentsName);

// Crea un array che contenga solo gli studenti dai 30 anni in più
const studentsOver30 = students.filter((student) => {
    return student.age >= 30

    // if(student.age >= 30){
    //     return true
    // } else {
    //     return false
    // }


});
console.log(studentsOver30);


// Trova lo studente con id 4
const studentId4 = students.find((student) => {
    return student.id === 4
});

console.log(studentId4);
