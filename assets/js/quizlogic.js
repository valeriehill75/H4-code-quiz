//trakcing quiz state
var questionIndex = 0;
var time = questions.length * 15;
var timerId;

//referencing DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

function quizStart() {
  //remove start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  //show questions section
  questionsEl.removeAttribute("class");

  //starting timer
  timerId = setInterval(clockTicking, 1000);

  //show starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  //get latest question from array
  var newQuestion = questions[questionIndex];

  var titleEl = document.getElementById("question-title");
  titleEl.textContent = newQuestion.title;

  //clear questions
  choicesEl.innerHTML = "";

  //loop over questions
  newQuestion.choices.forEach(function(choice, i) {
    //creating buttons for each question
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = choice;

    choiceNode.onclick = questionClick;

    //show question on page
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  //check for wrong answer
  if (this.value !== questions[questionIndex].answer) {
    //subtract for wrong answers
    time -= 15;

    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "Sorry Wrong Answer!";    
  } else {
    feedbackEl.textContent = "Yay! Good job!!"
  }

  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  //go to next question
  questionIndex++;

  if (questionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  //stop timer
  clearInterval(timerId);

  //show last screen
  var lastScreenEl = document.getElementById("end-screen");
  lastScreenEl.removeAttribute("class");

  //show final scores
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  //hide questions page
  questionsEl.setAttribute("class", "hide");
}

function clockTicking() {
  //update the time
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

function saveHighScore() {
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    //get saved scores from local storage
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    //format new score
    var newScore = {
      score: time,
      initials: initials
    };
    //save to local storage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    //redirect to the next page
    window.location.href = "highscore.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighScore();
  }
}

//submit button onclick
submitBtn.onclick = saveHighScore;
startBtn.onclick = quizStart;
initialsEl.onkeyup = checkForEnter;