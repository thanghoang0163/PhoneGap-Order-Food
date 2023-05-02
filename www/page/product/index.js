// import { database } from "./firebase";
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

const getAPI = () => {
  const dbRef = ref(database);
  get(child(dbRef, `user/1`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

// getAPI();
