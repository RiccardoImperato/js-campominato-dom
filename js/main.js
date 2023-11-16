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
// Select
const selettoreDifficolta = document.querySelector('.select');
// Bottone play
const playBtn = document.querySelector('.btn');
// Contenitore griglia
const board = document.querySelector('.board');

// Click bottone
playBtn.addEventListener("click", function () {
    // Array bombe vuoto
    const listaBombe = [];
    board.innerHTML = '';
    let dimensioneGriglia = 0;
    //Selezione difficoltà
    let difficolta = selettoreDifficolta.value;
    console.log(`Difficoltà: ${difficolta}`);

    if (difficolta === 'facile') {
        dimensioneGriglia = 100;
    }
    if (difficolta === 'normale') {
        dimensioneGriglia = 81;
    }
    if (difficolta === 'difficile') {
        dimensioneGriglia = 49;
    }

    // bombe generate in base alla difficoltà
    for (let i = 1; i <= 16; i++) {
        let bombe = Math.floor(Math.random() * dimensioneGriglia + 1);
        listaBombe.push(bombe);
    }
    // Array bombe pieno
    console.log('Bombe nelle celle: ' + listaBombe);

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
            if (listaBombe.includes(i)) {
                myElement.classList.add('bomba');
                console.log('Bomba');
            }
        })
        board.append(myElement);
    }
});

