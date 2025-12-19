// setup iniziale
const myOutput = document.getElementById("output");
const endpoint = "https://flynn.boolean.careers/exercises/api/random/int";

// gestiamo la chiamata ajax con axios
axios.get(endpoint)
    .then(response => {
        //codice da eseguire in caso di successo
        const result = response.data;

        console.log(response, result);

        // facciamo output in page
        myOutput.innerText = result.response;


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