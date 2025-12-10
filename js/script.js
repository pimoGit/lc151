const element = document.querySelector('.red');

const elementSaluto = document.getElementById("saluto");



console.log(typeof element);

const text = element.innerHTML;

console.log(text);

element.innerHTML = "<span> altro...</span>";



// elementSaluto.className = "titolo";
// elementSaluto.className = elementSaluto.classList + " titolo";
elementSaluto.classList.add("titolo");
