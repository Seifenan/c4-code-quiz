var scoreEl = document.getElementById("highscore");

var clearEl = document.getElementById("clear-btn");

function displayScore() {
  var highScore = JSON.parse(localStorage.getItem("highscore")) || [];

  highScore.forEach(function(score) {
    var scoreList = document.createElement("li");
    scoreList.innerText = score.initials + " - " + score.score
    scoreEl.appendChild(scoreList);
  });
}

function clearScores() {
  localStorage.removeItem("highscore")
  location.reload();
}

clearEl.addEventListener("click", clearScores);

displayScore();