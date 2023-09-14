let inputName = document.querySelector(".input-name-new-item");
let inputMaterial = document.getElementById("ddlViewBy");
let inputSize = document.getElementById("ddlViewB");
let inputColor = document.getElementById("ddlViewColor");
let inputPrice = document.querySelector(".price-new-item");
let inputPriceDiscount = document.querySelector(".price-new-item-discount");
let inputURL = document.querySelector(".url-input-new");
let personalCabineteAfterRegestration = document.querySelector(".personal-cabinete-after-registration");
let personalCabineteAfterRegestrationPhoneSize = document.querySelector(".personal-cabinete-after-registration-phone-size");
const modalBtn = document.querySelector(".log-in-btn");
const modalBtnPhoneSize = document.querySelector(".log-in-btn-phone-size");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector(".form-kek");
let aboutUsBtn = document.querySelector(".nav-button-about-us");
let indexBtn = document.querySelector(".nav-button-index");
let deliveryBtn = document.querySelector(".nav-button-delivery");
let formInputsAdd = document.querySelectorAll(".js-input");
let warningImg = document.querySelector(".warning-img");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
let likesBtn = document.querySelector('.likes')

deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");
likesBtn.classList.add('nav-button-about-us-click')

navToggle.addEventListener('click', function(){
  if(links.classList.contains('show-links')){
      links.classList.remove('show-links')
      navToggle.classList.remove('nav-toggle-show')
  } else {
      links.classList.add("show-links");
      navToggle.classList.add('nav-toggle-show')
  }
});

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.toggle("open-modal");
});

modalBtnPhoneSize.addEventListener("click", function () {
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
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const showPassword = e.currentTarget;
    showPassword.classList.toggle("show-password");
  });
});

let value_or_null = (document.cookie.match(
  /^(?:.*;)?\s*Authorization\s*=\s*([^;]+)(?:.*)?$/
) || [, null])[1];
if (value_or_null === null) {
} else {
  personalCabineteAfterRegestration.classList.add(
    "personal-cabinete-after-registration-show"
  );
  modalBtn.classList.add("log-in-btn-unshow");
  personalCabineteAfterRegestrationPhoneSize.classList.add(
    "personal-cabinete-after-registration-phone-size-show"
  );
  modalBtnPhoneSize.classList.add("log-in-btn-unshow");
}

let list_element = document.querySelector('.cart__products-product');
let main = document.querySelector(".kek");
let cartProductsPage = document.querySelector(".cart__products-product");
let arrayBagageLike = document.cookie.includes("likes")
    ? document.cookie.split("likes=")[1].split(",")
    : [];
    arrayBagageLike.pop();
    if (arrayBagageLike.length <= 0) {
        list_element.classList.add("cart__products-product-unshow");
        list_element.innerHTML = `<h2 class="title-cart-clear">Ви не вподобали жодного товару</h2>
        <a type="button" href="index.html" class="back-from-cart-to-catalog">Повернутися до покупок</a>`;
      }
    let result = arrayBagageLike.join(",");
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
      materialMap.set("TURKISH_RANFORS", "Турецький Ранфорс");
    
        fetch(`${serverMachineUrl}/api/textile/all-by-ids?ids=${result}`, {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin':'*',
              'Content-Type': 'application/json',
            },
          })
          .then((response) => response.json())
          .then((json) => {
            json.forEach((textile)=>{
            list_element.innerHTML += `<div class="product-container">
                                    <div class="card product">
                                    <img class="card-img-top" src="${textile.imgUrl}" alt="klitka-white">
                                    <button class="btn-delete-item" onclick="cliclDeleteLikeBtn(${textile.id})"><img src="images/bin.png"></button>
                                      <div class="card-body">
                                        <div class="card-title-size-container">
                                          <h2 сlass="promotion-card" style="color: black;">Знижка -50%</h2>
                                        </div>
                                        <!-- <div class="card-title-container"> -->
                                          <h4 class="card-title">${textile.name}</h4>
                                        <!-- </div> -->
                                        <div class="cart-size-container">
                                          <div class="card-size-title">
                                            <h2>Розмір:</h2>
                                          </div>
                                          <div class="card-size">
                                            <h2>${sizeMap.get(textile.size)}</h2>
                                          </div>
                                        </div>
                                        <div class="cart-size-container">
                                          <div class="card-size-title">
                                            <h2>Матеріал:</h2>
                                          </div>
                                          <div class="card-size">
                                            <h2>${materialMap.get(textile.material)}</h2>
                                          </div>
                                        </div>
                                        <div class="price-block new-price"> <span class="new-price">${textile.discountPrice} грн</span> <span class="price">${textile.price} грн</span></div>
                                        <div class="card-btns-container">
                                          <button class="to-bag" id="product-${textile.id}-button" onclick="cliclAddToBagBtn(${textile.id})">В кошик</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  </div>`;
      
    })
})
    function cliclDeleteLikeBtn(id) {
        let arrayBagageLike = document.cookie.includes("likes")
          ? document.cookie.split("likes=")[1].split(",")
          : [];
        if (arrayBagageLike.includes(id.toString())) {
          const index = arrayBagageLike.indexOf(id.toString());
          if (index > -1) {
            arrayBagageLike.splice(index, 1);
            document.cookie = `likes=${arrayBagageLike.join(',')}`;
          }
        }
      
        location.reload(); 
      }