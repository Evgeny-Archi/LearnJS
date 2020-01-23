let passengers = [
  { name: "Igor", paid: true },
  { name: "John", paid: true },
  { name: "Pete", paid: true },
  { name: "Marina", paid: false },
  { name: "Eva", paid: true }
];

// Фу-ция обработчик проверки пассажиров
function checkPassengers(passengers, checkFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (checkFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

// Проверяет по черному списку. Если есть такой, возвращает true
function checkBlackList(passenger) {
    return (passenger.name == "John");
}

// Проверяет пассажиров на оплату. Если кто-то не оплатил, то возвращает true
function checkPaidPassengers(passenger) {
    return (!passenger.paid);
}

// Выводит список пассажиров
function printPassengers(passenger) {
    console.log("Имя пассажира: " + passenger.name);
    if (passenger.paid) console.log("Оплата: Да");
    else console.log("Оплата: Нет");
    return false;
}

let canFly = checkPassengers(passengers, checkBlackList);
if (!canFly) {
    console.log("Can't fly. Black list");
} else {
    console.log("yes");
}

let allPaid = checkPassengers(passengers, checkPaidPassengers);
if (!allPaid) {
    console.log("Can't fly. Dont paid");
} else {
    console.log("yes");
}

checkPassengers(passengers, printPassengers);


