class Player {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.score = 0;
  }

  incrementScore() {
    return this.score++;
  }
}
