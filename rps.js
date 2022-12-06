//Generate Computer's Move
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors')
const container = document.querySelector('.container')
let compscore = 0
let playerscore = 0
function getComputerChoice() {
    const arr = ["ROCK", "PAPER", "SCISSORS"];
    const randomIndex = Math.floor(Math.random() * arr.length);
    const choice = arr[randomIndex];
    return choice;
}


//Compare User input to Computer Choice 
function playRound(playerSelection, computerSelection) {
    
    const outcome = document.createElement('div')
    outcome.classList.add('outcome')
    container.append(outcome);
    

    let player = playerSelection.toUpperCase();
    let comp = computerSelection
    let result;
    const p = document.createElement('p');
    const p2 = document.createElement('p')
    if (player == "ROCK") {
        if (comp == "PAPER") {
            result = "Paper, you lose"
            compscore++;
        } else if (comp == "SCISSORS") {
            result = "Scissors, you win"
            playerscore++;
        } else if (comp == "ROCK") {
            result = "Rock, draw"
        }
    } else if (player == "PAPER") {
        if (comp == "PAPER") {
            result = "Paper, draw"
        } else if (comp == "SCISSORS") {
            result = "Scissors, you lose"
            compscore++;
        } else if (comp == "ROCK") {
            result = "Rock, you win"
            playerscore++;
        }
    } else if (player == "SCISSORS") {
        if (comp == "PAPER") {
            result = "Paper, you win"
            playerscore++
        } else if (comp == "SCISSORS") {
            result = "Scissors, draw"
        } else if (comp == "ROCK") {
            result = "Rock, you lose"
            compscore++
        }
    } else {
        return "Error, please check spelling";
    }

    p.innerText = `Score: ${playerscore} to ${compscore}`;
    outcome.appendChild(p)

    if (playerscore == 5 && compscore < 5) {
        p2.innerText = `You Win!`;
        outcome.appendChild(p2)
    } else if (compscore == 5 && playerscore < 5) {
        p2.innerText = `You Lose!`;
        outcome.appendChild(p2)
    }
  
}

rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection)
})

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection)
})

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection)
})


//Count score and determine winner of Best of 5