function getComputerChoice() {
    const arr = ["ROCK", "PAPER", "SCISSORS"];
    const randomIndex = Math.floor(Math.random() * arr.length);
    const choice = arr[randomIndex];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Make Your Choice")
    computerSelection = getComputerChoice();
    let player = playerSelection.toUpperCase();
    let comp = computerSelection
    let result;
    if (player == "ROCK") {
        if (comp == "PAPER") {
            result = "Paper, you lose"
        } else if (comp == "SCISSORS") {
            result = "Scissors, you win"
        } else if (comp == "ROCK") {
            result = "Rock, draw"
        }
    } else if (player == "PAPER") {
        if (comp == "PAPER") {
            result = "Paper, draw"
        } else if (comp == "SCISSORS") {
            result = "Scissors, you lose"
        } else if (comp == "ROCK") {
            result = "Rock, you win"
        }
    } else if (player == "SCISSORS") {
        if (comp == "PAPER") {
            result = "Paper, you win"
        } else if (comp == "SCISSORS") {
            result = "Scissors, draw"
        } else if (comp == "ROCK") {
            result = "Rock, you lose"
        }
    } else {
        return "Error, please check spelling";
    }
    return result;
}

function game() {
    let win = 0
    let lose = 0
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        let score = `Score: ${win} to ${lose}`
        if (result.includes("win")) {
            win++;
            console.log(score)
        } else if (result.includes("lose")) {
            lose++
            console.log(score)
        } else {
            console.log(score)
        }
    
        
    }
    if (win > lose) {
        console.log("You Win!")
    } else if (win < lose) {
        console.log("You Lose")
    } else if (win == lose) {
        console.log("Draw")
    }
    console.log(win, lose)
}