import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/excelTable/table.template'
import {$} from '@core/Dom'

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
        const dataResize = event.target.dataset.resize

        if (dataResize) {
            const $resizer = $(event.target)
            const $parent = $resizer.closest('[data-type="resizable"]')
            const coords = $parent.getCoords()

            document.onmousemove = e => {

                    const delta = e.pageX - coords.right
                    const value = coords.width + delta
                    $parent.$element.style.width = value + 'px'

            }

            document.onmouseup = () => {
                document.onmousemove = null
            }
        }
    }
}
