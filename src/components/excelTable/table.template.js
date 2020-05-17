const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `<div class="excel-table__cell" contenteditable></div>`
}

function toColumn(col) {
    return `<div class="excel-table__column">${col}</div>`
}

function createRow(content = '', rowNumber = '') {
    // language=HTML
    return `
        <div class="excel-table__row">
            <div class="excel-table__row-info">${rowNumber}</div>
            <div class="excel-table__row-data">${content}</div>
        </div>
        `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(cols))

    for (let i = 1; i <= rowsCount; i++) {
        const cell = new Array(colsCount).fill('').map(toCell).join('')
        rows.push(createRow(cell, i))
    }

    return rows.join('')
}
