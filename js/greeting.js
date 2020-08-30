const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
const toDoForm2 = document.querySelector(".js-greeting-toDoForm"),
  toDoFormInput = toDoForm2.querySelector("input");

const USER_LS = "currentUser",
  SHOWING_CN = "showing",
  HIDDEN_CN = "hidden",
  GREETING = "greeting",
  FIRSTWIDTH = "firstWidth",
  CHANGEWIDTH = "changeWidth";

function changeWidth(event) {
  event.preventDefault();
  toDoFormInput.classList.remove(FIRSTWIDTH);
  toDoFormInput.classList.add(CHANGEWIDTH);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
  form.addEventListener("submit", changeWidth);
}

function paintGreeting(text) {
  form.classList.add(HIDDEN_CN);
  greeting.classList.remove(HIDDEN_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.classList.add(GREETING);
  greeting.innerText = `Hello ${text}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
    toDoFormInput.classList.remove(FIRSTWIDTH);
    toDoFormInput.classList.add(CHANGEWIDTH);
  }
}

function init() {
  loadName();
}

init();
