// // Конструктор объекта
function Coffee(name, ml) {
  this.name = name;
  this.ml = ml;
  this.getSize = () => {
    let volume =
      this.ml <= 8 && this.ml > 0
        ? "small"
        : this.ml >= 8 && this.ml <= 12
        ? "medium"
        : this.ml <= 16 && this.ml >= 12
        ? "large"
        : "NaN";
    return volume;
  };
  this.toString = () => {
    return "You have " + this.getSize() + " " + this.name + " coffee";
  };
}
let blend = new Coffee("Blend", 10);
console.log(blend.toString());
let house = new Coffee("House black", 5);
console.log(house.toString());


function MakeCar(params) {
  for (let key in params) {
    this[key] = params[key];
  }
  this.started = false;
  this.start = () => {
    this.started = true;
  };
  this.stop = () => {
    this.started = false;
  };
}

let cadi = new MakeCar({ make: "GM", name: "Cadi", mileage: 123 });
console.log(cadi);
let fiat = new MakeCar({ make: "MG", name: "Fiat", mileage: 2321 });
console.log(fiat);
console.log(fiat instanceof MakeCar);

function Dog(param) {
    this.name = param.name;
    this.weight = param.weight;
}

Dog.prototype.eyes = 2;
Dog.prototype.sitting = false;
Dog.prototype.walk = function() {
    console.log("run");
}

let fido = new Dog({name: "Fido", weight: 23});
let spark = new Dog({name: "Spark", weight: 10});


Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + " is alredy sitting");
    } else {
        this.sitting = true;
        console.log(this.name + " sit down");
    }
    
}
spark.sit();
fido.sit();
spark.sit();
fido.sit();
