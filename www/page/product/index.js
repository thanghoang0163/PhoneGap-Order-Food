import { formatNumber } from "../../utils/common.js";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const productList = $(".product-list");
const cartBtn = $(".cart-btn");

const products = JSON.parse(localStorage.getItem("products"));

const ul = products.map(
  (prod) => `
<div class="product-item">
  <img src="${prod.image}" class="product-img" />
  <span class="product-name">${prod.name}</span>
  <div class="price-container">
    <span class="product-price">${formatNumber(prod.price)}</span>
    <div class="amount">
      <button class="decrease" data-id="${prod.id}">-</button>
      <span class="number" data-id="${prod.id}">${prod.amount}</span>
      <button class="increase" data-id="${prod.id}">+</button>
    </div>
  </div>
</div>`
);

productList.innerHTML = ul.join("");

const decreaseBtn = $$(".decrease");
const increaseBtn = $$(".increase");
const number = $$(".number");

increaseBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    number.forEach((num) => {
      const id = +e.target.dataset.id;
      if (id == num.getAttribute("data-id")) {
        let count = products[id - 1].amount;
        num.innerHTML = ++count;
        products[id - 1] = {
          ...products[id - 1],
          amount: count,
        };
      }
    });
  });
});

decreaseBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    number.forEach((num) => {
      const id = e.target.dataset.id;
      if (id == num.getAttribute("data-id")) {
        let count = products[id - 1].amount;
        count != 0 ? (num.innerHTML = --count) : (count = 0);
        products[id - 1] = {
          ...products[id - 1],
          amount: count,
        };
      }
    });
  });
});

cartBtn.addEventListener("click", () => {
  localStorage.setItem("products", JSON.stringify(products));
  window.location.href = "/page/cart/index.html";
});
