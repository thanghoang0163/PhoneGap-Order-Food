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
const signInBtn = $(".sign-in .sign-button");
const signUpBtn = $(".sign-up .sign-button");
const phoneSignIn = $(".sign-in .sign-input[type=text]");
const passSignIn = $(".sign-in .sign-input[type=password]");
const phoneSignUp = $(".sign-up .sign-input[type=text]");
const passSignUp = $(".sign-up .sign-input[type=password]");
const checkSignIn = $(".sign-in .check-sign");
const checkSignUp = $(".sign-up .check-sign");

var sign = JSON.parse(localStorage.getItem("sign"));

signIn.addEventListener("click", () => {
  signContent.style = "transform: translateX(0)";
});

signUp.addEventListener("click", () => {
  signContent.style = "transform: translateX(-100vw)";
});

signUpBtn.addEventListener("click", () => {
  if (phoneSignUp.value != "") {
    if (passSignUp.value != "") {
      checkSignUp.style.color = "green";
      checkSignUp.style.display = "block";
      checkSignUp.innerHTML = "Đăng ký thành công";
    } else {
      checkSignUp.style.color = "red";
      checkSignUp.style.display = "block";
      checkSignUp.innerHTML = "Vui lòng điền đầy đủ thông tin!";
    }
  } else {
    checkSignUp.style.color = "red";
    checkSignUp.style.display = "block";
    checkSignUp.innerHTML = "Vui lòng điền đầy đủ thông tin!";
  }

  sign = { phone: phoneSignUp.value, password: passSignUp.value };
  localStorage.setItem("sign", JSON.stringify(sign));
});

async function logJSONData() {
  const userInfo = await fetch("https://testapi.io/api/thanghoang/user");
  const userData = await userInfo.json();
  const productInfo = await fetch("https://testapi.io/api/thanghoang/products");
  const productData = await productInfo.json();

  signInBtn.addEventListener("click", () => {
    if (phoneSignIn.value == "" || passSignIn.value == "") {
      checkSignIn.style.color = "red";
      checkSignIn.style.display = "block";
      checkSignIn.innerHTML = "Vui lòng điền đầy đủ thông tin!";
    } else if (phoneSignIn.value == sign.phone) {
      if (passSignIn.value == sign.password) {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("products", JSON.stringify(productData));
        window.location.href = "/page/product/index.html";
      } else {
        checkSignIn.style.display = "block";
        checkSignIn.innerHTML = "Số điện thoại hoặc mật khẩu sai!";
      }
    } else {
      checkSignIn.style.display = "block";
      checkSignIn.innerHTML = "Số điện thoại hoặc mật khẩu sai!";
    }
  });
}

logJSONData();
