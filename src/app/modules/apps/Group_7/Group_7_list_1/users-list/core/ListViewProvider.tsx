import {FC, useState, createContext, useContext, useMemo} from 'react'
import {
  ID,
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  groupingOnSelectAll,
  WithChildren,
  QueryContextPropsGroup3,
  initialQueryGroup3
} from '../../../../../../../_metronic/helpers'
import {useQueryResponse, useQueryResponseData} from './QueryResponseProvider'

const ListViewContext = createContext<QueryContextPropsGroup3>(initialQueryGroup3)

const ListViewProvider: FC<WithChildren> = ({children}) => {
  const [selected, setSelected] = useState<Array<ID>>(initialQueryGroup3.selected)
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(initialQueryGroup3.itemIdForUpdate)
  const {isLoading}:any = useQueryResponse()
  const data = useQueryResponseData()
  const disabled = useMemo(() => calculatedGroupingIsDisabled(isLoading, data), [isLoading, data])
  const isAllSelected = useMemo(() => calculateIsAllDataSelected(data, selected), [data, selected])
// states
const [selectedIdRow, setSelectedIdRow] = useState<any>(initialQueryGroup3.selectedIdRow)
const [disabledModal,isDisabledModal] =useState<boolean>(initialQueryGroup3.disabledModal)
const [openModal,isOpenModal] =useState<boolean>(initialQueryGroup3.openModal)
  return (
    <ListViewContext.Provider
      value={{
        selectedIdRow,
        setSelectedIdRow,
        disabledModal,
        isDisabledModal,
        isOpenModal,
        openModal,
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
