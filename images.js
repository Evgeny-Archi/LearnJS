"use strict";

window.onload = init;

/*
// Размытие при клике на картинку
function init() {
  let image = document.getElementsByTagName("img");
  for (let i = 0; i < image.length; i++) {
    image[i].onclick = showAnswer;
    image[i].onmousemove = showCoordinates;
  }
}

function showAnswer(eventObj) {
  let image = eventObj.target;
  let name = image.id;
  name = "img/" + name + ".jpg";
  image.src = name;

  // возвращает картинку с блюром через 1 сек.
  setTimeout(() => {
    name = "img/" + image.id + "blur.jpg";
    image.src = name;    
  }, 1000);
}

// Выводит координаты мышки на картинке
function showCoordinates(eventObj) {
  let coordinate = document.getElementById("coordinates");
  coordinate.innerHTML = "X: " + eventObj.offsetX + ". Y: " + eventObj.offsetY;
}
*/

// Размытие при наведении на картинку
function init() {
  const image = {
    name: document.getElementsByTagName("img"),
    showAnswer: eventObj => {
      let path = eventObj.target;
      let newSrc = path.id;
      newSrc = "img/" + newSrc + ".jpg";
      path.src = newSrc;
    },
    showOrigin: eventObj => {
      let path = eventObj.target;
      let originSrc = path.id;
      originSrc = "img/" + originSrc + "blur.jpg";
      path.src = originSrc;
    },
    coordinates: eventObj => {
      let coordinate = document.getElementById("coordinates");
      coordinate.innerHTML =
        "X: " + eventObj.offsetX + ". Y: " + eventObj.offsetY;
    }
  };

  for (let i = 0; i < image.name.length; i++) {
    image.name[i].onmouseover = image.showAnswer;
    image.name[i].onmouseout = image.showOrigin;
    image.name[i].onmousemove = image.coordinates;
  }
}
