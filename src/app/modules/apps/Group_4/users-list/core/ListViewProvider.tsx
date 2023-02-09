import {FC, useState, createContext, useContext, useMemo} from 'react'
import {
  ID,
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  groupingOnSelectAll,
  WithChildren,
  QueryContextPropsGroup4,
  initialQueryGroup4
} from '../../../../../../_metronic/helpers'
import {useQueryResponse, useQueryResponseData} from './QueryResponseProvider'

const ListViewContext = createContext<QueryContextPropsGroup4>(initialQueryGroup4)

const ListViewProvider: FC<WithChildren> = ({children}) => {
  const [selected, setSelected] = useState<Array<ID>>(initialQueryGroup4.selected)
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(initialQueryGroup4.itemIdForUpdate)
  const {isLoading} = useQueryResponse()
  const data = useQueryResponseData()
  const disabled = useMemo(() => calculatedGroupingIsDisabled(isLoading, data), [isLoading, data])
  const isAllSelected = useMemo(() => calculateIsAllDataSelected(data, selected), [data, selected])
// states
const [selectedIdRow, setSelectedIdRow] = useState<any>(initialQueryGroup4.selectedIdRow)
const [disabledTablePro,isDisabledTablePro] =useState<boolean>(initialQueryGroup4.disabledTablePro)

  return (
    <ListViewContext.Provider
      value={{
        selectedIdRow,
        setSelectedIdRow,
        disabledTablePro,
        isDisabledTablePro,
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
