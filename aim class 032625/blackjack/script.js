let dealerSum = 0;
let playerSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

let hidden;
let deck;

let canHit = true;

window.onload = function () {
    buildDeck();
    shuffleDeck();
}

function buildDeck() {
    let values = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suits = ['C', 'D', 'H', 'S'];
    deck =[];
    for ( let i=0; i< suits.length; i++) { 
        for (let j=0; j< values.length; j++) {
            deck.push(values[j] + "-" + suits[i]); //A-C 2-C 3-C 4-C... A-D, 
        }
    }
console.log(deck);
}

function shuffleDeck(){ 
    for (let i=0; i< deck.length; i++) {
        let j=Math.floor(Math.random() * deck.length); //(0-1) *52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}