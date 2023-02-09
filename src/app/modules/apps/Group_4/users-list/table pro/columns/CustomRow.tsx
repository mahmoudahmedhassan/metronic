// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import {User} from '../../core/_models'
 
type Props = {
  row: Row<User>
  rowID: any
  onRowSelected: (id: any) => void
  }


const CustomRow: FC<Props> = ({row, onRowSelected, rowID,}) => {
  const handleRow =()=>{
    onRowSelected(row.cells[0].row.original.t101)
 
  }
    return (
    <tr
      {...row.getRowProps()}
      onClick={handleRow}>
      {row.cells.map((cell) => {
        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
      })}
    </tr>
  )
}

export {CustomRow}
