// PARTE DI PREPARAZIONE

// selezioniamo tutti i campi (select/input)
const titleField = document.getElementById("title-field");
const nameField = document.getElementById('name-field');
const companyField = document.getElementById('company-field');
const roleField = document.getElementById('role-field');
const emailField = document.getElementById('email-field');
const phoneField = document.getElementById('phone-field');
const picField = document.getElementById('company-pic-field');

// seleziono il form di riferimento
const form = document.querySelector('form');

// seleziono tutti gli elementi di pagina relativi ai campi
const title = document.getElementById("title");
const nameUser = document.getElementById('name');
const company = document.getElementById('company');
const role = document.getElementById('role');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const companyPic = document.getElementById('company-pic');


// PARTE DI ELABORAZIONE
form.addEventListener("submit", (event) => {
    // blocchiamo comportamento di base del form
    event.preventDefault();

    // console.log("hai inviato il form");


    // PARTE DI OUTPUT
    title.innerText = titleField.value;
    nameUser.innerText = nameField.value.trim();
    company.innerText = companyField.value.trim();
    role.innerText = roleField.value.trim();
    email.innerText = emailField.value.trim();
    phone.innerText = phoneField.value.trim();
    companyPic.src = picField.value;

})



