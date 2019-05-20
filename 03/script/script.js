"use strict";

document.querySelector("body").innerHTML = "<table></table>";
// создаю таблицу

/**
 * Функция создает первый ряд таблицы с буквенными обоозначениями столбцов
 * 
 * @param {*} board дописывает внутрь тега table, который принимается в виде аргумента
 */
function createFirstRow(board) {
    let tableRow = board.insertRow(); // вставляю строку таблицы
    for (let i = 0; i < boardScheme.letters.length; i++) {
        let tableColumn = tableRow.insertCell(); // вставляю в строку ячейки
        tableColumn.appendChild(document.createTextNode(boardScheme.letters[i]));
        // заполняю ячейки буквами
    }
}

/**
 * Функция создает остальные ряды таблицы следом за рядом с буквами
 *
 * @param {*} board дописывает внутрь тега table, который принимается в виде аргумента
 */
function createTableBody(board) {
    for (let i = 1; i < boardScheme.letters.length; i++) {
        let tableRow = board.insertRow(); // вставляю в таблицу строки
        let tableColumn = tableRow.insertCell().appendChild(document.createTextNode(boardScheme.numbers[i]));
        // в начало каждой строки вставляю ячейки с номерами
        let color = ""; // переменная для выбора класса (для указания цвета ячейки)
        for (let j = 1; j < boardScheme.letters.length; j++) {
            switch (true) { // определяю класс для ячеек в зависимости от строки
                case i % 2 == 0 && j % 2 != 0:
                    color = "black";
                    break;
                case i % 2 != 0 && j % 2 == 0:
                    color = "black";
                    break;
                default:
                    color = "white";
            }
            tableColumn = tableRow.insertCell().classList.add(color);
            // вставляю все недостающие ячейки
        }
    }
}

/**
 * Функция рисует шахматную доску
 *
 * @param {*} board дописывает внутрь тега table, который принимается в виде аргумента
 */
function createChessBoard(board) {
    createFirstRow(board);
    createTableBody(board);
}

window.onload = createChessBoard(document.querySelector("table"));