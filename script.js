let playerScore = 0;
let computerScore = 0;
let draw = 0;

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
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
            computerScore ++;
            text = `You lose ${computerSelection} beats ${playerSelection}`;
            break;

        case (playerSelection === 'paper' && computerSelection === 'rock'):
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
            playerScore ++;
            text = `You win! ${playerSelection} beats ${computerSelection}`;
            break;

        case (playerSelection === computerSelection):
            draw ++;
            text = `Its a draw! You both chose ${playerSelection}`;
            break;
        default:
            text = 'Oops something is not right';
    }
    alert(text);
}

// function to get playerSelection and check if valid

function getPlayerSelection() {
    let userInput = prompt('Rock, Paper or Scissors', '').toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else {
        alert('Please enter a valid answer!');
    }
}

// function that plays 5 rounds of the game

function game() {
    let gamesPlayed = 0;
    
    for (let i = 0; i < 5; i ++) {
        let  playerSelection = getPlayerSelection();
    let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        gamesPlayed ++;
    }
    alert(`You won ${playerScore} out of ${gamesPlayed} games
    Computer won ${computerScore} out of ${gamesPlayed} games
    ${draw} games ended as draw`);
}

game();