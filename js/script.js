const zucchine = [
    { varieta: 'Varietà 1', peso: 10, lunghezza: 4 },
    { varieta: 'Varietà 2', peso: 13, lunghezza: 16 },
    { varieta: 'Varietà 3', peso: 4, lunghezza: 23 },
    { varieta: 'Varietà 4', peso: 11, lunghezza: 6 },
    { varieta: 'Varietà 5', peso: 2, lunghezza: 17 },
    { varieta: 'Varietà 6', peso: 5, lunghezza: 10 },
    { varieta: 'Varietà 7', peso: 7, lunghezza: 9 },
    { varieta: 'Varietà 8', peso: 3, lunghezza: 8 },
    { varieta: 'Varietà 9', peso: 6, lunghezza: 27 },
    { varieta: 'Varietà 10', peso: 14, lunghezza: 4 }
];


const zucchine2 = [...zucchine];


zucchine[0].varieta = "Varietà Nuova";

const nuovoArr = [];

for (let index = 0; index < zucchine.length; index++) {
    const oggettoZucchina = zucchine[index];

    nuovoArr.push({ ...oggettoZucchina };)

}


console.log(zucchine, zucchine2);
