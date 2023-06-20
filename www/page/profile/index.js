var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const backBtn = $(".back-button");
const editBtns = $$(".profile-edit-btn");
const inputs = $$(".profile-input");
const name = $(".name");
const phone = $(".phone");
const address = $(".address");
const updateBtn = $(".update-btn");

editBtns.forEach((edit, index) => {
  edit.addEventListener("click", () => {
    inputs.forEach((input, idx) => {
      input.removeAttribute("disabled");
      index == idx ? input.focus() : null;
    });
  });
});

const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  name.value = user.name;
  phone.value = user.phone;
  address.value = user.address;
}

var updatedInfo = {
  name: name.value,
  phone: phone.value,
  address: address.value,
};

inputs.forEach((item) => {
  item.addEventListener("input", (e) => {
    const type = e.target.dataset.type;
    updatedInfo = { ...updatedInfo, [type]: e.target.value };
  });
});

updateBtn.addEventListener("click", () => {
  localStorage.setItem("user", JSON.stringify(updatedInfo));
  window.location.href = "/page/product/index.html";
});

backBtn.addEventListener("click", () => {
  history.go(-1);
});
