'use strict'

/* Funzioni */
function myCreateElement(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);
    return element;
}

/*/ Funzioni */

// Programma 

// Bombe
const listaBombe = [];
// Select
const selettoreDifficolta = document.querySelector('.select');
// Bottone play
const playBtn = document.querySelector('.btn');
// Contenitore griglia
const board = document.querySelector('.board');

// Click bottone
playBtn.addEventListener("click", function () {
    board.innerHTML = '';
    let dimensioneGriglia = 0;
    //Selezione difficoltà
    let difficolta = selettoreDifficolta.value;
    console.log(`Difficoltà: ${difficolta}`);

    if (difficolta === 'difficile') {
        dimensioneGriglia = 100;
    }
    if (difficolta === 'normale') {
        dimensioneGriglia = 81;
    }
    if (difficolta === 'facile') {
        dimensioneGriglia = 49;
    }

    // numeri delle bombe generate in base alla difficoltà
    for (let i = 1; i <= 16; i++) {
        let bombe = Math.floor(Math.random() * dimensioneGriglia);
        console.log(bombe);
    }

    // Generazione griglia
    for (let i = 1; i <= dimensioneGriglia; i++) {
        const myElement = myCreateElement('div', 'cell', i);

        if (dimensioneGriglia === 81) {
            myElement.classList.remove('cell');
            myElement.classList.add('cell-normale');
        }
        if (dimensioneGriglia === 49) {
            myElement.classList.remove('cell');
            myElement.classList.add('cell-facile');
        }
        else {
            myElement.classList.add('cell');
        }
        // Click cella
        myElement.addEventListener("click", function () {
            myElement.classList.add('active');
            console.log('Cella', i);
        })
        board.append(myElement);
    }
});

/*

Partendo dall'esercizio precedente aggiungo la logica del gioco.
Comincio con un array vuoto (lista bombe) con lunghezza di 16 elementi e creo una funzione che genera 16 numeri casuali (bombe), in base alla difficoltà prescelta: 

- Numeri da 1 a 49 a difficoltà difficile
- Numeri da 1 a 81 a difficoltà normale
- Numeri da 1 a 100 a difficoltà facile

Uso un ciclo while per non generare le stesso numero/bomba più di una volta.
Quando l'utente clicca su play per generare la griglia, richiamo la funzione che genera numeri casuali (bombe) e li pusho nell'array (lista bombe). 
Aggiungo un evento al click sulle celle, per cui se il numero della cella è incluso nella lista dei numeri generati (lista bombe), le cella si colora di rosso e la partita termina, altrimenti, la cella si colora di azzurro come in precedenza e la partita prosegue.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il programma comunica il punteggio, rappresentato dal numero di volte che l’utente ha cliccato su una cella che non era una bomba.

*/