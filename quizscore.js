var nameInput = document.querySelector("#name");
var submitButton = document.querySelector("#submitButton");
var msgDiv = document.querySelector("#msg");
var userNameSpan = document.querySelector("#user-name");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var name = localStorage.getItem("name");

  if (name === null) {
    return;
  }

  userNameSpan.textContent = name;
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;

  if (name === "") {
    displayMessage("error", "Name cannot be blank");
  } else {
    displayMessage("success", "Submitted successfully!");

    localStorage.setItem("name", name);
    renderLastRegistered();
  }
});