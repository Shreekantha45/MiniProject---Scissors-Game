let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "game was draw";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = `you lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userCoice) => {
    // Generate computer choice -> modular
    const compChoice = genCompChoice();

    if(userCoice === compChoice){
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userCoice === "rock"){
            // Scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userCoice === "paper") {
            // rock scissor
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userCoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice= choice.getAttribute("id")
        playGame(userChoice);
    })
})