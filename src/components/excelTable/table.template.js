const CODES = {
    A: 65,
    Z: 90
}

function toCell(col) {
    // language=HTML
    return `<div class="excel-table__cell" data-cell-column="col-${col}" contenteditable></div>`
}

function toColumn(col) {
    // language=HTML
    return `
        <div class="excel-table__column" data-column="col-${col}" data-type="resizable">
            ${col}
            <div class="excel-table__col-resize" data-resize="col"></div>
        </div>
    `
}

function createRow(content = '', rowNumber = '') {
    const resize = rowNumber ? '<div class="excel-table__row-resize" data-resize="row"></div>' : ''
    // language=HTML
    return `
        <div class="excel-table__row" ${rowNumber ? `data-row="row-${rowNumber}" data-type="resizable"` : ''}>
            <div class="excel-table__row-info">
                ${rowNumber}
                ${resize}
            </div>
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
        const cell = new Array(colsCount).fill('').map(toChar).map(toCell).join('')
        rows.push(createRow(cell, i))
    }

    return rows.join('')
}
