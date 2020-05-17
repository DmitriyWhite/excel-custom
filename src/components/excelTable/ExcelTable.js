import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/excelTable/table.template'

export class ExcelTable extends ExcelComponent {
    static className = 'excel-table'

    toHTML() {
        return createTable(20)
    }
}
