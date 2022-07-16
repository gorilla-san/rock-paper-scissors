let computerChoice
let playerChoice
let computerWins = 0
let playerWins = 0
let score = (playerWins + " : " + computerWins)


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

function rules (playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log("It's a draw");
        computerWins += 1;
        playerWins +=1;
    }
        else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper" ) {
            console.log("L's IN CHAT");
            computerWins += 1;

        }
        else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
            console.log("BIG W");
            playerWins +=1;
        }
        else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
            console.log("SLAP it");
            playerWins +=1;
        }
        else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
            console.log("F\nF\nF\nF\nF\nF\nF\nF\nF\nF\nF\nF\nF");
            computerWins += 1;
        }
        else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
            console.log("You got got");
            computerWins +=1;
        }
        else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
            console.log("Yee, boy, get it");
            playerWins +=1;
        }
        else {
            console.log("You dyslexic fuck")
        }
    
}


function match () {
    for (let i=0; i<4; i++) { 
        getComputerChoice()
        getPlayerChoice()
        console.log("You chose " + playerChoice)
        console.log("Computer chose " +computerChoice)
        rules(playerChoice, computerChoice)
        console.log("Current Score")
        console.log(score)
    
    }
}

match()