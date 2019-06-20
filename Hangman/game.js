const word_hidding = document.getElementById("word_letter");
const game = document.getElementById("game");
const lettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
const letters = document.getElementsByClassName("letter");
const input = document.getElementById("input");
const start = document.getElementById("start");
const trying = document.getElementById("try");
const lines = document.getElementById("lines");

let show = false;

const game_word = new Word();
const hangman = new Hangman();

const word = game_word
  .randomWord()
  .toString()
  .split("");
const word_length = word.length;
//game init

start.addEventListener("click", startGame);

function startGame() {
  if (!show) {
    game.classList.remove("hidden");
    start.classList.add("hidden");
    init();
  }
}

function init() {
  showUnderscoreLetters(word_length);
  hideLetters(word);
}

function hideLetters(arr) {
  arr.forEach(letter => {
    const span = document.createElement("span");
    span.classList.add("hidden");
    span.classList.add("underscore");

    span.innerHTML = letter;
    word_hidding.append(span);
  });
}

function showUnderscoreLetters(number) {
  for (let i = 0; i < number; i++) {
    const span = document.createElement("span");
    span.classList.add("line");
    span.innerHTML = "_";
    lines.append(span);
  }
}

trying.addEventListener("click", tryLetter);

function ifExist(input) {
  return word.some(letter => letter === input);
}

function returnLetter(input) {
  return word.find(letter => letter === input);
}

function tryLetter() {
  const line = document.querySelectorAll(".line");
  const index = findIndex(word, input.value);

  if (ifExist(input.value) && line[index].innerHTML === "_") {
    line.replace(line[index].innerHTML, returnLetter(input.value));
    console.log(returnLetter(input.value));
    console.log(findIndex(word, input.value));
  } else {
    hangman.removeLifes();
    console.log(hangman.errorLeft);
  }
}

function findIndex(arr, value) {
  return arr.findIndex(el => el === value);
}
