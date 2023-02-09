import {useQuery} from 'react-query'
import {ListOneEditModalForm} from './OptionsModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import { getListOneById } from '../../core/_requests'
 
const OptionsModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate, openOptionOneID,openOptionTwoID} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: ListOne,
    error,
  } = useQuery(
    `ListOne-${itemIdForUpdate}`,
    () => {
      return getListOneById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )
// console.log(openOptionOneID);

  // if (!itemIdForUpdate) {
  //   return <ListOneEditModalForm isListOneLoading={isLoading} ListOne={{id: undefined}} />
  // }

  if (openOptionOneID||openOptionTwoID) {
    return <ListOneEditModalForm isListOneLoading={isLoading} ListOne={ListOne} />
  }

  return null
}

export {OptionsModalFormWrapper}
