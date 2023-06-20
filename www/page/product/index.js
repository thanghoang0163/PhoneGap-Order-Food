import { formatNumber } from "../../utils/common.js";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const productList = $(".product-list");
const cartBtn = $(".cart-btn");

function renderProducts() {
  fetch("https://testapi.io/api/thanghoang/products", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then((products) => {
      var updatedProducts = products.map((item) => {
        return { ...item, amount: 0 };
      });

      const ul = products.map(
        (prod) => `
      <div class="product-item">
        <img src="${prod.image}" class="product-img" />
        <span class="product-name">${prod.name}</span>
        <div class="price-container">
          <span class="product-price">${formatNumber(prod.price)}</span>
          <div class="amount">
            <button class="decrease" data-id="${prod.id}">-</button>
            <span class="number" data-id="${prod.id}">0</span>
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
              let count = updatedProducts[id - 1].amount;
              num.innerHTML = ++count;
              updatedProducts[id - 1] = {
                ...updatedProducts[id - 1],
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
              let count = updatedProducts[id - 1].amount;
              count != 0 ? (num.innerHTML = --count) : (count = 0);
              updatedProducts[id - 1] = {
                ...updatedProducts[id - 1],
                amount: count,
              };
            }
          });
        });
      });

      cartBtn.addEventListener("click", () => {
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        window.location.href = "/page/cart/index.html";
      });
    });
}

renderProducts();
