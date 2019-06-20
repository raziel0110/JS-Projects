class Hangman {
  constructor() {
    this.guess = "";
    this.errorLeft = 5;
  }

  removeLifes() {
    this.errorLeft--;
  }
}
