import {ListViewProvider, useListView} from './users-list/core/ListViewProvider'
import {QueryRequestProvider, useQueryRequest} from './users-list/core/QueryRequestProvider'
import {QueryResponseProvider} from './users-list/core/QueryResponseProvider'
import {ListHeader} from './users-list/components/header/ListHeader'
import {Table} from './users-list/table/Table'
import {EditModal} from './users-list/edit-modal/EditModal'
import {KTCard} from '../../../../../_metronic/helpers'

const GroubList = () => {
  const {itemIdForUpdate} = useListView()
  // const {fetchGetImTy} = useQueryRequest()

  return (
    <>
      <KTCard>
        <ListHeader />
        <Table />
      </KTCard>
      {(itemIdForUpdate !== undefined) && <EditModal />}
      </>
  )
}

const ListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <GroubList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ListWrapper}
