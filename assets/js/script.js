// var body = document.body;

// var score = 0;



// var h1El = document.createElement("h1");
// h1El.textContent = "Coding Quiz Challenge"
// h1El.setAttribute("style", "margin:auto; width: 50%; text-align: center;")
// body.appendChild(h1El)

var body = document.body;

var quizContainer = document.createElement("div");


var resultContainer = document.createElement("div");

var submitBtn = document.createElement("button")

var questions = [
  { 
    question: "Question 1 goes Here!!", 
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3",
      d: "Answer 4"
    },
    correctAnswer: "b"
  },
  
  { 
    question: "Question 2 goes Here!!", 
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3",
      d: "Answer 4"
    },
    correctAnswer: "b"
  },

  { 
    question: "Question 3 goes Here!!", 
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3",
      d: "Answer 4"
    },
    correctAnswer: "b"
  },

  { 
    question: "Question 4 goes Here!!", 
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3",
      d: "Answer 4"
    },
    correctAnswer: "b"
  },

  { 
    question: "Question 5 goes Here!!", 
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3",
      d: "Answer 4"
    },
    correctAnswer: "b"
  },  
];



body.appendChild(quizContainer);
quizContainer.appendChild(resultContainer);
resultContainer.appendChild(submitBtn);





function runQuiz() {
  var output = [];
  questions.forEach
}

function showResult() {}





buildQuiz ();

submitBtn.addEventListener("click", showResult);


