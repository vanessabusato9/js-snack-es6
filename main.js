//Array di oggetti con nome e peso
const bici = [
    { nome: "Look", peso: 7 },
    { nome: "Pinarello", peso: 6.7 },
    { nome: "Colnago", peso: 6.8 },
    { nome: "Canyon", peso: 6.2 }
];

console.log(bici);

//Ciclo x controllare oggetti array
let biciPiuLeggera = bici[0];

for (let i = 0; i < bici.length; i++) {
    const biciCorrente = bici[i];
    console.log(biciCorrente);

//Vedere quale bici è + leggera
    if (biciCorrente.peso < biciPiuLeggera.peso) {
        biciPiuLeggera = biciCorrente;
        console.log("Il peso più leggero è:", biciPiuLeggera);
    }

}

