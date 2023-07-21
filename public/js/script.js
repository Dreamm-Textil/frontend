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
// oneAndHalfSizeBtn.classList.add("one-and-half-size-btn-show")
// deliveryBtn.classList.remove("nav-button-about-us-click");
// aboutUsBtn.classList.remove("nav-button-about-us-click");
// indexBtn.classList.add("nav-button-index-click");
// personalCabineteAfterRegestration.classList.remove("nav-button-personal-cabinete-click");


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



const itemsPerPage = 6; 
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

// Function to handle the click on any label
function handleButtonClick() {
    const sizeButtons = document.querySelectorAll('.size-option');
    const materialButtons = document.querySelectorAll('.material-option');
    const colorButtons = document.querySelectorAll('.color-option');
  
    // Clear the arrays to start with fresh selections
    arrSize = [];
    arrMaterial = [];
    arrColor = [];
  
    // Collect selected options in the respective arrays
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
        // Clear previous complectation content
        complectation.innerHTML = '';
    
        // Get the data-value attribute of the clicked button
        const selectedSize = button.dataset.value;
    
        // Update the complectation based on the selected size
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
            complectation.innerHTML = '- простирадло: 150*215 см - 1 шт.<br> - підковдра: 150*215 см - 2 шт.<br> - наволочка: 70 * 70 або 50 * 70 см - 1 шт.<br> - можливий ІНДИВІДУАЛЬНИЙ ПОШИВ';
            break;
          default:
            complectation.innerHTML = ''; // No selected size or unknown size value
        }
      });
    });
   

    // sizeButtons.forEach((button) => {
    //   button.addEventListener('touchstart', () => {
    //     if (button.classList.contains('selected')) {
    //     arrSize.push(button.dataset.value);
    //   }
    //   });
    // });
    
    // materialButtons.forEach((button) => {
    //   button.addEventListener('touchstart', () => {
    //     if (button.classList.contains('selected')) {
    //       arrMaterial.push(button.dataset.value);
    //     }
    //   });
    // });
    
    // colorButtons.forEach((button) => {
    //   button.addEventListener('touchstart', () => {
    //     if (button.classList.contains('selected')) {
    //       arrColor.push(button.dataset.value);
    //     }
    //   });
    // });
  // Send the POST request to the backend
  fetch(`${serverMachineUrl}/api/textile/all-filter`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization':  authorizationCookieValue
    },
    body: JSON.stringify({
      sizes: arrSize,
      materials: arrMaterial,
      colors: arrColor
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const items = json.reverse().slice(startIndex, endIndex);

      list_element.innerHTML = ''; // Clear previous items in the list_element
      if(items.length === 0){
        paginationContainer.classList.add('pagination-container-unshow');
        list_element.innerHTML = `<h2 class="title-catalog-clear">Нажаль, таких варінтів постільної білизни немає!</h2>`;
      }
      else{
      items.forEach((user) => {
        if (adminOnPage) {
          paginationContainer.classList.remove('pagination-container-unshow');
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
        } else if(mainAdminOnPage){
          paginationContainer.classList.remove('pagination-container-unshow');
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
        } else{
          paginationContainer.classList.remove('pagination-container-unshow');
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
      }
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
      'Authorization':  authorizationCookieValue
    }
  })
  .then(res => res.json())
  .then(data => console.log(data));
}

// Add click event listeners to the buttons
document.querySelectorAll('.size-option, .material-option, .color-option').forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('selected'); // Toggle the "selected" class on click
      handleButtonClick(); // Call the function to handle the click event
      setTimeout(() => {
        updateButtonStatus();
        updateButtonStatusLike();
      }, 800)
    });
  });

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
    handleButtonClick();
    setTimeout(() => {
      updateButtonStatus();
      updateButtonStatusLike();
    }, 800)
    const scrollPosition = window.innerWidth < 600 ? 200 : 780;
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




