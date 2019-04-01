window.onload=function(){

  var submit=document.getElementsByTagName("button")[0];
  var form=document.getElementsByTagName("form")[0];
  var missUser=document.getElementById("missUser");
  var missPass=document.getElementById("missPass");
  var problems=document.querySelector(".problems");
  var newAuth=new Auth();
  
   submit.addEventListener("click", function(event){
   	event.preventDefault();
   	var userProblems=areProblems(form.password.value, form.username.value);
   	if( userProblems===0 ){
      var newUser = newAuth.loginAuth(form);
      newUser.then(function(response){
      	if(response.authenticated===true){	
	      	console.log(response);
	      	localStorage.setItem("loggedUser", response.accessToken);
          localStorage.setItem("username", form.username.value);
	      	form.submit();
	      }
      }, function(error){
        problems.style.display="block";
	     existUser.style.display="block";
      })
   	}
    })

   function areProblems(pass, user){
   	var errors=0;
   	if(user===""){
   		missUser.style.display="block";
   		errors++;
   	}
   	if(pass===""){
   		missPass.style.display="block";
   		errors++;
   	}
   	if(errors===0){
   		return 0;
   	}else{
   		problems.style.display="block";
   		return 1;
   	}
   }
}
