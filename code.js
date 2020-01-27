// Анонимные функции
window.onload = () => {
  let button = document.getElementById("bake");

  button.onclick = () => {
    console.log("Time to bake a cookie");
    cookie.bake(2500);
  };
};

let cookie = {
  instruction: "oven to 3500..",
  bake: time => {
    console.log("Baking the cookie");
    setTimeout(() => {
      alert("Cookie are ready");
      setTimeout(() => {
        alert("Cookie are cool");
      }, 1000);
    }, time);
  }
};
