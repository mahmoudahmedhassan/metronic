import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {ListOneListFilter} from './ListOneListFilter'
import { useIntl } from 'react-intl'

const ListOneListToolbar = () => {
  const intl = useIntl()

  const {setItemIdForUpdate} = useListView()
  const openAddListOneModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-list-one-table-toolbar='base'>
      <ListOneListFilter />

        {/* begin::Separator */}
        <div className='separator border-gray-200'></div>
        {/* end::Separator */}
        
       {/* begin::Add ListOne */}
      <button type='button' className='btn btn-primary' onClick={openAddListOneModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
       
        {intl.formatMessage({id:'Add'})}
      </button>
      {/* end::Add ListOne */}
    </div>
  )
}

export {ListOneListToolbar}
