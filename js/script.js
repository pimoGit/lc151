const cars = [
    {
        marca: 'Alfa Romeo',
        modello: 'Giulietta',
        alimentazione: 'benzina',
    },
    {
        marca: 'FIAT',
        modello: 'Doblò',
        alimentazione: 'diesel',
    },
    {
        marca: 'FIAT',
        modello: 'Panda',
        alimentazione: 'benzina',
    },
    {
        marca: 'FIAT',
        modello: 'Fiorino',
        alimentazione: 'metano',
    },
    {
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'diesel',
    },
    {
        marca: 'Ford',
        modello: 'Ka',
        alimentazione: 'gpl',
    },
    {
        marca: 'Smart',
        modello: 'Smart',
        alimentazione: 'elettrico',
    },
];

const benzinaCars = cars.filter(car => car.alimentazione === "benzina");
const dieselCars = cars.filter(car => car.alimentazione === "diesel");
const altCars = cars.filter(car => car.alimentazione !== "diesel" && car.alimentazione !== "benzina");



console.log(benzinaCars, dieselCars, altCars);
