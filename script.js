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



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissors") {
        
        return `You lose, ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        
        return `You won, ${playerSelection} beats ${computerSelection}!`;
    } else {
        return "You can only choose rock, scissors or paper!";
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    while (round < 5) {
        let playerSelection = prompt("What do you choose?", "");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("won")) {
            playerScore++;
            round++;
        } else if (result.includes("lose")) {
            computerScore++;
            round++;
        }
      }
    
      if (round === 5) {
        if (playerScore > computerScore) {
          console.log(`${playerScore} : ${computerScore}! You win!`);
        } else if (playerScore < computerScore) {
          console.log(`${playerScore} : ${computerScore}! You lose!`);
        } else {
          console.log(`${playerScore} : ${computerScore}! Draw!`);
    }
}
}
    
game();