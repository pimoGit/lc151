const list = document.querySelector(".list");
const names = ['Qui', 'Quo', 'Qua'];



// versione con innerHTML
let items = '';

for (let i = 0; i < names.length; i++) {
    items += `<li>${names[i]}</li>`;
    console.log(items, "iterazione numero: ", i);

}

list.innerHTML = items;


// versione con createElement e append
for (let i = 0; i < names.length; i++) {
    // creo un elemento <li> reale
    const li = document.createElement('li');
    // inserisco il contenuto 
    li.append(names[i]);
    // aggiungo il <li> creato e modificato con il contenuto nel <ul>
    list.appendChild(li);
}