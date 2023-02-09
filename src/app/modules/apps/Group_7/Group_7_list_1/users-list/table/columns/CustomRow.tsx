// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import {User} from '../../core/_models'
// import {useListView} from '../../core/ListViewProvider'
import {GetPg09T2} from '../../core/_requests'
type Props = {
  row: Row<User>
  setSelectedIdRow: Dispatch<any> | undefined
  rowID: any
  onRowSelected: (id: any) => void
}
 
const CustomRow: FC<Props> = ({row,onRowSelected,rowID,setSelectedIdRow}) => {
  // const {isDisabledModal,isOpenModal} = useListView()
  const {setPG09Ch01Data}=useQueryResponse()
   const handelRow = async ({sd,t101})=>{
    const data = await GetPg09T2(sd,t101)
    onRowSelected(sd)
    setPG09Ch01Data(data)

  //  isDisabledModal(true)
  //  isOpenModal(true)
  }
  return (
    <tr
      {...row.getRowProps()}
       onClick={()=>handelRow({sd:row.cells[0].row.original.sd,t101:row.cells[0].row.original.t101})}
       className={rowID === row.cells[0].row.original.sd ? `markRow`:null}
    >
      {row.cells.map((cell) => {
        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
      })}
    </tr>
  )
}

export {CustomRow}
