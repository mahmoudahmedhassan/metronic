// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import {ListOne} from '../../core/_models'

type Props = {
  row: Row<ListOne>
  rowID: any
  onRowSelected: (id: any) => void
}

const CustomRow: FC<Props> = ({row,rowID,onRowSelected}) => (
  <tr {...row.getRowProps()} 
  className={rowID === row.cells[0].row.original.sd ? `markRow` : null}
  onClick={() => {onRowSelected(row.cells[0].row.original.sd)}}
  >
    {row.cells.map((cell) => {
      return (
        <td 
        {...cell.getCellProps()} className={clsx({'text-end min-w-100px': cell.column.id === 'actions'})}>
           {cell.render('Cell')}
        </td>
      )
    })}
  </tr>
)
export {CustomRow}
