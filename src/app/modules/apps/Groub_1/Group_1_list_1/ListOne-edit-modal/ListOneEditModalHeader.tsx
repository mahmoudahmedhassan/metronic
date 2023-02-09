import {KTSVG} from '../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'

const ListOneEditModalHeader = () => {
  const {setItemIdForUpdate, setOpenOptionOneID,setOpenOptionTwoID} = useListView();
  const handleCloseModal =()=>{
    setItemIdForUpdate(undefined)
    setOpenOptionOneID(undefined)
    setOpenOptionTwoID(undefined)
  }

  return (
    <div className='modal-header'>
      {/* begin::Modal title */}
      <h2 className='fw-bolder'>Add ListOne</h2>
      {/* end::Modal title */}

      {/* begin::Close */}
      <div
        className='btn btn-icon btn-sm btn-active-icon-primary'
        data-kt-list-one-modal-action='close'
        onClick={handleCloseModal}
        style={{cursor: 'pointer'}}
      >
        <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
      </div>
      {/* end::Close */}
    </div>
  )
}

export {ListOneEditModalHeader}
