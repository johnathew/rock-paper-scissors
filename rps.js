const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
let computerPoints = document.querySelector('#compScoreDisplay')
let playerPoints = document.querySelector('#playerScoreDisplay')
let winner = document.querySelector('#winnerDisplay')
const choices = ['Rock', 'Paper', 'Scissors']

let playerScore = 0;
let computerScore = 0;

const handleClick = (e) => {
  getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
  game()
}

choices.forEach(choice => {
  const button = document.createElement('button')
  button.innerHTML = choice
  button.addEventListener('click', handleClick)
  choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
      case "RockScissors":
      case "PaperRock":
      case "ScisssorsPaper":
        resultDisplay.textContent = `Round winner: User! ${userChoice} beats ${computerChoice}. +1 point to the Player.`
        playerScore = ++playerScore
        playerPoints.textContent = `${playerScore}`
        break
      case "ScissorsRock":
      case "RockPaper":
      case "PaperScisssors":
        resultDisplay.textContent = `Round winner: Computer! ${computerChoice} beats ${userChoice}. +1 point to the Computer.`
        computerScore = ++computerScore
        computerPoints.textContent = `${computerScore}`
        break
      case "ScissorsScissors":
      case "RockRock":
      case "PaperPaper": 
        resultDisplay.textContent = 'Draw. No points shall be rewarded. haha'
        break
    }
}

const game = () => {
  if(computerScore >= 5) {
    winner.textContent = "Computer wonnered. Try again :(.";
    choicesDisplay.style.display = 'none';
  } 
  if (playerScore >= 5) {
    winner.textContent = "You win :). Suck it computer."
    choicesDisplay.style.display = 'none';
  }
}