const gameContainer = document.getElementById('game-container');
const startButton = document.getElementById('start-button');
const messageDisplay = document.getElementById('message');

let sequence = [];
let userSequence = [];
let waitingForInput = false;

function startGame() {
    sequence = Array.from({ length: 9 }, (_, i) => i + 1); // [1, 2, 3, ... 9]
    sequence = sequence.sort(() => Math.random() - 0.5); // Randomize order
    userSequence = [];
    waitingForInput = false;
    messageDisplay.textContent = '';

    displaySequence();
}

function displaySequence() {
    gameContainer.innerHTML = ''; // Clear container

    // Create boxes with numbers
    sequence.forEach(number => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = number; // Show the number initially
        gameContainer.appendChild(box);
    });

    // After 3 seconds, hide numbers and set up for user input
    setTimeout(hideNumbers, 3000);
}

function hideNumbers() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.textContent = ''; // Clear numbers
        box.addEventListener('click', handleBoxClick); // Add click event
    });

    waitingForInput = true;
    messageDisplay.textContent = 'Select the boxes in order!';
}

function handleBoxClick(event) {
    if (!waitingForInput) return; // Prevent clicking during display phase

    const boxIndex = Array.from(gameContainer.children).indexOf(event.target) + 1;
    userSequence.push(boxIndex);

    // Check if the latest click matches the sequence
    if (userSequence[userSequence.length - 1] !== sequence[userSequence.length - 1]) {
        endGame(false); // Incorrect sequence
        return;
    }

    // Check if the user completed the sequence
    if (userSequence.length === sequence.length) {
        endGame(true); // Correct sequence
    }
}

function endGame(won) {
    waitingForInput = false;
    messageDisplay.textContent = won ? 'You won! Great memory!' : 'Oops, try again!';
    startButton.disabled = false;
}

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    startGame();
});
