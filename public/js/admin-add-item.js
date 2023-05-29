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

deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");

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
    
    e.preventDefault();
    var value = inputMaterial.value;
    var text = inputMaterial.options[inputMaterial.selectedIndex].text;
    var valueSize = inputSize.value;
    var textSize = inputSize.options[inputSize.selectedIndex].text;
    var valueColor = inputColor.value;
    var textColor = inputColor.options[inputColor.selectedIndex].text

    console.log(inputName.value);
    console.log(value, text);
    console.log(valueSize, textSize);
    console.log(inputPrice.value);
    console.log(inputPriceDiscount.value);
    console.log(valueColor, textColor);
    console.log(flag);
    
    
    e.preventDefault();
    fetch('http://127.0.0.1:5500/api', {
        method: 'POST',
        body: formData, 
    })
    .then(res => res.json())
    .then(data => console.log(data));
    e.preventDefault();
    console.log(name.value);
}