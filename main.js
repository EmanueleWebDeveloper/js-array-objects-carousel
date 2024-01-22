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
const previewContainer = document.getElementById('preview-container');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const reverseButton = document.getElementById('reverse-button');

const carosello = [
    { urlImmagine: "./img/Teatro_Massimo.jpg", titolo: "Teatro Massimo", descrizione: "Descrizione per il Teatro Massimo" },
    { urlImmagine: "./img/cattedrale.jpg", titolo: "Cattedrale", descrizione: "Descrizione per la Cattedrale" },
    { urlImmagine: "./img/piazza vergogna.jpg", titolo: "Piazza Vergogna", descrizione: "Descrizione per la Piazza Vergogna" },
    { urlImmagine: "./img/politeama.jpg", titolo: "Politeama", descrizione: "Descrizione per il Politeama" },
    { urlImmagine: "./img/Mondello.jpg", titolo: "Mondello", descrizione: "Descrizione per lo Zen" }
];

let immagineCorrente = 0;
let autoplayInterval;

// Funzione per aggiornare il carosello
function updateCarousel(direzione) {
    let arrayTagsImmagini = document.querySelectorAll('figure img');
    arrayTagsImmagini[immagineCorrente].classList.remove('active');

    immagineCorrente = (immagineCorrente + direzione + arrayTagsImmagini.length) % arrayTagsImmagini.length;

    arrayTagsImmagini[immagineCorrente].classList.add('active');

    updatePreviews();
}

// Funzione per avviare l'autoplay
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        updateCarousel(1); 
    }, 3000); 

    arrowUpHtml.removeEventListener("click", arrowUpClickHandler);
    arrowDownHtml.removeEventListener("click", arrowDownClickHandler);
}

// Funzione per fermare l'autoplay
function stopAutoplay() {
    clearInterval(autoplayInterval);

    arrowUpHtml.addEventListener("click", arrowUpClickHandler);
    arrowDownHtml.addEventListener("click", arrowDownClickHandler);
}


const arrowUpClickHandler = function () {
    updateCarousel(-1);
};

const arrowDownClickHandler = function () {
    updateCarousel(1);
};

arrowUpHtml.addEventListener("click", arrowUpClickHandler);
arrowDownHtml.addEventListener("click", arrowDownClickHandler);

// Aggiungi gestori per i pulsanti di start/stop e di inversione
startButton.addEventListener('click', startAutoplay);
stopButton.addEventListener('click', stopAutoplay);
reverseButton.addEventListener('click', () => updateCarousel(-1));

// Funzione per aggiornare le immagini di preview
function updatePreviews() {
    let previewImages = document.querySelectorAll('#preview-container img');

    previewImages.forEach(img => img.classList.remove('preview-active'));

    previewImages[immagineCorrente].classList.add('preview-active');
}

// Inizializza il carosello
for (let i = 0; i < carosello.length; i++) {
    if (i === 0) {
        figureHtml.innerHTML += `<img class="active" src="${carosello[i].urlImmagine}" alt="immagini carosello">`;
    } else {
        figureHtml.innerHTML += `<img src="${carosello[i].urlImmagine}" alt="immagini carosello">`;
    }
}

for (let i = 0; i < carosello.length; i++) {
    previewContainer.innerHTML += `<img class="preview" src="${carosello[i].urlImmagine}" alt="preview carosello">`;
}


