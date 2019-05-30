$(document).ready(function() {
  $("#submitButton").click(function(e) {
    e.preventDefault();
    login();
  });
});

function login() {
  const username = $("#username").val();
  const password = $("#password").val();
  const userLogged = new User(username, password);
  const users = getAllUsers();
  if (username.trim() !== "" && password.trim() !== "") {
    if (existUser(username, password, users)) {
      userLogged.isLogged = true;
      userLogged.updateUserFromDB(userLogged);
      console.log(userLogged);
      window.location.href = "index.html";
    } else {
      console.log("user not found");
      $(".error").css("visibility", "visible");
      setInterval(function() {
        $(".error").css("visibility", "hidden");
      }, 5000);
    }
  }
}

function existUser(user, pass, users) {
  return users.some(pers => {
    return pers.name == user && pers.pass == pass;
  });
}

function getAllUsers() {
  let users = [];
  const usersLS = localStorage.getItem("users");
  if (usersLS === null) {
    users = [];
  } else {
    users = JSON.parse(usersLS);
  }
  return users;
}
