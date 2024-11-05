let score = 0;
let timeLeft = 10; // 10 seconds timer
let gameInterval;
let countdownInterval;

const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

function startGame() {
    score = 0;
    timeLeft = 10;
    updateScore();
    startButton.disabled = true;
    gameInterval = setInterval(showBox, 700); // Show a box every 0.7 seconds
    countdownInterval = setInterval(updateTimer, 1000); // Countdown every second
}

function updateTimer() {
    timeLeft--;
    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(gameInterval);
    clearInterval(countdownInterval);
    alert(`Game over! Your score is ${score}`);
    startButton.disabled = false;
}

function showBox() {
    // Clear previous box
    gameContainer.innerHTML = '';

    // Create new box
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.top = `${Math.random() * 250}px`;
    box.style.left = `${Math.random() * 250}px`;
    box.addEventListener('click', () => {
        score++;
        updateScore();
        box.remove(); // Remove box when clicked
    });

    gameContainer.appendChild(box);
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

startButton.addEventListener('click', startGame);
