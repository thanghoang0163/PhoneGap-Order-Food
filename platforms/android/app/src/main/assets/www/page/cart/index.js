import { formatNumber } from "../../utils/common.js";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const backBtn = $(".back-button");
const cartBody = $(".cart-body");
const empty = $(".cart-empty");
const buyBtn = $(".buy-btn");
const products = JSON.parse(localStorage.getItem("products"));

const notEmpty = products.map((prod) => {
  if (prod.amount) {
    if (prod.amount != 0) {
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
    }
  }
});

products
  ? (cartBody.innerHTML = notEmpty.join(""))
  : (empty.style.display = "flex");

backBtn.addEventListener("click", () => {
  history.go(-1);
});

buyBtn.addEventListener("click", () => {
  window.location.href = "/page/checkout/index.html";
});
