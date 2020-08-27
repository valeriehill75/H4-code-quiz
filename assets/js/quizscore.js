function getHighScores() {
  //get scores from local storage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  //sort scores in descending order
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

function clearHighScores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighScores;

//run function
getHighScores();
