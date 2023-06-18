import {
  formatNumber,
  enableScroll,
  disableScroll,
} from "../../utils/common.js";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const backBtn = $(".back-button");
const prodsContainer = $(".compete-list");
const overlay = $(".overlay");
const competeBtn = $(".compete-btn");

backBtn.addEventListener("click", () => {
  history.go(-1);
});

const products = JSON.parse(localStorage.getItem("products"));

const notEmpty = products.map((prod) => {
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
});

prodsContainer.innerHTML = notEmpty.join("");

competeBtn.addEventListener("click", (e) => {
  overlay.classList.add("show");
  disableScroll();
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("show");
  enableScroll();
});
