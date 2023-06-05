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
let list_element = document.querySelector('.product-section');
let oneAndHalfSizeBtn = document.querySelector('.one-and-half-size-btn');
let doubleSizeBtn = document.querySelector('.double-size-btn');
let euroSizeBtn = document.querySelector('.euro-size-btn');
let familySizeBtn = document.querySelector('.size-btn-family');
let childrenSizeBtn = document.querySelector('.size-btn-children');
let complectation = document.querySelector('.text-complectation');
let adminPanel = document.querySelector('.admin-panel');
let adminOnPage = false;

// if(document.cookie.valueOf('Authorization').substring(14) !== ''){
  
fetch(`${serverMachineUrl}/api/user`, {
  
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
    'Authorization':  document.cookie.valueOf('Authorization').substring(14)
  },
})
.then((response) => response.json())
.then((json) =>{ 
  if (json.role === "ADMIN"){
    adminPanel.classList.add("admin-panel-show");
    adminOnPage = true;
  }
  else{
    adminOnPage = false;
  }
});
// }

setTimeout(function() { getSize('ONE_AND_HALF'); }, 500);
oneAndHalfSizeBtn.classList.add("one-and-half-size-btn-show")
deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.add("nav-button-index-click");
personalCabineteAfterRegestration.classList.remove("nav-button-personal-cabinete-click");


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

// ------------------------------------------------------------------------------------------------------------------------------------//




let allNewProductBtn = document.querySelector('.allnewprod-btn');
allNewProductBtn.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior:"smooth"
  })
})


oneAndHalfSizeBtn.addEventListener('click', function(){
  list_element.innerHTML = '';
  doubleSizeBtn.classList.remove("one-and-half-size-btn-show")
  oneAndHalfSizeBtn.classList.add("one-and-half-size-btn-show")
  euroSizeBtn.classList.remove("one-and-half-size-btn-show")
  familySizeBtn.classList.remove("one-and-half-size-btn-show")
  childrenSizeBtn.classList.remove("one-and-half-size-btn-show")
  
  getSize('ONE_AND_HALF');
  setTimeout(() => {
    updateButtonStatus();
  }, 800)
  complectation.innerHTML = '- простирадло: 150*215 см - 1 шт.<br> - підковдра: 150*215 см - 1 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.'
})


doubleSizeBtn.addEventListener('click', function(){
list_element.innerHTML = '';
doubleSizeBtn.classList.add("one-and-half-size-btn-show")
oneAndHalfSizeBtn.classList.remove("one-and-half-size-btn-show")
euroSizeBtn.classList.remove("one-and-half-size-btn-show")
familySizeBtn.classList.remove("one-and-half-size-btn-show")
childrenSizeBtn.classList.remove("one-and-half-size-btn-show")
getSize('DOUBLE');
setTimeout(() => {
  updateButtonStatus();
}, 800);

complectation.innerHTML = '- простирадло: 200*215 см - 1 шт.<br> - підковдра: 180*215 см - 1 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.'
})


euroSizeBtn.addEventListener('click', function(){
list_element.innerHTML = '';
doubleSizeBtn.classList.remove("one-and-half-size-btn-show")
oneAndHalfSizeBtn.classList.remove("one-and-half-size-btn-show")
euroSizeBtn.classList.add("one-and-half-size-btn-show")
familySizeBtn.classList.remove("one-and-half-size-btn-show")
childrenSizeBtn.classList.remove("one-and-half-size-btn-show")
getSize('EURO');
setTimeout(() => {
  updateButtonStatus();
}, 800)
complectation.innerHTML = '- простирадло: 240*215 см - 1 шт.<br> - підковдра: 200*215 см - 1 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.'
})


familySizeBtn.addEventListener('click', function(){
list_element.innerHTML = '';
doubleSizeBtn.classList.remove("one-and-half-size-btn-show")
oneAndHalfSizeBtn.classList.remove("one-and-half-size-btn-show")
euroSizeBtn.classList.remove("one-and-half-size-btn-show")
familySizeBtn.classList.add("one-and-half-size-btn-show")
childrenSizeBtn.classList.remove("one-and-half-size-btn-show")
getSize('FAMILY');
setTimeout(() => {
  updateButtonStatus();
}, 800)
complectation.innerHTML = '- простирадло: 240*215 см - 1 шт.<br> - підковдра: 150*215 см - 2 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.'
})


childrenSizeBtn.addEventListener('click', function(){
list_element.innerHTML = '';
doubleSizeBtn.classList.remove("one-and-half-size-btn-show")
oneAndHalfSizeBtn.classList.remove("one-and-half-size-btn-show")
euroSizeBtn.classList.remove("one-and-half-size-btn-show")
familySizeBtn.classList.remove("one-and-half-size-btn-show")
childrenSizeBtn.classList.add("one-and-half-size-btn-show")
getSize('CHILDREN');
setTimeout(() => {
  updateButtonStatus();
}, 800)
complectation.innerHTML = '- простирадло: 150*215 см - 1 шт.<br> - підковдра: 150*215 см - 2 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 1 шт.'
})



function getSize(s){
  
    const sizeMap = new Map()
      sizeMap.set("ONE_AND_HALF", "Півтораспальний")
      sizeMap.set("DOUBLE", "Двохспальний")
      sizeMap.set("EURO", "Євро")
      sizeMap.set("FAMILY", "Сімейний")

    const materialMap = new Map()
      materialMap.set("RANFORS", "Ранфорс")
      materialMap.set("SATIN", "Сатин")
      materialMap.set("STRAP_SATIN", "Страйп сатин")
      materialMap.set("POPLIN", "Поплин")
      materialMap.set("BIAZ", "Бязь")
    
  
      fetch(`${serverMachineUrl}/api/textile/all?size=${s}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      },
      
    })

    .then((response) => response.json())
    .then((json) => {
      json.forEach(user=> {
        if(adminOnPage){
          
          list_element.innerHTML += `<div class="product-container">
          <div class="card product">
            <img class="card-img-top" src="${user.imgUrl}" alt="klitka-white">
            <button class="btn-delete-item" onclick="cliclDeleteBtn(${user.id})"><img src="images/bin.png"></button>
            <div class="card-body">
              <div class="card-title-size-container">
                <h2 сlass="promotion-card" style="color: black;">Знижка -50%</h2>
                <button class="like"><i class="far fa-heart change-heart"></i></button>
              </div>
              <!-- <div class="card-title-container"> -->
                <h4 class="card-title">${user.name}</h4>
              <!-- </div> -->
              <div class="cart-size-container">
                <div class="card-size-title">
                  <h2>Розмір:</h2>
                </div>
                <div class="card-size">
                  <h2>${sizeMap.get(user.size)}</h2>
                </div>
              </div>
              <div class="cart-size-container">
                <div class="card-size-title">
                  <h2>Матеріал:</h2>
                </div>
                <div class="card-size">
                  <h2>${materialMap.get(user.material)}</h2>
                </div>
              </div>
              <div class="price-block new-price"> <span class="new-price">${user.discountPrice} грн</span> <span class="price">${user.price} грн</span></div>
              <div class="card-btns-container">
                <button class="to-bag" id="product-${user.id}-button" onclick="cliclAddToBagBtn(${user.id})">В кошик</button>
              </div>
            </div>
          </div>
        </div>
        </div>`;
        }
        else{
          list_element.innerHTML += `<div class="product-container">
                                    <div class="card product">
                                      <img class="card-img-top" src="${user.imgUrl}" alt="klitka-white">
                                      <div class="card-body">
                                        <div class="card-title-size-container">
                                          <h2 сlass="promotion-card" style="color: black;">Знижка -50%</h2>
                                          <button class="like"><i class="far fa-heart change-heart"></i></button>
                                        </div>
                                        <!-- <div class="card-title-container"> -->
                                          <h4 class="card-title">${user.name}</h4>
                                        <!-- </div> -->
                                        <div class="cart-size-container">
                                          <div class="card-size-title">
                                            <h2>Розмір:</h2>
                                          </div>
                                          <div class="card-size">
                                            <h2>${sizeMap.get(user.size)}</h2>
                                          </div>
                                        </div>
                                        <div class="cart-size-container">
                                          <div class="card-size-title">
                                            <h2>Матеріал:</h2>
                                          </div>
                                          <div class="card-size">
                                            <h2>${materialMap.get(user.material)}</h2>
                                          </div>
                                        </div>
                                        <div class="price-block new-price"> <span class="new-price">${user.discountPrice} грн</span> <span class="price">${user.price} грн</span></div>
                                        <div class="card-btns-container">
                                          <button class="to-bag" id="product-${user.id}-button" onclick="cliclAddToBagBtn(${user.id})">В кошик</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  </div>`;
        }
      })
    }); 
}

function cliclDeleteBtn(id){
  let alertSecces = document.querySelector('.alert');
  alertSecces.classList.add("alert-show")
  setTimeout(() => {
    alertSecces.classList.remove("alert-show")
    location.reload();
  }, 1500);
  
  fetch(`${serverMachineUrl}/api/textile?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization':  document.cookie.valueOf('Authorization').substring(14)
    }
  })
  .then(res => res.json())
  .then(data => console.log(data));
}
