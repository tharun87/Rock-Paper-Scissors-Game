let userScore = 0;
let compScore = 0;
let userPoints = document.getElementById("user-score");
let compPoints = document.getElementById("comp-score");
let userChoice;
let result = document.getElementById("msg");
const choices = document.querySelectorAll(".choice");

const drawGame = () => {
    console.log("Game was Draw");
    result.innerText = `Draw.`;
    result.style.backgroundColor = "black";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userPoints.innerText = userScore;
        console.log("You won");
        result.innerText = `You won! Your ${userChoice} beats ${compChoice}.`;
        result.style.backgroundColor = "Green";
    }else{
        compScore++;
        compPoints.innerText = compScore;
        console.log("You lose");
        result.textContent = `You lost. Computer choice ${compChoice} beats ${userChoice}.`;
        result.style.backgroundColor = "Red";
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randIndx = Math.floor(Math.random(options)*3);
    compChoice = options[randIndx]
    return compChoice;
}

const playGame = (userChoice) => {
const compChoice = genCompChoice();
console.log("User choice is", userChoice);
console.log("Computer choice is", compChoice);
if(compChoice===userChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice==="rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice==="paper"){
        userWin = compChoice === "scissors" ? false : true;
    }else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
}; 


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})