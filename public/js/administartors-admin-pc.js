
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
  console.log('clear');
}else{
  
  console.log('user');
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
 
 administrationPersonalCabinete.classList.add('profile-btn-click')
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
    
let orderContainer = document.querySelector('.js-form-personal-cabinete');


if (window.innerWidth >= 1030) {
orderContainer.innerHTML = `<table>
<thead>
    <tr class="table-tr">
        <th>Ім'я</th>
        <th>Прізвище</th>
        <th class="th-last-title">Дії</th>
      </tr>
  <tr class="table-tr-phone">
    <th>Ім'я</th>
    <th>Прізвище</th>
    <th class="th-last-title">Дії</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Олег</td>
    <td>Кривошапенко</td>
    <td><button class="more-about-order">Видалити</button></td>
  </tr>
  <tr>
    <td>Олег</td>
    <td>Кривошапенко</td>
    <td><button class="more-about-order">Видалити</button></td>
  </tr>
  <!-- Додайте інші рядки таблиці тут за необхідністю -->
</tbody>
</table> `
    }
    else{
        orderContainer.innerHTML =`<table>
        <thead>
        <tr class="table-tr-phone">
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th class="th-last-title">Дії</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Олег</td>
            <td>Кривошапенко</td>
            <td><button class="more-about-order">Видалити</button></td>
        </tr>
        
        </tbody>
    </table>  
    <table>
        <thead>
        <tr class="table-tr-phone">
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th class="th-last-title">Дії</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Олег</td>
            <td>Кривошапенко</td>
            <td><button class="more-about-order">Видалити</button></td>
        </tr>
        
        </tbody>
    </table>  `
    }

