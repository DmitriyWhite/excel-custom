import {ExcelComponent} from '@core/ExcelComponent';

export class ExcelFormula extends ExcelComponent {
    static className = 'excel-formula'

    toHTML() {
        // language=HTML
        return `
            <div class="excel-formula__info">fx</div>
            <div class="excel-formula__input" contenteditable
                 spellcheck="false"></div>
        `
    }
}
