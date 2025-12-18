const students = [
    { id: 1, name: 'Marco', year: 1 },
    { id: 1, name: 'Silvia', year: 2 },
    { id: 1, name: 'Ginevra', year: 1 }
];

const firstYearStudents = students.filter(studentItem => {
    return studentItem.year === 1
});

console.log(firstYearStudents, students);


// for tradizionale
const firstYearStudents2 = [];

for (let i = 0; i < students.length; i++) {
    const studentItem2 = students[i];

    if (studentItem2.year === 1) {
        firstYearStudents2.push(studentItem2);
    }
}

console.log(firstYearStudents2);
