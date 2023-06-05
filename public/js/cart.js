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

let arr = [];
arr = x.split(',');

let cartProductsPage = document.querySelector('.cart__products-product');

arr.forEach((e)=>{
  fetch(`${serverMachineUrl}/api/textile?id=${e}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((json) => {console.log(json);
    cartProductsPage.innerHTML +=`<div class="products-container">
                                    <div class="img-cart">
                                      <img src="${json.imgUrl}">
                                    </div>
                                    <span class="cart-name">${json.name}</span>
                                    <table class="cart__config">
                                      <tbody><tr>
                                          <th class="size-cart">Розмір:</th>
                                          <td>${json.size}</td>
                                      </tr>
                                          <th class="color-cart">Колір:</th>
                                          <td>${json.color}</td>
                                      </tr>
                                      </tbody>
                                    </table>
                                    <span type="number" class="cart-price" value="1">${json.discountPrice}</span>
                                    <div class="cart__counter">
                                      <span>Кількість:</span>
                                      <input  name="quantity" value="1">
                                      <div class="arrow-container">
                                        <img type="button" src="images/increase.png" class="increase"></img>
                                        <img class="decrease" type="button" src="images/increase.png"></img>
                                      </div>
                                    </div>
                                    <span class="cart-price-all" value="0">${json.discountPrice}</span>
                                    <button class="cart-delete-btn"><img src="images/delete.png"></button>
                                  </div>`
  })
})

let increaseItems = document.querySelector('.increase');
let cartPriceValue = document.querySelector('.cart-price');

increaseItems.addEventListener("click", (e)=>{
console.log(cartPriceValue.value);
})



