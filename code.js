'use strict'

window.onload = init;

function init() {
  let image = document.getElementsByTagName("img");
  for (let i = 0; i < image.length; i++) {
    image[i].onclick = showAnswer;
  }
}

function showAnswer(eventObj) {
  let image = eventObj.target;
  let name = image.id;
  name = "img/" + name + ".jpg";
  image.src = name;
}




