// creiamo una simulazione di una barra di caricamento


// PREPARAZIONE

// slezioni I/O
const message = document.getElementById("message");
const progressBar = document.querySelector(".progress-bar");
const uploadButton = document.getElementById("upload-button");





// ELABORAZIONE/OUTPUT

// gestione del bottone di upload
uploadButton.addEventListener("click", () => {

    // blocco bottone (disabilitiamo) e cambiamo anche testo del bottone stesso
    uploadButton.disabled = true;
    uploadButton.innerText = "Uploading...";

    // inizializzazione dei valori
    let progress = 0;
    let percentageValue = progress + "%"

    // imposto O sia della barra che del testo al suo interno
    progressBar.innerText = percentageValue;
    progressBar.style.width = percentageValue;

    // gestiamo il progresso dellla barra con incremento valori
    const intervalPerc = setInterval(() => {
        // SE sono alla fine
        if (progress === 100) {
            // fermare l'esecuzione (interval)
            clearInterval(intervalPerc);
            // e gestire O finale
            message.classList.remove("d-none");
            uploadButton.classList.add("d-none");
        } else {
            // ALTRIMENTI aggiorno contatore con relativo O
            percentageValue = ++progress + "%"
            // imposto O sia della barra che del testo al suo interno
            progressBar.innerText = percentageValue;
            progressBar.style.width = percentageValue;
        }


    }, 100);
})


