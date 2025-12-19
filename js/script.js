// setup iniziale
// selezione degli elementi del DOM
const myOutput = document.getElementById("output");
const outputPlayUno = document.getElementById("playeruno");
const outputPlayDue = document.getElementById("playerdue");
const playButton = document.querySelector("button");


// setup dei ref a valori
const numDice = 2;
const numMin = 1;
const numMax = 6;
const endpoint = `https://flynn.boolean.careers/exercises/api/array/integers?min=${numMin}&max=${numMax}&items=${numDice}`;



// avvio gioco
playDice();

// se utente clicca rigioca
playButton.addEventListener("click", playDice);




// Funzione gioco
function playDice() {

    // ripuliamo output dadi
    myOutput.innerHTML = "";
    outputPlayUno.innerHTML = "";
    outputPlayDue.innerHTML = "";

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

            // creiamo le img
            const img1 = document.createElement("img");
            img1.src = `img/${playerUnoNum}.png`;

            const img2 = document.createElement("img");
            img2.src = `img/${playerDueNum}.png`;

            // output dei numeri
            outputPlayUno.appendChild(img1);
            outputPlayDue.appendChild(img2);

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

}
