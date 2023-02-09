import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {ListFilter} from './ListFilter'

const ListToolbar = () => {
  const {setItemIdForUpdate,disabledModal} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter/>
 
      {/* begin::Add user */}
      {disabledModal ? (
        <button
          type='button'
          className='btn btn-primary'
          onClick={openAddUserModal}
          
        >
          <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
          Add
        </button>
      ) : (
        <button
          type='button'
          className='btn btn-primary'
          onClick={openAddUserModal}
          disabled
        >
          <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
          Add
        </button>
      )}
      {/* end::Add user */}
    </div>
  )
}

export {ListToolbar}
