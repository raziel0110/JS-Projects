class Score {
  constructor() {
    this.score = 0;
  }

  incrementScore = () => {
    this.score += 10;
  };

  getScore = () => {
    return this.score;
  };
}
