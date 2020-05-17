import {Excel} from '@/components/excel/Excel';
import {ExcelHeader} from '@/components/excelHeader/ExcelHeader';
import {ExcelToolbar} from '@/components/excelToolbar/ExcelToolbar';
import {ExcelFormula} from '@/components/excelFormula/ExcelFormula';
import {ExcelTable} from '@/components/excelTable/ExcelTable';
import './scss/main.scss'

const excel = new Excel('#app', {
    components: [ExcelHeader, ExcelToolbar, ExcelFormula, ExcelTable]
})

excel.render()
