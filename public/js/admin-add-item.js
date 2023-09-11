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
}else{
  personalCabineteAfterRegestration.classList.add("personal-cabinete-after-registration-show");
  modalBtn.classList.add("log-in-btn-unshow");
  personalCabineteAfterRegestrationPhoneSize.classList.add("personal-cabinete-after-registration-phone-size-show")
  modalBtnPhoneSize.classList.add("log-in-btn-unshow");
}

function mySubmitFunctionAdd(e) {
  e.preventDefault()

  let emptyInputs = Array.from(formInputsAdd).filter(input => input.value === '');
  formInputsAdd.forEach(function(input){
    if(input.value === ''){
      input.classList.add('error');
      warningImg.classList.add('warning-img-show')
    }
    else{
      input.classList.remove('error');
      warningImg.classList.remove('warning-img-show')
    }
  });

  if(emptyInputs.length !== 0){
    return false;
  }

    let flag;
    e.preventDefault();
    const name = document.getElementById("name");
    const files = document.getElementById("files");
   
    const formData = new FormData();
    formData.append("name", name.value);
  
    for(let i =0; i < files.files.length; i++) {
        formData.append("files", files.files[i]);
        flag = files.files[i].name;
    }

    if(typeof flag === 'undefined'){
      warningImg.classList.add('warning-img-show')
      return false
    }
    else{
      files.classList.remove('warning-img-show')
    }
    let AcceptedAddItem = document.querySelector('.main-add-item-container');
    AcceptedAddItem.innerHTML = `<div class ="main-regestration-container-after-registration">
                                  <div class ="header-after-registration">
                                    <div class ="success-regestration-header">
                                      <i class="far fa-check-circle"></i>
                                      <h2>Успіх</h2>
                                    </div>
                                    <div class = "success-registration-main">
                                      <h2>Вітаємо, Постільна білизна у каталозі</h2>
                                    </div>
                                    <div class = "succes-registration-footer">
                                      <a class ="back-to-shop-after-regestration" href="index.html"><i class="fas fa-chevron-left"></i> До каталогу </a>
                                      <a class="log-in-bt" href="admin-add-item.html">Додати постіль<i class="fas fa-chevron-right"></i></a>
                                  </div>
                                </div> `
    
    e.preventDefault();
    var value = inputMaterial.value;
    var text = inputMaterial.options[inputMaterial.selectedIndex].text;
    var valueSize = inputSize.value;
    var textSize = inputSize.options[inputSize.selectedIndex].text;
    var valueColor = inputColor.value;
    var textColor = inputColor.options[inputColor.selectedIndex].text

    e.preventDefault();
    fetch('http://127.0.0.1:5500/api', {
        method: 'POST',
        body: formData, 
    })
    .then(res => res.json())
    e.preventDefault();

    fetch(`${serverMachineUrl}/api/textile`, {
    method: 'POST',
    mode: "cors",
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization':  authorizationCookieValue
    },
    body: JSON.stringify({
    name: inputName.value, 
    size: valueSize,
    price: inputPrice.value,
    discountPrice: inputPriceDiscount.value,
    color: valueColor,
    material: value,
    imgUrl: "images/catalog/" + flag
    }),
    credentials: "same-origin"
  })
}
