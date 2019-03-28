function User(name, pass) {
  this.name = name;
  this.pass = pass;
  this.isLogged = false;
}

User.prototype.addUserDB = function(user) {
  const users = this.getUsersFormDB();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

User.prototype.getUsersFormDB = function() {
  const userLS = localStorage.getItem("users");
  let users = [];
  if (userLS !== null) {
    users = JSON.parse(userLS);
  }
  return users;
};

User.prototype.updateUserFromDB = function(user) {
  let users = this.getUsersFormDB();
  users.forEach(element => {
    if (element.name == user.name && element.pass == user.pass) {
      element.isLogged = true;
    }
  });
  localStorage.setItem("users", JSON.stringify(users));
};
