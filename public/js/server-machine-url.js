let serverMachineUrl = 'http://ec2-18-215-183-214.compute-1.amazonaws.com:8080';


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
  
  setTimeout(() => {
    updateButtonStatus();
  }, 800);
