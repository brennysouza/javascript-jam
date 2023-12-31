// Look into variables
// Look into functions
// Look into conditional statements

// These variables are used to store references to various HTML and CSS elements, and some are used for tracking quiz-related data.
var startButtonEl = document.getElementById("startbutton");
var timerCountEl = document.getElementById("timerCount");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var optionAEl = document.getElementById("optionA"); 
var optionBEl = document.getElementById("optionB"); 
var optionCEl = document.getElementById("optionC"); 
var optionDEl = document.getElementById("optionD"); 
var resultsEl = document.getElementById("results");
var scoreEl = document.getElementById("score");
var finalScreenEl = document.getElementById("final-screen");
var finalScoreEl = document.getElementById("final-score");
var goBackEl = document.getElementById("goBack");
var clearScoresEl = document.getElementById("clearScores");
var nameInputEl = document.getElementById("input-name");
var nameSubmitButtonEl = document.getElementById("name-submit");
var leaderboardVisible = false;


// The code below represents the initial time in seconds
var timeRemaining = 60;
var timer; 

// This code below represents the submit name button and when clicked, it calls the function that saves the user's name and score, updates the scoreboard, and displays the user's score on the final screen.
nameSubmitButtonEl.addEventListener("click", function () {
  var userName = nameInputEl.value.trim();
  if (userName !== "") {
    saveScore(userName, score);
    updateScoreboard();
  } else {
    alert ("Please Enter Your Name To Submit Score");
  }
});

// Code below adds event listeners to each choice button. When the user clicks on a choice button, it calls the handleAnswer function with the text content of the chosen answer.
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

// An event listener is added to the begin quiz button so that it functions and is clickable
startButtonEl.addEventListener("click", function() {
  beginQuiz();
});

// The function below beginss the quiz by hiding the starting screen, displays the quiz container, starts the timer, shows the first question, resets the score to 0, and hides the final screen.
function beginQuiz() {
    document.querySelector(".start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    startTimer();
    showQuestion();
    score = 0;
    finalScreenEl.style.display = "none";
}

var leaderboardScoresEl = document.getElementById("leaderboard-scores");

// This code executes a callback function every second (1000 milliseconds) to update the countdown timer displayed on the page. When the timer gets to 0, it calls the endQuiz function.
function startTimer() {
    timer = setInterval(function() {
      if (timeRemaining <= 0) {
        clearInterval(timer);
        endQuiz();
      } else {
        timerCountEl.textContent = timeRemaining;
        timeRemaining--;
      }
    }, 1000);
  }

var currentQuestion = 0;
var score = 0;

// Function that displays each question with its corresponding options. Updates the question and choices displayed on the quiz container based on the currentQuestion index. If all questions are answered, it stops the timer, hides the quiz container, displays the final score, and shows the final screen.
function showQuestion() {
    if (currentQuestion < questions.length) {
      questionEl.textContent = questions[currentQuestion].question;
      optionAEl.textContent = questions[currentQuestion].choices[0];
      optionBEl.textContent = questions[currentQuestion].choices[1];
      optionCEl.textContent = questions[currentQuestion].choices[2];
      optionDEl.textContent = questions[currentQuestion].choices[3];
    } else {
      clearInterval(timer);
      document.getElementById("quiz-container").style.display = "none";
      document.getElementById("results").style.display = "block";
      scoreEl.textContent = "Your score: " + score;
      showFinalScreen();
    }
  }


//   The code below allows users to obtain points when the correct answer is chosen per question. The else takes off 10 seconds from the countdown if users choose any wrong answer. The selected answer with the correct answer for the current question. If the answer is correct, it increments the score and displays a "Correct!" message for 1.5 seconds. If the answer is wrong, it deducts 10 seconds from the remaining time and displays a "Wrong!" message for 1.5 seconds.
  function handleAnswer(selectedAnswer) {
    var correctAnswer = questions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
      score++;
      showFeedback("Correct!", 1500);
    } else {
      timeRemaining -= 10;
      showFeedback("Wrong!", 1500);
    }
  
    currentQuestion++;
    showQuestion();

  }

// The following code allows the message of right or wrong to display when users answer a question.

function showFeedback(message, duration) {
  var alertEl = document.getElementById("alert");
  alertEl.textContent = message;
  setTimeout(function () {
    alertEl.textContent = "";
  }, duration);
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

// The function code will clear the timer, hide the quiz container, and show the results container with the final score when the timer runs out or all questions are answered. 
function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-container").style.display = "none";
    scoreEl.textContent = "Your score: " + score;
    showFinalScreen();

  }

// The code below displays the final score and buttons to submit i.e go back and clear scores
  function showFinalScreen() {
    document.getElementById("results").style.display = "block";
    document.getElementById("name-submit").style.display = "block";
    document.getElementById("final-score").textContent = "Your final score: " + score;
    document.getElementById("input-name").classList.remove("hidden");
    document.getElementById("goBack").style.display = "block";
    document.getElementById("clearScores").style.display = "block";
  }

// The reset quiz code below is a function that resets the quiz to its initial state and allows users to begin the quiz again
  function resetQuiz() {
    clearInterval(timer);
    timeRemaining = 60;
    currentQuestion = 0;
    score = 0;
    startButtonEl.disabled = false;
    showQuestion();

    document.getElementById("final-screen").style.display = "none";
    document.querySelector(".start-container").style.display = "block";
    document.getElementById("leaderboard-scores").innerHTML = "";

  }

// This code below saves the users name and score to the local storage
  function saveScore(name, score) {
    var userScore = JSON.parse(localStorage.getItem("userScore") || "[]"); userScore.push({ name: name, score: score });
    localStorage.setItem("userScore", JSON.stringify(userScore));
  }

// This code below always updates the leaderboard everytime the user does the quiz again and adds their name and score to the leaderboard
  function updateScoreboard() {
    var userName = nameInputEl.value.trim();
    var userScore = JSON.parse(localStorage.getItem("userScore") || "[]"); 
    document.getElementById("results").style.display = "none";
    document.getElementById("final-screen").style.display = "block";

    var userScoreHTML = "<h2>Your Score</h2>";
    userScore.forEach(function (player) {
      userScoreHTML += "<p>" + player.name + ": " + player.score + "</p>";
    });
    finalScoreEl.innerHTML = userScoreHTML;

    var leaderboardHTML = "<h1>Scoreboard</h1><ul>";
    userScore.forEach(function (player, index) {
      leaderboardHTML += "<li>" + player.name + ": " + player.score + "</li>";
    });
    leaderboardHTML += "</ul>"
    leaderboardScoresEl.innerHTML = leaderboardHTML;
  }

// The following document.getElementById code below connects each of these to its desired html element and allows each button to work for going back to the initial screen, clearing scores, opening the leaderboard, etc. 
document.getElementById("goBack").addEventListener("click", function () {
  resetQuiz();
  finalScreenEl.style.display = "none";
  document.querySelector(".start-container").style.display = "block";
  hideLeaderboard();

});

document.getElementById("clearScores").addEventListener("click", function () {
  localStorage.removeItem("userScore");
  displayScore();
});

document.getElementById("leaderboard").addEventListener("click", function() {
  displayScore();
});


document.getElementById("leaderboard").addEventListener("click", function() {
  toggleLeaderboard();
});

// The following functions below all pertain to the leaderboard header link which allow users to either open the leaderboard by clicking it once and closing it by clicking it again. 
function toggleLeaderboard() {
  var leaderboardScoresEl = document.getElementById("leaderboard-scores");

  if (leaderboardVisible) {
    leaderboardScoresEl.innerHTML = ""; // Clear the leaderboard content
    leaderboardVisible = false;
  } else {
    displayLeaderboard();
    leaderboardVisible = true;
  }
}

function displayScore() {
  var userScore = JSON.parse(localStorage.getItem("userScore") || "[]");
  var leaderboardScoresEl = document.getElementById("leaderboard-scores");
  var leaderboardHTML = "<h1>Scoreboard</h1><ul>";

  userScore.forEach(function (player) {
    leaderboardHTML += "<li>" + player.name + ": " + player.score + "</li>";
  });

  leaderboardHTML += "</ul>";
  leaderboardScoresEl.innerHTML = leaderboardHTML;
}

function hideLeaderboard() {
  var leaderboardScoresEl = document.getElementById("leaderboard-scores");
  leaderboardScoresEl.innerHTML = ""; // Clear the leaderboard content
  leaderboardVisible = false;
}

function displayLeaderboard() {
  var userScore = JSON.parse(localStorage.getItem("userScore") || "[]");
  var leaderboardScoresEl = document.getElementById("leaderboard-scores");
  var leaderboardHTML = "<h1>Scoreboard</h1><ul>";

  userScore.forEach(function (player) {
    leaderboardHTML += "<li>" + player.name + ": " + player.score + "</li>";
  });

  leaderboardHTML += "</ul>";
  leaderboardScoresEl.innerHTML = leaderboardHTML;
}