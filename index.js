
let user_score = 0;
let computer_score = 0;
let round =0;

let user_score_element = document.getElementById("user_score");
let computer_score_element = document.getElementById("computer_score");
let round_element = document.getElementById("round");

console.log("Rock paper sissors\n");
/*********** DOM ********/

let playerSelection = Array.from(document.getElementsByClassName('choice'));
let resultElement = document.getElementById('result')
for (const element of playerSelection) {
    element.addEventListener('click', (e)=> {
        round +=1;
        if(user_score >= 5 || computer_score >= 5){
            if(user_score > computer_score)resultElement.textContent = "USER WIN";
            else if(computer_score > user_score) resultElement.textContent = "COMPUTER WIN";
            else resultElement.textContent = "MATCH NULL";
        }
        else{
            resultElement.innerText = playRound(element.textContent, getComputerChoice());
            user_score_element.textContent = user_score;
            computer_score_element.textContent = computer_score;
            round_element.textContent = round;
        }
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


//game();
