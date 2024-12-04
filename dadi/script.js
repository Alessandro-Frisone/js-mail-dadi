// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1 - Generazione numero random da 1 a 6
const punteggioGiocatore = Math.floor(Math.random() * 7);
const punteggioComputer = Math.floor(Math.random() * 7);
// 2 - Stampa del punteggio generato
alert("GIOCATORE: " + punteggioGiocatore + "\nCOMPUTER: " + punteggioComputer);
// 3 - Controllo del punteggio più alto 
if (punteggioGiocatore > punteggioComputer){
    alert("Ha vinto il giocatore")
}else if (punteggioGiocatore < punteggioComputer){
    alert("Ha vinto il computer")
}else {
    alert("Pareggio!! Ritenta sarai più fortunato")
}