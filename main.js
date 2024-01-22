// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


// - url dell’immagine
//  - titolo
//  - descrizione

const arrowDownHtml = document.querySelector('.fa-chevron-down');
const arrowUpHtml = document.querySelector('.fa-chevron-up');

const figureHtml = document.querySelector('figure');

console.log(figureHtml);

const carosello = [
    { urlImmagine: "./img/Teatro_Massimo.jpg", titolo: "Teatro Massimo", descrizione: "Descrizione per il Teatro Massimo" },
    { urlImmagine: "./img/cattedrale.jpg", titolo: "Cattedrale", descrizione: "Descrizione per la Cattedrale" },
    { urlImmagine: "./img/piazza vergogna.jpg", titolo: "Piazza Vergogna", descrizione: "Descrizione per la Piazza Vergogna" },
    { urlImmagine: "./img/politeama.jpg", titolo: "Politeama", descrizione: "Descrizione per il Politeama" },
    { urlImmagine: "./img/Mondello.jpg", titolo: "Mondello", descrizione: "Descrizione per lo Zen" }
];

for (let i = 0; i < carosello.length; i++) {
    if (i === 0) {
        figureHtml.innerHTML += `
            <img class="active" src="${carosello[i].urlImmagine}" alt="immagini carosello">
        `;
    } else {
        figureHtml.innerHTML += `
            <img src="${carosello[i].urlImmagine}" alt="immagini carosello">
        `;
    }
}

let immagineCorrente = 0;

arrowUpHtml.addEventListener("click", function () {
    let arrayTagsImmagini = document.querySelectorAll('figure img');
    console.log(arrayTagsImmagini);

    arrayTagsImmagini[immagineCorrente].classList.remove('active');

    if (immagineCorrente == 0) {
        immagineCorrente = arrayTagsImmagini.length - 1;
    } else {
        immagineCorrente--;
    }

    arrayTagsImmagini[immagineCorrente].classList.add('active');
});

arrowDownHtml.addEventListener("click", function () {
    let arrayTagsImmagini = document.querySelectorAll('figure img');
    console.log(arrayTagsImmagini);

    arrayTagsImmagini[immagineCorrente].classList.remove('active');

    if (immagineCorrente == arrayTagsImmagini.length - 1) {
        immagineCorrente = 0;
    } else {
        immagineCorrente++;
    }

    arrayTagsImmagini[immagineCorrente].classList.add('active');
});
