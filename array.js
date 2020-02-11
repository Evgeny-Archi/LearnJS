// Эффект печатной машинки
// let text = "Lorem ipsum dolor sit amet.\n Some text";
// let count = 0;

// function typeText() {
//     if (count < text.length) {
//         document.querySelector(".out").textContent += text[count];
//         count++;
//         setTimeout(typeText, 100);
//     }
// }
// typeText();

// Accordion
// let test = document.querySelectorAll(".test");
// let subTest = document.querySelectorAll(".sub-test");

// for (let i = 0; i < test.length; i++) {
//     test[i].onclick = function() {
//         subTest[i].classList.toggle("sub-test2");
//     }
// }

// Двумерные массивы
/*
let a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let out = '';

for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if (a[i][k] >= 4) {
            out += a[i][k] + " ";
        }
    }
    out += "<br>";
}
document.querySelector(".out").innerHTML = out;
*/

// Перенос 1 на шаг вправо при нажатии на btn
/*
let a = [1,0,0,0,0];
let k = 0;
document.querySelector(".out").textContent = a;

document.getElementById("btn").onclick = function() {
    if (k + 1 < a.length) {
        a[k] = 0;
        a[k + 1] = 1;
        k++;
    }
    document.querySelector(".out").textContent = a;
}
*/

// Рисовалка типа 
/*
    ****
   ******
  ********
************

let out = '';
let q = 3;
let w = 7;

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 12; k++) {
        if (k < q || k > w) {
            out += "&nbsp;&nbsp;";
        } 
        else {
            out += '* ';
        }
    }
    w++;
    q--;
    out += '<br>';
}

document.querySelector(".out").innerHTML = out;
*/

// Ассоциативные массивы
/*
let a = {
    "a": 1,
    "b": "hi",
    "one": true,
    t32: 1999
};
a.three = 333; // добавление в массив
a.b = 2; // перезапись элемента массива
delete a.a // удаление ключа со значением
console.log(a);

let out = "";
for (let key in a) {
    out += `${key}: ${a[key]},<br>`; // Вывод ключ + значение
}
document.querySelector(".out").innerHTML = out;
*/
fetch('http://api.openweathermap.org/data/2.5/weather?id=2013348&APPID=8474fe60b649817c961cce9d55ad3ee0')
    .then(function (resp) {return resp.json()})
    .then(function (data) {
        console.log(data);
    })
    .catch(function () { // Catch any errors

    });
