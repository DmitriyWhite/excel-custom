import {ExcelComponent} from '@core/ExcelComponent';

export class ExcelTable extends ExcelComponent {
    static className = 'excel-table'

    toHTML() {
        // language=HTML
        return `
            <div class="excel-table__row">
                <div class="excel-table__row-info"></div>
                <div class="excel-table__row-data">
                    <div class="excel-table__column">A</div>
                    <div class="excel-table__column">
                        B
                    </div>
                    <div class="excel-table__column">
                        C
                    </div>
                    <div class="excel-table__column">
                        A
                    </div>
                    <div class="excel-table__column">
                        B
                    </div>
                    <div class="excel-table__column">
                        C
                    </div>
                    <div class="excel-table__column">
                        A
                    </div>
                    <div class="excel-table__column">
                        B
                    </div>
                    <div class="excel-table__column">
                        C
                    </div>
                    <div class="excel-table__column">
                        A
                    </div>
                    <div class="excel-table__column">
                        B
                    </div>
                    <div class="excel-table__column">
                        C
                    </div>
                    <div class="excel-table__column">
                        A
                    </div>
                    <div class="excel-table__column">
                        B
                    </div>
                    <div class="excel-table__column">
                        C
                    </div>
                    <div class="excel-table__column">
                        A
                    </div>
                    <div class="excel-table__column">
                        B
                    </div>
                    <div class="excel-table__column">
                        C
                    </div>
                    <div class="excel-table__column">
                        A
                    </div>
                    <div class="excel-table__column">
                        B
                    </div>
                    <div class="excel-table__column">
                        C
                    </div>
                    <div class="excel-table__column">
                        A
                    </div>
                    <div class="excel-table__column">
                        B
                    </div>
                    <div class="excel-table__column">
                        C
                    </div>
                    <div class="excel-table__column">
                        A
                    </div>
                    <div class="excel-table__column">
                        B
                    </div>
                    <div class="excel-table__column">
                        C
                    </div>
                    <div class="excel-table__column">
                        A
                    </div>
                    <div class="excel-table__column">
                        B
                    </div>
                    <div class="excel-table__column">
                        C
                    </div>

                </div>

            </div>

            <div class="excel-table__row">
                <div class="excel-table__row-info">
                    1
                </div>

                <div class="excel-table__row-data">
                    <div class="excel-table__cell selected" contenteditable="">
                        A1
                    </div>
                    <div class="excel-table__cell" contenteditable="">B1</div>
                    <div class="excel-table__cell" contenteditable="">C1</div>
                </div>
            </div>

            <div class="excel-table__row">
                <div class="excel-table__row-info">
                    2
                </div>

                <div class="excel-table__row-data">
                    <div class="excel-table__cell">A2</div>
                    <div class="excel-table__cell">B2</div>
                    <div class="excel-table__cell">C2</div>
                </div>
            </div>
        `
    }
}
