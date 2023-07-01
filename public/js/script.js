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

if(hasAuthorizationCookie && authorizationCookieValue !== ''){
  
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
  if (json.role === "ADMIN"){
    adminPanel.classList.add("admin-panel-show");
    adminOnPage = true;
  }
  else{
    adminOnPage = false;
  }
});
}

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




let allNewProductBtn = document.querySelector('.allnewprod-btn');
allNewProductBtn.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior:"smooth"
  })
})


oneAndHalfSizeBtn.addEventListener('click', function(){
  currentPage = 1  
  list_element.innerHTML = '';
  doubleSizeBtn.classList.remove("one-and-half-size-btn-show")
  oneAndHalfSizeBtn.classList.add("one-and-half-size-btn-show")
  euroSizeBtn.classList.remove("one-and-half-size-btn-show")
  familySizeBtn.classList.remove("one-and-half-size-btn-show")
  childrenSizeBtn.classList.remove("one-and-half-size-btn-show")
  
  getSize('ONE_AND_HALF');
  setTimeout(() => {
    updateButtonStatus();
    updateButtonStatusLike();
  }, 800)
  complectation.innerHTML = '- простирадло: 150*215 см - 1 шт.<br> - підковдра: 150*215 см - 1 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.<br> - Можливий <strong>ІНДИВІДУАЛЬНИЙ ПОШИВ</strong>'
})


doubleSizeBtn.addEventListener('click', function(){
currentPage = 1  
list_element.innerHTML = '';
doubleSizeBtn.classList.add("one-and-half-size-btn-show")
oneAndHalfSizeBtn.classList.remove("one-and-half-size-btn-show")
euroSizeBtn.classList.remove("one-and-half-size-btn-show")
familySizeBtn.classList.remove("one-and-half-size-btn-show")
childrenSizeBtn.classList.remove("one-and-half-size-btn-show")
getSize('DOUBLE');
setTimeout(() => {
  updateButtonStatus();
  updateButtonStatusLike();
}, 800);

complectation.innerHTML = '- простирадло: 200*215 см - 1 шт.<br> - підковдра: 180*215 см - 1 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.<br> - Можливий <strong>ІНДИВІДУАЛЬНИЙ ПОШИВ</strong>'
})


euroSizeBtn.addEventListener('click', function(){
currentPage = 1  
list_element.innerHTML = '';
doubleSizeBtn.classList.remove("one-and-half-size-btn-show")
oneAndHalfSizeBtn.classList.remove("one-and-half-size-btn-show")
euroSizeBtn.classList.add("one-and-half-size-btn-show")
familySizeBtn.classList.remove("one-and-half-size-btn-show")
childrenSizeBtn.classList.remove("one-and-half-size-btn-show")
getSize('EURO');
setTimeout(() => {
  updateButtonStatus();
  updateButtonStatusLike();
}, 800)
complectation.innerHTML = '- простирадло: 240*215 см - 1 шт.<br> - підковдра: 200*215 см - 1 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.<br> - Можливий <strong>ІНДИВІДУАЛЬНИЙ ПОШИВ</strong>'
})


familySizeBtn.addEventListener('click', function(){
currentPage = 1  
list_element.innerHTML = '';
doubleSizeBtn.classList.remove("one-and-half-size-btn-show")
oneAndHalfSizeBtn.classList.remove("one-and-half-size-btn-show")
euroSizeBtn.classList.remove("one-and-half-size-btn-show")
familySizeBtn.classList.add("one-and-half-size-btn-show")
childrenSizeBtn.classList.remove("one-and-half-size-btn-show")
getSize('FAMILY');
setTimeout(() => {
  updateButtonStatus();
  updateButtonStatusLike();
}, 800)
complectation.innerHTML = '- простирадло: 240*215 см - 1 шт.<br> - підковдра: 150*215 см - 2 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.<br> - Можливий <strong>ІНДИВІДУАЛЬНИЙ ПОШИВ</strong>'
})


childrenSizeBtn.addEventListener('click', function(){
currentPage = 1  
list_element.innerHTML = '';
doubleSizeBtn.classList.remove("one-and-half-size-btn-show")
oneAndHalfSizeBtn.classList.remove("one-and-half-size-btn-show")
euroSizeBtn.classList.remove("one-and-half-size-btn-show")
familySizeBtn.classList.remove("one-and-half-size-btn-show")
childrenSizeBtn.classList.add("one-and-half-size-btn-show")
getSize('CHILDREN');
setTimeout(() => {
  updateButtonStatus();
  updateButtonStatusLike();
}, 800)
complectation.innerHTML = '- простирадло: 150*215 см - 1 шт.<br> - підковдра: 150*215 см - 2 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 1 шт.<br> - Можливий <strong>ІНДИВІДУАЛЬНИЙ ПОШИВ</strong>'
})


const itemsPerPage = 1; 
let currentPage = 1; 
const pagination_element = document.getElementById('pagination');
let s;

function getSize(size) {
  s = size;
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

  fetch(`${serverMachineUrl}/api/textile/all?size=${size}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const items = json.slice(startIndex, endIndex);

      list_element.innerHTML = ''; // Clear previous items in the list_element

      items.forEach((user) => {
        if (adminOnPage) {
          list_element.innerHTML += `
            <div class="product-container">
              <div class="card product">
                <img class="card-img-top" src="${user.imgUrl}" alt="klitka-white">
                <button class="btn-delete-item" onclick="cliclDeleteBtn(${user.id})"><img src="images/bin.png"></button>
                <div class="card-body">
                  <div class="card-title-size-container">
                    <h2 class="promotion-card" style="color: black;">Знижка -50%</h2>
                    <button class="like" id="like-${user.id}-button" onclick="cliclLikeBtn(${user.id})"><i class="far fa-heart change-heart"></i></button>
                  </div>
                  <h4 class="card-title">${user.name}</h4>
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
                  <div class="price-block new-price">
                    <span class="new-price">${user.discountPrice} грн</span>
                    <span class="price">${user.price} грн</span>
                  </div>
                  <div class="card-btns-container">
                    <button class="to-bag" id="product-${user.id}-button" onclick="cliclAddToBagBtn(${user.id})">В кошик</button>
                  </div>
                </div>
              </div>
            </div>`;
        } else {
          list_element.innerHTML += `
            <div class="product-container">
              <div class="card product">
                <img class="card-img-top" src="${user.imgUrl}" alt="klitka-white">
                <div class="card-body">
                  <div class="card-title-size-container">
                    <h2 class="promotion-card" style="color: black;">Знижка -50%</h2>
                    <button class="like" id="like-${user.id}-button" onclick="cliclLikeBtn(${user.id})"><i class="far fa-heart change-heart"></i></button>
                  </div>
                  <h4 class="card-title">${user.name}</h4>
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
                  <div class="price-block new-price">
                    <span class="new-price">${user.discountPrice} грн</span>
                    <span class="price">${user.price} грн</span>
                  </div>
                  <div class="card-btns-container">
                    <button class="to-bag" id="product-${user.id}-button" onclick="cliclAddToBagBtn(${user.id})">В кошик</button>
                  </div>
                </div>
              </div>
            </div>`;
        }
      });

      // Create pagination buttons
      createPaginationButtons(json.length);
    });
}

function createPaginationButtons(itemCount) {
  const pageCount = Math.ceil(itemCount / itemsPerPage);

  pagination_element.innerHTML = ''; // Clear previous pagination buttons

  const maxVisibleButtons = 3; // Maximum number of visible page buttons

  let startPage;
  let endPage;

  if (pageCount <= maxVisibleButtons) {
    // If the total number of pages is less than or equal to the maximum visible buttons,
    // display all page buttons
    startPage = 1;
    endPage = pageCount;
  } else {
    if (currentPage <= 1) {
      // If the current page is the first page or less, display the first maxVisibleButtons pages
      startPage = 1;
      endPage = maxVisibleButtons;
    } else if (currentPage >= pageCount - maxVisibleButtons + 2) {
      // If the current page is within the last maxVisibleButtons pages, display the last maxVisibleButtons pages
      startPage = pageCount - maxVisibleButtons + 1;
      endPage = pageCount;
    } else {
      // Display the current page along with ellipsis and the last page
      startPage = currentPage - 1;
      endPage = currentPage + maxVisibleButtons - 2;
    }
  }

  if (startPage > 1) {
    addButtonToPagination(1);
    if (startPage > 2) {
      addEllipsisToPagination();
    }
  }

  for (let i = startPage; i <= Math.min(endPage, pageCount); i++) {
    addButtonToPagination(i);
  }

  if (endPage < pageCount) {
    if (endPage < pageCount - 1) {
      addEllipsisToPagination();
    }
    addButtonToPagination(pageCount);
  }
}
function addButtonToPagination(pageNumber) {

  const button = document.createElement('button');
  button.textContent = pageNumber;
  button.addEventListener('click', () => {
    currentPage = pageNumber;
    getSize(s);
    setTimeout(() => {
      updateButtonStatus();
      updateButtonStatusLike();
    }, 800)
    const scrollPosition = window.innerWidth < 600 ? 200 : 1000;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  });
  if (pageNumber === currentPage) {
    button.style.borderColor = '#EA4C89';
    button.style.backgroundColor = '#EA4C89';
    button.style.color = '#fff';
  }
  pagination_element.appendChild(button);
}

function addEllipsisToPagination() {
  const ellipsis = document.createElement('span');
  ellipsis.textContent = '...';
  pagination_element.appendChild(ellipsis);
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
      'Authorization':  authorizationCookieValue
    }
  })
  .then(res => res.json())
  .then(data => console.log(data));
}

