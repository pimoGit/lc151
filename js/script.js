const list = document.querySelector(".list");
const names = ['Qui', 'Quo', 'Qua'];

let items = '';

for (let i = 0; i < names.length; i++) {
    items += `<li>${names[i]}</li>`;
    console.log(items, "iterazione numero: ", i);

}

list.innerHTML = items;