let passengers = [
  { name: "Igor", paid: true, ticket: "coach" },
  { name: "John", paid: true, ticket: "firstclass" },
  { name: "Pete", paid: true, ticket: "firstclass" },
  { name: "Marina", paid: false, ticket: "coach" }
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
  return passenger.name == "John";
}

// Проверяет пассажиров на оплату. Если кто-то не оплатил, то возвращает true
function checkPaidPassengers(passenger) {
  return !passenger.paid;
}

// Выводит список пассажиров
function printPassengers(passenger) {
  console.log("Имя пассажира: " + passenger.name + " Оплата: " + passenger.paid
   + " Напиток: " + passenger.drink);
  
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
checkPassengers(passengers, serveCustomer);


checkPassengers(passengers, printPassengers); // Вывод список пассажиров

// Дичь с выбором напитка в зависимости от класса. Не понял (возврат фу-ций)
function serveCustomer(passenger) {
  let getDrinkOrder = createDrinkOrder(passenger);
  getDrinkOrder();
}

function createDrinkOrder(passenger) {
  let orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = () => {
      passenger.drink = "Vine";
    };
  } else {
    orderFunction = () => {
        passenger.drink = "Water";
    };
  }

  return orderFunction;
}
