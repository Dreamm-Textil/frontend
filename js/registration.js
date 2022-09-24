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
                                        <a class ="back-to-shop-after-regestration" href="index.html"><i class="fas fa-chevron-left"></i> До каталогу </a>
                                        <button class="log-in-bt">Увійти<i class="fas fa-chevron-right"></i></button>
                                     </div>
                                  </div>
                                  <div class="modal-overlay">
                                  <div class="modal-container">
                                      <div class="header-modal-log-in">
                                      <h3>Вхід до особистого кабінету</h3>
                                      </div>
                                      <div class="login-and-password">
                                        <input class="login" placeholder="Login">
                                        <div class="password-container">
                                          <input  type="password" class="password" placeholder="Password" value="" id="myInputPasswor">
                                          <button class="show-password-bt" onclick="myFunction()">
                                            <span class="see-icon">
                                              <i class="far fa-eye"></i>
                                            </span>
                                            <span class="non-see-icon">
                                              <i class="far fa-eye-slash"></i>
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                      <div class="login-and-password-btn">
                                        <button class="autorization-btn">Авторизація</button>
                                        <a href="registration.html" class="registration-btn">Реєстарція</a>
                                        <div class="remebmer-me-btn">
                                          <input type="checkbox" class="checkbox-remember-me" unchecked> <h3>Запам'ятати мене</h3>
                                        </div>
                                      </div>
                                      <button class="close-btn"><i class="fas fa-times"></i></button>
                                  </div>
                                </div> `
                                

const modalBt = document.querySelector(".log-in-bt");

modalBt.addEventListener('click', function(){
  modalOverlay.classList.toggle("open-modal");
  console.log(123);
  });
  
  closeBtn.addEventListener("click", function () {
      modalOverlay.classList.remove("open-modal");
  });

  function myFunction() {
    let x = document.getElementById("myInputPasswor");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const btns = document.querySelectorAll(".show-password-bt");
  btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
      const showPassword = e.currentTarget;
      showPassword.classList.toggle("show-password");
    })
  })
  
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        formName: formName.value,
        formSurname: formSurname.value,
        formPhone: formPhone.value,
        formEmail: formEmail.value,
        formPassword: formPassword.value,
        formRepeatPassword: formRepeatPassword.value
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
}


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
  