
logCurrentTime();

// 10K LOC


outputPageCurrentTime();


// FUNZIONI

// funzione che mi fa un log del tempo corrente
function logCurrentTime() {

    // creo l'oggetto data da pc utente
    const now = new Date();
    // console.log(now);

    // mi creo la stringa con l'ora esatta
    const hour = now.getHours();

    // mi creo la stringa con i minuti esatti
    const minutes = now.getMinutes();

    // mi creo la stringa con i secondi esatti
    const seconds = now.getSeconds();

    // mi compongo la stringa completa di output
    const currentTime = `${hour}:${minutes}:${seconds}`;

    console.log(currentTime);

}

// funzione di log tempo in pagina
function outputPageCurrentTime() {
    // creo l'oggetto data da pc utente
    const now = new Date();
    // console.log(now);

    // mi creo la stringa con l'ora esatta
    const hour = now.getHours();

    // mi creo la stringa con i minuti esatti
    const minutes = now.getMinutes();

    // mi creo la stringa con i secondi esatti
    const seconds = now.getSeconds();

    // mi compongo la stringa completa di output
    const currentTime = `${hour}:${minutes}:${seconds}`;

    document.getElementById("lista_output").innerHTML = currentTime;
}