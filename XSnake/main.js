const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let text_score = document.getElementById("score");
let level = 1;
let gameSpeed = 200;
const size = 10;

const snake = new Snake();
const food = new Food();
const score = new Score();

snake.snakeInit();
food.initFood();

function initGame() {
  const game = setInterval(() => {
    // LevelUp();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();
    food.draw();

    if (snake.eat(food)) {
      score.incrementScore();
      text_score.innerHTML = score.score;
      food.initFood();
      console.log("score:", score.score);
    }

    if (snake.findCollision()) {
      clearInterval(game);
    }
  }, gameSpeed);
}

document.addEventListener("keydown", directions);

function directions(event) {
  const direction = event.key.replace("Arrow", "");
  snake.changeDirection(direction);
}

function LevelUp() {
  let levels = 1;
  let speed = 10;

  while (levels <= 10) {
    setTimeout(() => {
      level++;
      gameSpeed -= 10;
    }, 10000);
  }
}

initGame();
