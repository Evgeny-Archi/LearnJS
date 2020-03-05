// document.querySelector(".one").onclick = function(event) {
//     console.log(event);
// };

// ondblclick - двойной клик
// oncontextmenu - ПКМ
// onmousemove - движение мыши
// onmouseenter - наведение мыши, hover effect
// onmouseleave - уведение мыши
// onmousedown - зажатый ЛКМ
// onmouseup - отжатый ЛКМ

/* // Увеличивает блок если елозить по нему мышкой
let w = 50;
let div = document.querySelector(".one");
div.onmousemove = () => {
    w++;
    div.style.width = w + "px";
}

document.querySelector(".one").onmouseenter = () => {
    document.querySelector(".one").style.background = "red";
}
document.querySelector(".one").onmouseleave = () => {
    document.querySelector(".one").style.background = "green";
}
document.querySelector(".one").onmousedown = () => {
    document.querySelector(".one").style.background = "blue";
}
document.querySelector(".one").onmouseup = () => {
    document.querySelector(".one").style.background = "yellow";
}

// Увеличение прогресс бара
let i = 10;
document.getElementById("btn").onclick = () => {
    i += 10;
    document.querySelector("progress").value = i;
}
*/

let items = document.querySelectorAll(".col-sm");
const basket = document.querySelector(".col-md");
let count = 0;

for (let i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        localStorage.setItem(`product${i}`, items[i].innerHTML);
        count++;
        basket.textContent = `В корзине: ${count}`;
    }
}






