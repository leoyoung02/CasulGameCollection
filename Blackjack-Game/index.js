let cards = []
let isAlive = false
let hasBlackJack = false
let sum = 0
let count = 0
let willingToContinue = false
let cardsData = document.getElementById("card")
let result = document.getElementById("content")
let totalSum = document.getElementById("sum")

// function for getting random numbers for the initial two cards

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

// Function for Starting the Game


function startGame(){
    if(count === 0){
        count++
        isAlive = true
        let firstCard = getRandomNumber()
        let secondCard = getRandomNumber()
        cards = [firstCard, secondCard]
        sum = cards[0]+cards[1]
        resultConfirmation()
    }
}

// Function for getting the result

function resultConfirmation(){
    if(userDetails.chips>1){
        cardsData.textContent = "Cards: "
        for(let i = 0; i < cards.length; i++){
            cardsData.textContent += cards[i] + " "
        }

        totalSum.textContent = "Sum: " + sum

        if(sum < 21){
            result.textContent = "Do you want to draw a new card!!" 
        }
        else if(sum === 21){
            result.textContent = "Congratualations! You have got a Blackjack"
            hasBlackJack=true
            willingToContinue = true
            count = 0
            userDetails.chips *= 2
            userInfo.textContent = userDetails.fullName + ": $" + userDetails.chips
        }
        else{
            result.textContent = "Sorry!! You're out of the game...."
            isAlive = false
            count = 0
            userDetails.chips /= 2
            userInfo.textContent = userDetails.fullName + ": $" + userDetails.chips
        }
    }
    else{
        count=1
        result.textContent = "Sorry!! Not enough chips, Please restart the game.!"
    }    
}

// Function to add a new card

function newCard(){
    if(isAlive === true && (hasBlackJack === false || willingToContinue === true)){
        let extraCard = getRandomNumber()
        cards.push(extraCard)
        sum += extraCard
        resultConfirmation()
    }
}

let userInfo = document.getElementById("user")

let userDetails = {
    fullName:prompt("Enter player name"),
    chips:prompt("Enter the amount in $")
}

userInfo.textContent = userDetails.fullName + ": $" + userDetails.chips

