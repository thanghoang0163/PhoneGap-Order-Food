var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const backBtn = $(".back-button");

backBtn.addEventListener("click", () => {
  history.go(-1);
});
