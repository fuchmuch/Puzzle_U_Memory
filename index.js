// const gameBox = document.querySelector('.container');
// let card = document.querySelector(".cards")
// card.addEventListener('click', (e) => {
// e.currentTarget.classList.toggle("flipped-cards")
// console.log(card);
// });


let container = document.querySelector(".container");
 
class Cell{
    card; //each cell has a property of a card
    constructor(){

    }
}

class Card {
    pair = false;
    hasBeenAdded = false;
    constructor(imageName){
        this.imageName= imageName
    }
}
//class for all puppies
//class for the card
const bichon = new Card ("images/bichon.jpg");
const americanEskimo = new Card ("images/american_eskimo.jpg");
const bostonTerrier =  new Card ("images/boston_terrier.jpg");
const dachshund = new Card ("images/dachshund.jpg");
const poodle = new Card ("images/poodle.jpg");
const shiba = new Card ("images/shiba_inu.jpg");
const yokshirTerrier = new Card ("images/yorkshir_terrier.jpg")
const bulldog = new Card ("images/bulldog.jpg")

const puppies = [ bichon, americanEskimo, bostonTerrier,dachshund, poodle, shiba, yokshirTerrier,bulldog];
const cells = [];

const getRandomCell = ()=> {
    return 
}

// variables for loop
//each time it runs making card -> give class, put into container.

for (let i=0; i < 16; i++){
    // console.log(i)
    let card = document.createElement("div");
    card.classList.add("cards");
    container.appendChild(card);
    let cell = new Cell() 

    cells.push(cell)
//card= back card =puppy images
}
let cards = document.querySelectorAll(".cards") 
const getRandomPuppy= () =>{
    return puppies[ Math.floor(Math.random() * puppies.length)]
}

for (let i=0; i< cells.length; i++){
    let currentCell = cells[i]


    let randomPuppy = getRandomPuppy() 
    //ref to the above function of getRandomPuppy how it create randomly placing each card
    //conditional statement
    while(randomPuppy.hasBeenAdded && randomPuppy.pair){
        //asking whether it's already added or not
    randomPuppy = getRandomPuppy()
    }
    currentCell.card = randomPuppy;
    cards[i].dataset.image= randomPuppy.imageName
    if (randomPuppy.hasBeenAdded === false ){
      randomPuppy.hasBeenAdded = true //confirm
    } else if (randomPuppy.pair === false )//asking questions again 
    { 
        randomPuppy.pair = true
    }

}
    
//create new cards and add into
//create array all of cards (image and pair thing inside loop)
//find random spot in container do it until find the empty spot 
//each card i choose random spot 

////////////////////////////////all the pairs all set up
//flip


let storedCard;
let storedDiv;

for (let i=0; i< cards.length; i++){
let currentDiv = cards[i]
currentDiv.addEventListener('click',()=>{
//   currentDiv.classList.toggle("flipped-cards")
currentDiv.style.background = `url(${cells[i].card.imageName})`
// console.log(`${cells[i].card.imageName}`)
if (storedCard !== undefined && cells[i].card === storedCard && currentDiv !== storedDiv && storedDiv !== undefined){
 ///////////simplify this long eq
    
    storedDiv.classList.add("pair")
    currentDiv.classList.add("pair")
    // storedDiv.removeAttribute("style")
    // currentDiv.removeAttribute("style")
    storedCard = undefined 
    storedDiv = undefined
    return
} else if(storedCard !== undefined && storedDiv!== undefined){
    currentDiv.style.background =""
    storedDiv.style.background=""
    storedCard = undefined 
    storedDiv = undefined
    return
}


storedCard = cells[i].card
storedDiv = currentDiv

})
};


/////////function for replay by clicking button to bring bakc all cards again////////


const restartButton = document.querySelector('.button')

let playing= false; 

//////check with forloop

 const restartGame = () => {

        location.reload()
  }


restartButton.addEventListener('click', restartGame) 






//////////////////////////navigation part//////////////////////
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }