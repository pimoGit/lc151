const pics = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Scandinavia\'s blend of nature and innovation.',
    }, {
        image: 'img/02.jpg',
        title: 'Norvegia',
        text: 'Fjords, mountains, and coastal charm in Nordic splendor.',
    }, {
        image: 'img/03.jpg',
        title: 'Alaska',
        text: 'Untamed wilderness and rugged beauty in the Last Frontier.',
    }, {
        image: 'img/04.jpg',
        title: 'Gran Canyon',
        text: 'Nature\'s masterpiece, a colorful tapestry of cliffs.',
    }, {
        image: 'img/05.jpg',
        title: "Skyrim",
        text: 'Epic Nordic fantasy with dragons and ancient magic.',
    }
];

// PARTE DI SETUP
// container slides
const carouselGallery = document.querySelector(".gallery");
// container thumbs
const thumbsGallery = document.getElementById("thumbnails");
// seleziono frecce
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");


// PARTE ELABORAZIONE

// gestione dinamica delle slide
// var di accumulo stringa elementi da iniettare
let galleryElements = "";
let thumbsElements = "";


// ciliamo l'array di oggetti delle slide
for (let i = 0; i < pics.length; i++) {
    // estrapoliamo ad ogni giro del ciclo un oggetto diverso
    const slideObjet = pics[i];

    // destrutturiamo l'oggetto
    const { image, title, text } = slideObjet;

    // collezioniamo i vari elementi creati per le thumbs
    thumbsElements += `<img alt="${title}" src="${image}">`;

    // collezioniamo i vari elementi creati in base agli oggetti (stringa)
    galleryElements += `
    <figure>
        <figcaption>
            <h2>${title}</h2>
            <h3>${text}</h3>
        </figcaption>
        <img alt="${title}" src="${image}">
    </figure>`;

    // console.log(galleryElements);


}
// mettiamo tutto in pagina (la stringa viene convertita in vero HTML)
carouselGallery.innerHTML = galleryElements;
// mettiamo tutto in blocco thumbs in pagina 
thumbsGallery.innerHTML = thumbsElements;

// seleziono il gruppo delle slides
const images = document.querySelectorAll("#carousel figure");
console.log(images);
// seleziono il gruppo delle thumbs
const thumbs = document.querySelectorAll("#thumbnails img");
console.log(thumbs);

// settiamo una var per gestire l'indice della slide con active
let curretActiveIndex = 0;
images[curretActiveIndex].classList.add("active");
thumbs[curretActiveIndex].classList.add("active");


// gestione della logica degli eventi prev/next
nextButton.addEventListener("click", () => {
    // console.log("Hey hai cliccato next!");

    // aggiorno il valore dell'indice da passare per aggiornare reale indice attivo
    const newIndexRef = curretActiveIndex === images.length - 1 ? 0 : curretActiveIndex + 1;

    // versione estesa
    // let newIndexRef2;
    // if(curretActiveIndex === images.length - 1) {
    //     newIndexRef2 = 0;
    // } else {
    //     newIndexRef2 = curretActiveIndex + 1;
    // }

    // eseguo funzione che aggiorna slide e index reale
    setCurrentSlide(newIndexRef);

})

prevButton.addEventListener("click", () => {
    // console.log("Hey hai cliccato prev!");
    // aggiorno il valore dell'indice da passare per aggiornare reale indice attivo
    const newIndexRef = curretActiveIndex === 0 ? images.length - 1 : curretActiveIndex - 1;

    // eseguo funzione che aggiorna slide e index reale
    setCurrentSlide(newIndexRef);

})





// FUNZIONI

// funzione che setta la slide giusta rivecevdo indice
function setCurrentSlide(newIndex) {

    // toglo l'active dalla slide attuale
    images[curretActiveIndex].classList.remove("active");
    // toglo l'active dalla thumb attuale
    thumbs[curretActiveIndex].classList.remove("active");


    // aggiorno il valore dell'indice attivo
    curretActiveIndex = newIndex;

    // aggiungere l'active alla nuova slide attiva
    images[curretActiveIndex].classList.add("active");
    // aggiungere l'active alla nuova thumb attiva
    thumbs[curretActiveIndex].classList.add("active");
}