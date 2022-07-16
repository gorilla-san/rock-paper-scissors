let computerChoice
let playerChoice
let computerScore = 0
let playerScore = 0
let score = `${playerScore} : ${computerScore}`
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
        console.log("It's a draw");
        computerScore += 1;
        playerScore +=1;
    }
        else if (x.toLowerCase() === "rock" && y.toLowerCase() === "paper" ) {
            console.log("L's IN CHAT");
            computerScore += 1;

        }
        else if (x.toLowerCase() === "rock" && y.toLowerCase() === "scissors") {
            console.log("BIG W");
            playerScore +=1;
        }
        else if (x.toLowerCase() === "paper" && y.toLowerCase() === "rock") {
            console.log("SLAP it");
            playerScore +=1;
        }
        else if (x.toLowerCase() === "paper" && y.toLowerCase() === "scissors") {
            console.log("F\nF\nF\nF\nF\nF\nF\nF\nF\nF\nF\nF\nF");
            computerScore += 1;
        }
        else if (x.toLowerCase() === "scissors" && y.toLowerCase() === "rock") {
            console.log("You got got");
            computerScore +=1;
        }
        else if (x.toLowerCase() === "scissors" && y.toLowerCase() === "paper") {
            console.log("Yee, boy, get it");
            playerScore +=1;
        }
        else {
            console.log("You dyslexic fuck")
            i-=1;
        }
    
}


function match () {
    for (i=0; i<5; i++) { 
        getComputerChoice()
        getPlayerChoice()
        if (playerChoice === null) {
            console.log("Where you goin, punk?")
            let newGame = prompt("Do you want to start a new game?(Y/N)")

            if (newGame === null) {
                console.log("Ok go then. GO. Don't talk to me anymore!")
                i = 4;
            }
                else if (newGame.toLowerCase() === "y" || newGame.toLowerCase() === "yes") {
                    i = 0;
                    playerScore = 0;
                    computerScore = 0;
                }
                else {
                    console.log("Ok go then. GO. Don't talk to me anymore!")
                    i = 4;
                }

        }
            else {
                console.log("You chose " + playerChoice)
                console.log("Computer chose " +computerChoice)
                rules(playerChoice, computerChoice)
                console.log("Current Score")
                console.log(score)
            }
    
    }
}

match()