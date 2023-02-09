import {FC, useState, createContext, useContext, useMemo} from 'react'
import {
  ID,
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  initialListViewOptions,
  ListViewOptionsContextProps,
  groupingOnSelectAll,
  WithChildren,
} from '../../../../../../_metronic/helpers'
import {useQueryResponse, useQueryResponseData} from './QueryResponseProvider'

const ListViewContext = createContext<ListViewOptionsContextProps>(initialListViewOptions)

const ListViewProvider: FC<WithChildren> = ({children}) => {
  const [selected, setSelected] = useState<Array<ID>>(initialListViewOptions.selected)
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(initialListViewOptions.itemIdForUpdate)
  const {isLoading} = useQueryResponse()
  const data = useQueryResponseData()
  const disabled = useMemo(() => calculatedGroupingIsDisabled(isLoading, data), [isLoading, data])
  const isAllSelected = useMemo(() => calculateIsAllDataSelected(data, selected), [data, selected])
  const [openOptionOneID, setOpenOptionOneID] = useState<any>(initialListViewOptions.openOptionOneID)
  const [openOptionTwoID, setOpenOptionTwoID] = useState<any>(initialListViewOptions.openOptionTwoID)
  const [optionsId, setOptionsId] = useState<any>(initialListViewOptions.optionsId)
  return (
    <ListViewContext.Provider
      value={{
        selected,
        itemIdForUpdate,
        setItemIdForUpdate,
        disabled,
        openOptionOneID,
        setOpenOptionOneID,
        openOptionTwoID,
        setOpenOptionTwoID,
        isAllSelected,
        setOptionsId,
        optionsId,
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
