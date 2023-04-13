/*
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//creo il layout 
for(let i = 0; i < images.length; i++){

    //creo le immagini principali nell'html
    
    document.querySelector(".main").innerHTML += ` 
        <div class="main-img-box relative none" id="${i}">
            <img src=./assets/${images[i].image} alt="">
            <div class="absolute">
                <h3>${images[i].title}</h3>
                <p>${images[i].text}</p>
            </div>
                        
        </div>
        `
    //creo quelle laterali
    document.querySelector(".second").innerHTML +=`
    <div class="img-box opacity" id="${i}">
        <img src=./assets/${images[i].image} alt="">
    </div>
    `
}

//targhettizzo la prima img e ci aggiungo la classe active
document.getElementById(`0`).classList.remove("none");
document.getElementById('0').classList.add("first");
document.getElementById('4').classList.add("last")

let imgAttiva = document.getElementById(`0`)

// console.log(imgAttiva)

//faccio partie una funzione che al click mi aggiunge la classe none e la toglie all' immagine dopo
let next = document.querySelector(".next")

next.addEventListener(`click`, function(){
    let imgSuccessiva = imgAttiva.nextElementSibling

    if(imgAttiva.classList.contains("last")){
        imgSuccessiva = document.querySelector(".first")
    }
    imgAttiva.classList.add("none")
    imgSuccessiva.classList.remove("none")

    imgAttiva = imgSuccessiva

    console.log(imgAttiva)

    document.querySelector(".second")
})
 
let laterali = document.querySelector(".img-box")

if(!imgAttiva.classList.contains("none")){
    laterali.classList.remove("opacity")
}


