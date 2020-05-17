import {ExcelComponent} from '@core/ExcelComponent';

export class ExcelHeader extends ExcelComponent {
    toHTML() {
        return '<h1>Formula</h1>'
    }
}
