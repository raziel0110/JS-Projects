class Player {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.score = 0;
    this.coords = [];
  }

  incrementScore() {
    return this.score++;
  }

  resetScore() {
    this.score = 0;
  }
}
