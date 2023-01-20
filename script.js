// function to get computers choice

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * choice.length);
    let computerChoice = choice[randomNumber];
    return computerChoice;
}

// function to play single round

function playRound(playerSelection, computerSelection) {
    let text;

    switch (true) {
        case (playerSelection === 'rock' && computerSelection === 'paper'):
            text = `You lose ${computerSelection} beats ${playerSelection}`;
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock'):
            text = 'You win! Paper beats Rock';
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
            text = 'You win! Rock crashes scissors';
            break;
        case (playerSelection === 'scissor' && computerSelection === 'rock'):
            text = 'You lose! Rock beats scissors';
            break;
        case (playerSelection === 'scissor' && computerSelection === 'paper'):
            text = 'You win! Scissors cut paper';
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
            text = 'You lose! Paper gets cut by scissors';
            break;
        case (playerSelection === computerSelection):
            text = `Its a draw! You both chose ${playerSelection}`;
            break;
        default:
            console.log('Something is not right');
    }
    return text;
}

