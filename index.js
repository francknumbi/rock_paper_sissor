
let user_score = 0;
let computer_score = 0;
let round = 0;
/*********** DOM ********/


let playerSelection = Array.from(document.getElementsByClassName('choice'));
let resultElement = document.getElementById('result')
for (const element of playerSelection) {
    element.addEventListener('click', (e)=>{
        resultElement.innerText = playRound(element.textContent, getComputerChoice());
        //resultElement.textContent = element.textContent;
    });
}

function getComputerChoice (){
    choices = ['paper','rock','sissors'];
    return choices[Math.floor(Math.random()*3)];
}

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
        computer_score += 1;
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase()== 'sissors' && computerSelection == 'rock'){
        computer_score += 1;
        return "You Lose! Rock beats sissors";
    }

    else if(playerSelection.toLowerCase()== 'paper' && computerSelection == 'sissors'){
        computer_score += 1;
        return "You Lose! sissors beats paper";
    }
    //USER WIN
    
    else if(playerSelection.toLowerCase()== 'rock' && computerSelection == 'sissors'){
        user_score += 1;
        return "You Win! Rock beats sissors";
    }
    else if(playerSelection.toLowerCase() == 'sissors' && computerSelection == 'paper'){
        user_score += 1;
        return "You Win! sissors beats paper";
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        user_score += 1;
        return "You Win! Paper beats Rock";
    }
}

function game(){
    console.log("Rock paper sissors\n");
    response = 'y';
    while (response != 'n'){
        round +=1;    
        playerSelection = prompt("Entrer votre choix");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("ROUND : "+ round);
        console.log("===== SCORE ====\n"+"USER = "+user_score+" "+" COMPUTER = "+computer_score);
        response = prompt("Do you want continu ?\n");
    }
}

//game();
