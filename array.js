/*
const a = [1, 2, 3, 4, 5, 6];
const b = ['a', 'b', 'c', 'e'];

a.push(7, 8); // Добавляет элементы в конец массива
b.push('d');

a.pop(); // Удаляет последний элемент массива (не имеет параметров)
console.log(b.pop()); // Удаляет и возвращает последний элемент

delete a[3]; // Удаляет выбранный элемент массива и оставляет пропуск empty

a.splice(3, 3); // Удаляет, начиная с третьего, 3 элемента
a.splice(3, 3, 'test') // Удаляет 3 элемента начиная с третьего и добавляет "test"
*/
// shift() unshift() Добавляет и удаляет эл в начале массива

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
