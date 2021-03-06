// Эффект печатной машинки
const fib = [0,1,2,3,5,8,13,21];
let count = 0;
const out = document.getElementById("out");

function text() {
    setTimeout(() => {
        if (count < fib.length) {
            out.innerText += `fib[${count}]: ${fib[count]}\n`;
            count++;
            text()
        }
    }, 500)
}
text()

// Бегущие цифры
const time = 1000;
const step = 100;

function outNum(num, elem) {
  const out = document.querySelector("." + elem);
  let n = 0;
  let t = Math.round(time / (num / step));

  let interval = setInterval(() => {
    n += step;
    if (n == num) {
      clearInterval(interval);
    }
    out.textContent = n;
  }, t);
}
outNum(1000, "out");


let one = document.querySelector(".one");

one.style.padding = "5px"; // Добавляет стиль инлайново style="padding: 5px"
one.classList.add("two", "three"); // Добавляет доп. классы
one.classList.remove("three"); // Удаляет класс

const btn = document.querySelector(".btn");

btn.onclick = () => {
    btn.classList.toggle("two"); // Добавляет и удаляет класс при нажатии
    // this. не работает со стрелочными фу-ми
}

console.log(one.getAttribute("data")); // Получает значение атрибута data
console.log(document.querySelectorAll("meta")[1].getAttribute("name")); 
one.setAttribute("data-num", 6); // Добавляет атрибут

// Получение коэфициента для умножения через data
let gas = document.querySelectorAll(".gas");
let out = document.querySelector(".out");

for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function() {
        let liters = document.getElementById("value").value;
        gas = this.getAttribute("data");
        out.textContent = liters * gas;
    }
}

let a = document.createElement("div"); // Создание элемента
a.textContent = "hello"; // Добавление содержимого в созданный элемент
a.classList.add("one"); // Добавляет класс в созданный элемент
console.log(a);

document.querySelector(".add-new-element").appendChild(a); // Вставляет новый элемент на страницу

// Окрашивает при нажатии в красный
let p = document.querySelectorAll(".u3");
for (let i = 0; i < p.length; i++) {
    p[i].onclick = func3;
}
function func3() {
    this.style.background = "red";
}

