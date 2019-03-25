function Question(question, first, second, answer) {
  this.question = question;
  this.first = first;
  this.second = second;
  this.answer = answer;
}

Question.prototype.getFromLocalStorage = function() {
  let questions;
  const questionsLS = localStorage.getItem("questions");
  if (questionsLS === null) {
    questions = [];
  } else {
    questions = JSON.parse(questionsLS);
  }

  return questions;
};

Question.prototype.addToLocalStorage = function(question) {
  let questions = this.getFromLocalStorage();
  questions.push(question);
  localStorage.setItem("questions", JSON.stringify(questions));
};
