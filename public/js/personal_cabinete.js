let profileBtn = document.querySelector('.profile-personal-cabinete');
let personalInfo = document.querySelector('.profile-personal-cabinete-container');
let personalInfoPhoneGmail = document.querySelector('.profile-personal-cabinete-phone-gmail');
let changePasswordBtn = document.querySelector('.change-password-personal-cabinete');
let profileMainRegestration = document.querySelector('.main-regestration'); 

let counterBagadge = document.querySelector('.counter');
count = localStorage.getItem("numberLS");

  if(count<1 || count === 0){
    counterBagadge.classList.remove('counter-show')
  }
  else{
    counterBagadge.classList.add('counter-show')
  }
  if (count !== ''){
    let numberArray1 = [];
    numberArray1 = count.split(',');
    numberArray1.shift();
    counterBagadge.innerHTML = numberArray1.length;
}

function cliclAddToBagBtn(id){ 
 counterBagadge.classList.add('counter-show')
let arrayBagage = [localStorage.getItem("numberLS")];
let count;
let numberArray = [];
  count = localStorage.getItem("numberLS");
  numberArray = count.split(',');
  counterBagadge.value = numberArray.length;
  console.log(counterBagadge.value);
  counterBagadge.innerHTML = counterBagadge.value++;
  arrayBagage.push(id)
  localStorage.setItem("numberLS", arrayBagage);
}
// deliveryBtn.classList.remove("nav-button-about-us-click");
// aboutUsBtn.classList.remove("nav-button-about-us-click");
// indexBtn.classList.remove("nav-button-index-click");
// personalCabineteAfterRegestration.classList.add("nav-button-personal-cabinete-click");



// let as = document.querySelector('.change-profile-btn-personal-cabinete');
// as.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(123);
// })

// window.addEventListener("load", function(e){
//     // profileBtn.classList.add("profile-btn-click");
//     // changePasswordBtn.classList.remove("profile-btn-click");
//     e.preventDefault();
//     fetch('http://ec2-18-212-253-81.compute-1.amazonaws.com:8080/api/user', {
//       method: 'GET',
//       headers: {
//         'Access-Control-Allow-Origin':'*',
//         'Content-Type': 'application/json',
//         'Authorization':  document.cookie.valueOf('Authorization').substring(14)
//       },
//     })
//     .then((response) => response.json())
//     .then((json) => profileMainRegestration.innerHTML = `<div class="name">
//                                                             <h2>Ім'я</h2>
//                                                             <input value="${json.name}" class="input input-name js-input">
//                                                         </div>
//                                                         <div class="surname">
//                                                             <h2>Прізвище</h2>
//                                                             <input value="${json.secondName}" class="input input-surname js-input">
//                                                         </div>
//                                                         <div class="phone-number">
//                                                             <h2>Телефон</h2>
//                                                             <input value="${json.phoneNumber}" class="input input-phone-number js-input">
//                                                         </div>
//                                                         <div class="gmail-addres">
//                                                             <h2>Адреса електронної пошти</h2>
//                                                             <input value="${json.email}" class="input input-gmail-addres js-input">
//                                                         </div>                                
//                                                         `);                                                          
// })



