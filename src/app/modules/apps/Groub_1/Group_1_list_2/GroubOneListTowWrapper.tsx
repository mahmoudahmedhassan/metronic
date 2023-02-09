import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {UsersListHeader} from './components/header/UsersListHeader'
import {Table} from './table/Table'
import {EditModal} from './listTwo-edit-modal/EditModal'
import {KTCard} from '../../../../../_metronic/helpers'
import TestContext, { useTestContextResponse } from './core/TestContext'

const GroubOneListTow = () => {
  const {itemIdForUpdate} = useListView()
  const {test} = useTestContextResponse()
  console.log(test)
  return (
    <>
      <KTCard>
        <UsersListHeader />
        <Table />
      </KTCard>
      {itemIdForUpdate !== undefined && <EditModal />}
    </>
  )
}

const GroubOneListTowWrapper = () => (
  <TestContext>
    <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <GroubOneListTow />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  </TestContext>
)

export {GroubOneListTowWrapper}
