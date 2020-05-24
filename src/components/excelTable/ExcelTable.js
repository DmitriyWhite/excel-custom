import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/excelTable/table.template'
import {resizeHandler} from '@/components/excelTable/table.resize'
import {shouldResize} from '@/components/excelTable/table.helper'

export class ExcelTable extends ExcelComponent {
    static className = 'excel-table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        });
    }

    toHTML() {
        return createTable(20)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(event, this.$root)
        }
    }
}
