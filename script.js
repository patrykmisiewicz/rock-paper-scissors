// Function that generates 
// (fair enough) random choice

let playerScore = 0;
let computerScore = 0;



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

// Function used to play a round
// Wish to make it shorter in future

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return `You lose, ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You won, ${playerSelection} beats ${computerSelection}!`;
    } else {
        return "You can only choose rock, scissors or paper!";
    }
}

// Final function
// First try of use loop function "for"
// Changed to "while" because function was stopping
// When rounds reached 5, even though
// Score was under 5 

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
    
// game();

function result () {
    if (playerScore == 5) {
        console.log(`player won ${playerScore} : ${computerScore}`);
        playerScore = 0;
        computerScore = 0;
        score.innerHTML = `${playerScore} : ${computerScore}`;
        alert("Computer is the winner!")
    } else if (computerScore == 5) {
        console.log(`player lose ${playerScore} : ${computerScore}`);
        computerScore = 0;
        playerScore = 0;
        score.innerHTML = `${playerScore} : ${computerScore}`;
        alert("Computer is the winner!")
    }
}

const score = document.querySelector('.score');
const round = document.querySelector('.round')

const rock = document.querySelector('.rock');

rock.addEventListener('click', function () {

    let computerSelection = getComputerChoice();
    round.innerHTML = (playRound('rock',computerSelection));
    score.innerHTML = `${playerScore} : ${computerScore}`;
    result();

});

const paper = document.querySelector('.paper');

paper.addEventListener('click', function () {

    let computerSelection = getComputerChoice();
    round.innerHTML = (playRound('rock',computerSelection));
    score.innerHTML = `${playerScore} : ${computerScore}`;
    result();

});

const scissors = document.querySelector('.scissors');

scissors.addEventListener('click', function () {

    let computerSelection = getComputerChoice();
    round.innerHTML = (playRound('rock',computerSelection));
    score.innerHTML = `${playerScore} : ${computerScore}`;
    result();
});




