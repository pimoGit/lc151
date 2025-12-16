const obj = {
    name: 'palla',
    peso: 50
};

// qui NON sto creando un nuovo oggetto e tanto meno un clone ma sto duplicando il ref allo stesso
const copyObj2 = obj;

copyObj2.peso = 150;

// creao un nuovo oggetto clone (dei contenuti) dell'oggetto di partenza
const copyObj = { ...obj, "altraProp": "altro" };



const copyObj3 = {};

// creao manualmente il clone di un oggetto
for (let chiave in obj) {
    // console.log(chiave);

    copyObj3[chiave] = obj[chiave];
}

copyObj3.peso = 300;

console.log(obj, copyObj3);



copyObj.peso = 100;


console.log(obj, copyObj, copyObj2);
//{name: "palla", peso: 50}


