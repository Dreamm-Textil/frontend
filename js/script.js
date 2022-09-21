const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const modalBtn = document.querySelector(".log-in-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const inputLogin = document.querySelector(".login");
const inputPassword = document.querySelector(".password")

navToggle.addEventListener('click', function(){
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    } else {
        links.classList.add("show-links");
    }
});

modalBtn.addEventListener('click', function(){
modalOverlay.classList.toggle("open-modal");
});

closeBtn.addEventListener("click", function () {
    modalOverlay.classList.remove("open-modal");
});

// ----------------------------------------------------------Buttons SHOW PASSWORD-------------//

function myFunction() {
  let x = document.getElementById("myInputPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const btns = document.querySelectorAll(".show-password-btn");
btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const showPassword = e.currentTarget;
    showPassword.classList.toggle("show-password");
  })
})


function showPasswordRegistrationPage() {
  let x = document.getElementById("PasswordRegistrationPage");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


const btnShowPasswordRegistrationPage = document.querySelectorAll(".show-password-btn-regestration-page");
btnShowPasswordRegistrationPage.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const showPasswordRegistrationPage = e.currentTarget;
    showPasswordRegistrationPage.classList.toggle("show-password");
  })
})



function showRepeatPasswordRegistrationPage() {
  let x = document.getElementById("RepeatPasswordRegistrationPage");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


const btnRepeatShowPasswordRegistrationPage = document.querySelectorAll(".repeat-show-password-btn-regestration-page");
btnRepeatShowPasswordRegistrationPage.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const RepeatshowPasswordRegistrationPage = e.currentTarget;
    RepeatshowPasswordRegistrationPage.classList.toggle("show-password");
  })
})

// -----------------------------------------------------------------------------------------------------------------------------------//

//-------------------------------------------------------- FORM REGESTRATION VALIDATE --------------------------------------------------//


let form = document.querySelector(".js-form");
let formInputs = document.querySelectorAll(".js-input");
let formName = document.querySelector(".input-name");
let formSurname = document.querySelector(".input-surname");
let formPhone = document.querySelector(".input-phone-number");
let formEmail = document.querySelector(".input-gmail-addres");
let formPassword = document.querySelector(".input-password-registration-page");
let formRepeatPassword = document.querySelector(".input-repeat-password-registration-page");
let formPasswordContainer = document.querySelector(".password-registration-page-container")
let formRepeatPasswordContainer = document.querySelector(".repeat-password-registration-page-container")

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<div>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateCountry(country) {
  let re = new RegExp('.co$');
  return re.test(String(country).toLowerCase());
}

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

form.onsubmit = function(){
  let emailVal = formEmail.value;
  let phoneVal = formPhone.value;
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
  let passwordVal = formPassword.value;
  let passwordRepeatVal = formRepeatPassword.value;
 

  formInputs.forEach(function(input){
    if(input.value === ''){
      input.classList.add('error');
      formPasswordContainer.classList.add('error');
      formRepeatPasswordContainer.classList.add('error');
    }
    else{
      input.classList.remove('error');
    }
  });

  if(emptyInputs.length !== 0){
    return false;
  }

  if (!validatePhone(phoneVal)) {
    formPhone.classList.add('error');
    return false;
  } else {
    formPhone.classList.remove('error');
  }

  if(!validateEmail(emailVal)){
    formEmail.classList.add('error');
    return false;
  }
  else{
    formEmail.classList.remove('error');
  }

  if (validateCountry(emailVal)) {
    formEmail.classList.add('error');
    return false;
  } else {
  formEmail.classList.remove('error');
  }

  if(passwordVal !== passwordRepeatVal){
    formPasswordContainer.classList.add('error');
    formRepeatPasswordContainer.classList.add('error')
    return false;
  }
  else{
    formPasswordContainer.classList.remove('error');
    formRepeatPasswordContainer.classList.remove('error')
  }

  let acceptRegestration = document.querySelector('.main-regestration-container');
  acceptRegestration.innerHTML = `<div class ="main-regestration-container-after-registration">
                                    <div class ="header-after-registration">
                                      <div class ="success-regestration-header">
                                        <i class="far fa-check-circle"></i>
                                        <h2>Успіх</h2>
                                      </div>
                                      <div class = "success-registration-main">
                                        <h2>Вітаємо, Ваш акаунт успішно створенний</h2>
                                      </div>
                                      <div class = "succes-registration-footer">
                                        <a href="index.html"> Продовжити </a>
                                        <button>Увійти</button>
                                    </div>
                                  </div>`

  // const formData = new FormData(this);

  //   fetch('login.php', {
  //     method: 'post',
  //     body: formData
  //   }).then(function(response){
  //     return response.text();
  //   }).then(function(text){
  //     console.log(text);
  //   }).catch(function(error){
  //     console.error(error);
  //   })
 
}

// form.addEventListener('submit', function(e){
//   e.preventDefault();
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       formPhone: formPhone.value,
//     }),
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// })



//----------------------------------------------------------------------------------------------------------------------------------------------------------//

const autorizationBtn = document.querySelector(".autorization-btn");
autorizationBtn.addEventListener("click", function(){
  let arrLogin = [];
  let arrPassword = [];
  arrLogin.push(inputLogin.value)
  arrPassword.push(inputPassword.value);
  console.log("Login:" + arrLogin.join('') + " " + "Password:" + arrPassword.join(''));
})
