const mioOutput = document.getElementById("lista_output");


const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur'];


let gruppoLi = "";

// traversiamo tutto l'array con un ciclo FOR
for (let i = 0; i < cities.length; i++) {

    let cityIesima = cities[i];

    // console.log(cityIesima);

    gruppoLi += `<li class="mioli"> ${cityIesima} </li>`

    console.log(gruppoLi, "all'iterazione del for numero:", i);


}


console.log("fine del ciclo");


mioOutput.innerHTML = gruppoLi;




