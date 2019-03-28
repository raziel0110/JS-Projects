$(document).ready(function() {
  const username = $("#username").val();
  const password = $("#password").val();
});

function login(user, pass) {
  if (user.trim() !== "" && pass.trim() !== "") {
    const users = getUsersFromLocalStorage();
  }
}

function getUsersFromLocalStorage() {
  let users = [];
  const usersLS = localStorage.getItem("users");
  if (usersLS === null) {
    users = [];
  } else {
    users = JSON.parse(usersLS);
  }
  return users;
}
