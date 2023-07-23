// Look into variables
// Look into functions
// Look into conditional statements

// var startbuttonEl = document.getElementById("startbutton");

var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var optionAEl = document.getElementById("optionA"); 
var optionBEl = document.getElementById("optionB"); 
var optionCEl = document.getElementById("optionC"); 
var optionDEl = document.getElementById("optionD"); 

var resultsEl = document.getElementById("results");
var scoreEl = document.getElementById("score");

// The code below represents the initial time in seconds
var timeRemaining = 60;
var timer; 

// Code below adds event listeners to each choice button
optionAEl.addEventListener("click", function() {
handleAnswer(optionAEl.textContent);
});
optionBEl.addEventListener("click", function() {
handleAnswer(optionBEl.textContent);
});
optionCEl.addEventListener("click", function() {
handleAnswer(optionCEl.textContent);
});
optionDEl.addEventListener("click", function() {
handleAnswer(optionDEl.textContent);
});

document.getElementById("startbutton").addEventListener("click", function() {
  console.log(beginQuiz);
  beginQuiz();
});

// The function below begines the quiz 
function beginQuiz() {
  console.log(beginQuiz);
    document.querySelector(".start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    startTimer();
    showQuestion();
}

function startTimer() {
  console.log(startTimer);
    timer = setInterval(function() {
      if (timeRemaining <= 0) {
        clearInterval(timer);
        endQuiz();
      } else {
        timerEl.textContent = "Timer: " + timeRemaining;
        timeRemaining--;
      }
    }, 1000);
  }

var currentQuestion = 0;
var score = 0;

// Function that displays each question with its corresponding options.
function showQuestion() {
    if (currentQuestion < questions.length) {
      questionEl.textContent = questions[currentQuestion].question;
      optionAEl.textContent = questions[currentQuestion].choices[0];
      optionBEl.textContent = questions[currentQuestion].choices[1];
      optionCEl.textContent = questions[currentQuestion].choices[2];
      optionDEl.textContent = questions[currentQuestion].choices[3];
    } else {
      endQuiz();
    }
  }

//   The code below allows users to obtain points when the correct answer is chosen per question. The else takes off 10 seconds from the countdown if users choose any wrong answer. 
  function handleAnswer(selectedAnswer) {
    var correctAnswer = questions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
      score++;
    } else {
      timeRemaining -= 10;
    }
  
    currentQuestion++;
    showQuestion();
  }

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

// The function code will clear the timer, hide the quiz container, and show the results container with the final score. when the timer runs out or all questions are answered. 
function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("results").style.display = "block";
    scoreEl.textContent = "Your score: " + score;
  }