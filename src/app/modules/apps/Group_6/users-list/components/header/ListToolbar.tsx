import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {ListFilter} from './ListFilter'

const ListToolbar = () => {
 

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      
        {/* begin::Separator */}
        <div className='separator border-gray-200'></div>
        {/* end::Separator */}
      <ListFilter/>
 
     
    </div>
  )
}

export {ListToolbar}
