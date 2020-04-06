var count=60;

var counter=setInterval(timer, 2000);

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

  document.getElementById("seconds").innerHTML="Timer:" + count
}


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




