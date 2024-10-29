const form = document.getElementById("form");
const username= document.getElementById("username");
const email= document.getElementById("email");
const password = document.getElementById("password");
const password2= document.getElementById("password2");
function handlesubmit(event){
event.preventDefault();
}
form.addEventListener('submit',handlesubmit);