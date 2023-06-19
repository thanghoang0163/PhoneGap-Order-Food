// import { database } from "./firebase.js";
// import { ref, child, get } from "firebase/database";
import { formatNumber } from "../../utils/common.js";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const sideMenu = $(".side-menu");
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
      localStorage.setItem("products", JSON.stringify(products));

      const ul = products.map(
        (prod) => `
      <div class="product-item">
        <img src="${prod.image}" class="product-img" />
        <span class="product-name">${prod.name}</span>
        <div class="price-container">
          <span class="product-price">${formatNumber(prod.price)}</span>
          <div class="amount">
            <button class="decrease" ">-</button>
            <span class="number">0</span>
            <button class="increase" data-id="${prod.id}">+</button>
          </div>
        </div>
      </div>`
      );

      productList.innerHTML = ul.join("");

      const decreaseBtn = $(".decrease");
      const increaseBtn = $(".increase");
      const number = $(".number");
      const prodItem = $$(".product-item");
      var count = 0;

      prodItem.forEach((item) => {
        increaseBtn.addEventListener("click", (e) => {
          if (e.target.dataset.id == item.id) {
            number.innerHTML = count++;
          }
        });
      });

      cartBtn.addEventListener("click", () => {
        const updatedProds = products.map((prod) => ({
          ...prod,
          amount: 1,
        }));
        localStorage.setItem("products", JSON.stringify(updatedProds));
        window.location.href = "/page/cart/index.html";
      });
    });
}

renderProducts();

// const getAPI = () => {
//   const dbRef = ref(database);
//   get(child(dbRef, `user/1`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// getAPI();

// async function logJSONData() {
//   // main.js

//   // POST request using fetch()
//   fetch("https://testapi.io/api/thanghoang/sign", {
//     // Adding method type
//     method: "PUT",

//     // Adding body or contents to send
//     body: JSON.stringify({
//       user: {
//         phone: "0123456789",
//         password: "121",
//       },
//     }),

//     // Adding headers to the request
//     headers: {
//       Accept: "application/json",
//       "Content-type": "application/json",
//     },
//   })
//     // Converting to JSON
//     .then((response) => response.json())

//     // Displaying results to console
//     .then((json) => console.log(json));
// }

// logJSONData();
