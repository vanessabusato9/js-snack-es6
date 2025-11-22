/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Il nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Per ogni elemento dell'array, generate numeri random al posto degli 0 nelle proprietà “punti fatti” e “falli subiti”.
Infine, creiamo un nuovo array di stringhe in cui pushiamo solo i nomi delle squadre.
*/

const squadreCalcio = [
    {nomeSquadra: "Milan", puntiFatti: 0, falliSubiti: 0}, //3 proprietà
    {nomeSquadra: "Juve", puntiFatti: 0, falliSubiti: 0},
    {nomeSquadra: "Roma", puntiFatti: 0, falliSubiti: 0},
    {nomeSquadra: "Napoli", puntiFatti: 0, falliSubiti: 0}
]

//Genera numeri random
for (i = 0; i < squadreCalcio.length; i++) {
    squadreCalcio[i].puntiFatti = Math.floor(Math.random() *100);
    squadreCalcio[i].falliSubiti = Math.floor(Math.random() * 20);
}

//Creazione nuovo array
const nomeSquadra = [];

for (i = 0; i < squadreCalcio.length; i++) { //ciclo che scorre tutte le squadre
    nomeSquadra.push(squadreCalcio[i].nomeSquadra);
}

console.log("Array con soli nomi", nomeSquadra);




