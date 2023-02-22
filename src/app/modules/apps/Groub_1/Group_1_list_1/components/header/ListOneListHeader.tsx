import {useListView} from '../../core/ListViewProvider'
import {ListOneListToolbar} from './ListOneListToolbar'
import {ListOneListGrouping} from './ListOneListGrouping'
import {ListOneListSearchComponent} from './ListOneListSearchComponent'

const ListOneListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ListOneListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {/* {selected.length > 0 ? <ListOneListGrouping /> : <ListOneListToolbar />} */}
        { <ListOneListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ListOneListHeader}
