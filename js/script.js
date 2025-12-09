let messaggio;
const outputEl = document.getElementById("lista_output");

// lista invitati
const invitati = ["Francesca", "Mario", "Filippa", "Mattia"];

//  input nome utente
const UserName = prompt("inserisci il tuo nome, per vedere se sei stato invitato");

// check se utente è presente nella lista
const isInvited = isInArray(invitati, UserName);

console.log(isInvited);


// output per l'iutente
// if (isInvited) {
//     messaggio = "sei stato invitato";
// } else {
//     messaggio = "Non sei stato invitato";
// }

messaggio = isInvited ? "sei stato invitato" : "Non sei stato invitato";

outputEl.innerHTML = messaggio;
