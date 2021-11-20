
// let card = document.querySelector(".cards")

// card.addEventListener('click', (e) => {
// e.currentTarget.classList.toggle("flipped-cards")



// console.log(card);

// });
class Card {
    pair;
    constructor(imageName){
        this.imageName= imageName
    }

}
//create class for all puppies 
const bichon = new Card ("images/bichon.jpg");
const americanEskimo = new Card ("images/american_eskimo.jpg");
const bostonTerrier =  new Card ("images/boston_terrier.jpg");
const dachshund = new Card ("images/dashchund.jpg");
const poodle = new Card ("images/poodle.jpg");
const shiba = new Card ("images/shiba.jpg");
const yokshirTerrier = new Card ("images/yorkshir_terrier.jpg ")


//create array all of cards (image and pair thing inside loop)
//find random spot in container do it until find the empty spot 
//each card i choose random spot 

let container = document.querySelector(".container");
//reference to cont
//create array

//class for the card
//how many cards we have placed already


for (let i=0; i < 16; i++){
    // console.log(i)
    let card = document.createElement("div");
    card.classList.add("cards");
    container.appendChild(card);
    //make variable for loop
    //each time it runs making card -> give class, put into container.
}
//create new cards and add into


//16 cards- 

let cards = document.querySelectorAll(".cards")

// const gameBox = document.querySelector('.container');



///






///match card 








////flip card 








////clear off match cards






///show a hidden image with notification of winning message
