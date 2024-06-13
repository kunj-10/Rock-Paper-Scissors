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
function reset()
{
    plyr = 0;
    comp = 0;
    console.log("Games played before reset: ", games);
    games = 0;
    document.getElementById('result').textContent = "";
    document.getElementById('score').textContent = "Player: " + plyr + " Computer: " + comp;
    document.getElementById('compchoice').textContent = "";
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

    if(comp === 5){
        alert("Computer scored 5 points!\nComputer Wins the Game!");
        reset();
    }else if(plyr === 5){
        alert("Player scored 5 points!\nPlayer Wins the Game!");
        reset();
    }

}

const buttons = document.querySelectorAll('#Rock, #Paper, #Scissors');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

const buttonss = document.querySelectorAll('#Reset')
buttonss.forEach(button => {
    button.addEventListener('click', reset);
})
