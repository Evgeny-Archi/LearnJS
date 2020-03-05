// function myAlert(a, c, d) {
//     let b = `<p class="${c}">${a}</p>`;
//     document.querySelector(d).innerHTML = b;
// }
// myAlert('Error', 'red', '.test');


class Alert {
    constructor (a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
}

class Alert2 extends Alert {
    constructor (a, c, d, icon) {
        super(a, c, d);
        this.icon = icon;
    }
}

// let myAlert = new Alert('My message', 'orange', '.out');
// myAlert.showAlert();

let m2 = new Alert2('My message', 'orange', '.out');
m2.showAlert();
console.log(m2);



