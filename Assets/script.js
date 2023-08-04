// Look into variables
// Look into functions
// Look into conditional statements

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
// var finalScoreEl = document.getElementById("score");
var nameInputEl = document.getElementById("input-name");
var nameSubmitButtonEl = document.getElementById("name-submit");

// The code below represents the initial time in seconds
var timeRemaining = 60;
var timer; 

nameSubmitButtonEl.addEventListener("click", function () {
  var userName = nameInputEl.value.trim();
  if (userName !== "") {
    saveScore(userName, score);
    updateScoreboard();
    // showFinalScreen();
  } else {
    alert ("Please Enter Your Name To Submit Score");
  }
});

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

// document.getElementById("startbutton")
startButtonEl.addEventListener("click", function() {
  beginQuiz();
});

// This code represents an event listener for the begin quiz button
// var startButtonEl = document.getElementById("startbutton");
// startButtonEl.addEventListener("click", beginQuiz);

// This is an event listener for the view leaderboard link in the top nav bar of the quiz
// var viewLeaderBoard = document.getElementById("leaderboard");
// viewLeaderBoard.addEventListener("click", function () {
//   displayScore();
// });

// The function below begines the quiz 
function beginQuiz() {
    document.querySelector(".start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    startTimer();
    showQuestion();
    score = 0;
    finalScreenEl.style.display = "none";
}

// var timerCountEl = document.getElementById("timerCount");
var leaderboardScoresEl = document.getElementById("leaderboard-scores");

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

// Function that displays each question with its corresponding options.
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

  // var alertAnswer = "";

//   The code below allows users to obtain points when the correct answer is chosen per question. The else takes off 10 seconds from the countdown if users choose any wrong answer. 
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

// The function code will clear the timer, hide the quiz container, and show the results container with the final score. when the timer runs out or all questions are answered. 
function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-container").style.display = "none";

    // document.getElementById("results").style.display = "block";
    // scoreEl.textContent = "Your score: " + score;
    // document.getElementById("input-name").classList.remove("hidden");
    // document.getElementById("scoreButton").classList.remove("hidden");

    // this code hides the "final-screen" div until the user submits their name
    // finalScreenEl.style.display = "block";
    scoreEl.textContent = "Your score: " + score;
    showFinalScreen();

  }

  function showFinalScreen() {
    document.getElementById("results").style.display = "block";
    document.getElementById("name-submit").style.display = "block";
    // document.getElementById("input-name").classList.add("hidden");
    // document.getElementById("final-screen").style.display = "block";
    // finalScreenEl.style.display = "block";
    document.getElementById("final-score").textContent = "Your final score: " + score;
    document.getElementById("input-name").classList.remove("hidden");
    document.getElementById("goBack").style.display = "block";
    document.getElementById("clearScores").style.display = "block";
    // finalScoreEl.textContent = "Your final score: " + score;
  }

  document.getElementById("goBack").addEventListener("click", function () {
    displayLeaderboard();
    // resetQuiz();
    // finalScreenEl.style.display = "none";
    // document.querySelector(".start-container").style.display = "block";
  });

  function resetQuiz() {
    clearInterval(timer);
    timeRemaining = 60;
    currentQuestion = 0;
    score = 0;
    startButtonEl.disabled = false;
    // startTimer();
    showQuestion();

    document.getElementById("final-screen").style.display = "none";
    document.querySelector(".start-container").style.display = "block";
    document.getElementById("leaderboard-scores").innerHTML = "";

  }

  // clearScoresEl.addEventListener("click", function () {
  //   localStorage.clear();
  //   displayScore();
    document.getElementById("goBack").addEventListener("click", function () {
      resetQuiz();
  });

  // nameSubmitButtonEl.addEventListener("click", function () {
  //   var userName = nameInputEl.value.trim();
  //   if (userName !== "") {
  //     var numericScore = parseInt(score);
  //     saveScore(userName, score);
  //     updateScoreboard();
  //     showFinalScreen();
  //   } else {
  //     alert("Please Enter Your Name To Submit Score");
  //   }
  // });

  function saveScore(name, score) {
    var userScore = JSON.parse(localStorage.getItem("userScore") || "[]"); userScore.push({ name: name, score: score });
    localStorage.setItem("userScore", JSON.stringify(userScore));
  }

  function updateScoreboard() {
    var userName = nameInputEl.value.trim();
    var userScore = JSON.parse(localStorage.getItem("userScore") || "[]"); 
    document.getElementById("results").style.display = "none";
    document.getElementById("final-screen").style.display = "block";

    // var userName = nameInputEl.value.trim();
    // var userScore = score;
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

  // Event listener to go back to the main page and start quiz again
document.getElementById("goBack").addEventListener("click", function () {
  resetQuiz();
  finalScreenEl.style.display = "none";
  document.querySelector(".start-container").style.display = "block";
  // timeRemaining = 60;
  // score = 0;
  // currentQuestion = 0;
});

// Event listener to clear the leaderboard scores
document.getElementById("clearScores").addEventListener("click", function () {
  localStorage.removeItem("userScore");
  displayScore();
});

document.getElementById("leaderboard").addEventListener("click", function() {
  displayScore();
});

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

// Function to display the leaderboard when the "View Leaderboard" link is clicked
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