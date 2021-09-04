//---Declared Variables---//
var currentIndex = 0;

var timeLeft = 75;

var currentTime;

var remainingTime = document.getElementById("remaining-time");

var quizContainer = document.getElementById("intro");

var startBtn = document.getElementById("start-btn");

var questionContainer = document.getElementById("quiz-questions");

var currentQuestion = document.getElementById("question");

var currentOptions = document.getElementById ("options");

var feedback = document.getElementById("feedback");

var resultsContainer = document.getElementById("result");

var playerScore = document.getElementById("player-score");

var playerInitials = document.getElementById("initials");

var submitBtn = document.getElementById("submit-btn");

var quizQuestions = [
  { 
    question: "Question 1 goes Here!!", 
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: "Answer 1"
  },
  { 
    question: "Question 2 goes Here!!", 
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: "Answer 1"
  },
  { 
    question: "Question 3 goes Here!!", 
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: "Answer 1"
  },
  { 
    question: "Question 4 goes Here!!", 
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: "Answer 1"
  },
  { 
    question: "Question 5 goes Here!!", 
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: "Answer 1"
}];

//---Event Listeners---//

startBtn.addEventListener("click", startQuiz);

submitBtn.addEventListener("click", scores);

//---Time Functions---//

function startTimer() {
  currentTime = setInterval(function() {
    timeLeft--;
    displayTime();
    checkTime();
  },1000);
}

function checkTime() {
  if (timeLeft <= 0) {
    timeLeft = 0;
    endQuiz();
  }
}

function displayTime() {
  remainingTime.innerText = timeLeft +" s";
}

//---Quiz Functions---//
function startQuiz() {

  quizContainer.setAttribute("class", "hide")
  questionContainer.setAttribute("class", "show")

  displayQuestion();

  startTimer();
}

function displayQuestion() {
  var randQuestion = quizQuestions[currentIndex];
  
  currentQuestion.innerText = randQuestion.question;

  currentOptions.innerHTML = "";

  randQuestion.answers.forEach(function(answer, i) {
    var button = document.createElement("button");
    
    button.setAttribute("class", "answer")
    button.setAttribute("value", answer)
    button.innerText = i + 1 + ": " + answer;
    button.addEventListener("click", checkAnswer);
        
    currentOptions.appendChild(button)
  })
}

function checkAnswer () {
  if (this.value != quizQuestions[currentIndex].correctAnswer) {
    timeLeft -= 10;

    if (timeLeft <0) {
      timeLeft = 0;
    }
    feedback.innerText = "Wrong!";
  } else {
    feedback.innerText = "Correct!";
  }  
  feedback.setAttribute("class", "show");
  setTimeout(function() {
    feedback.setAttribute("class", "hide");
  }, 1000);
  
  currentIndex++;

  if (currentIndex === quizQuestions.length) {
    endQuiz ();
  } else {
    displayQuestion();
  }
}

function endQuiz () {
  questionContainer.setAttribute("class", "hide");
  resultsContainer.setAttribute("class", "show");

  clearInterval(currentTime);
  
  playerScore.innerText = timeLeft
}

//---Score Storage---//
function scores() {
  var initials = playerInitials.value.trim();

  if (initials !="") {
    
    var highScore = JSON.parse(localStorage.getItem("highscore")) || [];

    var newScore = {
      score: timeLeft, initials: initials
    };

    highScore.push(newScore);
    localStorage.setItem("highscore", JSON.stringify(highScore));
    
    location.href="highscores.html";
  }
}



