"use strict";

let buttons = document.querySelectorAll("button"); // собираю массив кнопок
buttons.forEach(function (buttons) { // вешаю обработчики на каждую кнопку
    buttons.addEventListener("click", function (e) {
        onButtonClick(e);
    })
});

/**
 * onButtonClick принимает нажатие по кнопке мышкой. Функция меняет некоторые свойства для картинки
 * и текста под картинкой при нажатии на кнопку.
 * @param {*} mouseClick
 */
function onButtonClick (mouseClick) {
    let buttonInNode = mouseClick.target.parentNode; // получаю родителя нажатой кнопки
    let buttonText = buttonInNode.querySelector("button").innerText; // получаю текст в кнопке

    if (buttonText == "Подробнее") {
        buttonInNode.querySelector("button").innerText = "Назад"; // пишу в кнопке "Назад"
        buttonInNode.querySelector(".desc").style.zindex = 1; // меняю наложение для описания
        buttonInNode.querySelector(".productImage").style.opacity = 0; // делаю картинку прозрачной
    }

    if (buttonText == "Назад") {
        buttonInNode.querySelector("button").innerText = "Подробнее"; // пишу в кнопке "Подробнее"
        buttonInNode.querySelector(".desc").style.zindex = -1; // меняю наложение описания
        buttonInNode.querySelector(".productImage").style.removeProperty("opacity");
        // делаю картинку непрозрачной
    }
}