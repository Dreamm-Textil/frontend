
let form = document.querySelector(".js-form-personal-cabinete");
let formInputs = document.querySelectorAll(".js-input");
let formName = document.querySelector(".input-name");
let formSurname = document.querySelector(".input-surname");
let formPhone = document.querySelector(".input-phone-number");
let formEmail = document.querySelector(".input-gmail-addres");
let formPassword = document.querySelector(".input-password-registration-page");
let formRepeatPassword = document.querySelector(".input-repeat-password-registration-page");
let formPasswordContainer = document.querySelector(".input-password-registration-page");
let formRepeatPasswordContainer = document.querySelector(".input-repeat-password-registration-page");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const modalBtn = document.querySelector(".log-in-btn");
let modalBtnDeleteUser = document.querySelector('.delete-user-btn');
const modalBtnPhoneSize = document.querySelector(".log-in-btn-phone-size");
const modalOverlay = document.querySelector(".modal-overlay-exit");
let modalDeleteUser = document.querySelector('.modal-overlay-delete')
const closeBtn = document.querySelector(".disagree-for-exit-btn");
let closeBtnDeleteUser = document.querySelector(".disagree-for-delete-btn");
const inputLogin = document.querySelector(".login");
const inputPassword = document.querySelector(".password");
let aboutUsBtn = document.querySelector('.nav-button-about-us');
let indexBtn = document.querySelector('.nav-button-index');
let deliveryBtn = document.querySelector('.nav-button-delivery');
let personalCabineteAfterRegestration = document.querySelector('.personal-cabinete-after-registration');
let personalCabineteAfterRegestrationPhoneSize = document.querySelector('.personal-cabinete-after-registration-phone-size');
let profileBtn = document.querySelector('.profile-personal-cabinete');
let orderUserBtn = document.querySelector('.my-order-personal-cabinete');
let personalInfo = document.querySelector('.profile-personal-cabinete-container');
let personalInfoPhoneGmail = document.querySelector('.profile-personal-cabinete-phone-gmail');
let changePasswordBtn = document.querySelector('.change-password-personal-cabinete');
let profileMainRegestration = document.querySelector('.main-regestration-profile');
let logOutBtn = document.querySelector('.button-log-out-btn-profile-page');
let deleteAcountBtn = document.querySelector('.agree-for-delete-btn');
let addNewPost = document.querySelector('.glek');
let administrationPersonalCabinete = document.querySelector('.administration-personal-cabinete')
let administrationAllOrders = document.querySelector('.all-administration-order-personal-cabinete')  

deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");
if(authorizationCookieValue === ''){
  location.href="index.html";
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
  
  .then((json) =>{
    if(json.role === 'ADMIN'){
      administrationAllOrders.classList.add('all-administration-order-personal-cabinete-show')
  
    }
    else{
      administrationPersonalCabinete.classList.remove('administration-personal-cabinete-show')
      administrationAllOrders.classList.remove('all-administration-order-personal-cabinete-show')
    }
    if(json.role === 'MAIN_ADMIN'){
      administrationAllOrders.classList.add('all-administration-order-personal-cabinete-show')
      administrationPersonalCabinete.classList.add('administration-personal-cabinete-show')
    }
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


navToggle.addEventListener('click', function(){
  if(links.classList.contains('show-links')){
      links.classList.remove('show-links')
      navToggle.classList.remove('nav-toggle-show')
  } else {
      links.classList.add("show-links");
      navToggle.classList.add('nav-toggle-show')
  }
});



deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");
personalCabineteAfterRegestration.classList.add("nav-button-personal-cabinete-click");
administrationAllOrders.classList.add("profile-btn-click")
orderUserBtn.classList.remove("profile-btn-click")
profileBtn.classList.remove("profile-btn-click");
changePasswordBtn.classList.remove("profile-btn-click");
    
let agreeForExitBtn = document.querySelector('.agree-for-exit-btn');

agreeForExitBtn.addEventListener('click', function(){
  document.cookie = `Authorization=`
  location.href="http://127.0.0.1:5500/index.html";
});
                                                                                                                   
logOutBtn.addEventListener('click', function(){
  modalOverlay.classList.toggle("open-modal");
});
    
modalBtnPhoneSize.addEventListener('click', function(){
  modalOverlay.classList.toggle("open-modal");
});
    
closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});


modalBtnPhoneSize.addEventListener('click', function(){
  modalDeleteUser.classList.toggle("open-modal");
});
  
let orderContainer = document.querySelector('.tr-orders');
let orderPhoneContainer = document.querySelector('.js-form-personal-cabinete')

const statusMap = new Map();
statusMap.set("PROCESSED", "В обробці");
statusMap.set("SENT", "У дорозі");
statusMap.set("DONE", "Готово");

const paginationContainer = document.querySelector('.pagination-container-all-orders');
let currentPage = 10;
let totalPages = 1;
const itemsPerPage = 1; 
let orders = []; 

fetch(`${serverMachineUrl}/api/order/all-orders`, {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
    'Authorization':  authorizationCookieValue
  },
})
.then((response) => response.json())
.then((json) => {
  console.log(json);
  let currentPage = 1;
  const itemsPerPage = 5;
  const sortedItems = json.sort((a, b) => a.id - b.id);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const reversedData = sortedItems.reverse();
  const totalPages = Math.ceil(reversedData.length / itemsPerPage);

  if(reversedData.length < 6){
    let pagginationAllOrders = document.querySelector('.pagination-container-all-orders');
    pagginationAllOrders.classList.add('pagination-container-all-orders-unshow')
  }
  else{
    let pagginationAllOrders = document.querySelector('.pagination-container-all-orders');
    pagginationAllOrders.classList.remove('pagination-container-all-orders-unshow')
  }
  function renderItems(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    orderContainer.innerHTML = ''; 
    if (window.innerWidth < 1030) {
      orderPhoneContainer.innerHTML = '';
    }
    for (let i = startIndex; i < endIndex && i < reversedData.length; i++) {
      const e = reversedData[i];
      if (window.innerWidth >= 1030) {
            orderContainer.innerHTML += `
            <div class = "test">
                <td><img src="${e.textiles[0].imgUrl}"></td>
                <td>#${e.id}</td>
                <td>${e.secondName}</td>
                <td><select class="select-status" id="ddlViewBy-${e.id}" onchange="handleSelectChange(${e.id})">
                <option value="">${statusMap.get(e.status)}</option>
                <option value="PROCESSED">В обробці</option>
                <option value="SENT">У дорозі</option>
                <option value="DONE">Готово</option>
              </select>
              </td>
                <td class="td-number">${e.textiles.length}</td>
                <td>${e.price} грн</td>
                <td><button class="more-about-order" onclick="handleButtonClick(${e.id})">Перегляд</button></td>
                <td><button class="more-about-order-delete" onclick="handleButtonClickDelete(${e.id})"><i class="fas fa-trash-alt" style="color: white; transition: all 0.2s linear; font-size: 16px;font-weight: 100;" 
                onmouseover="this.style.color='#EA4C89';" onmouseout="this.style.color='white';"></button></td>
                </div>
              `
              }
              else{
                orderPhoneContainer.innerHTML +=`<table class="table-phone-size-all-order">
                  <thead>
                  <tr class="table-tr-phone">
                      <th class="th-img-title">Зображення</th>
                      <th>Замовлення</th>
                      <th>Прізвище</th>
                      <th>Статус</th>
                      <th>Кількість</th>
                      <th>Cума</th>
                      <th class="th-last-title">Дії</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="table-tr-phone">
                      <td><img src="${e.textiles[0].imgUrl}"></td>
                      <td>#${e.id}</td>
                      <td>${e.secondName}</td>
                      <td><select class="select-status" id="ddlViewBy-${e.id}" onchange="handleSelectChange(${e.id})">
                      <option value="">${statusMap.get(e.status)}</option>
                      <option value="PROCESSED">В обробці</option>
                      <option value="SENT">У дорозі</option>
                      <option value="DONE">Готово</option>
                    </select>
                      <td class="td-number">1</td>
                      <td>${e.price} грн</td>
                      <td><button class="more-about-order" onclick="handleButtonClick(${e.id})">Перегляд</button></td>         
                      <td><button class="more-about-order-delete" onclick="handleButtonClickDelete(${e.id})"><i class="fas fa-trash-alt" style="color: white; transition: all 0.2s linear; font-size: 16px;font-weight: 100;" 
                      onmouseover="this.style.color='#EA4C89';" onmouseout="this.style.color='white';"></button></td>
                  </tr>
                  
                  </tbody>
              </table>   `
              
              
            }
    }
  }

  function goToPage(page) {
    if (page < 1 || page > totalPages) {
      
      return;
    }
    const scrollPosition = window.innerWidth < 600 ? 0 : 0;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    currentPage = page;
    renderItems(currentPage);
  }

  function createPaginationButtons() {
  
  

    paginationContainer.innerHTML = ''; 

    const previousButton = document.createElement('button');
    previousButton.textContent = 'Попередні';
    previousButton.classList.add('previous-button'); 
    previousButton.addEventListener('click', () => goToPage(currentPage - 1));
    paginationContainer.appendChild(previousButton);
    

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Наступні';
    nextButton.classList.add('next-button'); 
    nextButton.addEventListener('click', () => goToPage(currentPage + 1));
    paginationContainer.appendChild(nextButton);
  }
  renderItems(currentPage);
  createPaginationButtons();
});




function handleSelectChange(orderId) {

  var selectElement = document.getElementById(`ddlViewBy-${orderId}`);
  var selectedValue = selectElement.value;

  var data = {
    id: orderId,
    status: selectedValue
  };

  fetch(`${serverMachineUrl}/api/order/update-status`, {
    method: "PUT",
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization':  authorizationCookieValue
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
    } else {
    }
  })
  .catch(error => {
  });
}


function handleButtonClickDelete(id) {
  let alertSecces = document.querySelector('.alert');
  alertSecces.classList.add("alert-show")
  setTimeout(() => {
    alertSecces.classList.remove("alert-show")
    location.reload();
  }, 1500);
  fetch(`${serverMachineUrl}/api/order?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization':  authorizationCookieValue
    }
  })
  .then(res => res.json())
}
 
let mainSettingsContainer = document.querySelector('.main-settings-container');

function handleButtonClick(id) {
  let pagginationAllOrders = document.querySelector('.pagination-container-all-orders');
  setTimeout(() => {
    pagginationAllOrders.classList.add('pagination-container-all-orders-unshow')
  }, 300);
 
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
  materialMap.set("BIAZ", "Мікросатин");
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

  fetch(`${serverMachineUrl}/api/order?id=${id}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization':  authorizationCookieValue
    }
  })
  .then(res => res.json())
  .then(data => {
    const counts = {};
data.textiles.forEach((e) => {
  const key = `${e.name}-${e.size}`; 
  counts[key] = (counts[key] || 0) + 1; 
});

mainSettingsContainer.innerHTML = `
  <section class="wrapper post">
    <div class="post__content">
      <div class="woocommerce">
        <div class="woocommerce-order">
          <p class="woocommerce-notice">Подробиці замовлення #${data.id}</p>
          <div class="details-order-container">
            ${Object.entries(counts).map(([key, count]) => {
              const [name, size] = key.split('-'); 
              const textile = data.textiles.find((e) => e.name === name && e.size === size); 

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
            }).join('')}
          </div>
          <div class="woocommerce-order">
            <p class="woocommerce-notice-summary">Підсумок замовлення: ${data.price} грн</p>
          </div>
          <div class="confirmed-order-footer-container">
            <div class="delivery-address">
              <p>Данні доставки</p>
              <textarea class="text-area-after-order" readonly>${data.name} ${data.secondName}\n${data.phoneNumber}\n${data.city}\n${data.postNumber}</textarea>
            </div>
            <div class="description-after-order">
              <p>Примітки</p>
              <textarea class="text-area-after-order" readonly>Подушки - ${pillowCaseGetMap.get(data.pillowcase)}\nРезинка - ${rubberGetMap.get(data.rubber)}\nОплата - ${paymantMapGet.get(data.payment)}\n${data.description}</textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
  });
}


