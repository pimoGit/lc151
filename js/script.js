// defniamo il nostro oggetto palla
const palla = {
    'colore': ["blue", "red"],
    'tipo': "pallina da golf",
    'diametro': 3
}


// modifichiamo valore di una propietà
// palla.diametro = 5; // DOT notation
palla["diametro"] = 5 // Brackets notation




// mi faccio tornare il valore di tipo
console.log(palla.colore[1]);// DOT notation
console.log(palla["colore"]); // Brackets notation

const nomeProp = prompt("inserisci il nome delle prop")

// inserire una nuova prop
palla.peso = 10; // DOT notation
palla[nomeProp] = 10; // Brackets notation

console.log(palla);

// se voglio ciclare l'oggetto per estrarre tutto quello che c'è
for (const chiave in palla) {
    console.log(chiave, palla[chiave]);
}

