// Look into variables
// Look into functions
// Look into conditional statements

var startbuttonEl = document.getElementById("startbutton");

var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var optionAEl = document.getElementById("optionA"); 
var optionBEl = document.getElementById("optionB"); 
var optionCEl = document.getElementById("optionC"); 
var optionDEl = document.getElementById("optionD"); 

var resultsEl = document.getElementById("results");
var scoreEl = document.getElementById("score");



const beginQuiz = document.querySelector("#startbutton");

document.getElementById("startbutton").addEventListener("click", beginQuiz);

function beginQuiz() {
    document.querySelector(".start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
}


// May delete this code below. I dont think we will need it. 
// startBtn.addEventListener("click", beginQuiz);

// The following code represents the questions and answers for the quiz.
const questions = [
    {
        question: "1. What is HTML used for?",
        choices: ["Writes code for the console", "Defines content for a webpage", "It structures the style of the page", "It helps with site functionality for users"],
        answer: "Defines content for a webpage"
    },
    {
        question: "2. What is CSS used for?",
        choices: ["It is for back end developement", "It is only for webpages, not mobile", "It ensures that colors are always popping out for users", "It specifies the layout of webpages"],
        answer: "It specifies the layout of webpages"
    },
    {
        question: "3. What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Code Simple Styling", "Central Standard Style", "Color Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "4. All but one is considered a javascript data type.",
        choices: ["String", "line", "Boolean", "Undefined"],
        answer: "line"
    },
    {
        question: "5. JavaScript is used for what in an application?",
        choices: ["It allows for interaction", "It allows your code to be deployed online", "It allows your styling to come to life", "It is the AI working behind the scenes"],
        answer: "It allows for interaction" 
    },
    {
        question: "6. Which of the following is not a JavaScript variable?",
        choices: ["var", "const", "let", "set"],
        answer: "set"
    },
    {
        question: "7. The following is considered what? (const name = [item1, item2, item3];",
        choices: ["array", "string", "data set", "javascript cluster"],
        answer: "array"
    }
]