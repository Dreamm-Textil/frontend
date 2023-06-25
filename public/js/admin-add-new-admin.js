let form = document.querySelector(".js-form");
let formInputs = document.querySelectorAll(".js-input");
let formName = document.querySelector(".input-name");
let formSurname = document.querySelector(".input-surname");
let formPhone = document.querySelector(".input-phone-number");
let formEmail = document.querySelector(".input-gmail-addres");
let formPassword = document.querySelector(".input-password-registration-page");
let formRepeatPassword = document.querySelector(".input-repeat-password-registration-page");
let formPasswordContainer = document.querySelector(".input-password-registration-page");
let formRepeatPasswordContainer = document.querySelector(".input-repeat-password-registration-page");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const modalBtn = document.querySelector(".log-in-btn");
const modalBtnPhoneSize = document.querySelector(".log-in-btn-phone-size");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const inputLogin = document.querySelector(".login");
const inputPassword = document.querySelector(".password");
let aboutUsBtn = document.querySelector('.nav-button-about-us');
let indexBtn = document.querySelector('.nav-button-index');
let deliveryBtn = document.querySelector('.nav-button-delivery');
let personalCabineteAfterRegestration = document.querySelector('.personal-cabinete-after-registration');
let personalCabineteAfterRegestrationPhoneSize = document.querySelector('.personal-cabinete-after-registration-phone-size');

deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");

let value_or_null = (document.cookie.match(/^(?:.*;)?\s*Authorization\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
if(value_or_null === null){
}else{
  personalCabineteAfterRegestration.classList.add("personal-cabinete-after-registration-show");
  modalBtn.classList.add("log-in-btn-unshow");
  personalCabineteAfterRegestrationPhoneSize.classList.add("personal-cabinete-after-registration-phone-size-show")
  modalBtnPhoneSize.classList.add("log-in-btn-unshow");
}


navToggle.addEventListener('click', function(){
  if(links.classList.contains('show-links')){
      links.classList.remove('show-links')
      navToggle.classList.remove('nav-toggle-show')
  } else {
      links.classList.add("show-links");
      navToggle.classList.add('nav-toggle-show')
  }
});

modalBtn.addEventListener('click', function(){
modalOverlay.classList.toggle("open-modal");
});

modalBtnPhoneSize.addEventListener('click', function(){
  modalOverlay.classList.toggle("open-modal");
  });

closeBtn.addEventListener("click", function () {
    modalOverlay.classList.remove("open-modal");
});

// ----------------------------------------------------------Buttons SHOW PASSWORD-----------------------------------------//

function myFunction() {
  let x = document.getElementById("myInputPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const btns = document.querySelectorAll(".show-password-btn-modal");
btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const showPassword = e.currentTarget;
    showPassword.classList.toggle("show-password");
  })
})

// ------------------------------------------------------------------------------------------------------------------------------------//

deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");


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
  return re.test(String(phone)) || phone.startsWith("+");
}




form.onsubmit = function(e){
  e.preventDefault();
  let emailVal = formEmail.value;
  let phoneVal = formPhone.value;
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
  let passwordVal = formPassword.value;
  let passwordRepeatVal = formRepeatPassword.value;
  let wrongNumberPhone = document.querySelector('.wrong-phone-container')
  let wrongGmail = document.querySelector('.wrong-gmail-container')
  let wrongPhoneOrGmail = document.querySelector('.wrong-phone-or-gmail-container')
  var inputElement = document.querySelector('.input-phone-number');
  
  formInputs.forEach(function(input){
    input.addEventListener('focus', function() {
      input.classList.remove('error');
      wrongPhoneOrGmail.classList.remove('show-wrong-phone-or-gmail-container')
      wrongGmail.classList.remove('show-wrong-gmail-container')
    });
  });

  formInputs.forEach(function(input){
    if(input.value === ''){
      input.classList.add('error');
    }
    else{
      input.classList.remove('error');
    }
  });

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

  
  inputElement.addEventListener('focus', function() {
    var wrongPhoneContainer = document.querySelector('.show-wrong-phone-container');
    wrongPhoneContainer.classList.remove('show-wrong-phone-container')
    formPhone.classList.remove('error');
    
  });
  if (!validatePhone(phoneVal)) {
    
    formPhone.classList.add('error');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    wrongNumberPhone.classList.add('show-wrong-phone-container')
    return false;
  } else {
    formPhone.classList.remove('error');
  }

  if ((formPhone.value.length === 13 || formPhone.value.length === 10)) {
    formPhone.classList.remove('error');
  } else {
    
    formPhone.classList.add('error');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    wrongNumberPhone.classList.add('show-wrong-phone-container')
    return false;
  }

  if(!validateEmail(emailVal)){
    formEmail.classList.add('error');
    wrongGmail.classList.add('show-wrong-gmail-container')
    return false;
  }
  else{
    formEmail.classList.remove('error');
    wrongGmail.classList.remove('show-wrong-gmail-container')
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
  

fetch(`${serverMachineUrl}/api/auth/registration`, {
  method: 'POST',
  mode: "cors",
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  name: formName.value,
  secondName: formSurname.value,
  phoneNumber: formPhone.value,
  email: formEmail.value, 
  password: formPassword.value
  }),
})
  .then(function(response){ 
    if(response.ok === false){
      wrongPhoneOrGmail.classList.add('show-wrong-phone-or-gmail-container')
      return false
    }
    else{
    console.log('ready');
    let acceptRegestration = document.querySelector('.main-regestration-contrainer-first');
  acceptRegestration.innerHTML = `<div class ="main-regestration-container-after-registration">
                                    <div class ="header-after-registration">
                                      <div class ="success-regestration-header">
                                        <i class="far fa-check-circle"></i>
                                        <h2>Успіх</h2>
                                      </div>
                                      <div class = "success-registration-main">
                                        <h2>Адміністратор успішно доданний</h2>
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
                                  });
                                  
                                  closeBtn.addEventListener("click", function () {
                                  modalOverlay.classList.remove("open-modal");
  });
    }
  
  })
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




