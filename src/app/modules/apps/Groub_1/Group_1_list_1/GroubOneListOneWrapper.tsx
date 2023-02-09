import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ListOneListHeader} from './components/header/ListOneListHeader'
import {ListOneTable} from './table/ListOneTable'
import {ListOneEditModal} from './ListOne-edit-modal/ListOneEditModal'
import {KTCard} from '../../../../../_metronic/helpers'
import { OptionsModal } from './option_1/modal/OptionsModal'

const GroubOneListOne = () => {
  const {itemIdForUpdate, openOptionOneID, openOptionTwoID} = useListView()
  return (
    <>
      <KTCard>
        <ListOneListHeader />
        <ListOneTable />
      </KTCard>
      {(itemIdForUpdate !== undefined) && <ListOneEditModal />}
      {openOptionOneID | openOptionTwoID && <OptionsModal />}
      {/* {openOptionTwoID && <ListOneTable />} */}
    </>
  )
}

const GroubOneListOneWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <GroubOneListOne />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {GroubOneListOneWrapper}
