var email =document.getElementById('email');
var password =document.getElementById('pass');
var btn =document.getElementById("btn")




document.getElementById('bageCreat').addEventListener('click' , function () {
  window.location = './login.html';
})

var loginArray = []
loginArray =JSON.parse(localStorage.getItem("date"));

document.getElementById('btn').addEventListener('click' , function(){


  for (var i = 0; i < loginArray.length ; i++) {
    if (email.value == loginArray[i].email && password.value == loginArray[i].password) {
      welcome();
      document.getElementById('error').classList.add('d-none')
    }else{
      document.getElementById('error').classList.remove('d-none')
    }
    
  }
  
clearDate();
})

function clearDate(){
  email.value=""
  pass.value=""
}


function welcome() {
  for (let i = 0; i < loginArray.length; i++) {
    if (loginArray[i].email == email.value) {
    window.location = './welcome.html'; 
    localStorage.setItem("Name" , loginArray[i].name)
}}}
