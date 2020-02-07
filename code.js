// Эффект печатной машинки
// let text = "Lorem ipsum dolor sit amet.\n Some text";
// let count = 0;

// function typeText() {
//     if (count < text.length) {
//         document.querySelector(".out").textContent += text[count];
//         count++;
//         setTimeout(typeText, 100);
//     }
// }
// typeText();

let test = document.querySelectorAll(".test");
let subTest = document.querySelectorAll(".sub-test");

for (let i = 0; i < test.length; i++) {
    console.log(test[i].classList);
    test[i].onclick = function() {
        subTest[i].classList.toggle("sub-test2");
    }
}



