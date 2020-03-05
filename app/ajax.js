// const xhttp = new XMLHttpRequest();
// let a = 0;

// xhttp.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200) {
//         myFunc(this.responseText);
//     }
// }

// function myFunc(data) {
//     a = data;
//     console.log(a);
// }

// xhttp.open("GET", "http://getpost.itgid.info/index2.php", true);
// xhttp.send();
// console.log(a);

let a = new Promise( (resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?action=1')
    .then(response => {
        resolve(response.text());
    })
})

let b = new Promise( (resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?action=2&name=evgeny')
    .then(response => {
        resolve(response.text());
    })
})

Promise.all([a,b]). then(data => {
    console.log(data)
})


