var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const backBtn = $(".back-button");
const editBtns = $$(".profile-edit-btn");
const inputs = $$(".profile-input");
const name = $(".name");
const phone = $(".phone");
const address = $(".address");
const updateBtn = $(".update-btn");

backBtn.addEventListener("click", () => {
  history.go(-1);
});

editBtns.forEach((edit, index) => {
  edit.addEventListener("click", () => {
    inputs.forEach((input, idx) => {
      input.removeAttribute("disabled");
      index == idx ? input.focus() : null;
    });
  });
});

const user = JSON.parse(localStorage.getItem("user"));

name.value = user.name;
phone.value = user.phone;
address.value = user.address;

updateBtn.addEventListener("click", () => {
  var updatedInfo = { name: name, phone: phone, address: address };
  localStorage.setItem("user", JSON.stringify(updatedInfo));
  window.location.href = "/page/product/index.html";
});
