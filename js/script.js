const field = document.getElementById('name');
const button = document.querySelector('button');

// se proviamo a leggere qui, sarà sempre vuoto
const nameUser = field.value; //

console.log("primo tentativo fallace di ritorno valore: ", nameUser);

// let nameUserInterno;

button.addEventListener('click', () => {
    const nameUserInterno = field.value;
    console.log("secondo tentativo da evento click, CB", nameUserInterno);
});


// console.log("altro tentativo fallace fuori da CB evento", nameUserInterno);
