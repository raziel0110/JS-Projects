class Hangman {
  constructor() {
    this.guess = "";
    this.errorLeft = 5;
  }

  removeLifes() {
    this.errorLeft--;
  }

  loose() {
    if (this.errorLeft == 0) {
      return true;
    }
    return false;
  }

  reset() {
    this.errorLeft = 5;
  }
}
