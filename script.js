let computerChoice
let playerChoice
let computerScore = 0
let playerScore = 0
let i


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


function getPlayerChoice () {
    playerChoice = prompt("Choose your destiny: ");
    return playerChoice;
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

function determineWinner (playerScore, computerScore, newGamePrompt) {
    if (newGamePrompt === null) {
        console.log(" ")
    } 
    
        else if (playerScore > computerScore) {
        alert("Congratulations! You won")
    }
        else if (playerScore === computerScore) {
            alert("This ain't chess boys...draw...")
        }
        else if (playerScore < computerScore) {
            alert("Whooped")
        }
    }


function match () {
    let newGamePrompt
    let gameStatus 

    for (i=0; i<5; i++) { 
        getComputerChoice()
        getPlayerChoice()

        if (playerChoice === null) {
            console.log("Where you goin, punk?")
            newGamePrompt = prompt("Do you want to start a new game?(Y/N)")

            if (newGamePrompt === null) {
                console.log(".\n.\n.\n.\nOk go then. GO. Don't talk to me anymore!")
                i = 5;
            }
                else if (newGamePrompt.toLowerCase() === "y" || newGamePrompt.toLowerCase() === "yes") {
                    i = 0;
                    playerScore = 0;
                    computerScore = 0;
                }
                else {
                    console.log(".\n.\n.\n.\nOk go then. GO. Don't talk to me anymore!")
                    i = 5;
                }
        }


        
            else {
                switch (i){
                    case 0:
                        console.log("Round One");
                        break;
                    case 1:
                        console.log(" \nRound Two");
                        break;
                    case 2: 
                        console.log(" \nRound Three");
                        break;
                    case 3: 
                        console.log(" \nRound Four");
                        break;
                    case 4: 
                        console.log(" \nFinal Round")
                }
                console.log(" \nYou chose " + playerChoice)
                console.log("Computer chose " +computerChoice)
                rules(playerChoice, computerChoice)
                if (i===4) {
                    gameStatus = "Over"
                    console.log("\n\n******************\n \nFinal Score\n\n*****************\n_____________________ ")
                }
                else {
                    console.log(" \nCurrent Score")
                }
                let score = `Player ${playerScore} : ${computerScore} Computer\n______________________________________________\n                    `
                console.log(score)
            }
    
    }

    determineWinner(playerScore, computerScore, newGamePrompt)


}

match()