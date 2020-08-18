var questionIndex = 0;
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function timer() {
  var timerInterval = setINterval(function() {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;
  
    if (secondsLeft === 0) {
     clearInterval(timerInterval);
     return prompt;
    }
  }, 1000);
}

setTime();


$("#q1answer3").on("click", function() {
    alert("Correct!");  
  });

$("#q2answer3").on("click", function() {
    alert("Correct!");
  });

$("#q3answer4").on("click", function() {
    alert("Correct!");
  });

$("#q4answer3").on("click", function() {
    alert("Correct!");
  });

$("#q5answer4").on("click", function() {
    alert("Correct!");
  });



var correctAnswers = 0;




