class Word {
  constructor() {
    this.words = ["javascript", "cat", "pyton", "ruby on rails", "acasa"];
  }

  randomWord = () => {
    return this.words[Math.floor(Math.random() * this.words.length)];
  };

  guessWord(value) {
    if (value === this.randomWord()) {
      return "You win";
    }
  }
}
