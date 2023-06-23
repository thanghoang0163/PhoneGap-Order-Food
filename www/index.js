var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const navBtn = $(".splash-btn");

async function logJSONData() {
  const resSign = await fetch("https://testapi.io/api/thanghoang/sign");
  const signData = await resSign.json();

  navBtn.addEventListener("click", () => {
    localStorage.setItem("sign", JSON.stringify(signData));
    window.location.href = "/page/sign/index.html";
  });
}

logJSONData();
