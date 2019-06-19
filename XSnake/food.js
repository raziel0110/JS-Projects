class Food {
  constructor() {
    this.x;
    this.y;
  }

  initFood = () => {
    this.x = Math.floor(Math.random() * size + 1) * size * 3;
    this.y = Math.floor(Math.random() * size + 1) * size * 3;
    console.log(this.x, ",", this.y);
  };

  draw = () => {
    ctx.fillStyle = "#23382c";
    ctx.fillRect(this.x, this.y, size, size);
  };
}
