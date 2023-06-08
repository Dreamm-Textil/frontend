let inputName = document.querySelector('.input-name-new-item');
let inputMaterial = document.getElementById("ddlViewBy");
let inputSize = document.getElementById("ddlViewB");
let inputColor = document.getElementById("ddlViewColor");
let inputPrice = document.querySelector('.price-new-item');
let inputPriceDiscount = document.querySelector('.price-new-item-discount');
let inputURL = document.querySelector('.url-input-new')
let personalCabineteAfterRegestration = document.querySelector('.personal-cabinete-after-registration');
let personalCabineteAfterRegestrationPhoneSize = document.querySelector('.personal-cabinete-after-registration-phone-size');
const modalBtn = document.querySelector(".log-in-btn");
const modalBtnPhoneSize = document.querySelector(".log-in-btn-phone-size");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector('.form-kek')
let aboutUsBtn = document.querySelector('.nav-button-about-us');
let indexBtn = document.querySelector('.nav-button-index');
let deliveryBtn = document.querySelector('.nav-button-delivery');
let formInputsAdd = document.querySelectorAll(".js-input");
let warningImg = document.querySelector(".warning-img");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

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



deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");



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


function fetchRegions() {

  fetch('https://api.novaposhta.ua/v2.0/json/Address/getCities', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      apiKey: '126cfe52738506aa3e902a49489306dc', 
      modelName: 'Address',
      calledMethod: 'getCities',
      methodProperties: {
    
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const regions = data.data.map((region) => region.Description);
      initializeOptions(regions, 'regions');
    })
    .catch((error) => {
      console.error('Помилка при отриманні областей:', error);
    });
}


function fetchPostOffices(city) {
  console.log(city);
  fetch('https://api.novaposhta.ua/v2.0/json/Address/getWarehouses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      apiKey: '126cfe52738506aa3e902a49489306dc', 
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: city,
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const postOffices = data.data.map((office) => office.Description);
      initializeOptions(postOffices, 'postOffices');
    })
    .catch((error) => {
      console.error('Помилка при отриманні відділень:', error);
    });
}
function initializeOptions(options, containerId) {
  const optionsContainer = document.getElementById(`${containerId}Options`);
  optionsContainer.innerHTML = '';

  const inputElement = document.getElementById(`${containerId}Input`);
  if (inputElement) {
    inputElement.value = '';
  }
  if(containerId === 'regions'){
    options.unshift('Виберіть місто');
  }else{
    options.unshift('Виберіть відділення');
  }
  
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement('div');
    option.classList.add('option');
    option.textContent = options[i];
    option.addEventListener('click', function () {
      selectOption(options[i], containerId);
    });
    optionsContainer.appendChild(option);
  }
  
}

function toggleOptionsVisibility(event, containerId) {
  const optionsContainer = document.getElementById(`${containerId}Options`);
  const inputElement = document.getElementById(`${containerId}Input`);
  let wrapperShow = document.querySelector('.select-wrapper-container');
  let selectInputShow = document.querySelector('.select-input');
  let wrapperShowHouse = document.querySelector('.select-wrapper-container-house')
  let arrowDownClick = document.querySelector('.arrow-down')
  let selectInputHouseShow = document.querySelector('.select-input-house');
  let arrowDownClickHouse = document.querySelector('.arrow-down-house');
  
  if (optionsContainer && inputElement) {
    if (optionsContainer.style.display === 'none') {
      optionsContainer.style.display = 'block';
      inputElement.style.display = 'block';
      wrapperShowHouse.classList.add('select-wrapper-container-house-show')
      wrapperShow.classList.add('select-wrapper-container-show')
      selectInputShow.classList.add('select-input-show')
      arrowDownClick.classList.add('arrow-down-click')
      selectInputHouseShow.classList.add('select-input-house-show')
      arrowDownClickHouse.classList.add('arrow-down-house-click')

      optionsContainer.style.maxHeight = '120px';
      optionsContainer.style.overflowY = 'auto';
    } else {
      optionsContainer.style.display = 'none';
      inputElement.style.display = 'none';
      wrapperShowHouse.classList.remove('select-wrapper-container-house-show')
      arrowDownClick.classList.remove('arrow-down-click')
      selectInputShow.classList.remove('select-input-show')
      wrapperShow.classList.remove('select-wrapper-container-show')
      selectInputHouseShow.classList.remove('select-input-house-show')
      arrowDownClickHouse.classList.remove('arrow-down-house-click')
    }

    if (containerId !== 'regions') {
      const regionsOptionsContainer = document.getElementById('regionsOptions');
      regionsOptionsContainer.style.display = 'none';
      const regionInput = document.getElementById('regionsInput');
      regionInput.style.display = 'none';
      wrapperShow.classList.remove('select-wrapper-container-show')
      selectInputShow.classList.remove('select-input-show')
      arrowDownClick.classList.remove('arrow-down-click')
      
    }
    if (containerId !== 'postOffices') {
      const postOfficesOptionsContainer = document.getElementById('postOfficesOptions');
      postOfficesOptionsContainer.style.display = 'none';
      const postOfficeInput = document.getElementById('postOfficesInput');
      postOfficeInput.style.display = 'none';
      wrapperShowHouse.classList.remove('select-wrapper-container-house-show')
      selectInputHouseShow.classList.remove('select-input-house-show')
      arrowDownClickHouse.classList.remove('arrow-down-house-click')
    }
  }

  event.stopPropagation();
}

function selectOption(option, containerId) {
  if (containerId === 'regions') {
    const selectedOption = document.getElementById('selectedRegion');
    selectedOption.textContent = option;

    const selectedPostOffice = document.getElementById('selectedPostOffice');
    selectedPostOffice.textContent = 'Виберіть відділення';

    const postOfficesOptionsContainer = document.getElementById('postOfficesOptions');
    postOfficesOptionsContainer.innerHTML = '';

    fetchPostOffices(option);
  } else if (containerId === 'postOffices') {
    const selectedPostOffice = document.getElementById('selectedPostOffice');
    selectedPostOffice.textContent = option;

    fetchPostOffices(option); 
  }

  const optionsContainer = document.getElementById(`${containerId}Options`);
  optionsContainer.style.display = 'none';
  
}

function filterOptions(containerId) {
  console.log(containerId);
  const inputElement = document.getElementById(`${containerId}Input`);
  const filterValue = inputElement.value.toUpperCase();

  const optionsContainer = document.getElementById(`${containerId}Options`);
  const options = Array.from(optionsContainer.getElementsByClassName('option'));
if(containerId === 'regions'){
  options.forEach((option) => {
    const optionText = option.textContent.toUpperCase();
    if (optionText.startsWith(filterValue)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
  }
  else{
    options.forEach((option) => {
      const optionText = option.textContent.toUpperCase();
      if (optionText.includes(filterValue)) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });
  }
}

function toggleInputVisibility(event, containerId) {
  const inputElement = document.getElementById(`${containerId}Input`);
  inputElement.style.display = 'block';
  event.stopPropagation();
}

document.addEventListener('click', function () {
  const regionsOptionsContainer = document.getElementById('regionsOptions');
  regionsOptionsContainer.style.display = 'none';

  let wrapperShow = document.querySelector('.select-wrapper-container');
  let selectInputShow = document.querySelector('.select-input');
  let arrowDownClick = document.querySelector('.arrow-down')
  let wrapperShowHouse = document.querySelector('.select-wrapper-container-house')
  let selectInputHouseShow = document.querySelector('.select-input-house');
  let arrowDownClickHouse = document.querySelector('.arrow-down-house');
  wrapperShow.classList.remove('select-wrapper-container-show')
  selectInputShow.classList.remove('select-input-show')
  arrowDownClick.classList.remove('arrow-down-click')
  wrapperShowHouse.classList.remove('select-wrapper-container-house-show')
  selectInputHouseShow.classList.remove('select-input-house-show')
  arrowDownClickHouse.classList.remove('arrow-down-house-click')
  const postOfficesOptionsContainer = document.getElementById('postOfficesOptions');
  postOfficesOptionsContainer.style.display = 'none';

  const regionInput = document.getElementById('regionsInput');
  regionInput.style.display = 'none';


  const postOfficeInput = document.getElementById('postOfficesInput');
  postOfficeInput.style.display = 'none';
});

fetchRegions();
