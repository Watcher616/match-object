

const cardArray = [
    {
        name: 'fries',
        image: 'https://img.icons8.com/office/344/kawaii-french-fries.png'

    },
    {
        name: 'ice-cream',
        image: 'https://img.icons8.com/color/344/kawaii-ice-cream.png'

    },
    {
        name: 'hotdog',
        image: 'https://img.icons8.com/external-kmg-design-outline-color-kmg-design/344/external-hotdog-food-delivery-kmg-design-outline-color-kmg-design.png'

    },
    {
        name: 'cheeseburger',
        image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-cheeseburger-world-cuisine-flaticons-lineal-color-flat-icons.png'

    },
    {
        name: 'milkshake',
        image: 'https://img.icons8.com/color/344/milkshake--v1.png'

    },
    {
        name: 'pizza',
        image: 'https://img.icons8.com/fluency/344/pizza.png'

    },
    {
        name: 'fries',
        image: 'https://img.icons8.com/office/344/kawaii-french-fries.png'

    },
    {
        name: 'ice-cream',
        image: 'https://img.icons8.com/color/344/kawaii-ice-cream.png'

    },
    {
        name: 'hotdog',
        image: 'https://img.icons8.com/external-kmg-design-outline-color-kmg-design/344/external-hotdog-food-delivery-kmg-design-outline-color-kmg-design.png'

    },
    {
        name: 'cheeseburger',
        image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-cheeseburger-world-cuisine-flaticons-lineal-color-flat-icons.png'

    },
    {
        name: 'milkshake',
        image: 'https://img.icons8.com/color/344/milkshake--v1.png'

    },
    {
        name: 'pizza',
        image: 'https://img.icons8.com/fluency/344/pizza.png'

    }

]

cardArray.sort(()=> 0.5 - Math.random())

const cardGrid = document.querySelector('#cards')
const ScoreDisplay = document.querySelector('#score')
const messageDisplay =  document.querySelector('#message')
const button = document.getElementById('button')
const liveDisplay = document.getElementById('lives')

let live = 5
let chosenCard = []
let chosenCardId = []
let cardWon = []


function drawCard(){
    for(i = 0; i < 12; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'https://img.icons8.com/plasticine/344/question-mark.png' )
        card.setAttribute('data-id', i)
        card.setAttribute('class', 'images')
        card.addEventListener('click', flipCard)
        cardGrid.appendChild(card)

    }
    
}
drawCard()

function checkMatch(){
    const images = document.querySelectorAll('img')

   

    if(chosenCard[0] == chosenCard[1]){

        images[chosenCardId[0]].setAttribute('src', 'https://img.icons8.com/cute-clipart/344/checkmark.png')
        images[chosenCardId[1]].setAttribute('src', 'https://img.icons8.com/cute-clipart/344/checkmark.png')
        images[chosenCardId[0]].removeEventListener('click', flipCard)
        images[chosenCardId[1]].removeEventListener( 'click', flipCard)
        cardWon.push(chosenCard)
        messageDisplay.innerHTML = "great, you found a match!"
        button.textContent = "Restart"
        button.setAttribute("style", "display: block")
        
        set()
    }
    else{
        images[chosenCardId[0]].setAttribute('src', 'https://img.icons8.com/plasticine/344/question-mark.png')
        images[chosenCardId[1]].setAttribute( 'src', 'https://img.icons8.com/plasticine/344/question-mark.png') 
        messageDisplay.innerHTML = "Not a match!"
        button.setAttribute("style", "display: block")
        button.textContent = "Restart"
        live = live -1
        liveDisplay.innerHTML = live
        set()
        checkLives()
        
    }

    if(chosenCardId[0] === chosenCardId[1]){
        images[chosenCardId[0]].setAttribute('src', 'https://img.icons8.com/plasticine/344/question-mark.png')
        images[chosenCardId[1]].setAttribute( 'src', 'https://img.icons8.com/plasticine/344/question-mark.png') 
        cardWon.pop(chosenCard)
        images[chosenCardId[0]].addEventListener('click', flipCard)
        images[chosenCardId[1]].addEventListener( 'click', flipCard) 
        messageDisplay.innerHTML = "you clicked the same card!"
        button.setAttribute("style", "display: block")
        button.textContent = "Restart"
        live = live-1
        liveDisplay.innerHTML = live
        set()
        checkLives()
        
        
    }
    

    chosenCard = []
    chosenCardId = []
    ScoreDisplay.innerHTML = cardWon.length

    if(cardWon.length == cardArray.length/2){
        messageDisplay.innerHTML = "You found them all!"
        button.textContent = "Play Again"
       button.setAttribute("style", "display: block")

    }
   


}


function flipCard() {
   const cardId = this.getAttribute('data-id')
   chosenCard.push(cardArray[cardId].name)
   chosenCardId.push(cardId)
   this.setAttribute('src', cardArray[cardId].image)
   if(chosenCard.length === 2){
    setTimeout(checkMatch, 500)
   }
   
}

button.addEventListener('click', ()=> {
   document.location.reload()
} )
liveDisplay.innerHTML = live

function set(){
    setTimeout(()=>{
    messageDisplay.innerHTML = ""
   },800)
}
function checkLives(){
    if( live === 0){
        const card = document.querySelectorAll('.images')
        card.removeEventListener('click', flipCard)
        messageDisplay.innerHTML = "Game Over!"
        button.textContent = "Play Again"
        button.setAttribute("style", "display: block")
    
    }
}