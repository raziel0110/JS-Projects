const users = getFromLocalStorage("users");
$(document).on("click", "#register", function(e) {
  e.preventDefault();
  const username = $("#username").val();
  const password = $("#password").val();
  if (username.trim() !== "" && password.trim() !== "") {
    const user = new User(username, password);
    if (checkIfUserExist(username, users)) {
      alert("User Exist");
    } else {
      user.addUserDB(user);
      window.location.replace("login.html");
    }
  } else {
    alert("Please complete all fields!");
  }
});
