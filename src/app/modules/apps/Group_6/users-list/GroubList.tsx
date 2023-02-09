import {ListViewProvider,  } from './core/ListViewProvider'
import {QueryRequestProvider,  } from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ListHeader} from './components/header/ListHeader'
import {Table} from './table/Table'
  import {KTCard} from '../../../../../_metronic/helpers'

const GroubList = () => {
 
  return (
    <>
      <KTCard>
        <ListHeader />
        <Table />
      </KTCard>
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
