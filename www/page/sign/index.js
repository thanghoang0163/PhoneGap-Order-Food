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
});

async function logJSONData() {
  const resSign = await fetch("https://testapi.io/api/thanghoang/sign");
  const resUser = await fetch("https://testapi.io/api/thanghoang/user");
  const signData = await resSign.json();
  const userData = await resUser.json();
  signInBtn.addEventListener("click", () => {
    if (phoneSignIn.value == "" || passSignIn.value == "") {
      checkSignIn.style.color = "red";
      checkSignIn.style.display = "block";
      checkSignIn.innerHTML = "Vui lòng điền đầy đủ thông tin!";
    } else if (phoneSignIn.value == signData.user.phone) {
      if (passSignIn.value == signData.user.password) {
        localStorage.setItem("user", JSON.stringify(userData));
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
