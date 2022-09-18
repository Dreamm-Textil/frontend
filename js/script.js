const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const modalBtn = document.querySelector(".log-in-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const inputLogin = document.querySelector(".login");
const inputPassword = document.querySelector(".password")

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

const btns = document.querySelectorAll(".show-password-btn");
btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const test = e.currentTarget;
    test.classList.toggle("show-password");
  })
})

const autorizationBtn = document.querySelector(".autorization-btn");
autorizationBtn.addEventListener("click", function(){
  let arrLogin = [];
  let arrPassword = [];
  arrLogin.push(inputLogin.value)
  arrPassword.push(inputPassword.value);
  console.log("Login:" + arrLogin.join('') + " " + "Password:" + arrPassword.join(''));
})