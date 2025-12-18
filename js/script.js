const students = [
    { id: 1, name: 'Marco', year: 1 },
    { id: 1, name: 'Silvia', year: 2 },
    { id: 1, name: 'Ginevra', year: 1 }
];

const firstYearStudents = students.filter((studentItem) => {
    return studentItem.year === 1
});

console.log(firstYearStudents, students);
