let msg = document.querySelector(".input");
let button = document.querySelector("button");
let out = document.querySelector(".out");

button.onclick = function() {
  console.log(msg.value);
  out.innerHTML = msg.value;
  msg.value = "";
};
