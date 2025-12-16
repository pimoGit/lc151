const person = {
    firstName: 'Marco',
    lastName: 'Lanci',
    age: 37,
    year: 1986
}
// const nomeUtente = person.firstName;
// const cognomeUtente = person.lastName;
// const etaUtente = person.age;


// destructuring
const { firstName: nomeUtente, lastName: cognomeUtente, age: etaUtente } = person;

console.log(nomeUtente, cognomeUtente, etaUtente);

const outputCont = document.getElementById("container");

const template = `<div>${nomeUtente}</div>
<div>${cognomeUtente}</div>
<div>${etaUtente}</div>`;

outputCont.innerHTML = template;