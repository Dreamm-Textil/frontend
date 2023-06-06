let inputName = document.querySelector(".input-name-new-item");
let inputMaterial = document.getElementById("ddlViewBy");
let inputSize = document.getElementById("ddlViewB");
let inputColor = document.getElementById("ddlViewColor");
let inputPrice = document.querySelector(".price-new-item");
let inputPriceDiscount = document.querySelector(".price-new-item-discount");
let inputURL = document.querySelector(".url-input-new");
let personalCabineteAfterRegestration = document.querySelector(
  ".personal-cabinete-after-registration"
);
let personalCabineteAfterRegestrationPhoneSize = document.querySelector(
  ".personal-cabinete-after-registration-phone-size"
);
const modalBtn = document.querySelector(".log-in-btn");
const modalBtnPhoneSize = document.querySelector(".log-in-btn-phone-size");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector(".form-kek");
let aboutUsBtn = document.querySelector(".nav-button-about-us");
let indexBtn = document.querySelector(".nav-button-index");
let deliveryBtn = document.querySelector(".nav-button-delivery");
let formInputsAdd = document.querySelectorAll(".js-input");
let warningImg = document.querySelector(".warning-img");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

deliveryBtn.classList.remove("nav-button-about-us-click");
aboutUsBtn.classList.remove("nav-button-about-us-click");
indexBtn.classList.remove("nav-button-index-click");

navToggle.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.toggle("open-modal");
});

modalBtnPhoneSize.addEventListener("click", function () {
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
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const showPassword = e.currentTarget;
    showPassword.classList.toggle("show-password");
  });
});

let value_or_null = (document.cookie.match(
  /^(?:.*;)?\s*Authorization\s*=\s*([^;]+)(?:.*)?$/
) || [, null])[1];
if (value_or_null === null) {
  console.log("clear");
} else {
  console.log("user");
  personalCabineteAfterRegestration.classList.add(
    "personal-cabinete-after-registration-show"
  );
  modalBtn.classList.add("log-in-btn-unshow");
  personalCabineteAfterRegestrationPhoneSize.classList.add(
    "personal-cabinete-after-registration-phone-size-show"
  );
  modalBtnPhoneSize.classList.add("log-in-btn-unshow");
}

let main = document.querySelector(".kek");
let cartProductsPage = document.querySelector(".cart__products-product");
var x = localStorage.getItem("numberLS");

let arr = [];
arr = x.split(",");
let displayedElements = [];
let quantityCount = {};
arr.forEach((e) => {
  if (quantityCount[e]) {
    quantityCount[e]++;
  } else {
    quantityCount[e] = 1;
  }
});

arr.forEach((e) => {
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

  fetch(`${serverMachineUrl}/api/textile?id=${e}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const storedQuantity = localStorage.getItem("numberLS");

      // Перевірити, чи є значення пустим
      if (storedQuantity === "") {
        cartProductsPage.classList.add("cart__products-product-unshow");
        cartProductsPage.innerHTML = `<h2 class="title-cart-clear">В кошику не має товарів!</h2>
        <a type="button" href="index.html" class="back-from-cart-to-catalog">Повернутися до покупок</a>`;
      } else {
        cartProductsPage.classList.remove("cart__products-product-unshow");
        if (!displayedElements.includes(json.id)) {
          // const quantity = quantityCount[json.id];
          const quantity = quantityCount[json.id];
          const storedQuantity = localStorage.getItem("numberLS");
          const storedQuantityArray = storedQuantity
            ? storedQuantity.split(",")
            : [];
          const storedQuantityCount = storedQuantityArray.filter(
            (id) => id === json.id
          ).length;
          formattedDiscountPrice = json.discountPrice.toLocaleString("uk-UA");
          cartProductsPage.innerHTML += `<div class="products-container">
                                          <div class="img-cart">
                                          <img src="${json.imgUrl}">
                                        </div>
                                        <span class="cart-name">${
                                          json.name
                                        }</span>
                                        <table class="cart__config">
                                          <tbody><tr>
                                              <th class="size-cart">Розмір:</th>
                                              <td>${sizeMap.get(json.size)}</td>
                                          </tr>
                                              <th class="color-cart">Колір:</th>
                                              <td>${colorMap.get(
                                                json.color
                                              )}</td>
                                          </tr>
                                          </tr>
                                              <th class="material-cart">Матеріал:</th>
                                              <td>${materialMap.get(
                                                json.material
                                              )}</td>
                                          </tr>
                                          </tbody>
                                        </table>
                                        <span type="number" class="cart-price" data-id="${
                                          json.id
                                        }" value="1">${formattedDiscountPrice} грн</span>
                                        <div class="cart__counter">
                                          <span>Кількість:</span>
                                          <input  name="quantity" сlass="input-quantity" data-id="${
                                            json.id
                                          }" value="${quantity}">
                                          <div class="arrow-container">
                                            <img type="button" src="images/increase.png" class="increase" data-id="${
                                              json.id
                                            }"></img>
                                            <img class="decrease" type="button" src="images/increase.png" data-id="${
                                              json.id
                                            }"></img>
                                          </div>
                                        </div>
                                        <span class="cart-price-all" data-id="${
                                          json.id
                                        }" value="0" id="cart-price-all-${
            json.id
          }" data-price="${json.discountPrice * quantity}"></span>
                                        <button data-id="${
                                          json.id
                                        }" class="cart-delete-btn"><img src="images/delete.png"></button>
                                      </div> `;
          let cartSummaryContainer = document.querySelector(
            ".cart-summary-container"
          );
          cartSummaryContainer.innerHTML = `<div class="cart-summary">
                                                                          <h2 class="cart-summaty-title">Підсумок замовлення:</h2>
                                                                          <div class="cart-summary-links">
                                                                            <a type="button" href="index.html" class="back-from-cart-to-catalog">Повернутися до покупок</a>
                                                                            <a type="button" class="to-order">Оформити<br>замовлення</a>
                                                                          </div>
                                                                        </div>`;
          let totalSum = 0;

          displayedElements.push(json.id);
          let decreaseButtons = document.querySelectorAll(".decrease");
          let increaseButtons = document.querySelectorAll(".increase");
          let deleteBtn = document.querySelectorAll(".cart-delete-btn");
          let quantityInputs = document.querySelectorAll(
            'input[name="quantity"]'
          );

          // Створити новий елемент <span> зі сформованою ціною
          const button = document.querySelector(`button[data-id="${json.id}"]`);

          // Отримати батьківський елемент кнопки
          const parentElement = button.parentNode;

          // Створити новий елемент <span> зі сформованою ціною
          const newPriceElement = document.createElement("span");
          const price = json.discountPrice * quantity;
          const formattedPrice = formatPrice(price);
          newPriceElement.innerText = `${formattedPrice} грн`;

          // Вставити новий елемент перед кнопкою
          parentElement.insertBefore(newPriceElement, button);

          let cartPriceElements = document.querySelectorAll(".cart-price");
          let cartPriceAllElements =
            document.querySelectorAll(".cart-price-all");
          cartPriceAllElements.forEach((element) => {
            const price = parseFloat(element.getAttribute("data-price"));
            let formattedPrice = formatPrice(price);
            totalSum += price;
          });

          function formatPrice(price) {
            return price.toLocaleString("uk-UA");
          }

          // Format the total sum without decimal if it ends with .00
          let formattedTotalSum = totalSum.toFixed(2);
          if (formattedTotalSum.endsWith(".00")) {
            formattedTotalSum = formattedTotalSum.replace(".00", "");
          }
          formattedTotalSum = totalSum.toLocaleString("uk-UA");
          // Update the cart summary element with the total sum
          const cartSummaryTitle = document.querySelector(
            ".cart-summaty-title"
          );
          cartSummaryTitle.innerText = `Підсумок замовлення: ${formattedTotalSum} грн`;

          deleteBtn.forEach((button) => {
            button.addEventListener("click", () => {
              // Get the parent container of the item to be deleted
              const container = button.closest(".products-container");

              // Get the data-id attribute value of the item
              const id = container
                .querySelector(".cart-price-all")
                .getAttribute("data-id");

              // Remove the item from the cart
              container.remove();

              // Update the local storage by removing the item's ID
              const storedQuantity = localStorage.getItem("numberLS");
              const storedQuantityArray = storedQuantity
                ? storedQuantity.split(",")
                : [];
              const updatedQuantityArray = storedQuantityArray.filter(
                (itemId) => itemId !== id
              );
              localStorage.setItem("numberLS", updatedQuantityArray.join(","));

              location.reload();
            });
          });

          increaseButtons.forEach((button) => {
            button.addEventListener("click", () => {
              let id = button.getAttribute("data-id");
              let quantityInput = document.querySelector(
                `input[data-id="${id}"]`
              );
              let quantity = parseInt(quantityInput.value);
              let arrayBagage = localStorage.getItem("numberLS")
                ? localStorage.getItem("numberLS").split(",")
                : [];
              let count = arrayBagage.length;
              counterBagadge.innerHTML = ++count;
              let storedQuantity = localStorage.getItem("numberLS");
              let storedQuantityArray = storedQuantity
                ? storedQuantity.split(",")
                : [];
              if (
                storedQuantityArray.includes(id) &&
                !quantityCount[id].increased
              ) {
                quantity += 1;
                quantityCount[id].increased = true;
              } else {
                quantity = 1;
              }
              quantityInput.value = quantity;
              updateCartPrice(id, quantity);
              addToLocalStorage(id, quantity);
              location.reload();
            });
          });

          decreaseButtons.forEach((button) => {
            button.addEventListener("click", () => {
              let id = button.getAttribute("data-id");
              let quantityInput = document.querySelector(
                `input[data-id="${id}"]`
              );
              let quantity = parseInt(quantityInput.value);

              if (quantity > 1) {
                let arrayBagage = localStorage.getItem("numberLS")
                  ? localStorage.getItem("numberLS").split(",")
                  : [];
                let count = arrayBagage.length;
                counterBagadge.innerHTML = --count;
                quantity--;
                quantityInput.value = quantity;
                updateCartPrice(id, quantity);
                removeFromLocalStorage(id);
                quantityCount[id] = quantity;
                location.reload();
              }
            });
          });
          // --------------------------------------------

          const quantityInputse = document.querySelectorAll(
            'input[name="quantity"]'
          );

          // Add event listeners to each quantity input
          quantityInputs.forEach((quantityInput) => {
            quantityInput.addEventListener("blur", (e) => {
              const id = quantityInput.getAttribute("data-id");
              if (quantityInput.value < 0) {
                localStorage.removeItem(id); // Видалити ID елементу з localStorage
          
                // Оновити значення в local storage
                const storedIds = localStorage.getItem("numberLS");
                if (storedIds) {
                  const idsArray = storedIds.split(",");
                  const filteredIds = idsArray.filter((item) => item !== id);
                  localStorage.setItem("numberLS", filteredIds.join(","));
                }
          
                location.reload();
                return;
              } else {
                // Решта коду для оновлення значення кількості та перезавантаження сторінки
                const newQuantity = parseInt(quantityInput.value);
                e.preventDefault();
                const storedIds = localStorage.getItem("numberLS");
          
                if (storedIds) {
                  const idsArray = storedIds.split(",");
                  const filteredIds = idsArray.filter((item) => item !== id);
                  updateCartPrice(id, newQuantity);
                  const idsToStore = Array(newQuantity).fill(id);
                  localStorage.setItem("numberLS", filteredIds.concat(idsToStore).join(","));
                }
          
                location.reload();
              }
            });
          });

          // ============================================================================

          function updateCartPrice(id, quantity) {
            // Оновити ціну для заданого ідентифікатора товару
            const price = parseFloat(prices[id]);
            const cartPriceElement = document.querySelector(
              `.cart-price[data-id="${id}"]`
            );
            const cartPriceAllElement = document.querySelector(
              `.cart-price-all[data-id="${id}"]`
            );
            const totalPrice = price * quantity;

            // Оновити відображення ціни та загальної ціни
            cartPriceElement.innerText = price.toFixed(2);
            cartPriceAllElement.innerText = totalPrice.toFixed(2);
          }

          function addToLocalStorage(id) {
            let storedQuantity = localStorage.getItem("numberLS");

            if (storedQuantity) {
              let updatedQuantity = `${storedQuantity},${id}`;
              localStorage.setItem("numberLS", updatedQuantity);
            } else {
              localStorage.setItem("numberLS", id);
            }
          }

          function removeFromLocalStorage(id) {
            let storedQuantity = localStorage.getItem("numberLS");

            if (storedQuantity) {
              let quantityArray = storedQuantity.split(",");
              let index = quantityArray.lastIndexOf(id);

              if (index !== -1) {
                quantityArray.splice(index, 1);
                let updatedQuantity = quantityArray.join(",");
                localStorage.setItem("numberLS", updatedQuantity);
              }
            }
          }

          function updateCartPrice(id, quantity) {
            let priceElement = document.querySelector(
              `.cart-price[data-id="${id}"]`
            );
            let cartPriceAllElement = document.querySelector(
              `.cart-price-all[data-id="${id}"]`
            );

            if (cartPriceAllElement) {
              let price = parseFloat(priceElement.innerText);
              let totalPrice = price * quantity;

              cartPriceAllElement.innerHTML =
                totalPrice % 1 === 0
                  ? totalPrice.toFixed(0)
                  : totalPrice.toFixed(2);
            } else {
              console.error(`Element with data-id "${id}" not found.`);
            }
          }
        }
      }
    });
});
