const allQuestions = [
    { question: "What is the largest planet in our solar system?", options: ["Jupiter", "Saturn", "Earth", "Mars"], answer: "Jupiter" },
    { question: "What is the closest star to Earth?", options: ["Proxima Centauri", "Alpha Centauri", "Sirius", "Sun"], answer: "Sun" },
    { question: "What galaxy is Earth located in?", options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"], answer: "Milky Way" },
    { question: "How many moons does Mars have?", options: ["1", "2", "3", "4"], answer: "2" },
    { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
    { question: "What planet is known as the Red Planet?", options: ["Earth", "Jupiter", "Mars", "Saturn"], answer: "Mars" },
    { question: "What is the smallest planet in our solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
    { question: "What planet has a day longer than its year?", options: ["Venus", "Jupiter", "Mercury", "Mars"], answer: "Venus" },
    { question: "What type of galaxy is the Milky Way?", options: ["Elliptical", "Spiral", "Irregular", "Ring"], answer: "Spiral" },
    { question: "Who was the first human to journey into space?", options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Sally Ride"], answer: "Yuri Gagarin" },
    { question: "What is the closest planet to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
    { question: "What planet is known for its rings?", options: ["Jupiter", "Saturn", "Neptune", "Uranus"], answer: "Saturn" },
    { question: "How many planets are in the solar system?", options: ["7", "8", "9", "10"], answer: "8" },
    { question: "What planet is known as the Morning Star?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Venus" },
    { question: "What is the second largest planet in the solar system?", options: ["Jupiter", "Saturn", "Neptune", "Earth"], answer: "Saturn" },
    { question: "What planet has the Great Red Spot?", options: ["Earth", "Mars", "Jupiter", "Neptune"], answer: "Jupiter" },
    { question: "Which planet is closest to Earth?", options: ["Mars", "Venus", "Mercury", "Jupiter"], answer: "Venus" },
    { question: "What is the name of the galaxy closest to the Milky Way?", options: ["Whirlpool", "Andromeda", "Sombrero", "Pinwheel"], answer: "Andromeda" },
    { question: "What is the brightest planet in the night sky?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Venus" },
    { question: "What is the largest moon of Saturn?", options: ["Titan", "Europa", "Ganymede", "Callisto"], answer: "Titan" },
    { question: "What planet is known as the Earth's Twin?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Venus" },
    { question: "What is the smallest dwarf planet?", options: ["Ceres", "Pluto", "Eris", "Makemake"], answer: "Ceres" },
    { question: "What planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
    { question: "Which planet rotates on its side?", options: ["Uranus", "Neptune", "Venus", "Mars"], answer: "Uranus" },
    { question: "What is the name of the closest black hole to Earth?", options: ["Cygnus X-1", "Sagittarius A*", "V616 Monocerotis", "Andromeda X"], answer: "V616 Monocerotis" },
    { question: "What is the closest dwarf planet to the Sun?", options: ["Ceres", "Pluto", "Eris", "Haumea"], answer: "Ceres" },
    { question: "Which planet has the highest mountain in the solar system?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Mars" },
    { question: "What planet has the strongest winds?", options: ["Jupiter", "Neptune", "Saturn", "Uranus"], answer: "Neptune" },
    { question: "Which moon is believed to have a subsurface ocean?", options: ["Europa", "Ganymede", "Titan", "Callisto"], answer: "Europa" },
    { question: "What planet is the farthest from the Sun?", options: ["Neptune", "Uranus", "Saturn", "Pluto"], answer: "Neptune" },
    { question: "What type of celestial object is the Sun?", options: ["Star", "Planet", "Moon", "Comet"], answer: "Star" },
    { question: "What planet is known as the Ice Giant?", options: ["Uranus", "Neptune", "Saturn", "Jupiter"], answer: "Uranus" },
    { question: "Which planet is known as the Jewel of the Solar System?", options: ["Saturn", "Jupiter", "Uranus", "Neptune"], answer: "Saturn" },
    { question: "What is the name of our closest galaxy cluster?", options: ["Virgo Cluster", "Coma Cluster", "Local Group", "Perseus Cluster"], answer: "Virgo Cluster" },
    { question: "Which planet's day is almost the same as an Earth day?", options: ["Mars", "Venus", "Mercury", "Neptune"], answer: "Mars" },
    { question: "What is the most abundant element in the Sun?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], answer: "Hydrogen" },
    { question: "Which planet has a hexagon-shaped storm?", options: ["Jupiter", "Saturn", "Neptune", "Uranus"], answer: "Saturn" },
    { question: "What is the name of the nearest quasar?", options: ["3C 273", "QSO J2240-0326", "4C 37.11", "APM 08279+5255"], answer: "3C 273" },
    { question: "What is the name of the largest known star?", options: ["VY Canis Majoris", "UY Scuti", "Betelgeuse", "Aldebaran"], answer: "UY Scuti" },
    { question: "What is the primary gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], answer: "Nitrogen" },
    { question: "Which planet has been visited by the most spacecraft?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "What is the name of the densest known planet?", options: ["Earth", "Mars", "Venus", "Mercury"], answer: "Earth" },
    { question: "What planet has a surface temperature hotter than Mercury's?", options: ["Venus", "Jupiter", "Mars", "Neptune"], answer: "Venus" },
    { question: "What is the closest planet that could support life?", options: ["Mars", "Venus", "Proxima Centauri b", "Europa"], answer: "Proxima Centauri b" },
    { question: "Which dwarf planet has a heart-shaped region?", options: ["Pluto", "Ceres", "Eris", "Haumea"], answer: "Pluto" },
    { question: "What is the name of the brightest comet in the sky?", options: ["Halley", "Hale-Bopp", "NEOWISE", "Hyakutake"], answer: "NEOWISE" },
    { question: "What is the name of the most massive black hole?", options: ["TON 618", "Sagittarius A*", "M87", "Cygnus X-1"], answer: "TON 618" },
    { question: "What is the closest known exoplanet to Earth?", options: ["Proxima Centauri b", "Barnard's Star b", "Wolf 359 b", "Luyten b"], answer: "Proxima Centauri b" },
    { question: "Which planet has a methane-rich atmosphere?", options: ["Uranus", "Venus", "Mars", "Earth"], answer: "Uranus" },
];

const quizContainer = document.getElementById('quiz-container');
const startButton = document.getElementById('start-button');
const resultDisplay = document.getElementById('result');

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    selectedQuestions = getRandomQuestions(10); // Select 10 random questions
    resultDisplay.textContent = '';
    startButton.style.display = 'none';
    showQuestion();
}

function getRandomQuestions(num) {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num); // Return the first `num` questions from the shuffled array
}

function showQuestion() {
    quizContainer.innerHTML = '';

    const questionObj = selectedQuestions[currentQuestionIndex];
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
    if (selectedOption === selectedQuestions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
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
