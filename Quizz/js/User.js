function User(name) {
  this.name = name;
  this.score = 0;
}

User.prototype.incrementScore = function() {
  this.score += 10;
};

User.prototype.getUsers = function() {
  let users;
  const usersLS = localStorage.getItem("user");
  if (usersLS === null) {
    users = [];
  } else {
    users = JSON.parse(usersLS);
  }

  return users;
};

User.prototype.addUser = function(user) {
  let users = this.getUsers();
  user = {
    name: this.name,
    score: this.score
  };
  users.push(user);
  localStorage.setItem("user", JSON.stringify(users));
};
