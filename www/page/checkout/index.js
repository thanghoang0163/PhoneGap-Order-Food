var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const backBtn = $(".back-button");
const checkoutBtn = $(".checkout-btn");

backBtn.addEventListener("click", () => {
  history.go(-1);
});

checkoutBtn.addEventListener("click", () => {
  window.location.href = "/page/compete/index.html";
});
