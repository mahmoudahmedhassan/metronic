// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import {User} from '../../core/_models'

type Props = {
  row?: Row<User>
  setSelectedIdRow?: Dispatch<any> | undefined
  rowID: any
  onRowSelected: (id: any) => void
}

const CustomRow: FC<Props> = ({row, onRowSelected,rowID}) => {
   const handelRow =()=>{
   onRowSelected(row.cells[0].row.original.t102)
  }
  return (
    <tr
      {...row.getRowProps()}
       onClick={handelRow}
       className={rowID === row.cells[0].row.original.t102 ? `markRow` : null}>
      {row.cells.map((cell) => {
        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
      })}
    </tr>
  )
}

export {CustomRow}
