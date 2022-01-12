/*
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente 
il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina 
(formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

// PRENDO LE VARIABILI DAL DOM
const nameElement = document.getElementById('name');
const pathElement = document.getElementById('path');

const buttonElement = document.querySelector('button');
const buttonDeleteElement = document.getElementById('reset');

const placeholder = document.getElementById('placeholder');


// QUANDO SCHIACCIO IL BOTTONE FACCIO QUALCOSA
buttonElement.addEventListener('click', function () {
    const nameValue = nameElement.value;
    const pathValue = pathElement.value;
    // STAMPO SOLO SE L'INPUT E' RIEMPITO
    if (nameValue && pathValue) {
        placeholder.innerHTML = `Ciao ${nameValue}
        percorrerai ${pathValue} chilometri
        `;
    }
})


// QUANDO SCHIACCIO IL BOTTONE RESETTO I CAMPI
buttonDeleteElement.addEventListener('click', function () {
    nameElement.value = '';
    pathElement.value = '';
})

