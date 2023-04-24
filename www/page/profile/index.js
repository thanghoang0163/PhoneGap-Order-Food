var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const backBtn = $(".back-button");
const editBtns = $$(".profile-edit-btn");
const inputs = $$(".profile-input");

backBtn.addEventListener("click", () => {
  history.go(-1);
});

editBtns.forEach((edit, index) => {
  edit.addEventListener("click", () => {
    inputs.forEach((input, idx) => {
      index == idx ? input.focus() : null;
    });
  });
});

const updateBtn = $(".update-btn");

updateBtn.addEventListener("click", () => {
  window.location.href = "/page/product/index.html";
});
