class Snake {
  constructor() {
    this.x;
    this.y;
    this.xSpeed = 0;
    this.ySpeed = size * 1;
    this.tail = [];
    this.total = 0;
  }

  snakeInit = () => {
    this.x = canvas.width / 2 - 5;
    this.y = Math.floor(canvas.height / 3) - 6;
  };

  draw = () => {
    ctx.fillStyle = "#23382c";
    ctx.strokeStyle = "#446344";
    ctx.lineWidth = 1;

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, size, size);
      ctx.strokeRect(this.tail[i].x, this.tail[i].y, size, size);
    }
    ctx.fillRect(this.x, this.y, size, size);
    ctx.strokeRect(this.x, this.y, size, size);
  };

  update = () => {
    // update tail

    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    this.tail[this.total - 1] = { x: this.x, y: this.y };

    // update position and limit bounderies

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 + size) {
      this.x = canvas.width;
    }

    if (this.y < 0) {
      this.y = canvas.height;
    }

    if (this.x > canvas.width + size) {
      this.x = 0;
    }

    if (this.y > canvas.height) {
      this.y = 0;
    }
  };

  changeDirection = direction => {
    switch (direction) {
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -size * 1;
        break;
      case "Down":
        this.xSpeed = 0;
        this.ySpeed = size * 1;
        break;
      case "Right":
        this.xSpeed = size * 1;
        this.ySpeed = 0;
        break;
      case "Left":
        this.xSpeed = -size * 1;
        this.ySpeed = 0;
        break;
      default:
        this.xSpeed = 0;
        this.ySpeed = size * 1;
    }
  };

  eat = food => {
    if (this.x === food.x && this.y === food.y) {
      this.total++;
      return true;
    }
    return false;
  };

  findCollision = () => {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        return true;
      }
    }

    return false;
  };
}
