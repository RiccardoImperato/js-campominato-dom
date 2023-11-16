# Campo Minato dom

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

Superbonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
Superbonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
