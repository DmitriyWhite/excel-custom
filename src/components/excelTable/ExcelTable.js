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
                    $resizer.css({right: -delta + 'px'})
                } else if (dataResize === 'row') {
                    const delta = e.pageY - coords.bottom
                    value = coords.height + delta
                    $resizer.css({bottom: -delta + 'px'})
                }
            }

            document.onmouseup = () => {
                if (dataResize === 'col') {
                    $parent.css({width: value + 'px'})
                    $cellAll.forEach(item => item.style.width = value + 'px')
                    $resizer.css({right: null})
                } else if (dataResize === 'row') {
                    $parent.css({height: value + 'px'})
                    $resizer.css({bottom: null})
                }

                document.onmousemove = null
                document.onmouseup = null
            }
        }
    }
}
