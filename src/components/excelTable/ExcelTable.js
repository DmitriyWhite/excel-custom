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
            const $cellAll = this.$root.findAll(`[data-cell-column="${$parent.data.column}"]`)
            let value = 0

            document.onmousemove = e => {
                if (dataResize === 'col') {
                    const delta = e.pageX - coords.right
                    value = coords.width + delta
                    $parent.css({width: value + 'px'})
                } else if (dataResize === 'row') {
                    const delta = e.pageY - coords.bottom
                    value = coords.height + delta
                    $parent.css({height: value + 'px'})
                }
            }

            document.onmouseup = () => {
                $cellAll.forEach(item => item.style.width = value + 'px')
                document.onmousemove = null
            }
        }
    }
}
