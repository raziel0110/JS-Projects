const add_user = document.getElementById("add-user");
const questions = getAllQuestions();
const questionTag = document.getElementById("questionTag");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
let next_btn = document.getElementById("next-btn");
const quizz_container = document.getElementById("quizz-container");
const modal_user = document.getElementById("modal-user");
const newQuizz = document.getElementById("newGame");

add_user.addEventListener("click", () => {
  const user_name = document.getElementById("user-name");
  const modal = document.getElementById("modal");

  if (user_name.value !== "") {
    modal.style.display = "none";
    quizz_container.style.visibility = "visible";
    getQuizz(user_name.value);
  }
});

function getQuizz(name) {
  const newUser = new User(name);
  const displayUser = document.getElementById("user");
  const userScore = document.getElementById("user-score");
  let index = 0;
  displayUser.innerHTML = "User: " + newUser.name;
  userScore.innerHTML = "Score: " + newUser.score;
  questionTag.innerHTML = questions[0].question;
  answer1.innerHTML = questions[0].first;
  answer2.innerHTML = questions[0].second;

  next_btn.addEventListener("click", () => {
    if (index <= questions.length - 2) {
      if (validateQuestion(questions[index])) {
        newUser.incrementScore();
        updateScore(userScore, newUser.score);
        index++;
        nextQuestion(questions, index);
      } else {
        nextQuestion(questions, index);
        index++;
      }
    } else if (index <= questions.length - 1) {
      next_btn.innerHTML = "Finish Quizz";
      if (validateQuestion(questions[index])) {
        newUser.incrementScore();
        updateScore(userScore, newUser.score);
        newUser.addUser(newUser);
        quizz_container.style.visibility = "hidden";
        modal_user.style.display = "block";
        newQuizz.addEventListener("click", newGame);
      }
    }
    console.log(index);
  });
}

function getAllQuestions() {
  let questions;
  const questionsLs = localStorage.getItem("questions");
  if (questionsLs === null) {
    questions = [];
  } else {
    questions = JSON.parse(questionsLs);
  }

  return questions;
}

function validateQuestion(question) {
  const radios = document.querySelectorAll('input[type="radio"]');
  for (let radio of radios) {
    if (radio.checked) {
      if (radio.value === question.answer) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function nextQuestion(questions, index) {
  questionTag.innerHTML = questions[index].question;
  answer1.innerHTML = questions[index].first;
  answer2.innerHTML = questions[index].second;
}

function updateScore(element, score) {
  element.innerHTML = "Score: " + score;
}

function newGame() {
  window.location.reload();
}
