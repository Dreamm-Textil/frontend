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
let mainAdminPanel = document.querySelector('.main-admin-panel');
let paginationContainer = document.querySelector('.pagination-container');
let adminOnPage = false;
let mainAdminOnPage = false;
let arrSize = [];
let arrMaterial = [];
let arrColor = [];
deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.add("nav-button-index-click");

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
  if (json.role === "MAIN_ADMIN"){
    mainAdminPanel.classList.add("main-admin-panel-show");
    mainAdminOnPage = true;
  }
  else{
    mainAdminOnPage = false;
  }

});
}

setTimeout(function() { handleButtonClick(); }, 500);


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

let allNewProductBtn = document.querySelector('.allnewprod-btn');
allNewProductBtn.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior:"smooth"
  })
})



const itemsPerPage = 9; 
let currentPage = 1; 
const pagination_element = document.getElementById('pagination');

const sizeMap = new Map();
sizeMap.set("ONE_AND_HALF", "Півтораспальний");
sizeMap.set("DOUBLE", "Двохспальний");
sizeMap.set("EURO", "Євро");
sizeMap.set("FAMILY", "Сімейний");
sizeMap.set("CHILDREN", "Дитячий");

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

function handleButtonClick() {
    const sizeButtons = document.querySelectorAll('.size-option');
    const materialButtons = document.querySelectorAll('.material-option');
    const colorButtons = document.querySelectorAll('.color-option');
  
    arrSize = [];
    arrMaterial = [];
    arrColor = [];
  
    sizeButtons.forEach((button) => {
      if (button.classList.contains('selected')) {
        arrSize.push(button.dataset.value);
      }
    });
  
    materialButtons.forEach((button) => {
      if (button.classList.contains('selected')) {
        arrMaterial.push(button.dataset.value);
      }
    });
  
    colorButtons.forEach((button) => {
      if (button.classList.contains('selected')) {
        arrColor.push(button.dataset.value);
      }
    });

    sizeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        complectation.innerHTML = '';
        const selectedSize = button.dataset.value;
    
        switch (selectedSize) {
          case 'ONE_AND_HALF':
            complectation.innerHTML = '- простирадло: 150*215 см - 1 шт.<br> - підковдра: 150*215 см - 1 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.<br> - можливий ІНДИВІДУАЛЬНИЙ ПОШИВ';
            break;
          case 'DOUBLE':
            complectation.innerHTML = '- простирадло: 200*215 см - 1 шт.<br> - підковдра: 180*215 см - 1 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.<br> - можливий ІНДИВІДУАЛЬНИЙ ПОШИВ';
            break;
          case 'EURO':
            complectation.innerHTML = '- простирадло: 240*215 см - 1 шт.<br> - підковдра: 200*215 см - 1 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.<br> - можливий ІНДИВІДУАЛЬНИЙ ПОШИВ';
            break;
          case 'FAMILY':
            complectation.innerHTML = '- простирадло: 240*215 см - 1 шт.<br> - підковдра: 150*215 см - 2 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 2 шт.<br> - можливий ІНДИВІДУАЛЬНИЙ ПОШИВ';
            break;
          case 'CHILDREN':
            complectation.innerHTML = '- простирадло: 150*215 см - 1 шт.<br> - підковдра: 150*215 см - 1 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 1 шт.<br> - можливий ІНДИВІДУАЛЬНИЙ ПОШИВ';
            break;
          default:
            complectation.innerHTML = ''; 
        }
      });
    });

    let headersCatalogCheck;

    if((authorizationCookieValue !== '') && ((authorizationCookieValue !== null))){
      headersCatalogCheck = {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        'Authorization':  authorizationCookieValue
      }
    }
    else {
      headersCatalogCheck = {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      }
    }
    
   
  fetch(`${serverMachineUrl}/api/textile/all-filter`, {
    method: 'POST',
    headers: headersCatalogCheck,
    body: JSON.stringify({
      sizes: arrSize,
      materials: arrMaterial,
      colors: arrColor
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      const sortedItems = json.sort((a, b) => a.id - b.id);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const items = sortedItems.reverse().slice(startIndex, endIndex);
      
      list_element.innerHTML = '';
      if(items.length === 0){
        paginationContainer.classList.add('pagination-container-unshow');
        list_element.innerHTML = `<h2 class="title-catalog-clear">Нажаль, таких варінтів постільної білизни немає!</h2>`;
      }
      else{
      items.forEach((user) => {

        const promotionHTML =
  user.material === 'STRAP_SATIN' || user.material === 'SATIN'
    ? '<h2 class="promotion-card" style="color: black;">Знижка -300 грн</h2>'
    : user.material === 'RANFORS'
    ? '<h2 class="promotion-card" style="color: black;">Знижка -40%</h2>'
    : '<h2 class="promotion-card" style="color: black;">Знижка -40%</h2>';

        if (adminOnPage) {
          paginationContainer.classList.remove('pagination-container-unshow');
            list_element.innerHTML += `
            <div class="product-container">
              <div class="card product">
                <img class="card-img-top" src="${user.imgUrl}" alt="klitka-white">
                <div class="admin-navigation-item">
                  <button class="btn-delete-item " onclick="cliclDeleteBtn(${user.id})"><i class="fa-solid fa-trash-can catalog-trash" style="color: white; font-size:15px;"></i></button>
                  <button id="unshow-btn-${user.id}" class="btn-unshow-item btn-${user.id}-unshow" onclick="clickUnShowBtn(${user.id})"><i class="fa-regular fa-eye" style="color: #02cd02; font-size:15px;"></i></button>
                  <button id="show-btn-${user.id}" class="btn-show-item btn-${user.id}-unshow" onclick="clickShowBtn(${user.id})"><i class="fa-regular fa-eye-slash" style="color: red; font-size:15px;"></i></button>
                </div>
                <div class="card-body">
                  <div class="card-title-size-container">
                  ${promotionHTML}
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
        } else if(mainAdminOnPage){
          paginationContainer.classList.remove('pagination-container-unshow');
          list_element.innerHTML += `
            <div class="product-container">
              <div class="card product">
                <img class="card-img-top" src="${user.imgUrl}" alt="klitka-white">
                <div class="admin-navigation-item">
                  <button class="btn-delete-item " onclick="cliclDeleteBtn(${user.id})"><i class="fa-solid fa-trash-can catalog-trash" style="color: white; font-size:15px;"></i></button>
                  <button id="unshow-btn-${user.id}" class="btn-unshow-item btn-${user.id}-unshow" onclick="clickUnShowBtn(${user.id})"><i class="fa-regular fa-eye" style="color: #02cd02; font-size:15px;"></i></button>
                  <button id="show-btn-${user.id}" class="btn-show-item btn-${user.id}-unshow" onclick="clickShowBtn(${user.id})"><i class="fa-regular fa-eye-slash" style="color: red; font-size:15px;"></i></button>
                </div>
                <div class="card-body">
                  <div class="card-title-size-container">
                  ${promotionHTML}
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
        } else{
          paginationContainer.classList.remove('pagination-container-unshow');
          list_element.innerHTML += `
            <div class="product-container">
              <div class="card product">
                <img class="card-img-top" src="${user.imgUrl}" alt="klitka-white">
                <div class="card-body">
                  <div class="card-title-size-container">
                  ${promotionHTML}
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
      createPaginationButtons(json.length);
      
      items.forEach((userState) => {
        const unshowBtn = document.getElementById(`unshow-btn-${userState.id}`);
        const showBtn = document.getElementById(`show-btn-${userState.id}`);
        if (userState.isHide) {
          unshowBtn.style.display = 'none';
          showBtn.style.display = 'inline-block';
        } else {
          unshowBtn.style.display = 'inline-block';
          showBtn.style.display = 'none';
        }
      });
      
      }
      
    });
}

function clickUnShowBtn(id) {
  fetch(`${serverMachineUrl}/api/textile/hide`, {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization':  authorizationCookieValue
    },
    body: JSON.stringify({
      id: id,
      isHide: true
    }),
  })
  .then(res => res.json())
  .then(data => {
    // Отримали відповідь з сервера, оновлюємо стан кнопок
    const unshowBtn = document.getElementById(`unshow-btn-${id}`);
    const showBtn = document.getElementById(`show-btn-${id}`);

    if (data.isHide) {
      unshowBtn.style.display = 'none';
      showBtn.style.display = 'inline-block';
    } else {
      unshowBtn.style.display = 'inline-block';
      showBtn.style.display = 'none';
    }
  });
  setTimeout(() => {
    location.reload();
  }, 500);
}

function clickShowBtn(id) {
  fetch(`${serverMachineUrl}/api/textile/hide`, {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization':  authorizationCookieValue
    },
    body: JSON.stringify({
      id: id,
      isHide: false
    }),
  })
  .then(res => res.json())
  .then(data => {
    const unshowBtn = document.getElementById(`unshow-btn-${id}`);
    const showBtn = document.getElementById(`show-btn-${id}`);

    if (data.isHide) {
      unshowBtn.style.display = 'none';
      showBtn.style.display = 'inline-block';
    } else {
      unshowBtn.style.display = 'inline-block';
      showBtn.style.display = 'none';
    }
  });
  setTimeout(() => {
    location.reload();
  }, 500);
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

document.querySelectorAll('.size-option, .material-option, .color-option').forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('selected'); 
      handleButtonClick(); 
      setTimeout(() => {
        updateButtonStatus();
        updateButtonStatusLike();
      }, 800)
    });
  });

function createPaginationButtons(itemCount) {
  const pageCount = Math.ceil(itemCount / itemsPerPage);

  pagination_element.innerHTML = ''; 

  const maxVisibleButtons = 3; 

  let startPage;
  let endPage;

  if (pageCount <= maxVisibleButtons) {
    startPage = 1;
    endPage = pageCount;
  } else {
    if (currentPage <= 1) {
      startPage = 1;
      endPage = maxVisibleButtons;
    } else if (currentPage >= pageCount - maxVisibleButtons + 2) {
      startPage = pageCount - maxVisibleButtons + 1;
      endPage = pageCount;
    } else {
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
    handleButtonClick();
    setTimeout(() => {
      updateButtonStatus();
      updateButtonStatusLike();
    }, 800)
    const scrollPosition = window.innerWidth < 600 ? 200 : 850;
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




