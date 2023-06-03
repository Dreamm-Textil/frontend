const autorizationBtn = document.querySelector(".autorization-btn");
let formLogin = document.querySelector(".js-form-login");
let formEmailLogin = document.querySelector(".login");
let formPasswordLogin = document.querySelector(".password");
let formInputsLogin = document.querySelectorAll(".js-input-login");
let showWrongPassword = document.querySelector(".wrong-password-or-email-container");
// autorizationBtn.addEventListener("click", function(){
  
function mySubmitFunction(e) {
    e.preventDefault();
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<div>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateCountry(country) {
  let re = new RegExp('.co$');
  return re.test(String(country).toLowerCase());
}

let emailVal = formEmailLogin.value;
let emptyInputs = Array.from(formInputsLogin).filter(input => input.value === '');

formInputsLogin.forEach(function(input){
    if(input.value === ''){
      input.classList.add('error');
    }
    else{
      input.classList.remove('error');
    }
  });

  if(emptyInputs.length !== 0){
    return false;
  }


  if(!validateEmail(emailVal)){
    formEmailLogin.classList.add('error');
    return false;
  }
  else{
    formEmailLogin.classList.remove('error');
  }

  if (validateCountry(emailVal)) {
    formEmailLogin.classList.add('error');
    return false;
  } else {
  formEmailLogin.classList.remove('error');
  }

  fetch('http://ec2-3-93-66-171.compute-1.amazonaws.com:8080/api/auth/login', {
    method: 'POST',
    mode: "cors",
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    email: formEmailLogin.value, 
    password: formPasswordLogin.value
    }),
    credentials: "same-origin"
  })

  .then(function(response){ 
    if(response.headers.get('Authorization') === null){
      console.log('u cant');
      showWrongPassword.classList.add('show-wrong-password-or-email-container');
      return false
    }
    else{
    document.cookie = `Authorization=${response.headers.get('Authorization')}`;
    // location.href="http://127.0.0.1:5500";
    location.reload();
    }
  })
  
}




