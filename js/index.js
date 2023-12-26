var userNameInput = document.querySelector(".userNameInput");
var emailInput = document.querySelector(".emailInput");
var passwordInput = document.querySelector(".passwordInput");
var regExName = /^[a-zA-Z]{3,10}$/
var regExPassword = /^[0-9a-zA-z_]{8,20}$/
var regExEmail = /^[a-zA-Z0-9]{3,10}@[a-zA-Z]{3,10}\.com$/


var users= [];

if(localStorage.getItem("users") != null){
  users= JSON.parse(localStorage.getItem("users"))
}

function validateName(userName){
return regExName.test(userName)
}

function validatePassword(password){
  return regExPassword.test(password)
}

function validateEmail(email){
  return regExEmail.test(email)
}

function emailExisting(){
  for(var i=0; i<users.length; i++){
    if( users[i].email == emailInput.value){
    return true

    }
  }
}



// Sign Up User
function addUser(){
if(validateName(userNameInput.value) && validateEmail(emailInput.value) && validatePassword(passwordInput.value)){
  if(emailExisting() == true){
  
    document.querySelector(".invalidInput").innerHTML= "Your Email is Existing"
  
  }else{

    var user={
      userName: userNameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    }
    users.push(user)
    localStorage.setItem("users" , JSON.stringify(users))
    window.location.href = "../index.html";
    
  }
}else{
    document.querySelector(".invalidInput").innerHTML= "All inputs is required"
  }

}

// sigUp Button
var signUp =document.querySelector(".signUp")
if(signUp !=null){
 signUp.addEventListener("click", function(){
 
    addUser()
  })
}

// Signin User
var passwordLogin=document.querySelector(".passwordLogin")
var emailLogin=document.querySelector(".emailLogin")
function SigninUser(){
  for(var i=0; i<users.length; i++){
    if(emailLogin.value== users[i].email && passwordLogin.value==users[i].password){
      window.location.href = "./html/home.html";
      localStorage.setItem("userName", JSON.stringify(users[i].userName)) 
     
    }else if(emailLogin.value== "" || passwordLogin.value==""){
      document.querySelector(".invalidInput").innerHTML= "All inputs is required"

    }else if(emailLogin.value != users[i].email || passwordLogin.value !=users[i].password){
      document.querySelector(".invalidInput").innerHTML= "incorrect email or password"
    }
  }
}


// Login Button
var login= document.querySelector(".login")
if(login != null){
  login.addEventListener("click", function(){
    SigninUser()
  })
}


// Welcome User
var userName=JSON.parse(localStorage.getItem("userName"))
var h1Welcome= document.querySelector(".h1Welcome")
if(h1Welcome != null){
h1Welcome.innerHTML= `Welcome ${userName}`
}