// Init Player's & Computer's score
let playerScore = 0;
let computerScore = 0;

// Set Player's choice buttons
const playerRock = document.querySelector("#player-rock");
const playerPaper = document.querySelector("#player-paper");
const playerScissors = document.querySelector("#player-scissors");

// Set click event to choice buttons
playerRock.addEventListener("click", playRound);
playerPaper.addEventListener("click", playRound);
playerScissors.addEventListener("click", playRound);

// Set Player's & Computer's score display
const playerResult = document.querySelector(".player-score");
const computerResult = document.querySelector(".computer-score");

// Display Player's & Computer's choice on screen
const playerChoiceDisplay = document.querySelector(".player-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");

// Display Round & Game Winner messages
const roundWinnerMsg = document.querySelector(".display-round-winner");
const gameWinnerMsg = document.querySelector(".display-game-winner");

// Restart game button
const toRestartGame = document.querySelector(".h2-play");
const restartGameBtn = document.createElement("button");
restartGameBtn.textContent = "Restart Game";
restartGameBtn.classList.add("restart-btn");
restartGameBtn.addEventListener("click", restartGame);

function restartGame() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;

  // Reset displays
  playerResult.textContent = playerScore;
  computerResult.textContent = computerScore;
  playerChoiceDisplay.textContent = "?";
  computerChoiceDisplay.textContent = "?";
  roundWinnerMsg.textContent = "";
  gameWinnerMsg.textContent = "";

  // Remove styles
  gameWinnerMsg.classList.remove("green-text", "red-text");

  // Enable Player choice buttons
  playerRock.disabled = false;
  playerPaper.disabled = false;
  playerScissors.disabled = false;

  restartGameBtn.remove();
}

function getComputerChoice() {
  // Generate a number between 1 - 99 so that it can be evenly split 33/33/33
  let generating = Math.floor(Math.random() * 100);
  if (generating === 0) {
    generating += 1;
  }

  // Converts the number (1-33 = rock) (34-66 = paper) (67-99 = scissors)
  let choice = "";
  if (generating <= 33) {
    choice = "rock";
  } else if (generating <= 66) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

function playRound(e) {
  // Reset previous round winner msg style
  roundWinnerMsg.classList.remove("green-text", "red-text");

  // Get Player & Computer choice
  const playerChoice = e.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();

  // Display choices
  playerChoiceDisplay.textContent = playerChoice.toUpperCase();
  computerChoiceDisplay.textContent = computerChoice.toUpperCase();

  // Check winner of round
  let winner = checkRoundWinner(playerChoice, computerChoice);

  updateAndDisplayScore(winner);

  displayRoundWinner(winner);

  if (playerScore === 5) {
    gameWinnerMsg.textContent = "Congratulations! You have won the game!";
    gameWinnerMsg.classList.add("green-text");
    playerRock.disabled = true;
    playerPaper.disabled = true;
    playerScissors.disabled = true;
    toRestartGame.appendChild(restartGameBtn);
  }
  if (computerScore === 5) {
    gameWinnerMsg.textContent = "You lost this game. Better luck next time.";
    gameWinnerMsg.classList.add("red-text");
    playerRock.disabled = true;
    playerPaper.disabled = true;
    playerScissors.disabled = true;
    toRestartGame.appendChild(restartGameBtn);
  }
}

function checkRoundWinner(playerChoice, computerChoice) {
  let winner = "";
  if (computerChoice === "rock") {
    switch (playerChoice) {
      case "rock":
        winner = "draw";
        break;

      case "paper":
        winner = "player";
        break;

      case "scissors":
        winner = "computer";
        break;
    }
  }
  if (computerChoice === "paper") {
    switch (playerChoice) {
      case "rock":
        winner = "computer";
        break;

      case "paper":
        winner = "draw";
        break;

      case "scissors":
        winner = "player";
        break;
    }
  }
  if (computerChoice === "scissors") {
    switch (playerChoice) {
      case "rock":
        winner = "player";
        break;

      case "paper":
        winner = "computer";
        break;

      case "scissors":
        winner = "draw";
        break;
    }
  }
  return winner;
}

function updateAndDisplayScore(winner) {
  switch (winner) {
    case "player":
      playerScore += 1;
      playerResult.textContent = playerScore;
      roundWinnerMsg.classList.add("green-text");
      break;

    case "computer":
      computerScore += 1;
      computerResult.textContent = computerScore;
      roundWinnerMsg.classList.add("red-text");
      break;

    default:
      break;
  }
}

function displayRoundWinner(winner) {
  if (winner === "player") {
    roundWinnerMsg.textContent = "Yay! You won this round!";
  } else if (winner === "computer") {
    roundWinnerMsg.textContent = "Oh No! You lost this round";
  } else if (winner === "draw") {
    roundWinnerMsg.textContent = "It's a draw game!";
  } else {
    roundWinnerMsg.textContent = "Invalid game due to invalid inputs!";
  }
}
