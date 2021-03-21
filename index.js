
alert("Welcome to Rock, Paper, Scissors!")
alert("How Many Rounds Would You Like to Play?")

let rounds = prompt("Three, Five or Seven?", "Enter 3, 5 or 7")
rounds = parseInt(rounds)

// Round Selection Validation
let validRoundSelection = false
while(validRoundSelection == false){
  if(rounds !== 3 && rounds !== 5 && rounds !== 7){
     alert("Invalid Selection")
     rounds = prompt("Three, Five or Seven?", "Enter 3, 5 or 7")
     rounds = parseInt(rounds)
   } else {
     validRoundSelection = true
   }
}

let playerWin = rounds
let computerWin = rounds

let playerScore = 0
let computerScore = 0

// Generate Game Loop
while(playerScore !== playerWin && computerScore !== computerWin){

  // Generate Computer Result
  function computerPlay(){
    let outcomes = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * outcomes.length)
    return outcomes[random]
  }

  // Generate Player Result
  function playerPlay(){
    let playerSelection = prompt("Rock, Paper or Scissors")
    playerSelection = playerSelection.toLowerCase()
    // Player Result Validation
    let validPlayerSelection = false
    while(validPlayerSelection == false){
      if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        alert("Invalid Selection")
        playerSelection = prompt("Rock, Paper or Scissors")
        playerSelection = playerSelection.toLowerCase()
      } else {
        validPlayerSelection = true
      }
    }
    return playerSelection
  }

  let computerSelection = computerPlay()
  let playerSelection = playerPlay()

  function rockPaperScissors(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "scissors"){
      alert("You Win! Rock beats Scissors!")
      playerScore += 1
      alert("Player: " + playerScore + " Computer: " + computerScore)
    } else if(playerSelection === "paper" && computerSelection === "rock"){
      alert("You Win! Paper beats Rock!")
      playerScore += 1
      alert("Player: " + playerScore + " Computer: " + computerScore)
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
      alert("You Win! Scissors beats Paper!")
      playerScore += 1
      alert("Player: " + playerScore + " Computer: " + computerScore)
    } else if(playerSelection === "rock" && computerSelection === "paper"){
      alert("You Lose! Paper beats Rock!")
      computerScore += 1
      alert("Player: " + playerScore + " Computer: " + computerScore)
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
      alert("You Lose! Scissors beats Paper!")
      computerScore += 1
      alert("Player: " + playerScore + " Computer: " + computerScore)
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
      alert("You Lose! Rock beats Scissors!")
      computerScore += 1
      alert("Player: " + playerScore + " Computer: " + computerScore)
    } else {
      alert("Tie!")
      alert("Player: " + playerScore + " Computer: " + computerScore)
    }
  }

  rockPaperScissors(playerSelection, computerSelection)

} // End Game Loop

if(playerScore === rounds){
  alert("You Win! Win Job on Defeating the Evil Computer!")
} else{
  alert("You Lose! Better Luck Next Time!")
}
