// function to get computers choice

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * choice.length);
    let computerChoice = choice[randomNumber];
    return computerChoice;
}
