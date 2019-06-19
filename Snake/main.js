const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const size = 10;
const w = canvas.width;
const h = canvas.height;

let snake = [];

snake[0] = {
  x: Math.floor(Math.random() * 17 + 1) * size,
  y: Math.floor(Math.random() * 15 + 3) * size
};
let total = snake.length;
let food = {
  x: Math.floor(Math.random() * 17 + 1) * size,
  y: Math.floor(Math.random() * 15 + 3) * size
};

let score = 0;
let d;

function drawBackground() {
  ctx.fillStyle = "lightgrey";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "darkgrey";
  ctx.strokeRect(0, 0, w, h);
}

document.addEventListener("keydown", direction);

function direction(e) {
  let key = e.keyCode;
  if (key == 37) {
    snake[0].x -= 10;
  } else if (key == 38) {
    snake[0].y -= 10;
  } else if (key == 39) {
    snake[0].x += 10;
  } else if (key == 40) {
    snake[0].y += 10;
  }
}

// function collision(array, head) {
//   for (let i = 0; i < array.length; i++) {
//     if (head.x === array[i].x && head.y === array[i].y) {
//       return true;
//     }
//   }
//   return false;
// }

function draw() {
  drawBackground();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  ctx.fillStyle = "green";
  ctx.strokeStyle = "red";
  ctx.fillRect(snakeX, snakeY, size, size);
  ctx.strokeRect(snakeX, snakeY, size, size);

  for (let i = 1; i < snake.length; i++) {
    ctx.fillStyle = "white";
    ctx.fillRect(snake[i].x, snake[i].y, size, size);
    ctx.strokeStyle = "red";
    ctx.strokeRect(snake[i].x, snake[i].y, size, size);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, size, size);
  ctx.strokeStyle = "red";
  ctx.strokeRect(food.x, food.y, size, size);

  if (snakeX === food.x && snakeY === food.y) {
    console.log(snake);
    total++;
    snake[total - 1] = { x: snakeX, y: snakeY };
    score++;

    food = {
      x: Math.floor(Math.random() * 17 + 1) * size,
      y: Math.floor(Math.random() * 15 + 3) * size
    };
  }

  requestAnimationFrame(draw);
}

let game = setInterval(draw, 100);
