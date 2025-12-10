const element = document.querySelector('.red');

const elementSaluto = document.getElementById("saluto");

const elementoAltro = document.querySelector(".classe_elemento");

const imgRef = document.querySelector("img");



console.log(typeof element);

const text = element.innerHTML;

console.log(text);

element.innerHTML = "<span> altro...</span>";



// elementSaluto.className = "titolo";
// elementSaluto.className = elementSaluto.classList + " titolo";
elementSaluto.classList.add("titolo");


elementoAltro.style.color = "green";


imgRef.src = "img/beats-2.jpg";
imgRef.alt = "cuffie nere";