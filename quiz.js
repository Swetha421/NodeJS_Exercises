// script.js
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C#", "Java"],
        answer: 1
    },
    {
        question: "The computer’s main circuit board is called a ________.",
        options: ["Bluetooth card", "Harddrive", "Monitor", "Motherboard"],
        answer: 3
    },
    {
        
        question: "Garampani sanctuary is located at",
        options: ["Junagarh,Gujarat", "Diphu,Assam", "kohima,Nagaland", "gangtok,Sikkim"],
        answer: 1
    }
    // Add more questions as needed
];

let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let timer;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container');
const scoreSpan = document.getElementById('score');
const reviewContainer = document.getElementById('review-container');
const reviewBtn = document.getElementById('review-btn');

function loadQuestion() {
    clearTimeout(timer);
    feedbackContainer.innerHTML = '';

    if (currentQuestion >= quizData.length) {
        calculateScore();
        return;
    }

    const questionData = quizData[currentQuestion];
    questionContainer.innerHTML = `<h2>${questionData.question}</h2>`;
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        optionsContainer.innerHTML += `
            <div>
                <input type="radio" id="option${index}" name="options" value="${index}">
                <label for="option${index}">${option}</label>
            </div>
        `;
    });

    const savedAnswer = userAnswers[currentQuestion];
    if (savedAnswer !== undefined) {
        document.getElementById(`option${savedAnswer}`).checked = true;
    }

    timer = setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 30000); // 30 seconds timer
}

function calculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].answer) {
            score++;
        }
    });

    document.getElementById('quiz-container').style.display = 'none';
    scoreSpan.innerText = `${score} / ${quizData.length}`;
    scoreContainer.style.display = 'block';
}

function reviewAnswers() {
    reviewContainer.innerHTML = '<h2>Review Answers</h2>';
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.answer;
        const isCorrect = userAnswer === correctAnswer;
        reviewContainer.innerHTML += `
            <div>
                <h3>${question.question}</h3>
                <p>Your answer: ${question.options[userAnswer] || 'No answer'}</p>
                <p>Correct answer: ${question.options[correctAnswer]}</p>
                <p>${isCorrect ? 'Correct' : 'Incorrect'}</p>
            </div>
        `;
    });

    scoreContainer.style.display = 'none';
    reviewContainer.style.display = 'block';
}

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestion] = parseInt(selectedOption.value);
    }
    currentQuestion++;
    loadQuestion();
});

submitBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestion] = parseInt(selectedOption.value);
    }
    currentQuestion++;
    loadQuestion();
});

reviewBtn.addEventListener('click', reviewAnswers);

window.onload = () => {
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        currentQuestion = progress.currentQuestion;
        userAnswers = progress.userAnswers;
        loadQuestion();
    } else {
        loadQuestion();
    }
};

window.onbeforeunload = () => {
    const progress = {
        currentQuestion,
        userAnswers
    };
    localStorage.setItem('quizProgress', JSON.stringify(progress));
};
