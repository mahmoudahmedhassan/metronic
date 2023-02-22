import {FC, useMemo} from 'react'
import {ID} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../../../core/ListViewProvider'
import { useQueryRequest } from '../../../core/QueryRequestProvider'

type Props = {
  id: ID
}

const ListOneSelectionCell: FC<Props> = ({id}:any) => {
  console.log(id,)
    const{optionTableData,setOptionTableData}=useQueryRequest()
   console.log('optionTableData',optionTableData)
  const {selected, onSelect} = useListView()
  const isSelected = useMemo(() => selected.includes(id), [id, selected])
  const handelChange =()=>{
    onSelect(id)
    // setOptionTableData([...optionTableData,id])
    setOptionTableData((prevArray: any) => [...prevArray, id]);


  }
  return (
    <div className='form-check form-check-custom form-check-solid'>
      <input
        className='form-check-input'
        type='checkbox'
        data-kt-check={isSelected}
        data-kt-check-target='#kt_table_ListOnes .form-check-input'
        checked={isSelected}
        onChange={handelChange}
      />
    </div>
  )
}

export {ListOneSelectionCell}
