class Snake {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.tail = [];
  }

  drawSnake = ctx => {
    ctx.fillStyle = "green";
    ctx.fillStroke = "darkgreen";
    ctx.stroke();
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  moveSnake = e => {
    if (e.keyCode === 37) {
      this.x -= 5;
    }
    if (e.keyCode === 38) {
      this.y -= 5;
    }

    if (e.keyCode === 39) {
      this.x += 5;
    }

    if (e.keyCode === 40) {
      this.y += 5;
    }
  };
}
