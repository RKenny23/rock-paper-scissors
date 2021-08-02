const choices = [
    'rock', 
    'paper', 
    'scissors'
];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function playerPlay() {
    return prompt('Make a choice.');
}

function playGame(playerScore, computerScore) {

    playerScore = 0;
    computerScore = 0;  

    function playRound(playerSelection, computerSelection) { 
               
        playerSelection = playerPlay().toLowerCase();
        computerSelection = computerPlay();

        console.log(playerSelection);
        console.log(computerSelection);
        
        if (playerSelection === computerSelection){
            return 'Tie.';
        }  
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            return  'Player wins.';            
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return  'Player wins.';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return  'Player wins.';
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            return  'Player loses.';
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            return  'Player loses.';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            return  'Player loses.';
        }
    }
    console.log(playRound(), playRound(), 
    playRound(), playRound(), playRound());

    console.log(playerScore + ' to ' + computerScore);

    if (playerScore > computerScore) {
        return 'Player wins the game.';
    }
    if (playerScore < computerScore) {
        return 'Computer wins the game.';
    }
    if (playerScore === computerScore) {
        return 'The game is tie.';
    }
}

// btn.addEventListener('click', playRound);

console.log(playGame());
    



