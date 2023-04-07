
function getComputerChoice (){
    choices = ['paper','rock','sissors']
    return choices[Math.floor(Math.random()*3)];
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
    /**** NULL */
    if(playerSelection.toLowerCase() === 'paper' && computerSelection == 'paper'){
        return "Match null";
    }
    else if(playerSelection.toLowerCase() === 'sissors' && computerSelection == 'sissors'){
        return "Match null";
    }
    else if(playerSelection.toLowerCase() === 'rock' && computerSelection == 'rock'){
        return "Match null";
    }
    //COMPUTER WIN
    if(playerSelection.toLowerCase()== 'rock' && computerSelection == 'paper'){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase()== 'sissors' && computerSelection == 'rock'){
        return "You Lose! Rock beats sissors";
    }

    else if(playerSelection.toLowerCase()== 'paper' && computerSelection == 'sissors'){
        return "You Lose! sissors beats paper";
    }
    //USER WIN
    
    else if(playerSelection.toLowerCase()== 'rock' && computerSelection == 'sissors'){
        return "You Win! Rock beats sissors";
    }
    else if(playerSelection.toLowerCase() == 'sissors' && computerSelection == 'paper'){
        return "You Win! sissors beats paper"
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        return "You Win! Paper beats Rock"
    }
}

const playerSelection = "sissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
