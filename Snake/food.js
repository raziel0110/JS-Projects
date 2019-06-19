class Food {
  constructor() {
    this.x;
    this.y;
  }

  randomPosition = () => {
    this.x = Math.floor(Math.random() * scale) * scale;
    this.y = Math.floor(Math.random() * scale) * scale;
  };
  draw = () => {
    ctx.fillStyle = "red";
    ctx.fillStroke = "white";
    ctx.stroke();
    ctx.fillRect(this.x, this.y, scale, scale);
  };
}
