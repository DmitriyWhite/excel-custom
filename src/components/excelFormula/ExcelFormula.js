import {ExcelComponent} from '@core/ExcelComponent';

export class ExcelFormula extends ExcelComponent {
    static className = 'excel-formula'

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        });
    }

    toHTML() {
        // language=HTML
        return `
            <div class="excel-formula__info">fx</div>
            <div class="excel-formula__input" contenteditable spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log(event)
    }

    onClick(event) {
        console.log(event)
    }
}
