const questions = [
    { question: "What is the largest planet in our solar system?", options: ["Jupiter", "Saturn", "Earth", "Mars"], answer: "Jupiter" },
    { question: "What is the closest star to Earth?", options: ["Proxima Centauri", "Alpha Centauri", "Sirius", "Sun"], answer: "Sun" },
    { question: "What galaxy is Earth located in?", options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"], answer: "Milky Way" },
    { question: "How many moons does Mars have?", options: ["1", "2", "3", "4"], answer: "2" },
    { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
    { question: "What planet is known as the Red Planet?", options: ["Earth", "Jupiter", "Mars", "Saturn"], answer: "Mars" },
    { question: "What is the smallest planet in our solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
    { question: "What planet has a day longer than its year?", options: ["Venus", "Jupiter", "Mercury", "Mars"], answer: "Venus" },
    { question: "What type of galaxy is the Milky Way?", options: ["Elliptical", "Spiral", "Irregular", "Ring"], answer: "Spiral" },
    { question: "Who was the first human to journey into space?", options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Sally Ride"], answer: "Yuri Gagarin" }
];

const quizContainer = document.getElementById('quiz-container');
const startButton = document.getElementById('start-button');
const resultDisplay = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultDisplay.textContent = '';
    startButton.style.display = 'none';
    showQuestion();
}

function showQuestion() {
    quizContainer.innerHTML = '';

    const questionObj = questions[currentQuestionIndex];
    const questionEl = document.createElement('h2');
    questionEl.textContent = questionObj.question;
    quizContainer.appendChild(questionEl);

    questionObj.options.forEach(option => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('option');
        optionEl.textContent = option;
        optionEl.addEventListener('click', () => checkAnswer(option));
        quizContainer.appendChild(optionEl);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = '';
    startButton.style.display = 'block';

    let resultMessage = '';
    switch (score) {
        case 10:
            resultMessage = 'Genius';
            break;
        case 9:
            resultMessage = 'Almost Genius';
            break;
        case 8:
            resultMessage = 'Smart';
            break;
        case 7:
            resultMessage = 'Eh';
            break;
        case 6:
            resultMessage = 'Needs Work';
            break;
        default:
            resultMessage = 'Idiot';
            break;
    }

    resultDisplay.textContent = `Congratulations! You got ${score} out of 10 correct! Your astronomy level is: ${resultMessage}`;
}

startButton.addEventListener('click', startQuiz);
