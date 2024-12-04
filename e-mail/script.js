// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.



// 1 - Lista delle E-mail
const emailList = [ "Alefri2004@gmail.com", "Lucadangelo@libero.it", "Davide2904@gmail.com", "Simoneurso56@gmail.com"];
// 2 - Inserimento dell'E-mail da parte dell'utente
const insEmail = prompt("Inserisci il tuo nome:");
// 3 - Variabile per verificare se l'utente può accedere
let puoPartecipare = false;
// 4 - Ciclo per controllare la lista degli invitati
for (let i = 0; i < emailList.length; i++) {
// 5 - Confronto tra la lista delle E-mail e l'E-mail inserita dall'utente
    if (emailList[i].toLowerCase() === insEmail.toLowerCase()) {
        puoPartecipare = true;
    }
}
// 6 - Messaggio sull’esito del controllo
if (puoPartecipare) {
    alert("Accesso consentito, Benvenuto!");
} else {
    alert("Mi dispiace, la tua E-mail non è nella lista!.");
}