function User(name){
    this.name = name;
    this.score = 0;
}

User.prototype.incrementScore = function(){
    this.score++; 
}

User.prototype.getUsers = function(){
    let users;
    const usersLS = localStorage.getItem('user');
    if(usersLS === null){
        users = [];
    } else {
        users = JSON.parse(usersLS);
    }

    return users;
}

User.prototype.addUser = function(user){
    let users = this.getUsers();
    users.push(user);
    localStorage.setItem('user',JSON.stringify(usersLS));
}   