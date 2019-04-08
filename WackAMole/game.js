const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const btnStart = document.querySelector("button");
const startScreen = document.querySelector(".start-screen");
const showScore = document.querySelector(".show-score");
let score = 0;
let lastHole;
let timeUp = false;
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomHoles(holes) {
  const id = Math.floor(Math.random() * holes.length);
  const hole = holes[id];

  if (hole === lastHole) {
    return randomHoles(holes);
  }
  lastHole = hole;
  return hole;
}

console.log(randomHoles(holes));
function pong() {
  const time = random(200, 1000);
  const hole = randomHoles(holes);

  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    scoreBoard.classList.remove("add");

    if (!timeUp) {
      pong();
    }
  }, time);
}

function start() {
  score = 0;
  timeUp = false;
  scoreBoard.textContent = score;
  scoreBoard.classList.remove("add");
  startScreen.classList.add("hide");
  pong();

  setTimeout(() => {
    timeUp = true;

    startScreen.classList.remove("hide");
    showScore.classList.add("show");
    const message = `youre score is ${score}`;
    showScore.textContent = message;
  }, 10000);
}

moles.forEach(mole => {
  mole.addEventListener("click", addScore);
});

function addScore() {
  score++;
  scoreBoard.textContent = score;
}

btnStart.addEventListener("click", start);

// function peep() {
//   const time = random(200, 1500);
//   const hole = randomHoles(holes);

//   hole.classList.add("up");
//   setTimeout(() => {
//     hole.classList.remove("up");
//     scoreBoard.classList.remove("add");
//     if (!timeUp) peep();
//   }, time);
// }

// function start() {
//   const score = 0;
//   scoreBoard.textContent = score;
//   timeUp = false;
//   scoreBoard.classList.remove("add");
//   startScreen.classList.add("hide");
//   peep();

//   setTimeout(() => {
//     timeUp = true;
//     startScreen.classList.remove("hide");

//     if (score > 0) {
//       showScore.classList.add("show");
//       const message = `Youre score ${score >= 10 ? "Great" : ""}`;
//       showScore.textContent = message;
//     }
//   }, 10000);
// }
// function bonk(e) {
//   if (!timeUp) {
//     scoreBoard.classList.add("add");
//     score++;
//     scoreBoard.textContent = score;
//   }
// }
// moles.forEach(mole => {
//   mole.addEventListener("click", bonk);
// });

// btnStart.addEventListener("click", start);
