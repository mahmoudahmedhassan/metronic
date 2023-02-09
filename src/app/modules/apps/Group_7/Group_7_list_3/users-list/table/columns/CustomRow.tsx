// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import {User} from '../../core/_models'
// import {useListView} from '../../core/ListViewProvider'

type Props = {
  row: Row<User>
  setSelectedIdRow: Dispatch<any> | undefined
}

const CustomRow: FC<Props> = ({row, setSelectedIdRow}) => {
  // const {isDisabledModal,isOpenModal} = useListView()
  // 
  const handelRow =()=>{
    setSelectedIdRow(row.cells[0].row.original.sd)
  //  isDisabledModal(true)
  //  isOpenModal(true)
  }
  return (
    <tr
      {...row.getRowProps()}
       onClick={handelRow}
    >
      {row.cells.map((cell) => {
        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
      })}
    </tr>
  )
}

export {CustomRow}
