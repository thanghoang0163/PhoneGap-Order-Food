var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Number formatting
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const sideMenu = $(".side-menu");
const menuBtn = $(".product-menu-btn");
const closeBtn = $(".close-btn");

menuBtn.addEventListener("click", () => {
  sideMenu.style = `transform: translateX(0)`;
});

closeBtn.addEventListener("click", () => {
  sideMenu.style = `transform: translateX(-100%)`;
});

const price = $(".product-price");
formatNumber(price.innerText);
