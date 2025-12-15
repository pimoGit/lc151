// defniamo il nostro array di oggetti classi
const classi =

    [

        {
            'nome': 'Classe 1',
            'numero_studenti': 10,
            'studenti': ["Alessia", "Mattia"]
        },

        {
            'nome': 'Classe 2',
            'numero_studenti': 15
        }

    ];





// modifichiamo valore di una propietà
// palla.diametro = 5; // DOT notation
// const primaClasse = classi[0];

classi[0].nome = "Classe 1 nuovo nome";

// console.log(classi[0].nome);




// mi faccio tornare il valore di tipo
const numeStudetiClasse2 = classi[1].numero_studenti;
// console.log(numeStudetiClasse2);


// inserire una nuova prop
classi[0].insegnate = "nuovo insegante";

// ritornare il primo studente della prima classe
const primoStudente = classi[0].studenti[0];
// console.log(primoStudente);


// inseriasco una nuova classe alla fine
const nuovoObjClasse = {
    'nome': 'Classe 3',
    'numero_studenti': 25
}

classi.push(nuovoObjClasse);


// console.log(classi);


// se voglio ciclare l'oggetto per estrarre tutto quello che c'è
for (let index = 0; index < classi.length; index++) {
    const classeIesima = classi[index];
    console.log(classeIesima);

    // console.log("ilnome della classe è :", classeIesima.nome, "e ha tot parteciapnti", classeIesima.numero_studenti);

    for (const key in classeIesima) {

        const valoreClasse = classeIesima[key];

        console.log(key, valoreClasse);

    }

}

