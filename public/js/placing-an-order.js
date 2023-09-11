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
let formNameOrder = document.querySelector('.name-order');
let formSecondNameOrder = document.querySelector('.surname-order');
let formPhoneOrder = document.querySelector('.phone-order');
let formGmailOrder = document.querySelector('.gmail-order');
let checkOrder = localStorage.getItem("numberLS");

if (checkOrder === ''){
  location.href = 'index.html'
}

if(authorizationCookieValue !== ''){
  fetch(`${serverMachineUrl}/api/user`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization':  authorizationCookieValue
    },
  })
  .then((response) => response.json())
  .then((json) =>{ formNameOrder.value = json.name; formSecondNameOrder.value = json.secondName; formPhoneOrder.value = json.phoneNumber;
    formGmailOrder.value = json.email;
  });
}

let value_or_null = (document.cookie.match(/^(?:.*;)?\s*Authorization\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
if(value_or_null === null){
}else{
  personalCabineteAfterRegestration.classList.add("personal-cabinete-after-registration-show");
  modalBtn.classList.add("log-in-btn-unshow");
  personalCabineteAfterRegestrationPhoneSize.classList.add("personal-cabinete-after-registration-phone-size-show")
  modalBtnPhoneSize.classList.add("log-in-btn-unshow");
}

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

function fetchRegions() {
  fetch('https://api.novaposhta.ua/v2.0/json/Address/getCities', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      apiKey: '126cfe52738506aa3e902a49489306dc', 
      modelName: 'Address',
      calledMethod: 'getCities',
      methodProperties: {
    
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const regions = data.data.map((region) => region.Description);
      initializeOptions(regions, 'regions');
    })
    .catch((error) => {
    });
}

function fetchPostOffices(city) {
  fetch('https://api.novaposhta.ua/v2.0/json/Address/getWarehouses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      apiKey: '126cfe52738506aa3e902a49489306dc', 
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: city,
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const postOffices = data.data.map((office) => office.Description);
      initializeOptions(postOffices, 'postOffices');
    })
    .catch((error) => {
    });
}

function initializeOptions(options, containerId) {
  const optionsContainer = document.getElementById(`${containerId}Options`);
  optionsContainer.innerHTML = '';

  const inputElement = document.getElementById(`${containerId}Input`);
  if (inputElement) {
    inputElement.value = '';
  }
  if(containerId === 'regions'){
    options.unshift('Виберіть місто');
  }else{
    options.unshift('Виберіть відділення');
  }
  
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement('div');
    option.classList.add('option');
    option.textContent = options[i];
    option.addEventListener('click', function () {
      selectOption(options[i], containerId);
    });
    optionsContainer.appendChild(option);
  }
}

let selectInputShow = document.querySelector('.select-input');
function toggleOptionsVisibility(event, containerId) {
  const optionsContainer = document.getElementById(`${containerId}Options`);
  const inputElement = document.getElementById(`${containerId}Input`);
  let wrapperShow = document.querySelector('.select-wrapper-container');
  let wrapperShowHouse = document.querySelector('.select-wrapper-container-house')
  let arrowDownClick = document.querySelector('.arrow-down')
  let selectInputHouseShow = document.querySelector('.select-input-house');
  let arrowDownClickHouse = document.querySelector('.arrow-down-house');
  let wrapperContainerFirstShow = document.querySelector('.regions-container-first');
  let wrapperContainerHouseFirstShow = document.querySelector('.regions-container-house-first');

  if (optionsContainer && inputElement) {
    if (optionsContainer.style.display === 'none') {
      optionsContainer.style.display = 'block';
      inputElement.style.display = 'block';
      wrapperShowHouse.classList.add('select-wrapper-container-house-show')
      wrapperShow.classList.add('select-wrapper-container-show')
      selectInputShow.classList.add('select-input-show')
      arrowDownClick.classList.add('arrow-down-click')
      selectInputHouseShow.classList.add('select-input-house-show')
      arrowDownClickHouse.classList.add('arrow-down-house-click')
      wrapperContainerFirstShow.classList.add('regions-container-first-show')
      wrapperContainerHouseFirstShow.classList.add('regions-container-house-first-show')

      optionsContainer.style.maxHeight = '175px';
      optionsContainer.style.overflowY = 'auto';
    } else {
      optionsContainer.style.display = 'none';
      inputElement.style.display = 'none';
      wrapperShowHouse.classList.remove('select-wrapper-container-house-show')
      arrowDownClick.classList.remove('arrow-down-click')
      selectInputShow.classList.remove('select-input-show')
      wrapperShow.classList.remove('select-wrapper-container-show')
      selectInputHouseShow.classList.remove('select-input-house-show')
      arrowDownClickHouse.classList.remove('arrow-down-house-click')
      wrapperContainerFirstShow.classList.remove('regions-container-first-show')
      wrapperContainerHouseFirstShow.classList.remove('regions-container-house-first-show')
    }
    if (containerId !== 'regions') {
      const regionsOptionsContainer = document.getElementById('regionsOptions');
      regionsOptionsContainer.style.display = 'none';
      const regionInput = document.getElementById('regionsInput');
      regionInput.style.display = 'none';
      wrapperShow.classList.remove('select-wrapper-container-show')
      selectInputShow.classList.remove('select-input-show')
      arrowDownClick.classList.remove('arrow-down-click')
      wrapperContainerFirstShow.classList.remove('regions-container-first-show')
      
    }
    if (containerId !== 'postOffices') {
      const postOfficesOptionsContainer = document.getElementById('postOfficesOptions');
      postOfficesOptionsContainer.style.display = 'none';
      const postOfficeInput = document.getElementById('postOfficesInput');
      postOfficeInput.style.display = 'none';
      wrapperShowHouse.classList.remove('select-wrapper-container-house-show')
      selectInputHouseShow.classList.remove('select-input-house-show')
      arrowDownClickHouse.classList.remove('arrow-down-house-click')
      wrapperContainerHouseFirstShow.classList.remove('regions-container-house-first-show')
    }
  }
  event.stopPropagation();
}
const selectedOption = document.getElementById('selectedRegion');
const selectedPostOffice = document.getElementById('selectedPostOffice');
function selectOption(option, containerId) {
  if (containerId === 'regions') {
    selectedOption.textContent = option;
    const selectedPostOffice = document.getElementById('selectedPostOffice');
    selectedPostOffice.textContent = 'Виберіть відділення';
    const postOfficesOptionsContainer = document.getElementById('postOfficesOptions');
    postOfficesOptionsContainer.innerHTML = '';
    fetchPostOffices(option);
  } else if (containerId === 'postOffices') {
    selectedPostOffice.textContent = option;
    fetchPostOffices(option); 
  }
  const optionsContainer = document.getElementById(`${containerId}Options`);
  optionsContainer.style.display = 'none';
}

function filterOptions(containerId) {
  const inputElement = document.getElementById(`${containerId}Input`);
  const filterValue = inputElement.value.toUpperCase();
  const optionsContainer = document.getElementById(`${containerId}Options`);
  const options = Array.from(optionsContainer.getElementsByClassName('option'));
if(containerId === 'regions'){
  options.forEach((option) => {
    const optionText = option.textContent.toUpperCase();
    if (optionText.startsWith(filterValue)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
  }
  else{
    options.forEach((option) => {
      const optionText = option.textContent.toUpperCase();
      if (optionText.includes(filterValue)) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });
  }
}

function toggleInputVisibility(event, containerId) {
  const inputElement = document.getElementById(`${containerId}Input`);
  inputElement.style.display = 'block';
  event.stopPropagation();
}

document.addEventListener('click', function () {
  const regionsOptionsContainer = document.getElementById('regionsOptions');
  regionsOptionsContainer.style.display = 'none';
  let wrapperShow = document.querySelector('.select-wrapper-container');
  let selectInputShow = document.querySelector('.select-input');
  let arrowDownClick = document.querySelector('.arrow-down')
  let wrapperShowHouse = document.querySelector('.select-wrapper-container-house')
  let selectInputHouseShow = document.querySelector('.select-input-house');
  let arrowDownClickHouse = document.querySelector('.arrow-down-house');
  let wrapperContainerFirstShow = document.querySelector('.regions-container-first');
  let wrapperContainerHouseFirstShow = document.querySelector('.regions-container-house-first');

  wrapperContainerHouseFirstShow.classList.remove('regions-container-house-first-show')
  wrapperShow.classList.remove('select-wrapper-container-show')
  selectInputShow.classList.remove('select-input-show')
  arrowDownClick.classList.remove('arrow-down-click')
  wrapperShowHouse.classList.remove('select-wrapper-container-house-show')
  selectInputHouseShow.classList.remove('select-input-house-show')
  arrowDownClickHouse.classList.remove('arrow-down-house-click')
  wrapperContainerFirstShow.classList.remove('regions-container-first-show')
  const postOfficesOptionsContainer = document.getElementById('postOfficesOptions');
  postOfficesOptionsContainer.style.display = 'none';

  const regionInput = document.getElementById('regionsInput');
  regionInput.style.display = 'none';

  const postOfficeInput = document.getElementById('postOfficesInput');
  postOfficeInput.style.display = 'none';
});

fetchRegions();

let main = document.querySelector(".kek");
let cartProductsPage = document.querySelector(".cart__products-product");
var x = localStorage.getItem("numberLS");
let arr = [];

arr = x.split(",");
let displayedElements = [];
let quantityCount = {};
arr.forEach((e) => {
  if (quantityCount[e]) {
    quantityCount[e]++;
  } else {
    quantityCount[e] = 1;
  }
});

  const sizeMap = new Map();
  sizeMap.set("ONE_AND_HALF", "Півтораспальний");
  sizeMap.set("DOUBLE", "Двохспальний");
  sizeMap.set("EURO", "Євро");
  sizeMap.set("FAMILY", "Сімейний");

  const materialMap = new Map();
  materialMap.set("RANFORS", "Ранфорс");
  materialMap.set("SATIN", "Сатин");
  materialMap.set("STRAP_SATIN", "Страйп сатин");
  materialMap.set("POPLIN", "Поплин");
  materialMap.set("BIAZ", "Бязь");
  materialMap.set("TURKISH_RANFORS", "Турецький Ранфорс");

  const colorMap = new Map();
  colorMap.set("RED", "Червоний");
  colorMap.set("ORANGE", "Помаранчовий");
  colorMap.set("YELLOW", "Жовтий");
  colorMap.set("GREEN", "Зелений");
  colorMap.set("BLUE", "Блакитний");
  colorMap.set("INDIGO", "Індіго");
  colorMap.set("VIOLET", "Фіолетовий");
  colorMap.set("PINK", "Рожевий");
  colorMap.set("SILVER", "Сріблястий");
  colorMap.set("GOLD", "Золотий");
  colorMap.set("BEIGE", "Бежевий");
  colorMap.set("BROWN", "Коричневий");
  colorMap.set("GRAY", "Сірий");
  colorMap.set("BLACK", "Чорний");
  colorMap.set("WHITE", "Білий");
  var result = arr.join(",");

  fetch(`${serverMachineUrl}/api/textile/all-by-ids?ids=${result}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const storedQuantity = localStorage.getItem("numberLS");
      json.forEach((textile)=>{
      if (storedQuantity === "") {
        cartProductsPage.classList.add("cart__products-product-unshow");
        cartProductsPage.innerHTML = `<h2 class="title-cart-clear">В кошику не має товарів!</h2>
        <a type="button" href="index.html" class="back-from-cart-to-catalog">Повернутися до покупок</a>`;
      } else {
        cartProductsPage.classList.remove("cart__products-product-unshow");
        if (!displayedElements.includes(textile.id)) {
          const quantity = quantityCount[textile.id];
          const storedQuantity = localStorage.getItem("numberLS");
          const storedQuantityArray = storedQuantity
            ? storedQuantity.split(",")
            : [];
          const storedQuantityCount = storedQuantityArray.filter(
            (id) => id === textile.id
          ).length;
          formattedDiscountPrice = textile.discountPrice.toLocaleString("uk-UA");
          cartProductsPage.innerHTML += `<div class="products-container">
                                          <div class="img-cart">
                                          <img src="${textile.imgUrl}">
                                        </div>
                                        <span class="cart-name">${
                                          textile.name
                                        }</span>
                                        <table class="cart__config">
                                          <tbody><tr>
                                              <th class="size-cart">Розмір:</th>
                                              <td><p>${sizeMap.get(textile.size)}</p></td>
                                          </tr>
                                              <th class="color-cart">Колір:</th>
                                              <td><p>${colorMap.get(
                                                textile.color
                                              )}</p></td>
                                          </tr>
                                          </tr>
                                              <th class="material-cart">Матеріал:</th>
                                              <td><p>${materialMap.get(
                                                textile.material
                                              )}</p></td>
                                          </tr>
                                          </tbody>
                                        </table>
                                        <span type="number" class="cart-price" data-id="${
                                          textile.id
                                        }" value="1">${formattedDiscountPrice} грн</span>
                                        <div class="cart__counter">
                                          <span>Кількість:</span>
                                          <input type="text" readonly name="quantity" сlass="input-quantity" data-id="${
                                            textile.id
                                          }" value="${quantity}">
                                          <div class="arrow-container">
                                            <img type="button" src="images/increase.png" class="increase" data-id="${
                                              textile.id
                                            }"></img>
                                            <img class="decrease" type="button" src="images/increase.png" data-id="${
                                              textile.id
                                            }"></img>
                                          </div>
                                        </div>
                                        <span class="cart-price-all" data-id="${
                                          textile.id
                                        }" value="0" id="cart-price-all-${
                                          textile.id
          }" data-price="${textile.discountPrice * quantity}" style="
          display: none;
      "></span>
                                        <button data-id="${
                                          textile.id
                                        }" class="cart-delete-btn"><i class="fas fa-trash-alt" style="color: black; transition: all 0.2s linear; font-size: 18px;font-weight: 100;" 
                                        onmouseover="this.style.color='#EA4C89';" onmouseout="this.style.color='black';"></i></button>
                                      </div> `;
          let cartSummaryContainer = document.querySelector(
            ".cart-summary-container"
          );
          cartSummaryContainer.innerHTML = `<div class="cart-summary">
                                                                          <h2 class="cart-summaty-title">Підсумок замовлення:</h2>
                                                                          
                                                                        </div>`;
          let totalSum = 0;

          displayedElements.push(textile.id);
          let decreaseButtons = document.querySelectorAll(".decrease");
          let increaseButtons = document.querySelectorAll(".increase");
          let deleteBtn = document.querySelectorAll(".cart-delete-btn");
          let quantityInputs = document.querySelectorAll(
            'input[name="quantity"]'
          );
          const button = document.querySelector(`button[data-id="${textile.id}"]`);
          const parentElement = button.parentNode;
          const newPriceElement = document.createElement("span");
          const price = textile.discountPrice * quantity;
          const formattedPrice = formatPrice(price);
          newPriceElement.innerText = `${formattedPrice} грн`;
          parentElement.insertBefore(newPriceElement, button);

          let cartPriceElements = document.querySelectorAll(".cart-price");
          let cartPriceAllElements =
            document.querySelectorAll(".cart-price-all");
          cartPriceAllElements.forEach((element) => {
            const price = parseFloat(element.getAttribute("data-price"));
            let formattedPrice = formatPrice(price);
            totalSum += price;
          });

          function formatPrice(price) {
            return price.toLocaleString("uk-UA");
          }

          let formattedTotalSum = totalSum.toFixed(2);
          if (formattedTotalSum.endsWith(".00")) {
            formattedTotalSum = formattedTotalSum.replace(".00", "");
          }
          formattedTotalSum = totalSum.toLocaleString("uk-UA");
          const cartSummaryTitle = document.querySelector(
            ".cart-summaty-title"
          );
          cartSummaryTitle.innerText = `Загальна вартість: ${formattedTotalSum} грн`;

          deleteBtn.forEach((button) => {
            button.addEventListener("click", () => {
              const container = button.closest(".products-container");
              const id = container
                .querySelector(".cart-price-all")
                .getAttribute("data-id");
              container.remove();
              const storedQuantity = localStorage.getItem("numberLS");
              const storedQuantityArray = storedQuantity
                ? storedQuantity.split(",")
                : [];
              const updatedQuantityArray = storedQuantityArray.filter(
                (itemId) => itemId !== id
              );
              localStorage.setItem("numberLS", updatedQuantityArray.join(","));

              location.reload();
            });
          });

          increaseButtons.forEach((button) => {
            button.addEventListener("click", () => {
              let id = button.getAttribute("data-id");
              let quantityInput = document.querySelector(
                `input[data-id="${id}"]`
              );
              let quantity = parseInt(quantityInput.value);
              let arrayBagage = localStorage.getItem("numberLS")
                ? localStorage.getItem("numberLS").split(",")
                : [];
              let count = arrayBagage.length;
              counterBagadge.innerHTML = ++count;
              let storedQuantity = localStorage.getItem("numberLS");
              let storedQuantityArray = storedQuantity
                ? storedQuantity.split(",")
                : [];
              if (
                storedQuantityArray.includes(id) &&
                !quantityCount[id].increased
              ) {
                quantity += 1;
                quantityCount[id].increased = true;
              } else {
                quantity = 1;
              }
              quantityInput.value = quantity;
              updateCartPrice(id, quantity);
              addToLocalStorage(id, quantity);
              location.reload();
            });
          });

          decreaseButtons.forEach((button) => {
            button.addEventListener("click", () => {
              let id = button.getAttribute("data-id");
              let quantityInput = document.querySelector(
                `input[data-id="${id}"]`
              );
              let quantity = parseInt(quantityInput.value);

              if (quantity > 1) {
                let arrayBagage = localStorage.getItem("numberLS")
                  ? localStorage.getItem("numberLS").split(",")
                  : [];
                let count = arrayBagage.length;
                counterBagadge.innerHTML = --count;
                quantity--;
                quantityInput.value = quantity;
                updateCartPrice(id, quantity);
                removeFromLocalStorage(id);
                quantityCount[id] = quantity;
                location.reload();
              }
            });
          });
          const quantityInputse = document.querySelectorAll(
            'input[name="quantity"]'
          );

          function updateCartPrice(id, quantity) {
            const price = parseFloat(prices[id]);
            const cartPriceElement = document.querySelector(
              `.cart-price[data-id="${id}"]`
            );
            const cartPriceAllElement = document.querySelector(
              `.cart-price-all[data-id="${id}"]`
            );
            const totalPrice = price * quantity;

            cartPriceElement.innerText = price.toFixed(2);
            cartPriceAllElement.innerText = totalPrice.toFixed(2);
          }

          function addToLocalStorage(id) {
            let storedQuantity = localStorage.getItem("numberLS");

            if (storedQuantity) {
              let updatedQuantity = `${storedQuantity},${id}`;
              localStorage.setItem("numberLS", updatedQuantity);
            } else {
              localStorage.setItem("numberLS", id);
            }
          }

          function removeFromLocalStorage(id) {
            let storedQuantity = localStorage.getItem("numberLS");

            if (storedQuantity) {
              let quantityArray = storedQuantity.split(",");
              let index = quantityArray.lastIndexOf(id);

              if (index !== -1) {
                quantityArray.splice(index, 1);
                let updatedQuantity = quantityArray.join(",");
                localStorage.setItem("numberLS", updatedQuantity);
              }
            }
          }

          function updateCartPrice(id, quantity) {
            let priceElement = document.querySelector(
              `.cart-price[data-id="${id}"]`
            );
            let cartPriceAllElement = document.querySelector(
              `.cart-price-all[data-id="${id}"]`
            );

            if (cartPriceAllElement) {
              let price = parseFloat(priceElement.innerText);
              let totalPrice = price * quantity;

              cartPriceAllElement.innerHTML =
                totalPrice % 1 === 0
                  ? totalPrice.toFixed(0)
                  : totalPrice.toFixed(2);
            } else {
            }
          }
        }
      }
    })
  });


 const bacsRadio = document.querySelector('.full-paymant-container');
 const codRadio = document.querySelector('.avans-paymant-container');
 let fullPaymentBorder = document.querySelector('.full-paymant-container');
 let fullPaymentTitle = document.querySelector('.full-paymant-title-label');
 let avansPaymentTitle = document.querySelector('.avams-paymant-title-label');
 let avansPaymantBorder = document.querySelector('.avans-paymant-container');
 avansPaymantBorder.classList.remove('avans-paymant-container')
 avansPaymentTitle.classList.remove('avams-paymant-title-label')
 const bacsParagraph = document.querySelector('.payment_method_bacs p');
 const codParagraph = document.querySelector('.payment_method_cod p');
 let codParagraphShow = document.querySelector('.kek')

 bacsRadio.addEventListener('click', function() {
  fullPaymentBorder.classList.add('full-paymant-container')
  fullPaymentTitle.classList.add('full-paymant-title-label')
  avansPaymentTitle.classList.remove('avams-paymant-title-label')
  avansPaymantBorder.classList.remove('avans-paymant-container')
  codParagraph.innerHTML = '' 
  bacsParagraph.innerHTML = 'Оплата повним платежем. Оплату приймаємо на карту (відправимо реквізити в viber/telegram).';
 });

 codRadio.addEventListener('click', function() {
  avansPaymantBorder.classList.add('avans-paymant-container')
  fullPaymentTitle.classList.remove('full-paymant-title-label')
  fullPaymentBorder.classList.remove('full-paymant-container')
  codParagraphShow.classList.add('kek-show')
  avansPaymentTitle.classList.add('avams-paymant-title-label')
  bacsParagraph.innerHTML = ''
  codParagraph.innerHTML = 'Оплата накладним платежем при отриманні. Аванс на відправку накладним платежем 150 грн на карту (відправимо реквізити в viber/telegram).';
 });

let sizeRadio = document.getElementById('size-radio');
let radioButtons = sizeRadio.querySelectorAll('input[type="radio"]');
let selectedValue; 

function handleRadioButtonChange() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedValue = radioButtons[i].nextElementSibling.textContent;

      break;
    }
  }
}

for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', handleRadioButtonChange);
}

let formInputs = document.querySelectorAll('.js-input')

form.onsubmit = function(e){
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  formInputs.forEach(function(input){
    input.addEventListener('focus', function() {
      input.classList.remove('error');
      
    });
  });

  e.preventDefault()
  
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
  let wrongNumberPhone = document.querySelector('.wrong-phone-container')
 
  var inputElement = document.querySelector('.phone-order');
  


  inputElement.addEventListener('focus', function() {
    var wrongPhoneContainer = document.querySelector('.show-wrong-phone-container');
    wrongPhoneContainer.classList.remove('show-wrong-phone-container')
    formPhoneOrder.classList.remove('error');
    
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return false;
  }

  function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone)) || phone.startsWith("+");
  }
  if (!validatePhone(formPhoneOrder.value)) {
    
    formPhoneOrder.classList.add('error');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    wrongNumberPhone.classList.add('show-wrong-phone-container')
    return false;
  } else {
    formPhoneOrder.classList.remove('error');
  }

  if ((formPhoneOrder.value.length === 13 || formPhoneOrder.value.length === 10)) {
    formPhoneOrder.classList.remove('error');
  } else {
    
    formPhoneOrder.classList.add('error');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    wrongNumberPhone.classList.add('show-wrong-phone-container')
    return false;
  }

  let checkbox = document.getElementById('scales');
  let checkScales;
  let textAreaOrder = document.querySelector('.textarea-order').value;
  let chekAvansOrFull = document.querySelector('.avams-paymant-title-label');
  let checkAvansOrFullText;

  if (chekAvansOrFull){
    checkAvansOrFullText = 'Накладний платіж'
  }
  else{
    checkAvansOrFullText = 'Повна оплата'
  }
  
  if (checkbox.checked) {
    checkScales = true;
  } else {
    checkScales = false;
  }
  
  const pillowCaseMap = new Map();
  pillowCaseMap.set("70*70", "SEVENTY_X_SEVENTY");
  pillowCaseMap.set("50*70", " FIFTY_X_SEVENTY");
  pillowCaseMap.set("Інший (вкажіть розмір у примітках)", "OTHER");

  const rubberMap = new Map();
  rubberMap.set(true, "YES");
  rubberMap.set(false, "NO");

  const paymantMap = new Map();
  paymantMap.set("Накладний платіж", "DELIVERY");
  paymantMap.set("Повна оплата", "FULL");
  let headers;           

if(authorizationCookieValue !== ''){
  headers = {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
    'Authorization':  authorizationCookieValue
  }
}
else{
  headers = {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
  }
}
localStorage.removeItem("numberLS");
counterBagadge.classList.remove('counter-show')
let mainItemContainerAfterOrder = document.querySelector('.main-add-item-container')
const cartSummaryTitle = document.querySelector(
  ".cart-summaty-title"
);
const numberString = cartSummaryTitle.innerText.replace(/\D/g, ''); // Remove all non-digit characters
let totalPrice = parseInt(numberString, 10);

fetch(`${serverMachineUrl}/api/order`, {
  method: 'POST',
  mode: "cors",
  headers: headers,
  body: JSON.stringify({
  name: formNameOrder.value,
  secondName: formSecondNameOrder.value,
  email: formGmailOrder.value, 
  phoneNumber: formPhoneOrder.value,
  pillowcase: pillowCaseMap.get(selectedValue),
  price: totalPrice,
  rubber: rubberMap.get(checkScales),
  city: selectedOption.textContent,
  postNumber: selectedPostOffice.textContent,
  description: textAreaOrder,
  payment: paymantMap.get(checkAvansOrFullText),
  ids: arr
  }),
})
  .then((response) => response.json())
  .then((json) => {
  const sizeMap = new Map();
  sizeMap.set("ONE_AND_HALF", "Півтораспальний");
  sizeMap.set("DOUBLE", "Двохспальний");
  sizeMap.set("EURO", "Євро");
  sizeMap.set("FAMILY", "Сімейний");

  const materialMap = new Map();
  materialMap.set("RANFORS", "Ранфорс");
  materialMap.set("SATIN", "Сатин");
  materialMap.set("STRAP_SATIN", "Страйп сатин");
  materialMap.set("POPLIN", "Поплин");
  materialMap.set("BIAZ", "Бязь");
  materialMap.set("TURKISH_RANFORS", "Турецький Ранфорс");

  const colorMap = new Map();
  colorMap.set("RED", "Червоний");
  colorMap.set("ORANGE", "Помаранчовий");
  colorMap.set("YELLOW", "Жовтий");
  colorMap.set("GREEN", "Зелений");
  colorMap.set("BLUE", "Блакитний");
  colorMap.set("INDIGO", "Індіго");
  colorMap.set("VIOLET", "Фіолетовий");
  colorMap.set("PINK", "Рожевий");
  colorMap.set("SILVER", "Сріблястий");
  colorMap.set("GOLD", "Золотий");
  colorMap.set("BEIGE", "Бежевий");
  colorMap.set("BROWN", "Коричневий");
  colorMap.set("GRAY", "Сірий");
  colorMap.set("BLACK", "Чорний");
  colorMap.set("WHITE", "Білий");

    const pillowCaseGetMap = new Map();
    pillowCaseGetMap.set("SEVENTY_X_SEVENTY", "70*70");
    pillowCaseGetMap.set("FIFTY_X_SEVENTY", "50*70");
    pillowCaseGetMap.set("OTHER", "Інший");

  const rubberGetMap = new Map();
  rubberGetMap.set("YES", "Так");
  rubberGetMap.set("NO", "Ні");
  
  const paymantMapGet = new Map();
  paymantMapGet.set("DELIVERY", "Накладний платіж ");
  paymantMapGet.set("FULL", "Повна оплата");

  const counts = {};
  json.textiles.forEach((e) => {
    const key = `${e.name}-${e.size}`; 
    counts[key] = (counts[key] || 0) + 1; 
  });
    mainItemContainerAfterOrder.innerHTML = `<section class="wrapper post">                              
                                              <div class="post__content">
                                              <h1>Оформлення замовлення</h1>
                                                <div class="woocommerce">
                                                  <div class="woocommerce-order">
                                                    <p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received">Дякуємо. Ваше замовлення було отримано.<br>Протягом 10 хвилин із Вами зв'яжеться наш менеджер.</p>
                                                  </div>
                                                  <table class="table-after-order">
                                                  <thead>
                                                      <tr class="table-tr">
                                                          <th>Номер змовлення</th>
                                                          <th>Ім'я</th>
                                                          <th>Прізвище</th>
                                                        </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr class="table-td">
                                                      <td>${json.id}</td>
                                                      <td>${json.name}</td>
                                                      <td>${json.secondName}</td>
                                                    </tr>
                                                  </tbody>
                                                  </table>
                                                  <div class="paymant-data">
                                                    <p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received">Деталі нашого банку</p>
                                                  </div>
                                                  <div class="paymant-data">
                                                    <h3 class="woocommerce-notice woocommerce-notice--success-name woocommerce-thankyou-order-received">ФОП Хащук Аліна Сергіївна</h3>
                                                  </div>
                                                  <table class="table-after-order-paymant-data">
                                                  <thead>
                                                      <tr class="table-tr">
                                                          <th>Банк</th>
                                                          <th>Номер банківського рахунку</th>
                                                          <th>SORT код</th>
                                                          <th class="th-last-title">IBAN</th>
                                                        </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr class="table-td">
                                                      <td>Монобанк</td>
                                                      <td>4035200042138963</td>
                                                      <td>ІПН/ЄДРПОУ: 3689504109</td>
                                                      <td>UA143220010000026000330041079</td>
                                                    </tr>
                                                  </tbody>
                                                  </table>
                                                  <div class="woocommerce-order">
                                                    <p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received">Інформація</p>
                                                  </div>
                                                  <div class="woocommerce-order">
                                                  <div class="details-order-container">
                                                  ${Object.entries(counts).map(([key, count]) => {
                                                    const [name, size] = key.split('-'); // Split the unique key back into name and size
                                                    const textile = json.textiles.find((e) => e.name === name && e.size === size); // Find the corresponding textile
                                      
                                                    return `
                                                      <div class="products-container">
                                                        <div class="img-cart">
                                                          <img src="${textile.imgUrl}">
                                                        </div>
                                                        <span class="cart-name">${textile.name}</span>
                                                        <table class="cart__config">
                                                          <tbody>
                                                            <tr>
                                                              <th class="size-cart">Розмір:</th>
                                                              <td><p>${sizeMap.get(textile.size)}</p></td>
                                                            </tr>
                                                            <tr>
                                                              <th class="color-cart">Колір:</th>
                                                              <td><p>${colorMap.get(textile.color)}</p></td>
                                                            </tr>
                                                            <tr>
                                                              <th class="material-cart">Матеріал:</th>
                                                              <td><p>${materialMap.get(textile.material)}</p></td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <span type="number" class="cart-price" data-id="${textile.id}" value="1">${textile.discountPrice * count}грн</span>
                                                        <div class="cart__counter">
                                                          <span>Кількість:</span>
                                                          <input type="text" readonly name="quantity" class="input-quantity" data-id="${textile.id}" value="${count}">
                                                          <div class="arrow-container">
                                                            <img type="button" src="images/increase.png" class="increase" data-id="${textile.id}"></img>
                                                            <img class="decrease" type="button" src="images/increase.png" data-id="${textile.id}"></img>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    `;
                }).join('')
              }
              </div>
              <div class="woocommerce-order">
                <p class="woocommerce-notice-summary">Підсумок замовлення: ${json.price} грн</p>
              </div>
                                                  <div class="confirmed-order-footer-container">
                                                    <div class="delivery-address">
                                                        <h2>Данні доставки</h2>
                                                        <textarea class = "text-area-after-order" readonly>${json.name} ${json.secondName}\n${json.phoneNumber}\n${json.city}\n${json.postNumber}</textarea>
                                                    </div>
                                                    <div class="description-after-order">
                                                    <h2>Примітки</h2>
                                                        <textarea class = "text-area-after-order" readonly>Подушки - ${pillowCaseGetMap.get(json.pillowcase)}\nРезинка - ${rubberGetMap.get(json.rubber)}\nОплата - ${paymantMapGet.get(json.payment)}\n${json.description}</textarea>
                                                    </div>
                                                  </div>
                                                </div>
                                            </div>
                                          </section>`
  });

}
