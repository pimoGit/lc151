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
const carouselGallery = document.querySelector(".gallery");


// PARTE ELABORAZIONE

// gestione dinamica delle slide
// var di accumulo stringa elementi da iniettare
let galleryElements = "";

// ciliamo l'array di oggetti delle slide
for (let i = 0; i < pics.length; i++) {
    // estrapoliamo ad ogni giro del ciclo un oggetto diverso
    const slideObjet = pics[i];

    // destrutturiamo l'oggetto
    const { image, title, text } = slideObjet;

    // collezioniamo i vari elementi creati in base agli oggetti (stringa)
    galleryElements += `
    <figure class="active">
        <figcaption>
            <h2>${title}</h2>
            <h3>${text}</h3>
        </figcaption>
        <img alt="${title}" src="${image}">
    </figure>`;

    console.log(galleryElements);


}
// mettiamo tutto in pagina (la stringa viene convertita in vero HTML)
carouselGallery.innerHTML = galleryElements;
