let form = document.querySelector(".js-form");
let formInputs = document.querySelectorAll(".js-input");
let formPassword = document.querySelector(".input-password-registration-page");
let oldPassword = document.querySelector(".input-old-password-registration-page");
let formRepeatPassword = document.querySelector(".input-repeat-password-registration-page");
let formPasswordContainer = document.querySelector(".input-password-registration-page");
let formRepeatPasswordContainer = document.querySelector(".input-repeat-password-registration-page");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const modalBtn = document.querySelector(".log-in-btn");
const modalBtnPhoneSize = document.querySelector(".log-in-btn-phone-size");
const modalOverlay = document.querySelector(".modal-overlay-exit");
const closeBtn = document.querySelector(".disagree-for-exit-btn");
const inputLogin = document.querySelector(".login");
const inputPassword = document.querySelector(".password");
let aboutUsBtn = document.querySelector('.nav-button-about-us');
let indexBtn = document.querySelector('.nav-button-index');
let deliveryBtn = document.querySelector('.nav-button-delivery');
let personalCabineteAfterRegestration = document.querySelector('.personal-cabinete-after-registration');
let personalCabineteAfterRegestrationPhoneSize = document.querySelector('.personal-cabinete-after-registration-phone-size');
let profileBtn = document.querySelector('.profile-personal-cabinete');
let personalInfo = document.querySelector('.profile-personal-cabinete-container');
let personalInfoPhoneGmail = document.querySelector('.profile-personal-cabinete-phone-gmail');
let changePasswordBtn = document.querySelector('.change-password-personal-cabinete');
let profileMainRegestration = document.querySelector('.main-regestration');
let logOutBtn = document.querySelector('.button-log-out-btn-profile-page');  

deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");
personalCabineteAfterRegestration.classList.add("nav-button-personal-cabinete-click");
profileBtn.classList.remove("profile-btn-click");
changePasswordBtn.classList.add("profile-btn-click");
                                                  
                                            
let value_or_null = (document.cookie.match(/^(?:.*;)?\s*Authorization\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
if(value_or_null === null){
  console.log('clear');
}else{
  console.log('user');
  personalCabineteAfterRegestration.classList.add("personal-cabinete-after-registration-show");
  modalBtn.classList.add("log-in-btn-unshow");
  personalCabineteAfterRegestrationPhoneSize.classList.add("personal-cabinete-after-registration-phone-size-show")
  modalBtnPhoneSize.classList.add("log-in-btn-unshow");
  
}


navToggle.addEventListener('click', function(){
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    } else {
        links.classList.add("show-links");
    }
});



form.onsubmit = function(e){
  e.preventDefault();
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
  let passwordVal = formPassword.value;
  let passwordRepeatVal = formRepeatPassword.value;
  let oldPasswordValue = oldPassword.value;

  formInputs.forEach(function(input){
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

  if(passwordVal !== passwordRepeatVal){
    formPasswordContainer.classList.add('error');
    formRepeatPasswordContainer.classList.add('error')
    return false;
  }
  else{
    formPasswordContainer.classList.remove('error');
    formRepeatPasswordContainer.classList.remove('error')
  }
  
  
                                


fetch(`${serverMachineUrl}/api/user/update-password`, {
  method: 'PUT',
  mode: "cors",
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
    'Authorization':  document.cookie.valueOf('Authorization').substring(14)
  },
  body: JSON.stringify({
    "newPassword": passwordVal,
    "oldPassword": oldPasswordValue
  }),
})
.then(function(response){
    console.log(response); 
    if(response.ok === true){
        let acceptRegestration = document.querySelector('.main-settings-contrainer-first');
        acceptRegestration.innerHTML = `<div class ="main-regestration-container-after-change">
                                          <div class ="header-after-registration">
                                            <div class ="success-regestration-header">
                                              <i class="far fa-check-circle"></i>
                                              <h2>Успіх</h2>
                                            </div>
                                            <div class = "success-registration-main">
                                              <h2>Зміни збереженні</h2>
                                            </div>
                                            <div class = "succes-registration-footer">
                                              <a class ="back-to-shop-after-regestration" href="index.html"><i class="fas fa-chevron-left"></i> До каталогу </a>
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
    }
    else{
    showWrongPassword.classList.add('show-wrong-password-or-email-container');
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

logOutBtn.addEventListener('click', function(){
  modalOverlay.classList.toggle("open-modal");
});
    
modalBtnPhoneSize.addEventListener('click', function(){
  modalOverlay.classList.toggle("open-modal");
});
    
closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});

let agreeForExitBtn = document.querySelector('.agree-for-exit-btn');

agreeForExitBtn.addEventListener('click', function(){
  document.cookie = `Authorization=`
  location.href="http://127.0.0.1:5500/index.html";
});

