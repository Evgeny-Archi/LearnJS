// Input
// document.querySelector("button").onclick = function() {
//     let input = document.querySelector(".input").value;
//     console.log(input);
// }
// document.querySelector(".input").oninput = () => {
//     let input = document.querySelector(".input").value;
//     document.querySelector(".out").innerHTML = input;
// }

// Checkbox
// document.querySelector("#btn").onclick = () => {
//     let out = document.querySelector("#check");
//     console.log(out.checked);
// }

document.querySelector("#btn").onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector("form");
    console.log(form);
}
