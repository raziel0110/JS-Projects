class Word {
  constructor() {
    this.words = ["javascript", "cat", "pyton", "ruby on rails"];
  }

  randomWord = () => {
    return this.words[Math.floor(Math.random() * this.words.length)];
  };
}
