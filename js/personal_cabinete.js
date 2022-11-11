let profileBtn = document.querySelector('.profile-personal-cabinete');
let personalInfo = document.querySelector('.profile-personal-cabinete-container');
let personalInfoPhoneGmail = document.querySelector('.profile-personal-cabinete-phone-gmail');
let changePasswordBtn = document.querySelector('.change-password-personal-cabinete');
let profileMainRegestration = document.querySelector('.main-regestration'); 

deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");
personalCabineteAfterRegestration.classList.add("nav-button-personal-cabinete-click");



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



