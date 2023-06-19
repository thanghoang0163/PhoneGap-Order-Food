import {
  formatNumber,
  enableScroll,
  disableScroll,
} from "../../utils/common.js";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const backBtn = $(".back-button");
const buyContainer = $(".buy");
const buyBtn = $(".buy-btn");
const btn = $(".button");
const prodsContainer = $(".compete-list");
const overlay = $(".overlay");
const competeBtn = $(".compete-btn");
const competeBody = $(".compete-body");
const paymentImg = $(".compete-bank-img");
const paymentLabel = $(".compete-payment-text");
const deliveryLabel = $(".compete-delivery-text");
const phone = $(".compete-phone");
const name = $(".compete-name");
const address = $(".compete-address");
const total = $(".compete-total-number");

const payment = JSON.parse(localStorage.getItem("payment"));
const delivery = JSON.parse(localStorage.getItem("delivery"));

if (payment) {
  paymentLabel.innerHTML = payment.title;
  if (payment.title == "Thẻ ATM") {
    paymentImg.setAttribute("src", "../../img/card.png");
    paymentImg.classList.add("compete-card");
  } else {
    paymentImg.setAttribute("src", "../../img/bank.png");
    paymentImg.classList.add("compete-bank");
  }
}

if (delivery) {
  deliveryLabel.innerHTML = delivery.title;
}

const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  phone.innerHTML = user.phone;
  name.innerHTML = user.name;
  address.innerHTML = user.address;
}

const products = JSON.parse(localStorage.getItem("products"));

products ? btn.classList.add("show") : btn.classList.remove("show");

const notEmpty = products
  ? products.map((prod) => {
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
    })
  : [];

prodsContainer.innerHTML = notEmpty.join("");

total.innerHTML = formatNumber(
  products.reduce((acc, curr) => acc + curr.amount * curr.price, 0)
);

competeBtn.addEventListener("click", (e) => {
  overlay.classList.add("show");
  disableScroll();
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("show");
  enableScroll();
  competeBody.innerHTML = "";
  localStorage.removeItem("products");
  localStorage.removeItem("payment");
  localStorage.removeItem("delivery");
  buyContainer.classList.add("show");
});

buyBtn.addEventListener("click", () => {
  window.location.href = "/page/product/index.html";
});

backBtn.addEventListener("click", () => {
  history.go(-1);
});
