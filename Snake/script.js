let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let scale = 10;
let rows = canvas.height / scale;
let cols = canvas.width / scale;

let snake = new Snake();
let food = new Food();
let score = new Score();
food.randomPosition();

(function setup() {
  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    food.draw();
    snake.draw();

    if (snake.eat(food)) {
      food.randomPosition();
      score.incrementScore();
    }
  }, 200);
})();

document.addEventListener("keydown", directions);

function directions(event) {
  const direction = event.key.replace("Arrow", "");
  snake.changeDirection(direction);
}
