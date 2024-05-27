var plyr = 0;
var comp = 0;
var games = 0;

function getComputerChoice() {
    var a = Math.floor(Math.random() * 3);
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[a];
}

function playGame(player, computer) {
    games++;
    console.log("Games played: ", games);
    if ((player === "Rock" && computer === "Scissors") || 
        (player === "Paper" && computer === "Rock") || 
        (player === "Scissors" && computer === "Paper")) {
        return "Win";
    } else if (player === computer) {
        return "Draw";
    } else {
        return "Lose";
    }
    
}

function handleClick(event) {
    var player = event.target.id;
    var computer = getComputerChoice();
    var result = playGame(player, computer);
    
    if (result === "Draw") {
        result = "It is a Draw";
    } else {
        if (result === "Lose") {
            comp++;
        } else {
            plyr++;
        }
        result = "You " + result + "!";
    }
    
    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = "Player: " + plyr + " Computer: " + comp;
    document.getElementById('compchoice').textContent = "Computer chose: " + computer;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});
