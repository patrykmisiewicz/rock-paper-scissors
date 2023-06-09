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

// Function to play a round

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

// Function for updating score
// and displaying game result

function result () {
    if (playerScore == 5) {
        score.innerHTML = `${playerScore} : ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
        round.innerHTML += " You are the winner!"
    } else if (computerScore == 5) {
        score.innerHTML = `${playerScore} : ${computerScore}`;
        computerScore = 0;
        playerScore = 0;
        round.innerHTML += " Computer is the winner!";
    } else {
        score.innerHTML = `${playerScore} : ${computerScore}`;
    }
}

const score = document.querySelector('.score');
const round = document.querySelector('.round')

// Play ROCK in single round

const rock = document.querySelector('.rock');

rock.addEventListener('click', function () {

    let computerSelection = getComputerChoice();
    round.innerHTML = (playRound('rock',computerSelection));
    score.innerHTML = `${playerScore} : ${computerScore}`;
    result();

});

// Play PAPER in single round

const paper = document.querySelector('.paper');

paper.addEventListener('click', function () {

    let computerSelection = getComputerChoice();
    round.innerHTML = (playRound('paper',computerSelection));
    score.innerHTML = `${playerScore} : ${computerScore}`;
    result();

});

// Play SCISSORS in single round

const scissors = document.querySelector('.scissors');

scissors.addEventListener('click', function () {

    let computerSelection = getComputerChoice();
    round.innerHTML = (playRound('scissors',computerSelection));
    score.innerHTML = `${playerScore} : ${computerScore}`;
    result();
});




