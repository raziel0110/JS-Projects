function Board(question, answer1, answer2, goodAnswer) {
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.goodAnswer = goodAnswer;
}

Board.prototype.getQuestion = function() {
  return this.question;
};
Board.prototype.getFirstAnswer = function() {
  return this.answer1;
};
Board.prototype.getSecondAnswer = function() {
  return this.answer2;
};
Board.prototype.getGoodAnswer = function() {
  return this.goodAnswer;
};

Board.prototype.setQuestion = function(question) {
  this.question = question;
};
Board.prototype.setFirstAnswer = function(answer1) {
  this.answer1 = answer1;
};
Board.prototype.setQuestion = function(answer2) {
  this.answer2 = answer2;
};
