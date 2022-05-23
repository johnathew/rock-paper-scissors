let computerChoiceDisplay = document.getElementById("computer-choice");
let resultDisplay = document.getElementById("result");
let roundsDisplay = document.getElementById("rounds");
const userChoiceDisplay = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll("button");




let userChoice;
const options = ["Rock", "Paper", "Scissors"];
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    computerPlay();
    playRound();
  })
);

function computerPlay() {
  const randomChoice = options[Math.floor(Math.random() * options.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = computerChoice;
  
}

// function decideWinner() {
//   if (computerChoice === "Rock" && userChoice === "paper") {
//     result = "You win";
//   }
//   if (computerChoice === "Paper" && userChoice === "scissors") {
//     result = "You win";
//   }
//   if (computerChoice === "Scissors" && userChoice === "rock") {
//     result = "You win";
//   }
//   if (computerChoice === "Rock" && userChoice === "scissors") {
//     result = "You lose";
//   }
//   if (computerChoice === "Paper" && userChoice === "rock") {
//     result = "You lose";
//   }
//   if (computerChoice === "Scissors" && userChoice === "paper") {
//     result = "You lose";
//   }
//   if (computerChoice === userChoice) {
//     result = "its a draw";
//   }
//   resultDisplay.innerHTML = result;
// }

const playRound = () => {
  switch (userChoice + computerChoice) {
    case "scissorsPaper":
    case "rockScissors":
    case "paperRock":
      resultDisplay.innerHTML = "You win!";
      break;
    case "scissorsRock":
    case "rockPaper":
    case "paperScissors":
      resultDisplay.innerHTML = "You lose";
      break;
    case "scissorsScissors":
    case "paperPaper":
    case "rockRock":
      resultDisplay.innerHTML = "It's a draw.";
  }
};


for (i =0; i < 100; i++) {
    roundsDisplay.innerHTML = i;
    
}