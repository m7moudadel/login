
document.getElementById('out').addEventListener('click' , function () {
  window.location="./index.html"
})






valueArray= localStorage.getItem("Name")

var cartona =`
<h1> Welcome ${valueArray}</h1>
`
document.getElementById("name").innerHTML= cartona