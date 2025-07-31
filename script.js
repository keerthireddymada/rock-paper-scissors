console.log("Hiya");
var numOfRounds = 0;
var CompPoints = 0;
var HumanPoints = 0;

playGame();

function getHumanChoice() {
    return prompt("Whats your choice?").toLowerCase();
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humchoice, compchoice) {

    if(compchoice == 'rock') {
        switch(humchoice) {
            case 'rock': {
                console.log("Rock gets tied");
                break;
            }
            case 'paper': {
                console.log("Paper beats Rock!");
                HumanPoints++;
                break;
            }
            case 'scissors': {
                console.log("Rock beats Scissors!");
                CompPoints++;
                break; 
            }
        }
    }
    else if(compchoice == 'paper') {
        switch(humchoice) {
            case 'rock': {
                console.log("Paper beats Rock!");
                CompPoints++;
                break;
            }
            case 'paper': {
                console.log("Paper gets tied!");
                break;
            }
            case 'scissors': {
                console.log("Scissors beats Paper!");
                HumanPoints++;
                break; 
            }
        }
    }
    else { // compchoice = scissors
        switch(humchoice) {
            case 'rock': {
                console.log("Rock beats Scissors!");
                HumanPoints++;
                break;
            }
            case 'paper': {
                console.log("Scissors beats Paper");
                CompPoints++;
                break;
            }
            case 'scissors': {
                console.log("Scissors gets tied");
                break; 
            }
        }
    }
    numOfRounds++;    
}
function playGame() {
    while(numOfRounds < 5) {
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(CompPoints > HumanPoints) {
        console.log("You lose");
    }
    else {
        console.log("You win");
    }
}


