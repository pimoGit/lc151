const people = [
    {
        firstName: 'Marco',
        lastName: 'Lanci',
        age: 35,
    },
    {
        firstName: 'Antonio',
        lastName: 'Nicodemo',
        age: 16,
    },
    {
        firstName: 'Luigi',
        lastName: 'Versi',
        age: 14,
    },
    {
        firstName: 'Mario',
        lastName: 'Rossi',
        age: 18,
    },
];


const drivingPeople = people.map(person => {
    const { firstName, lastName, age } = person;
    const canDrive = age >= 18 ? 'può' : 'non può';

    // let canDrive2 = undefined;
    // if (age >= 18) {
    //     canDrive2 = 'può';
    // } else {
    //     canDrive2 = 'non può';
    // }

    return `${firstName} ${lastName} ${canDrive} guidare`;
})

console.log(drivingPeople);