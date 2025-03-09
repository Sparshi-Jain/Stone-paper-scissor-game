let playerScore = 0;
let cpuScore = 0;

const userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    resultText = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image"),
    playerScoreDisplay = document.getElementById("playerScore"),
    cpuScoreDisplay = document.getElementById("cpuScore"),
    resetButton = document.getElementById("resetGame");

const choices = {
    rock: "rockfinal.png",
    paper: "paperfinal.png",
    scissors: "scissorfinal.png"
};

optionImages.forEach(option => {
    option.addEventListener("click", () => {
        let userChoice = option.getAttribute("data-choice");
        let cpuChoice = Object.keys(choices)[Math.floor(Math.random() * 3)];

        userResult.src = choices[userChoice];
        cpuResult.src = choices[cpuChoice];

        if (userChoice === cpuChoice) {
            resultText.textContent = "It's a Tie!";
            resultText.style.color = "black";
        } else if (
            (userChoice === "rock" && cpuChoice === "scissors") ||
            (userChoice === "paper" && cpuChoice === "rock") ||
            (userChoice === "scissors" && cpuChoice === "paper")
        ) {
            resultText.textContent = "You Win!";
            resultText.style.color = "green";
            playerScore++;
        } else {
            resultText.textContent = "CPU Wins!";
            resultText.style.color = "red";
            cpuScore++;
        }

        playerScoreDisplay.textContent = playerScore;
        cpuScoreDisplay.textContent = cpuScore;
    });
});

resetButton.addEventListener("click", () => {
    playerScore = 0;
    cpuScore = 0;
    playerScoreDisplay.textContent = "0";
    cpuScoreDisplay.textContent = "0";
    resultText.textContent = "Let's Play!!";
    resultText.style.color = "black";
    userResult.src = "rockfinal.png";
    cpuResult.src = "rockfinal.png";
});
