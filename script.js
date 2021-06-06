const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-message");

BtnLog.addEventListener("click", (e) => {
  e.preventDefault();
  const username = formlog.username.value;
  const password = formlog.password.value;

  if (username === "coolStudent123" && password === "coolStudent123") {
    alert("You have successfully logged in.");
  } else {
    ErrorMessage.style.opacity = 1;
  }
});

document.querySelector(".notes-form").addEventListener("submit", function (event) {
    var notes = document.querySelector(".text-area").value;
    var numLetters = document.querySelector(".importance").value;
    if (
      notes.trim().length <= 1 ||
      numLetters.trim() == "" ||
      Number(numLetters) == NaN
    ) {
      alert(
        "Notes need to be of length greater than 1 and the Importance needs to be a number. Try again."
      );
      event.preventDefault();
    }
  });