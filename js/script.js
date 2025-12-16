const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// parte di setUp
const outputTest = document.getElementById("team-list");

// mi creo var che accumulerà gli elementi di ouput
let outputTotli = "";

// output di prova ciclando l'array di oggetti
for (let index = 0; index < teamMembers.length; index++) {
    // estrapoliamo ogni volta un oggetto membro divero
    const memberTeam = teamMembers[index];

    // andiamo ad ogni giro ad incrementare il contenuto dell'output
    outputTotli = outputTotli + `<li>${memberTeam.name} ${memberTeam.role} ${memberTeam.image}</li>`
}

// inseriamo la stringa completa che innerHTML trasformerà, nell'elemento di output
outputTest.innerHTML = outputTotli;