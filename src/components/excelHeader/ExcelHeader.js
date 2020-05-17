import {ExcelComponent} from '@core/ExcelComponent';

export class ExcelHeader extends ExcelComponent {
    static className = 'excel-header'

    toHTML() {
        return `
        <input type="text" class="excel-header__input" value="Новая таблица"/>
        <div>
            <div class="excel-header__button">
                <i class="material-icons">delete</i>
            </div>
            <div class="excel-header__button">
                <i class="material-icons">exit_to_app</i>
            </div>
        </div>
        `
    }
}
