
const form = document.getElementById('form');
form.addEventListener('focusout',onFormClick);
const btn = document.getElementById('addToLocalStorage');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    const questionValue = document.getElementById('question');
    const firstValue = document.getElementById('alternative1');
    const secondValue = document.getElementById('alternative2');
    const answerValue = document.getElementById('answer');
    const newQuestion = new Question(questionValue.value,firstValue.value,secondValue.value,answerValue.value);
    const inputs = document.querySelectorAll('.input > input');
    
    
    if(!checkElements(inputs)){
       
        console.log(checkElements(inputs));
    } else {
        newQuestion.addToLocalStorage(newQuestion);
        questionValue.value = null;
        firstValue.value = null;
        secondValue.value = null;
        answerValue.value = null;
    }
});

function checkElements(elements){  
   let valid = true;   
   for(let element of elements){

       if(validateElement(element)){
           valid = false;
       }
       
       
    }
    return valid;
}

function validateElement(element){
        if(element.value === ""){
        element.classList.add('error');
    }    
}


function onFormClick(e){
   if(e.target.type === 'text' && e.target.value !== ""){
       e.target.classList.remove('error');
   } else if(e.target.type === "text" && e.target.value === ""){
    e.target.classList.add('error');
   } 
}

