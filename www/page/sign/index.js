var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const items = $$(".sign-item");
items[0].classList.add("item--border");
items.forEach((element) => {
  element.addEventListener("click", () => {
    const item = $(".sign-item.item--border");
    item.classList.remove("item--border");
    element.classList.add("item--border");
  });
});

const signIn = $(".sign-item:first-child");
const signUp = $(".sign-item:last-child");
const signContent = $(".sign-content");
const signInBtn = $(".sign-button");
const phoneInput = $(".sign-input[type=text]");
const passInput = $(".sign-input[type=password]");
const checkText = $(".check-sign");

signIn.addEventListener("click", () => {
  signContent.style = "transform: translateX(0)";
});

signUp.addEventListener("click", () => {
  signContent.style = "transform: translateX(-100vw)";
});

async function logJSONData() {
  const resSign = await fetch("https://testapi.io/api/thanghoang/sign");
  const resUser = await fetch("https://testapi.io/api/thanghoang/user");
  const signData = await resSign.json();
  const userData = await resUser.json();
  signInBtn.addEventListener("click", () => {
    if (phoneInput.value == signData.user.phone) {
      if (passInput.value == signData.user.password) {
        localStorage.setItem("user", JSON.stringify(userData));
        window.location.href = "/page/product/index.html";
      } else {
        checkText.style.display = "block";
        checkText.innerHTML = "Mật khẩu sai!";
      }
    } else {
      checkText.style.display = "block";
      checkText.innerHTML = "Số điện thoại hoặc mật khẩu sai!";
    }
  });
}

logJSONData();
