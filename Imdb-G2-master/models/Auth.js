function Auth(){
  this._id="";
  this.username="";
  this.password="";
}

Auth.prototype.createAuth=function (form){
    var url = "https://ancient-caverns-16784.herokuapp.com/auth/register";
    var formData = {};
    $(form).find("input[name]").each(function (index, node) {
        formData[node.name] = node.value;
    });
    return $.post(url, formData);
}

Auth.prototype.loginAuth=function (form){
    var url = "https://ancient-caverns-16784.herokuapp.com/auth/login";
    var formData = {};
    $(form).find("input[name]").each(function (index, node) {
        formData[node.name] = node.value;
    });
    return $.post(url, formData);
}