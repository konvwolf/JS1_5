"use strict";

/**
 * Функция создает первый ряд таблицы с буквенными обоозначениями столбцов
 * 
 * @param {*} board дописывает внутрь тега table, который принимается в виде аргумента
 */
function createFirstRow(board) {
    let tableRow = board.insertRow();
    for (let i = 0; i < boardScheme.letters.length; i++) {
        let tableColumn = tableRow.insertCell();
        tableColumn.appendChild(document.createTextNode(boardScheme.letters[i]));
    }
}

/**
 * Функция создает остальные ряды таблицы следом за рядом с буквами
 *
 * @param {*} board дописывает внутрь тега table, который принимается в виде аргумента
 */
function createTableBody(board) {
    for (let i = 1; i < boardScheme.letters.length; i++) {
        let tableRow = board.insertRow();
        let tableColumn = tableRow.insertCell().appendChild(document.createTextNode(boardScheme.numbers[i]));
        let color = "";
        for (let j = 1; j < boardScheme.letters.length; j++) {
            switch (true) {
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
        }
    }
}

function createChessBoard(board) {
    createFirstRow(board);
    createTableBody(board);
}

window.onload = createChessBoard(document.querySelector("table"));