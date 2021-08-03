let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_btn = document.getElementById("r");
const paper_btn = document.getElementById("p");
const scissors_btn = document.getElementById("s");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function game(playerChoice) {
  const computerChoice = getComputerChoice();
  console.log(playerChoice);
  console.log(computerChoice);

  if (playerChoice === computerChoice){
    draw();
  }  
  else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      win(playerChoice, computerChoice);            
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
      win(playerChoice, computerChoice);
  }
  else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      win(playerChoice, computerChoice);
  }
  else if (playerChoice === 'rock' && computerChoice === 'paper') {
      lose(playerChoice, computerChoice);
  }
  else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      computerScore++;
      lose(playerChoice, computerChoice);
  }
  else if (playerChoice === 'scissors' && computerChoice === 'rock') {
      computerScore++;
      lose(playerChoice, computerChoice);
  }
}


function main() {
  rock_btn.addEventListener('click', function() {
      game('rock');
  })

  paper_btn.addEventListener('click', function() {
      game('paper');
  })

  scissors_btn.addEventListener('click', function() {
      game('scissors');
  })
}

main();

function win(playerChoice, computerChoice) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = playerChoice + " beats " + computerChoice + ". You win!";
}

function lose(playerChoice, computerChoice) {
  computerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = computerChoice + "beats" + playerChoice + ". You lose!";
}

function draw(playerChoice, computerChoice) {
  result_p.innerHTML = "It's a draw!";
}

// function playRound(playerChoice, computerChoice) { 
            
//   playerChoice = game();
//   computerChoice = computerPlay();

//   console.log(playerChoice);
//   console.log(computerChoice);
  
//   if (playerChoice === computerChoice){
//       return 'Tie.';
//   }  
//   else if (playerChoice === 'rock' && computerChoice === 'scissors') {
//       win(playerChoice, computerChoice);            
//   }
//   else if (playerChoice === 'paper' && computerChoice === 'rock') {
//       win(playerChoice, computerChoice);
//   }
//   else if (playerChoice === 'scissors' && computerChoice === 'paper') {
//       win(playerChoice, computerChoice);
//   }
//   else if (playerChoice === 'rock' && computerChoice === 'paper') {
//       computerScore++;
//       return  'Player loses.';
//   }
//   else if (playerChoice === 'paper' && computerChoice === 'scissors') {
//       computerScore++;
//       return  'Player loses.';
//   }
//   else if (playerChoice === 'scissors' && computerChoice === 'rock') {
//       computerScore++;
//       return  'Player loses.';
//   }
// }


    // console.log(playerScore + ' to ' + computerScore);

    // if (playerScore > computerScore) {
    //     return 'Player wins the game.';
    // }
    // if (playerScore < computerScore) {
    //     return 'Computer wins the game.';
    // }
    // if (playerScore === computerScore) {
    //     return 'The game is tie.';
    // }
