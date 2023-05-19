// import { database } from "./firebase.js";
// import { ref, child, get } from "firebase/database";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Number formatting
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const sideMenu = $(".side-menu");
const menuBtn = $(".product-menu-btn");
const closeBtn = $(".close-btn");
const price = $(".product-price");
const productList = $(".product-list");

menuBtn.addEventListener("click", () => {
  sideMenu.style = `transform: translateX(0)`;
});

closeBtn.addEventListener("click", () => {
  sideMenu.style = `transform: translateX(-100%)`;
});

price.innerHTML = formatNumber(50000);

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

async function logJSONData() {
  // main.js

  // POST request using fetch()
  fetch("https://testapi.io/api/thanghoang/sign", {
    // Adding method type
    method: "PUT",

    // Adding body or contents to send
    body: JSON.stringify({
      user: {
        phone: "0123456789",
        password: "121",
      },
    }),

    // Adding headers to the request
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
}

logJSONData();
