/* // Методы массива
const a = [1, 2, 3, 4, 5, 6];
const b = ['a', 'b', 'c', 'e'];

a.push(7, 8); // Добавляет элементы в конец массива
b.push('d');

a.pop(); // Удаляет последний элемент массива (не имеет параметров)
console.log(b.pop()); // Удаляет и возвращает последний элемент

delete a[3]; // Удаляет выбранный элемент массива и оставляет пропуск empty

a.splice(3, 3); // Удаляет, начиная с третьего, 3 элемента
a.splice(3, 3, 'test') // Удаляет 3 элемента начиная с третьего и добавляет "test"

shift() Удаляет первый эл и возвращает его
unshift() Добавляет один или несколько эм в начало и возвращает новое length
*/

/* // Weather API
fetch('http://api.openweathermap.org/data/2.5/weather?id=2013348&appid=8474fe60b649817c961cce9d55ad3ee0')
    .then(function(resp) {return resp.json()})
    .then(function(data) {
        console.log(data);
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").innerHTML = (data.main.temp - 273.15) + " &deg;C";
        document.querySelector(".weather").textContent = data.weather[0].description;
        document.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
    })
    .catch(function() {
        // catch any errors
    });
*/

// Метод Set() - содержит уникальные значения
/*
let a = new Set();
a.add(1);
a.add("hi");
a.add(2);
console.log(a);
console.log(a.size); // размер массива (объекта)
// a.clear();  // Очищает массив
// a.delete("hi"); // удаляет элемент
console.log(a.has(2)); // true, такой элемент есть

for (let i of a) {  // Перебор массива (объекта)
    console.log(i);
}

let arr = [1,2,3,8,'hi',1,3,5,'hi',true];
console.log(arr);
let b = new Set(arr); // Добавляет только уникальные значения массива
console.log(b);
let c = [...b]; // преобразует обратно в массив (аналог let c = Array.from(b))
console.log(c);
*/

/* Перебор массива
let arr = [3, 4, 5, 6];
 // 1 способ
for (let i = 0; i < arr.length; i++) {}
 // 2 способ
for (let key in arr) {
    console.log(key, arr[key]); // в качестве ключей - индекс (0, 1, 2 и т.д.)
} 
 // 3 способ
for (let key of arr) {
    console.log(key); // в качестве ключей - значения (3, 4, 5 и т.д.)
} 
let par = document.getElementsByTagName("p");
// Для перебора работают способы 1 и 3
let par2 = document.querySelectorAll("p");
// Тоже для перебора работают способы 1 и 3
*/

// Map() Filter()
/* map()
let a = [4, 5, 1, 20, 0, -2, 100];
let b = a.map(function(item, index) { // Перебирает каждый элемент и возвращает новый массив
    console.log(item, index);
    return item + 1;    
}); */
// let b = a.map(item => item + 1) Аналогично функции выше

/* filter()  Перебирает массив и фильтрует по функции  
let a = [4, 5, 1, 20, 0, -2, 100, "asdl"];
let b = a.filter(item => typeof item === "number")
console.log(b);
*/

/*
// Split() Разделяет строку и разбивает на массив по сепаратору " "
let a = "Loerm ipsum hello, world";
console.log(a.split(" "));

// Join() Соединяет массив в строку
let b = [4, 5, 1, 20, 0, -2, 100, "asdl"];
console.log(b.join(" "));

// forEach() Аналогично map(), но не возвращает новый массив. Не меняет текущий
let b = [4, 5, 1, 20, 0, -2, 100, "asdl"];
b.forEach(function(item, index) {
    console.log(item * 2, index);
});
*/

