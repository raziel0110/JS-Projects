let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let snakeSize = 10;
let w = 350;
let h = 350;

const posX = Math.floor(Math.random() * (w / snakeSize));
const posY = Math.floor(Math.random() * (h / snakeSize));
const snake = new Snake(posX, posY, snakeSize, snakeSize);

const init = function() {
  drawSnakeHead();
};

let drawSnakeHead = function() {
  ctx.fillStyle = "lightgrey";
  ctx.rect(0, 0, w, h);
  ctx.fillRect(0, 0, w, h);
  ctx.stroke();
  snake.drawSnake(ctx);
};

function paint() {}

init();
