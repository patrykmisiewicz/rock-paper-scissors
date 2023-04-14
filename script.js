function getComputerChoice() {

    let number = Math.random()

        if (number > 0.66) {
            return "rock";
        } else if (number < 0.33) {
            return "paper";
        } else {
            return "scissors";
        }
        
    }


let playerSelection = prompt("What do you choose?", '') 

playerSelection = playerSelection.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose, ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        return `You won, ${playerSelection} beats ${computerSelection}!`
    } else {
        return "You can only choose rock, scissors or paper!";
    }
}

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
