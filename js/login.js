var nameInput =document.getElementById('name');
var email =document.getElementById('email');
var pass =document.getElementById('pass');
var btn =document.getElementById('btn');



document.getElementById('bage-login').addEventListener('click', function(){
  window.location ='./index.html' 
})



var valueArray = []
function addValue() {
  var dateName ={
 name: nameInput.value,
 email: email.value,
 password: pass.value
  }
  valueArray.push(dateName);

   if (nameInput.value != ""  && email.value != ""  && pass.value != "") {

    localStorage.setItem("date" , JSON.stringify(valueArray));
    removeDate();
    document.getElementById('sucsess').classList.remove('d-none')
    document.getElementById('sucsess').classList.add('d-block')
    document.getElementById('error').classList.add('d-none');
    
   }else{
    document.getElementById('error').classList.remove('d-none')
    document.getElementById('error').classList.add('d-block')
    document.getElementById('sucsess').classList.add('d-none')

   }

  }

function removeDate() {
   nameInput.value ="";
   email.value = "";
   pass.value ="";
}





