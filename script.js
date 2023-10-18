//randomly get computer choice
const getComputerChoice = function () {
    //logic to generate random number
	let comChoice = Math.floor(Math.random() * 2);
    //logic to select computer choice by using the random number generator
	if (comChoice === 0) {
		return "rock";
	} else if (comChoice === 1) {
		return "paper";
	} else {
		return "scissor";
	}
};

//Play a single round of rock paper scissor
const rockPaperScissor = function(playerSelection, computerSelection) {
    //check if player choice and comChoice is the same 
    if(playerSelection === computerSelection){
        return `It's a Tie!, `
    } else if((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'Paper') || (playerSelection === 'rock ' && computerSelection === 'scissor')){ //check player choices against computer choices
        return `${playerSelection} VS ${computerSelection} : You Won!`
    } else { //check computer choices against player choices
        return `${computerSelection} VS ${playerSelection}: Computer Wins!`
    }
}

//play 5 round of game
const game = function() {
    //create a loop to make 5 round of game
    for(let i = 0; i < 5; i++){
        //Declare variable for player selection
        let playerSelection = prompt('Rock, Paper, or Scissor; Insert your choice here to begin playing').toLowerCase();
        //Declare variable for computer selection
        let computerSelection = getComputerChoice();

        //calling the rock paper scissor in the game function
        console.log(rockPaperScissor(playerSelection,computerSelection));
    }
}

game();
//
// console.log(getComputerChoice())
// let userInput = prompt("Rock, Paper, or Scissors ?, insert your choice here...").toLowerCase();
// console.log(userInput)