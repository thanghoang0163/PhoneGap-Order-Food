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

signIn.addEventListener("click", () => {
  signContent.style = "transform: translateX(0)";
});

signUp.addEventListener("click", () => {
  signContent.style = "transform: translateX(-100vw)";
});
