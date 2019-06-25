const game = document.getElementById("game");
const input = document.getElementById("input");
const start = document.getElementById("start");
const trying = document.getElementById("try");
const lines = document.getElementById("lines");
const container = document.getElementById("container");

let show = false;

const game_word = new Word();
const hangman = new Hangman();
const word = game_word
  .randomWord()
  .toString()
  .split("");
start.addEventListener("click", startGame);

function startGame() {
  if (!show) {
    game.classList.remove("hidden");
    start.classList.add("hidden");
    init();
  }
}

function init() {
  showUnderscoreLetters(word.length);
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

function tryLetter() {
  const line = document.querySelectorAll(".line");
  const positions = findIndex(word, input.value);

  if (positions.length !== 0) {
    for (let position of positions) {
      if (line[position].innerHTML === "_") {
        line[position].innerHTML = returnLetter(input.value);
      }
    }
  } else {
    hangman.removeLifes();
    if (hangman.loose()) {
      alert("you loose");
      hangman.reset();
      window.location.reload();
    }
  }
}
