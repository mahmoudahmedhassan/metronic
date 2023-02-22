import { useIntl } from 'react-intl'
import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {UsersListFilter} from './UsersListFilter'

const UsersListToolbar = () => {
  const intl = useIntl()

  const {setItemIdForUpdate,disabledModal} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null);
 
  }
  console.log('disabledModal',disabledModal)

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <UsersListFilter />

      {/* begin::Add user */}
      {disabledModal ? (
        <button
          type='button'
          className='btn btn-primary'
          onClick={openAddUserModal}
          
        >
          <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
          {intl.formatMessage({id:'Add'})}
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

export {UsersListToolbar}
