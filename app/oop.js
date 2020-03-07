class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  isValid() {
    let result = this.password.length > 6 ? true : false;
    return result;
  }
}

// Воображаемый логин и пароль с формы
let a = "Ivan";
let b = "123";

const person = new User(a, b);

console.log(person);
console.log(person.isValid());

// Наследование
class Student extends User {
  constructor(username, password, nickname) {
    super(username, password); // Отправляет аргументы родителю (обязателен)
    this.nickname = nickname;
  }
  getCourses() {
    super.isValid(); // Обращение к родительскому методу
    return [1, 2, 3];
  }
}

let firstStudent = new Student(a, b, "123");

console.log(firstStudent);
console.log(firstStudent.getCourses());
