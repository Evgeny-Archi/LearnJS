// Простой пример замыкания
// function createCalcFun(n) {
//     return function createCalc() {
//         return 1000 * n;
//     }
// }

// const calc = createCalcFun(3);
// console.log(calc());

// Второй пример замыкания
// function createIncrement(n) {
//     return (num) => {
//         return n + num;
//     }
// }

// const addOne = createIncrement(1);
// const addTen = createIncrement(10);

// console.log(addOne(2));
// console.log(addTen(3));

// Пример:
/*
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args);
    }
}

const person1 = {name: "Misha", age: 22, job: "Frontend"};
const person2 = {name: "Elena", age: 19, job: "SMM"};

bind(person1, logPerson)();
bind(person2, logPerson)();
*/

/* Счетчик нажатий
window.onload = () => {
    let click = document.getElementById("clickme");
    let message = document.getElementById("message");
    let count = 0;
    click.onclick = () => {
        count++;
        message.innerHTML = `You click me ${count} times`;
    }
}
*/

function makeCounter() {
    let count = 0;
    return {
        increment: () => {
            count++;
            return count;
        }
    };
}

let counter = makeCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
