let serverMachineUrl = 'http://ec2-54-204-73-97.compute-1.amazonaws.com:8080';


if (!localStorage.getItem('numberLS')) {
    localStorage.setItem('numberLS', '');
  }
  let counterBagadge = document.querySelector('.counter');
  let counterBagadgePhoneSize = document.querySelector('.counter-phone-size');
  let count = localStorage.getItem("numberLS");
    if(count<1 || count === 0){
      counterBagadge.classList.remove('counter-show')
    }
    else{
      counterBagadge.classList.add('counter-show')
    }
    if (count !== ''){
      let numberArray1 = [];
      numberArray1 = count.split(',');
      counterBagadge.innerHTML = numberArray1.length;
}



if (!document.cookie.includes('likes')) {
 document.cookie = "likes=";
}
let counterBagadgeLike = document.querySelector('.counter-like');

function getCookieValue(cookieName) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + '=')) {
      return cookie.substring(cookieName.length + 1);
    }
  }
  return null;
}

let countLike = getCookieValue("likes");

  if(countLike<1 || countLike === 0){
    counterBagadgeLike.classList.remove('counter-like-show')
  }
  else{
    counterBagadgeLike.classList.add('counter-like-show')
  }
  if (countLike !== ''){
    let numberArray1 = [];
    numberArray1 = countLike.split(',');
    counterBagadgeLike.innerHTML = numberArray1.length - 1;
}


function updateButtonStatus() {
    let buttons = document.querySelectorAll("[id^='product-']");
  
    buttons.forEach(function(button) {
      let id = button.id.split("-")[1];
      let arrayBagage = localStorage.getItem("numberLS") ? localStorage.getItem("numberLS").split(',') : [];
      if (arrayBagage.includes(id.toString())) {
        button.innerHTML = "Вже у кошику";
        button.disabled = true;
      } else {
        button.innerHTML = "В кошик";
        button.disabled = false; 
      }
    });
  }

  function updateButtonStatusLike() {
    let buttons = document.querySelectorAll("[id^='like-']");
    buttons.forEach(function(button) {
      let id = button.id.split("-")[1];
      let arrayBagageLike = document.cookie.includes("likes")
  ? document.cookie.split("likes=")[1].split(",")
  : [];
      if (arrayBagageLike.includes(id.toString())) {
        button.innerHTML = `<i class="fa-solid fa-heart" style="color: #ea4c89; font-size: 17px;"></i>`;
      } else {
        button.innerHTML = `<i class="far fa-heart" aria-hidden="true" style="font-size: 17px;" onmouseover="this.style.color='#EA4C89';" onmouseout="this.style.color='black';"></i>`;
      }
    });
  }


  
  function cliclAddToBagBtn(id) {
    counterBagadge.classList.add('counter-show');    
    let arrayBagage = localStorage.getItem("numberLS") ? localStorage.getItem("numberLS").split(',') : [];
    let count = arrayBagage.length;
    counterBagadge.value = count;
    if (!arrayBagage.includes(id.toString())) {
    let button = document.getElementById(`product-${id}-button`);
      counterBagadge.innerHTML = ++count;
      arrayBagage.push(id.toString());
      localStorage.setItem("numberLS", arrayBagage.join(','));
      button.innerHTML = "Вже у кошику";
    button.disabled = true;
    }
  }


  function cliclLikeBtn(id){
  counterBagadgeLike.classList.add('counter-like-show');
  let arrayBagageLike = document.cookie.includes("likes")
    ? document.cookie.split("likes=")[1].split(",")
    : [];
  let countLike = arrayBagageLike.length - 1;
  counterBagadge.value = countLike;
  let button = document.getElementById(`like-${id}-button`);

  if (arrayBagageLike.includes(id.toString())) {
    // Видалення id з кукі
    arrayBagageLike = arrayBagageLike.filter(item => item !== id.toString());
    document.cookie = `likes=${arrayBagageLike.join(',')}`;
    countLike--;
    // Зміна іконки на незаповнене серце
    button.innerHTML = `<i class="fa-regular fa-heart" style="color: #000; font-size: 17px;" onmouseover="this.style.color='#EA4C89';" onmouseout="this.style.color='black';"></i>`;
  } else {
    // Додавання id до кукі
    arrayBagageLike.unshift(id.toString());
    document.cookie = `likes=${arrayBagageLike.join(',')}`;
    // Зміна іконки на заповнене серце
    button.innerHTML = `<i class="fa-solid fa-heart" style="color: #ea4c89; font-size: 17px;"></i>`;
    countLike++;
  }
  if(countLike<1 || countLike === 0){
    counterBagadgeLike.classList.remove('counter-like-show')
  }
  counterBagadgeLike.innerHTML = countLike;
  }
  
  setTimeout(() => {
    updateButtonStatus();
    updateButtonStatusLike();
  }, 800);

  
  function getCookieValue(cookieName) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + '=')) {
        return cookie.substring(cookieName.length + 1);
      }
    }
  
    return null;
  }
  
  const authorizationCookieValue = getCookieValue('Authorization');
