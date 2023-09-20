
let form = document.querySelector(".js-form-personal-cabinete");
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
let modalBtnDeleteUser = document.querySelector('.delete-user-btn');
const modalBtnPhoneSize = document.querySelector(".log-in-btn-phone-size");
const modalOverlay = document.querySelector(".modal-overlay-exit");
let modalDeleteUser = document.querySelector('.modal-overlay-delete')
const closeBtn = document.querySelector(".disagree-for-exit-btn");
let closeBtnDeleteUser = document.querySelector(".disagree-for-delete-btn");
const inputLogin = document.querySelector(".login");
const inputPassword = document.querySelector(".password");
let aboutUsBtn = document.querySelector('.nav-button-about-us');
let indexBtn = document.querySelector('.nav-button-index');
let deliveryBtn = document.querySelector('.nav-button-delivery');
let personalCabineteAfterRegestration = document.querySelector('.personal-cabinete-after-registration');
let personalCabineteAfterRegestrationPhoneSize = document.querySelector('.personal-cabinete-after-registration-phone-size');
let profileBtn = document.querySelector('.profile-personal-cabinete');
let orderUserBtn = document.querySelector('.my-order-personal-cabinete');
let personalInfo = document.querySelector('.profile-personal-cabinete-container');
let personalInfoPhoneGmail = document.querySelector('.profile-personal-cabinete-phone-gmail');
let changePasswordBtn = document.querySelector('.change-password-personal-cabinete');
let profileMainRegestration = document.querySelector('.main-regestration-profile');
let logOutBtn = document.querySelector('.button-log-out-btn-profile-page');
let deleteAcountBtn = document.querySelector('.agree-for-delete-btn');
let addNewPost = document.querySelector('.glek');
let administrationPersonalCabinete = document.querySelector('.administration-personal-cabinete')
let administrationAllOrders = document.querySelector('.all-administration-order-personal-cabinete')   

deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");
                                                  ;
fetch(`${serverMachineUrl}/api/user`, {
  
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
    'Authorization':  authorizationCookieValue
  },
})

.then((response) => response.json())
.then((json) =>{
  if(json.role === 'ADMIN'){
    administrationAllOrders.classList.add('all-administration-order-personal-cabinete-show')
  }
  else{
    administrationPersonalCabinete.classList.remove('administration-personal-cabinete-show')
    administrationAllOrders.classList.remove('all-administration-order-personal-cabinete-show')
  }
  if(json.role === 'MAIN_ADMIN'){
    administrationAllOrders.classList.add('all-administration-order-personal-cabinete-show')
    administrationPersonalCabinete.classList.add('administration-personal-cabinete-show')
  }
  formPhone.value = json.phoneNumber; formEmail.value = json.email; formName.value = json.name; formSurname.value = json.secondName
});
 
if(authorizationCookieValue === ''){
  location.href="index.html";
}

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
  var inputElement = document.querySelector('.input-phone-number');
  let wrongNumberPhone = document.querySelector('.wrong-phone-container');
  let wrongPhoneOrGmail = document.querySelector('.wrong-phone-or-gmail-container')
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
  
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

fetch(`${serverMachineUrl}/api/user`, {
  method: 'PUT',
  mode: "cors",
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
    'Authorization':  authorizationCookieValue
  },
  body: JSON.stringify({
  name: formName.value,
  secondName: formSurname.value,
  phoneNumber: formPhone.value,
  email: formEmail.value, 
  }),
})
.then(function(response){ 
    if(response.ok === false){
      wrongPhoneOrGmail.classList.add('show-wrong-phone-or-gmail-container')
      return false
    }
    else{
      let alertSecces = document.querySelector('.alert');
      alertSecces.classList.add("alert-show")
      setTimeout(() => {
      alertSecces.classList.remove("alert-show")
      location.reload();
    }, 1500);
    }
  })
}

deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");
personalCabineteAfterRegestration.classList.add("nav-button-personal-cabinete-click");
profileBtn.classList.add("profile-btn-click");
changePasswordBtn.classList.remove("profile-btn-click");
orderUserBtn.classList.remove("profile-btn-click")    
                                                                                                                   
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
  location.href="index.html";
});

modalBtnDeleteUser.addEventListener('click', function(){
  modalDeleteUser.classList.toggle("open-modal");
});
    
modalBtnPhoneSize.addEventListener('click', function(){
  modalDeleteUser.classList.toggle("open-modal");
});
    
closeBtnDeleteUser.addEventListener("click", function () {
  modalDeleteUser.classList.remove("open-modal");
});

deleteAcountBtn.addEventListener('click', function(){
  fetch(`${serverMachineUrl}/api/user`, {
  method: 'DELETE',
  mode: "cors",
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
    'Authorization':  authorizationCookieValue
  },
  body: JSON.stringify({
  }),
})
document.cookie = `Authorization=`
location.href="index.html";
})

