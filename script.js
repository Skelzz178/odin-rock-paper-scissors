// Init Player's & Computer's score as Global Variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // Generate a number between 1 - 99 so that it can be evenly split 33/33/33
  let choice = Math.floor(Math.random() * 100);
  if (choice === 0) {
    choice += 1;
  }

  // Converts the number (1-33 = rock) (34-66 = paper) (67-99 = scissors)
  let answer = "";
  if (choice <= 33) {
    answer = "rock";
  } else if (choice <= 66) {
    answer = "paper";
  } else {
    answer = "scissors";
  }

  // Tests to check values
  //   console.log(choice);
  //   console.log("Computer: " + answer);

  return answer;
}

function getHumanChoice() {
  let choice = prompt('Please input either "rock" "paper" or "scissors" ');

  // Returns "invalid" if User clicks the cancel button or if input is blank
  choice = choice ? choice.toLowerCase() : "invalid";

  // Test to check player choice
  // console.log("Player: " + choice);

  return choice;
}

function playRound() {
  // Get Player & Computer choice
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  // Compare Player & Computer Choice
  if (computerChoice === "rock") {
    switch (humanChoice) {
      case "rock":
        console.log("It's a draw! Both chose Rock");
        break;

      case "paper":
        humanScore += 1;
        console.log("Yay! You win this round! Paper beats Rock");
        break;

      case "scissors":
        computerScore += 1;
        console.log("You lose! Rock beats Scissors");
        break;

      default:
        computerScore += 1;
        console.log("Your input is invalid! Computer wins by default");
        break;
    }
  }
  if (computerChoice === "paper") {
    switch (humanChoice) {
      case "rock":
        computerScore += 1;
        console.log("You lose! Paper beats Rock");
        break;

      case "paper":
        console.log("It's a draw! Both chose Paper");
        break;

      case "scissors":
        humanScore += 1;
        console.log("Yay! You win this round! Scissors beats Paper");
        break;

      default:
        computerScore += 1;
        console.log("Your input is invalid! Computer wins by default");
        break;
    }
  }
  if (computerChoice === "scissors") {
    switch (humanChoice) {
      case "rock":
        humanScore += 1;
        console.log("Yay! You win this round! Rock beats Scissors");
        break;

      case "paper":
        computerScore += 1;
        console.log("You lose! Scissors beats Paper");
        break;

      case "scissors":
        console.log("It's a draw! Both chose Scissors");
        break;

      default:
        computerScore += 1;
        console.log("Your input is invalid! Computer wins by default");
        break;
    }
  }
}

// Runs playRound 5 times
function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  // Display scores
  console.log("-----Final Results-----");
  console.log("Player Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
  // Declares the winner
  if (humanScore === computerScore) {
    console.log("Its a draw game! Better luck next time.");
  } else if (humanScore > computerScore) {
    console.log("Congratulations! You won!");
  } else {
    console.log("Oh no! You lost. Try again next time.");
  }

  // Reset scores
  humanScore = 0;
  computerScore = 0;
}

playGame();
