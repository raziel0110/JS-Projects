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

function initGame(speed) {
  const game = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();
    food.draw();
    if (snake.eat(food)) {
      score.incrementScore();
      text_score.innerHTML = score.score;
      food.initFood();
    }
    if (snake.findCollision()) {
      clearInterval(game);
    }
  }, speed);
}

document.addEventListener("keydown", directions);

function directions(event) {
  const direction = event.key.replace("Arrow", "");
  snake.changeDirection(direction);
}

(function LevelUp() {
  setInterval(changeLevel, 60000);
})();

function changeLevel() {
  gameSpeed -= 10;
  level++;
  if (level == 50) {
    level = "max";
  }
  initGame(gameSpeed);
  document.getElementById("level").innerHTML = level;
}

initGame(gameSpeed);
