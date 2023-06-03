let inputName = document.querySelector('.input-name-new-item');
let inputMaterial = document.getElementById("ddlViewBy");
let inputSize = document.getElementById("ddlViewB");
let inputColor = document.getElementById("ddlViewColor");
let inputPrice = document.querySelector('.price-new-item');
let inputPriceDiscount = document.querySelector('.price-new-item-discount');
let inputURL = document.querySelector('.url-input-new')
let personalCabineteAfterRegestration = document.querySelector('.personal-cabinete-after-registration');
let personalCabineteAfterRegestrationPhoneSize = document.querySelector('.personal-cabinete-after-registration-phone-size');
const modalBtn = document.querySelector(".log-in-btn");
const modalBtnPhoneSize = document.querySelector(".log-in-btn-phone-size");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector('.form-kek')
let aboutUsBtn = document.querySelector('.nav-button-about-us');
let indexBtn = document.querySelector('.nav-button-index');
let deliveryBtn = document.querySelector('.nav-button-delivery');
let formInputsAdd = document.querySelectorAll(".js-input");
let warningImg = document.querySelector(".warning-img");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");




deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");



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

let main = document.querySelector('.kek');

var x = localStorage.getItem("numberLS");

main.innerHTML = x;
let arr = Array.from(x)
arr.forEach((e)=>{
    console.log(e);
})

let counterBagadge = document.querySelector('.counter');
count = localStorage.getItem("numberLS");

  if(count<1 || count === 0){
    counterBagadge.classList.remove('counter-show')
  }
  else{
    counterBagadge.classList.add('counter-show')
  }
  if (count !== ''){
    let numberArray1 = [];
    numberArray1 = count.split(',');
    numberArray1.shift();
    counterBagadge.innerHTML = numberArray1.length;
}

function cliclAddToBagBtn(id){ 
 counterBagadge.classList.add('counter-show')
let arrayBagage = [localStorage.getItem("numberLS")];
let count;
let numberArray = [];
  count = localStorage.getItem("numberLS");
  numberArray = count.split(',');
  counterBagadge.value = numberArray.length;
  console.log(counterBagadge.value);
  counterBagadge.innerHTML = counterBagadge.value++;
  arrayBagage.push(id)
  localStorage.setItem("numberLS", arrayBagage);
}