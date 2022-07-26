let computerChoice
let playerChoice
let computerScore = 0
let playerScore = 0
let i = 0




function getComputerChoice () {
    switch (Math.floor(Math.random() * (4 - 1)) + 1) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;

}




function rules (x, y) {
    if (x.toLowerCase() === y.toLowerCase()) {
        console.log(" \nIt's a draw");
        computerScore += 1;
        playerScore +=1;
    }
        else if (x.toLowerCase() === "rock" && y.toLowerCase() === "paper" ) {
            console.log(" \nL's IN CHAT");
            computerScore += 1;

        }
        else if (x.toLowerCase() === "rock" && y.toLowerCase() === "scissors") {
            console.log(" \nBIG W");
            playerScore +=1;
        }
        else if (x.toLowerCase() === "paper" && y.toLowerCase() === "rock") {
            console.log(" \nSLAP it");
            playerScore +=1;
        }
        else if (x.toLowerCase() === "paper" && y.toLowerCase() === "scissors") {
            console.log(" \nF\nF\nF\nF\nF\nF\nF\nF\nF\nF\nF\nF\nF");
            computerScore += 1;
        }
        else if (x.toLowerCase() === "scissors" && y.toLowerCase() === "rock") {
            console.log(" \nYou got got");
            computerScore +=1;
        }
        else if (x.toLowerCase() === "scissors" && y.toLowerCase() === "paper") {
            console.log(" \nYee, boy, get it");
            playerScore +=1;
        }
        else {
            console.log(" \nYou dyslexic little...")
            i-=1;
        }
    return playerScore, computerScore
}

// function determineWinner (playerScore, computerScore, newGamePrompt) {
//     if (newGamePrompt === null) {
//         console.log(" ")
//     } 
    
//         else if (playerScore > computerScore) {
//         alert("Congratulations! You won")
//     }
//         else if (playerScore === computerScore) {
//             alert("This ain't chess boys...draw...")
//         }
//         else if (playerScore < computerScore) {
//             alert("Whooped")
//         }
//     }


//     let newGamePrompt
//     let gameStatus 

    // for (i=0; i<5; i++) { 
    //     getComputerChoice()
    //     getPlayerChoice()

    //     if (playerChoice === null) {
    //         console.log("Where you goin, punk?")
    //         newGamePrompt = prompt("Do you want to start a new game?(Y/N)")

    //         if (newGamePrompt === null) {
    //             console.log(".\n.\n.\n.\nOk go then. GO. Don't talk to me anymore!")
    //             i = 5;
    //         }
    //             else if (newGamePrompt.toLowerCase() === "y" || newGamePrompt.toLowerCase() === "yes") {
    //                 i = 0;
    //                 playerScore = 0;
    //                 computerScore = 0;
    //             }
    //             else {
    //                 console.log(".\n.\n.\n.\nOk go then. GO. Don't talk to me anymore!")
    //                 i = 5;


    //             }
    //     }


        
            // else {
            //     switch (i){
            //         case 0:
            //             console.log("Round One");
            //             break;
            //         case 1:
            //             console.log(" \nRound Two");
            //             break;
            //         case 2: 
            //             console.log(" \nRound Three");
            //             break;
            //         case 3: 
            //             console.log(" \nRound Four");
            //             break;
            //         case 4: 
            //             console.log(" \nFinal Round")
            //     }
            //     console.log(" \nYou chose " + playerChoice)
            //     console.log("Computer chose " +computerChoice)
//                 rules(playerChoice, computerChoice)
//                 if (i===4) {
//                     gameStatus = "Over"
//                     console.log("\n\n******************\n \nFinal Score\n\n*****************\n_____________________ ")
//                 }
//                 else {
//                     console.log(" \nCurrent Score")
//                 }
//                 let score = `Player ${playerScore} : ${computerScore} Computer\n______________________________________________\n                    `
//                 console.log(score)
//             }
    
//     }

//     determineWinner(playerScore, computerScore, newGamePrompt)


// }
const buttons = document.querySelectorAll("button")
const currentScore = document.querySelector("#currentScore")
const announcement = document.querySelector("#announcement")
const playerChoiceDisplay = document.querySelector(".playerChoiceDisplay")
const computerChoiceDisplay = document.querySelector(".computerChoiceDisplay")
const welcome = document.querySelector(".welcome")
const main = document.querySelector(".main")
const newGamePrompt = document.querySelector(".newGamePrompt")
const bot = document.querySelector(".bot")
const roundCount = document.querySelector(".round")


function getPlayerChoice () {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.id == "startNewGame") {
                main.classList.remove("inBG");
                welcome.classList.add("inBG");
                welcome.style = "transform: scale(0);"
            
            }
            else {
            playerChoice = button.id;
            console.log(playerChoice)
            return playerChoice
            }
        })
    })
    
}


function game () {
    getPlayerChoice()
    getComputerChoice()
    console.log(" \nYou chose " + playerChoice)
    console.log("Computer chose " +computerChoice)
    rules(playerChoice, computerChoice)
    playerChoiceDisplay.textContent = `${playerChoice}`
    setTimeout(function(){
        computerChoiceDisplay.textContent = `${computerChoice}`
    }, 1000)
    setTimeout(function(){
        currentScore.textContent = `Player ${playerScore} : ${computerScore} Computer`
    }, 2000)
    computerChoiceDisplay.textContent = ""
    i++
    console.log(i)
    roundCount.textContent=`Round ${i}/5`
    if (i==5) {
    gameOver()
    }
}


function gameOver () {
    i = 0
    setTimeout(function() {
        if (playerScore==computerScore)
        {announcement.textContent = "It's a draw!"}
        else if (playerScore>computerScore)
        {announcement.textContent = "You Win!"}
        else announcement.textContent = "Computer Wins!"

    }, 2500)

    main.classList.add("inBG")
    setTimeout(function() {
        newGamePrompt.classList.remove("inBG", "newGamePrompt")
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                newGamePrompt.classList.add("inBG", "newGamePrompt")
                if (button.id == "yes"){
                    console.log(`button id is ${button.id}`)
                    main.classList.remove("inBG");
                    console.log(main.classList)
                    announcement.textContent = ""
                    currentScore.textContent = ""
                    playerScore = 0
                    computerScore = 0
                    playerChoiceDisplay.textContent =""
                    computerChoiceDisplay.textContent=""
                }
                else if (button.id == "no") {
                    bot.classList.remove("inBG", "bot"); main.classList.add("inBG")
                }
            })
        })
    }, 3500)
}

getPlayerChoice()
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        roundCount.textContent=`Round ${i}/5`
        game()
    })    
})


