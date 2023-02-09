// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import {User} from '../../core/_models'
import {useListView} from '../../core/ListViewProvider'

type Props = {
  row: Row<User>
  rowID: any
  onRowSelected: (id: any) => void
  setSelectedIdRow: Dispatch<any> | undefined
}

const CustomRow: FC<Props> = ({row, onRowSelected, rowID, setSelectedIdRow}) => {
  const {isDisabledModal} = useListView()

  return (
    <tr
      {...row.getRowProps()}
      className={rowID === row.cells[0].row.original.t101 ? `markRow` : null}
      onClick={() => {
        onRowSelected(row.cells[0].row.original.t101)
        setSelectedIdRow(row.cells[0].row.original.sd)
        isDisabledModal(true)
      }}
    >
      {row.cells.map((cell) => {
        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
      })}
    </tr>
  )
}

export {CustomRow}
