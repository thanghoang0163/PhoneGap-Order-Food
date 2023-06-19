import { formatNumber } from "../../utils/common.js";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const backBtn = $(".back-button");
const btn = $(".button");
const cartBody = $(".cart-body");
const empty = $(".cart-empty");
const buyBtn = $(".buy-btn");
const products = JSON.parse(localStorage.getItem("products"));

const filterProducts = products
  ? products.filter((item) => {
      if (item.amount) {
        if (item.amount != 0) {
          return item;
        }
      }
    })
  : [];

const notEmpty = filterProducts.map((prod) => {
  return `
  <div class="product-item">
    <img src="${prod.image}" class="product-img" />
    <div class="product-number">
      <span class="product-name">${prod.name}</span>
      <div class="price-container">
        <span class="number">${prod.amount}</span>
        <span class="product-price">${formatNumber(
          prod.price * prod.amount
        )}</span>
      </div>
    </div>
  </div>`;
});

if (filterProducts.length != 0) {
  cartBody.innerHTML = notEmpty.join("");
  btn.classList.add("show");
} else {
  empty.style.display = "flex";
  btn.classList.remove("show");
}

buyBtn.addEventListener("click", () => {
  window.location.href = "/page/checkout/index.html";
});

backBtn.addEventListener("click", () => {
  history.go(-1);
});
