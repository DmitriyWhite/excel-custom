import {ExcelComponent} from '@core/ExcelComponent';

export class ExcelToolbar extends ExcelComponent {
    static className = 'excel-toolbar'

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click']
        });
    }

    toHTML() {
        // language=HTML
        return `
            <div class="excel-toolbar__button">
                <i class="material-icons">format_align_left</i>
            </div>
            <div class="excel-toolbar__button">
                <i class="material-icons">format_align_center</i>
            </div>
            <div class="excel-toolbar__button">
                <i class="material-icons">format_align_right</i>
            </div>
            <div class="excel-toolbar__button">
                <i class="material-icons">format_bold</i>
            </div>
            <div class="excel-toolbar__button">
                <i class="material-icons">format_italic</i>
            </div>
            <div class="excel-toolbar__button">
                <i class="material-icons">format_underlined</i>
            </div>
        `
    }

    onClick(event) {
        console.log(event)
    }
}
