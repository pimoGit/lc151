// setup iniziale
// selezione degli elementi del DOM
const myOutput = document.getElementById("output");
const outputPlayUno = document.getElementById("playeruno");
const outputPlayDue = document.getElementById("playerdue");


// setup dei ref a valori
const numDice = 2;
const numMin = 1;
const numMax = 6;
const endpoint = `https://flynn.boolean.careers/exercises/api/array/integers?min=${numMin}&max=${numMax}&items=${numDice}`;

// gestiamo la chiamata ajax con axios
axios.get(endpoint)
    .then(response => {
        //codice da eseguire in caso di successo
        const result = response.data;

        console.log(response, result);

        // estrapoliamo i due numeri e li assegniamo agli utenti
        // const playerUnoNum = result.response[0];
        // const playerDueNum = result.response[1];
        const [playerUnoNum, playerDueNum] = result.response;
        // const [playerUnoNum, playerDueNum] = [2, 2];

        console.log(playerUnoNum, playerDueNum);

        // settiamo var di messaggio
        let message = "pareggio";

        // output dei numeri
        outputPlayUno.innerText = playerUnoNum;
        outputPlayDue.innerText = playerDueNum;

        // condizioni per output messaggio vincita
        if (playerUnoNum > playerDueNum) message = "Ha vinto il primo giocatore";
        else if (playerUnoNum < playerDueNum) message = "Ha vinto il secondo giocatore";

        // output messsaggio finale
        myOutput.innerText = message;

    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error.message)
    })
    .finally(() => {
        // codice da eserguire a prescindere dall'esito
        // (ad esempio si può fermare un loader!)
        console.log("fatto tutto, fine della chiamata");
    })