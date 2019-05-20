"use strict";

let modalWindow = document.querySelector(".window");
function slideWindowIn() {
    let height = modalWindow.offsetHeight;
    modalWindow.style.top = "50%";
    modalWindow.style.marginTop = - height / 2 +"px";
}

modalWindow.onclick = function slideWindowOut() {
    modalWindow.style.top = "-100%";
    modalWindow.style.marginTop = "0";
}

window.onload = slideWindowIn();