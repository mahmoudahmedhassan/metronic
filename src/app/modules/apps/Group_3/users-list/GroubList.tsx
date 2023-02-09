import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider, useQueryRequest} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ListHeader} from './components/header/ListHeader'
import {Table} from './table/Table'
import {EditModal} from './edit-modal/EditModal'
import {EditModalPG04to3} from './modal PG04Bt03/EditModalPG04to3'
import {KTCard} from '../../../../../_metronic/helpers'

const GroubList = () => {
  const {itemIdForUpdate,openModal} = useListView()
  const {fetchPG04Sw01} = useQueryRequest()

  return (
    <>
      <KTCard>
        <ListHeader />
        <Table />
      </KTCard>
      {(itemIdForUpdate !== undefined && fetchPG04Sw01 === false) && <EditModal />}
      {(itemIdForUpdate !== undefined && fetchPG04Sw01 === true) && <EditModalPG04to3 />}
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
