var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const backBtn = $(".back-button");
const checkoutBtn = $(".checkout-btn");
const paymentBtn = $$(".checkout-payment-btn");
const deliveryBtn = $$(".checkout-delivery-btn");
var payment = { title: "Thẻ ATM", method: "payment" };
var delivery = { title: "Giao đến cửa", method: "delivery" };

localStorage.setItem("payment", JSON.stringify(payment));
localStorage.setItem("delivery", JSON.stringify(delivery));

const checkRadioBtn = (btn, obj) => {
  btn.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.checked) {
        obj = { ...obj, title: item.value };
        obj.method == "payment"
          ? localStorage.setItem("payment", JSON.stringify(obj))
          : localStorage.setItem("delivery", JSON.stringify(obj));
        console.log(obj);
      }
    });
  });
};

checkRadioBtn(paymentBtn, payment);
checkRadioBtn(deliveryBtn, delivery);

checkoutBtn.addEventListener("click", () => {
  window.location.href = "/page/compete/index.html";
});

backBtn.addEventListener("click", () => {
  history.go(-1);
});
