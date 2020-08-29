const body = document.querySelector("body");

const IMG_NUMBER = 5;

function removeWait(image) {
  setTimeout(function () {
    image.classList.remove("wait");
  }, 150);
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  image.classList.add("wait");
  body.prepend(image);
  image.addEventListener("loadend", removeWait(image));
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
