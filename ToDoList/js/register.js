$(document).ready(function() {
  $("#register").click(function(e) {
    const username = $("#username").val();
    const password = $("#password").val();
    if (username.trim() !== "" && password.trim() !== "") {
      const user = new User(username, password);
      user.addUserDB(user);
    } else {
      alert("Please complete all fields!");
    }
    window.location.href = "login.html";
  });
});
