const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Century System Styles"],
        answer: "Cascading Style Sheets"
    },
    // Add more questions here
    {
        question: "What is JavaScript?",
        options: ["A markup language", "A programming language", "A stylesheet language", "A database language"],
        answer: "A programming language"
    },
    // Add more questions here
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Sequential Query Language", "Standard Query Language", "Structured Question Language"],
        answer: "Structured Query Language"
    },
    {
        question: "What does PHP stand for?",
        options: ["Personal Home Page", "Pre Hypertext Processor", "PHP: Hypertext Preprocessor", "People's Hypertext Processor"],
        answer: "PHP: Hypertext Preprocessor"
    },
    {
        question: "What does HTML5 introduce?",
        options: ["New elements and attributes", "A new programming language", "A new server architecture", "A new database system"],
        answer: "New elements and attributes"
    },
    {
        question: "Which tag is used to define an unordered list in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>"
    },
    {
        question: "What is the correct way to include an external CSS file in an HTML document?",
        options: ["<style src='styles.css'>", "<link rel='stylesheet' href='styles.css'>", "<css>styles.css</css>", "<script src='styles.css'></script>"],
        answer: "<link rel='stylesheet' href='styles.css'>"
    },
    {
        question: "What is the purpose of JavaScript's 'addEventListener' method?",
        options: ["To add comments to the code", "To add event handlers to HTML elements", "To include external JavaScript files", "To create variables"],
        answer: "To add event handlers to HTML elements"
    },
    {
        question: "What does the term 'API' stand for in the context of web development?",
        options: ["Application Program Interface", "Automated Programming Interface", "Advanced Protocol Interface", "Automated Program Interaction"],
        answer: "Application Program Interface"
    },
    {
        question: "What does the term 'HTTP' stand for?",
        options: ["HyperText Transfer Protocol", "Hyperlink Text Transfer Protocol", "Hypertext Transfer Processor", "Hyperlink Text Terminal Protocol"],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "Which programming language is used for server-side scripting?",
        options: ["JavaScript", "HTML", "CSS", "PHP"],
        answer: "PHP"
    },
    {
        question: "What does the term 'URL' stand for?",
        options: ["Uniform Resource Locator", "Universal Resource Language", "Uniform Resource Language", "Universal Resource Locator"],
        answer: "Uniform Resource Locator"
    },
    {
        question: "What is the purpose of the 'git' command?",
        options: ["To compile code", "To format text", "To manage version control", "To run JavaScript code"],
        answer: "To manage version control"
    },
    {
        question: "What is the primary function of a database management system (DBMS)?",
        options: ["To create websites", "To manage data", "To design user interfaces", "To write algorithms"],
        answer: "To manage data"
    },
    {
        question: "What is the purpose of the 'viewport' meta tag in HTML?",
        options: ["To specify the dimensions and scaling of the webpage for mobile devices", "To define the layout of the webpage", "To include external scripts", "To add comments to the HTML code"],
        answer: "To specify the dimensions and scaling of the webpage for mobile devices"
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["variable x = 5;", "let x = 5;", "var x = 5;", "int x = 5;"],
        answer: "let x = 5;"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        answer: "color"
    },
    {
        question: "What is the purpose of the 'break' statement in JavaScript?",
        options: ["To exit a loop or switch statement", "To start a new line of code", "To break the code execution", "To concatenate strings"],
        answer: "To exit a loop or switch statement"
    },
    {
        question: "Which data structure is used to implement a queue?",
        options: ["Stack", "Array", "Linked List", "Queue"],
        answer: "Linked List"
    },
    {
        question: "What is the purpose of the 'NaN' property in JavaScript?",
        options: ["To represent the value 'not a number'", "To check if a number is divisible by zero", "To define a new number", "To round a number to the nearest integer"],
        answer: "To represent the value 'not a number'"
    },
    {
        question: "What is the purpose of the 'index.html' file in a web project?",
        options: ["To store JavaScript code", "To define the styling of the webpage", "To serve as the entry point of the webpage", "To store database records"],
        answer: "To serve as the entry point of the webpage"
    },
    {
        question: "Which of the following is a valid way to comment out code in HTML?",
        options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "# This is a comment"],
        answer: "<!-- This is a comment -->"
    },
    {
        question: "What is the default display property value for a <div> element in CSS?",
        options: ["inline", "block", "inline-block", "flex"],
        answer: "block"
    },


];

// Shuffle the quiz data
quizData.sort(() => Math.random() - 0.5);

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = 10;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => {
            const selectedOption = option;
            const buttons = document.querySelectorAll('.option-btn');
            buttons.forEach(btn => {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
        });
        optionsElement.appendChild(button);
    });
    removeRetryButton(); // Remove retry button if exists
}

function removeRetryButton() {
    const retryButton = document.querySelector('.retry-btn');
    if (retryButton) {
        retryButton.remove();
    }
}

function checkAnswer() {
    const selectedButton = document.querySelector('.option-btn.selected');
    if (!selectedButton) {
        return;
    }
    const selectedOption = selectedButton.textContent;
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        showResult();
    }
}

submitButton.addEventListener('click', checkAnswer);

function showResult() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    if (score >= 7) {
        resultElement.textContent = `Congratulations, you have scored ${score}/${totalQuestions}`;
    } else {
        resultElement.textContent = `You scored ${score}/${totalQuestions}. Would you like to retry?`;
        const retryButton = document.createElement('button');
        retryButton.textContent = 'Retry';
        retryButton.classList.add('option-btn', 'retry-btn'); // Apply same styling as option-btn
        retryButton.addEventListener('click', () => {
            resetQuiz(); // Reset the quiz on retry button click
        });
        resultElement.appendChild(retryButton);
    }
    submitButton.style.display = 'none';
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    removeRetryButton();
    loadQuestion();
    resultElement.textContent = ''; // Clear any result message
    submitButton.style.display = 'block'; // Show submit button again
}

// Load the first question when the page loads
loadQuestion();
