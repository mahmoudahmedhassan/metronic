import {FC, useState, createContext, useContext, useMemo} from 'react'
import {
  ID,
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  initialListView,
  ListViewContextProps,
  groupingOnSelectAll,
  WithChildren,
  QueryContextPropsGroup2,
  initialQueryGroup2
} from '../../../../../../_metronic/helpers'
import {useQueryResponse, useQueryResponseData} from './QueryResponseProvider'

const ListViewContext = createContext<QueryContextPropsGroup2>(initialQueryGroup2)

const ListViewProvider: FC<WithChildren> = ({children}) => {
  const [selected, setSelected] = useState<Array<ID>>(initialQueryGroup2.selected)
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(initialQueryGroup2.itemIdForUpdate)
  const {isLoading} = useQueryResponse()
  const data = useQueryResponseData()
  const disabled = useMemo(() => calculatedGroupingIsDisabled(isLoading, data), [isLoading, data])
  const isAllSelected = useMemo(() => calculateIsAllDataSelected(data, selected), [data, selected])
// states
const [selectedIdRow, setSelectedIdRow] = useState<any>(initialQueryGroup2.selectedIdRow)
const [disabledModal,isDisabledModal] =useState<boolean>(initialQueryGroup2.disabledModal)

  return (
    <ListViewContext.Provider
      value={{
        selectedIdRow,
        setSelectedIdRow,
        disabledModal,
        isDisabledModal,
        // ---------
        selected,
        itemIdForUpdate,
        setItemIdForUpdate,
        disabled,
        isAllSelected,
        onSelect: (id: ID) => {
          groupingOnSelect(id, selected, setSelected)
        },
        onSelectAll: () => {
          groupingOnSelectAll(isAllSelected, setSelected, data)
        },
        clearSelected: () => {
          setSelected([])
        },
      }}
    >
      {children}
    </ListViewContext.Provider>
  )
}

const useListView = () => useContext(ListViewContext)

export {ListViewProvider, useListView}
