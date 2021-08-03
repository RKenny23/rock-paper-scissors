let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_btn = document.getElementById("r");
const paper_btn = document.getElementById("p");
const scissors_btn = document.getElementById("s");

function getPlayerChoice() {
  rock_btn.addEventListener('click', function() {
      playRound('Rock');
  })

  paper_btn.addEventListener('click', function() {
      playRound('Paper');
  })

  scissors_btn.addEventListener('click', function() {
      playRound('Scissors');
  })
}

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

getPlayerChoice();

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  
  if (playerChoice === computerChoice){
    draw();
  }  
  else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    win(playerChoice, computerChoice);            
  }
  else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    win(playerChoice, computerChoice);
  }
  else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
    win(playerChoice, computerChoice);
  }
  else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
    lose(playerChoice, computerChoice);
  }
  else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
    lose(playerChoice, computerChoice);
  }
  else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
    lose(playerChoice, computerChoice);
  }
}

function win(playerChoice, computerChoice) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = playerChoice + " beats " + computerChoice + ". You win!";
  
  if (playerScore === 10) {
    result_p.innerHTML = "Player wins the game.";
    setTimeout(function() {
      window.location.reload()
    }, 2000);
  }
}

function lose(playerChoice, computerChoice) {
  computerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = computerChoice + " beats " + playerChoice + ". You lose!";

  if (computerScore === 10){
    result_p.innerHTML = "Computer wins the game.";
    setTimeout(function() {
      window.location.reload()
    }, 2000);
  }
}

function draw() {
  result_p.innerHTML = "It's a draw!";
}
