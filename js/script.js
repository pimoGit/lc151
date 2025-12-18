const cats = [
    { name: 'Jerry', color: 'Gray' },
    { name: 'Felix', color: 'Black and White' },
    { name: 'Garfield', color: 'Orange' },
];

cats.forEach((cat) => {
    console.log(`${cat.name}'s color is ${cat.color}`);
});


// for tradizionale
for (let i = 0; i < cats.length; i++) {

    let cat = cats[i];

    console.log(`${cat.name}'s color is ${cat.color}`);

}
