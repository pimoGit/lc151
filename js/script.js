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
// const outputTest = document.getElementById("team-list");
const teamContainer = document.querySelector(".team-container");

// selezione di elementi form
const form = document.getElementById("member-form");
const nameField = document.getElementById('name');
const roleField = document.getElementById('role');
const imageField = document.getElementById('image');

// chiamo funzione per renderizzare la lista mebri
rederTeam(teamMembers, teamContainer);



// funzioni dell'APP

// funzione che fa il rendering completo delle card dei membri del team
function rederTeam(arraRef, outputEL) {
    // mi creo var che accumulerà gli elementi di ouput
    let cards = "";

    // output di prova ciclando l'array di oggetti
    for (let index = 0; index < arraRef.length; index++) {
        // estrapoliamo ogni volta un oggetto membro divero
        const memberTeam = arraRef[index];

        // destrutturiamo l'oggetto
        // const { name, image, role } = memberTeam;

        // andiamo ad ogni giro ad incrementare il contenuto dell'output
        cards += createMemberCard(memberTeam);
    }

    // inseriamo la stringa completa che innerHTML trasformerà, nell'elemento di output
    outputEL.innerHTML = cards;
}

// funzione che genera la card ricevendo oggetto dal quale prendere le info
function createMemberCard(memebrObj) {

    const card = `
    <div class="team-card">
            <div class="card-image">
                <img src="img/${memebrObj.image}" alt="${memebrObj.name}" />
            </div >
        <div class="card-text">
            <h3>${memebrObj.name}</h3>
            <p>${memebrObj.role}</p>
        </div>
    </div >
        `;

    return card

}