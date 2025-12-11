const field = document.getElementById('name');
const button = document.querySelector('button');
const numberInput = document.getElementById("numero");
const paragrafo = document.querySelector(".output");

// se proviamo a leggere qui, sarà sempre vuoto
// const nameUser = field.value; //

// console.log("primo tentativo fallace di ritorno valore: ", nameUser);

// let nameUserInterno;

button.addEventListener('click', () => {
    const nameUserInterno = field.value;
    const numeroUser = parseInt(numberInput.value);
    console.log("secondo tentativo da evento click, CB", nameUserInterno, numeroUser);
    // scriviamo output
    paragrafo.innerText = nameUserInterno + numeroUser;
    // pulire i campi
    field.value = "";
    numberInput.value = "";
});

// evento alternativo di input su campo
field.addEventListener("input", () => {
    const nameUserInterno = field.value;
    // output
    paragrafo.innerText = nameUserInterno;
})




// console.log("altro tentativo fallace fuori da CB evento", nameUserInterno);
