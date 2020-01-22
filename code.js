let passengers = [
  { name: "Igor", paid: true },
  { name: "John", paid: true },
  { name: "Pete", paid: false },
  { name: "Marina", paid: true }
];

let blackList = ["John", "Marina"];


let getPaidPassengers = (passengers) => {
    let paidPassengers = [];
    for (let i = 0; i < passengers.length; i++) {
        if (passengers[i].paid) {
            paidPassengers.push(passengers[i]);
            return paidPassengers;
        } else {
            continue;
        }
    }
}

