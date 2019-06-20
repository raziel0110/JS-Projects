const word_hidding = document.getElementById("word_letter");
const lettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
const letters = document.getElementsByClassName("letter");
const input = document.getElementById("input");
const start = document.getElementById("start");
const trying = document.getElementById("try");
const lines = document.getElementById("lines");
let show = false;

console.log(input);

const game_word = new Word();
const hangman = new Hangman();

const word = game_word
  .randomWord()
  .toString()
  .split("");
const word_length = word.length;
console.log(word_length);

word.forEach(letter => {
  const span = document.createElement("span");
  span.classList.add("hidden");
  span.classList.add("underscore");

  span.innerHTML = letter;
  word_hidding.append(span);
});

for (let i = 0; i < word_length; i++) {
  const span = document.createElement("span");
  span.classList.add("lines");
  span.innerHTML = "_";
  lines.append(span);
}

function init() {}

start.addEventListener("click", startGame);

function startGame() {
  if (!show) {
    word_hidding.classList.remove("word_hidding");
    start.classList.add("hidden");
    init();
  } else {
    word_hidding.classList.add("word_hidding");
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
  if (ifExist(input.value)) {
    console.log(returnLetter(input.value));
  } else {
    hangman.removeLifes();
    console.log(hangman.errorLeft);
  }
}
