const mainContainer = document.getElementById("main-container");
const containerTwo = document.getElementById("container-two");
const inputEmail = document.getElementById("email-address");
const errorMessage = document.getElementById("error-message");
const getEmail = document.getElementById("email");
const getIconCross = document.getElementById("icon-cross");
const submitButton = document.getElementById("submit-button");
const getStarted = document.getElementById("get-started");

console.log(inputEmail);

let inputText = "";

getStarted.addEventListener("click", (event) => {
  if (event.target) {
    containerTwo.style.display = "block";
    mainContainer.style.display = "none";
  }
});

submitButton.addEventListener("click", () => {
  if (validateEmail(inputText)) {
    containerTwo.style.display = "block";
    getEmail.style.borderBottom = "1px solid  #747b95";
    getIconCross.style.display = "none";
  } else {
    getEmail.style.borderBottom = "1px solid red";
    getIconCross.style.display = "block";
  }
});

const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
