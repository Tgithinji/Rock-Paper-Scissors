let playerScore = 0;
let computerScore = 0;

// function to get computers choice

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * choice.length);
    let computerChoice = choice[randomNumber];
    return computerChoice;

}
const main = document.getElementById('main');
const images = document.querySelectorAll('img');
const scoreFinal = document.querySelectorAll('.final-score');
const divResults = document.createElement('div');
const divFinal = document.createElement('div');
divResults.classList.add('results');
divFinal.classList.add('results');

function disable () {
    images.forEach(image => {
        image.removeEventListener('click', () => {
            playRound(image.alt.toLowerCase())
        })
    });
}

function reloadButton() {
    const reloadBtn = document.createElement('button');
    reloadBtn.textContent = 'Play Again';
    reloadBtn.style.cssText = 'display:block; margin: 10px auto; padding: 10px 20px';
    divFinal.appendChild(reloadBtn);
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })
}

// function to play single round

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    
    if ((playerSelection === 'scissors' && computerSelection === 'rock') || 
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')) {
            computerScore ++;
            scoreFinal[1].textContent = computerScore; 
            divResults.textContent = `${computerSelection} beats ${playerSelection}`;
            main.appendChild(divResults);   

            if (computerScore === 5) {
                divFinal.textContent = `You loose. You scored ${playerScore} out of 5`;
                
                reloadButton();
                main.appendChild(divFinal);
                disable();
            }
                   
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || 
       (playerSelection === 'scissors' && computerSelection === 'paper') ||
       (playerSelection === 'rock' && computerSelection === 'scissors')) {
            playerScore ++
            scoreFinal[0].textContent = playerScore; 
            divResults.textContent = `${playerSelection} beats ${computerSelection}`;
            main.appendChild(divResults);

            if (playerScore === 5) {
                divFinal.textContent = `You Win. You scored ${playerScore} out of 5`
                
                reloadButton();
                main.appendChild(divFinal);
                disable();
            }
    } else {
            divResults.textContent = `You both choose ${playerSelection}`;
            main.appendChild(divResults);
    }    
}

images.forEach(image => {
    
    image.addEventListener('click', () => {
        playRound(image.alt.toLowerCase());
    });
    
});