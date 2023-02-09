import {Obj} from '@popperjs/core'
import {Dispatch, SetStateAction} from 'react'
import {boolean} from 'yup'

export type ID = any

export type PaginationState = {
  page: number
  items_per_page: 10 | 30 | 50 | 100
  links?: Array<{label: string; active: boolean; url: string | null; page: number | null}>
}

export type SortState = {
  sort?: string
  order?: 'asc' | 'desc'
}

export type FilterState = {
  filter?: unknown
}

export type SearchState = {
  search?: string
}

export type Response<T> = {
  response: any
  data?: any
  payload?: {
    message?: string
    errors?: {
      [key: string]: Array<string>
    }
    pagination?: PaginationState
  }
}

export type QueryState = PaginationState & SortState & FilterState & SearchState

export const initialQueryState: QueryState = {
  page: 1,
  items_per_page: 10,
}

export type QueryRequestContextProps = {
  state: QueryState
  updateState: (updates: Partial<QueryState>) => void
}

export const initialQueryRequest: QueryRequestContextProps = {
  state: initialQueryState,
  updateState: () => {},
}

// list one
let updateStateFn = () => {}
let setFetchStateFn = () => {}
export type QueryRequestContextPropsListOne = {
  state: QueryState
  updateState: (updates: Partial<QueryState>) => void
  fetchState?: any
  setFetchState: Dispatch<SetStateAction<any>>
}
export const initialQueryRequestListOne: QueryRequestContextPropsListOne = {
  state: initialQueryState,
  updateState: updateStateFn,
  fetchState: 0,
  setFetchState: setFetchStateFn,
}

export type QueryResponseContextProps<T> = {
  response?: any
  refetch: () => void
  isLoading: boolean
  isFetching: boolean
  isError: boolean
  query: string
  error: Obj | unknown
  data?: any[]
  setData?: Dispatch<SetStateAction<any[]>> | undefined
  setPG09Ch01Data?:Dispatch<SetStateAction<any[]>> | undefined
  PG09Ch01Data?:any[]
}

export const initialQueryResponse = {
  refetch: () => {},
  isLoading: false,
  isFetching: false,
  isError: false,
  query: '',
  error: {},
  data: [],
  setData: () => {},
  PG09Ch01Data:[],
  setPG09Ch01Data:() => {},

}

export type ListViewContextProps = {
  selected: Array<ID>
  onSelect: (selectedId: ID) => void
  onSelectAll: () => void
  clearSelected: () => void
  // NULL => (CREATION MODE) | MODAL IS OPENED
  // NUMBER => (EDIT MODE) | MODAL IS OPENED
  // UNDEFINED => MODAL IS CLOSED
  itemIdForUpdate?: ID
  setItemIdForUpdate: Dispatch<SetStateAction<ID>>
  isAllSelected: boolean
  disabled: boolean
}

export const initialListView: ListViewContextProps = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false,
}
// List One type for the ListView Context & ListViewOptionOneContextProps
export type ListViewOptionsContextProps = {
  selected: Array<ID>
  onSelect: (selectedId: ID) => void
  openOptionOneID: ID
  openOptionTwoID: ID
  optionsId: any
  setOpenOptionOneID: Dispatch<SetStateAction<ID>>
  setOpenOptionTwoID: Dispatch<SetStateAction<ID>>
  setOptionsId: Dispatch<SetStateAction<ID>>
  onSelectAll: () => void
  clearSelected: () => void
  itemIdForUpdate?: ID
  setItemIdForUpdate: Dispatch<SetStateAction<ID>>
  isAllSelected: boolean
  disabled: boolean
}
// the initial value for the type ListView Context & ListViewOptionOneContextProps
export const initialListViewOptions: ListViewOptionsContextProps = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  setOpenOptionOneID: () => {},
  setOpenOptionTwoID: () => {},
  setOptionsId: () => {},
  optionsId: {},
  isAllSelected: false,
  disabled: false,
  openOptionOneID: null,
  openOptionTwoID: null,
}

// list two
let updateStateFnListTwo = () => {}
let setFetchStateFnListTow = () => {}
export type QueryRequestContextPropsListTwo = {
  state: QueryState
  updateState: (updates: Partial<QueryState>) => void
  fetchState?: any | undefined
  setFetchState: Dispatch<SetStateAction<any>>
}
export const initialQueryRequestListTwo: QueryRequestContextPropsListTwo = {
  state: initialQueryState,
  updateState: updateStateFnListTwo,
  fetchState: 0,
  setFetchState: setFetchStateFnListTow,
}

//  let setSelectedIdRowFnListTow = () => {}
export type QueryContextPropsListTwo = {
  selected: Array<ID>
  onSelect: (selectedId: ID) => void
  onSelectAll: () => void
  clearSelected: () => void
  itemIdForUpdate?: ID
  setItemIdForUpdate: Dispatch<SetStateAction<ID>>
  isAllSelected: boolean
  disabled: boolean
  selectedIdRow?: any | undefined
  setSelectedIdRow?: Dispatch<SetStateAction<ID>>
  isDisabledModal?: any | undefined
  disabledModal?: any
}
export const initialQueryListTwo: QueryContextPropsListTwo = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false,
  setSelectedIdRow: () => {},
  selectedIdRow: {},
  isDisabledModal: () => {},
  disabledModal: false,
}

// --------------------------------------

// Group2
export type QueryContextPropsGroup2 = {
  selected: Array<ID>
  onSelect: (selectedId: ID) => void
  onSelectAll: () => void
  clearSelected: () => void
  itemIdForUpdate?: ID
  setItemIdForUpdate: Dispatch<SetStateAction<ID>>
  isAllSelected: boolean
  disabled: boolean
  selectedIdRow?: any | undefined
  setSelectedIdRow?: Dispatch<SetStateAction<ID>>
  isDisabledModal?: any | undefined
  disabledModal?: any
}
export const initialQueryGroup2: QueryContextPropsGroup2 = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false,
  setSelectedIdRow: () => {},
  selectedIdRow: {},
  isDisabledModal: () => {},
  disabledModal: false,

}

// Group3
export type QueryRequestContextPropsGroup3 = {
  state: QueryState
  updateState: (updates: Partial<QueryState>) => void
  fetchPG04Sw01?: any
  setFetchPG04Sw01?: Dispatch<SetStateAction<ID>>
}

export const initialQueryRequestGroup3: QueryRequestContextPropsGroup3 = {
  state: initialQueryState,
  updateState: () => {},
  fetchPG04Sw01: false,
  setFetchPG04Sw01: () => {},
}
export type QueryContextPropsGroup3 = {
  selected: Array<ID>
  onSelect: (selectedId: ID) => void
  onSelectAll: () => void
  clearSelected: () => void
  itemIdForUpdate?: ID
  setItemIdForUpdate: Dispatch<SetStateAction<ID>>
  isAllSelected: boolean
  disabled: boolean
  selectedIdRow?: any | undefined
  setSelectedIdRow?: Dispatch<SetStateAction<ID>>
  isDisabledModal?: any | undefined
  disabledModal?: any
  isOpenModal?: any | undefined
  openModal?: any
}
export const initialQueryGroup3: QueryContextPropsGroup3 = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false,
  setSelectedIdRow: () => {},
  selectedIdRow: {},
  isDisabledModal: () => {},
  disabledModal: false,
  isOpenModal: () => {},
  openModal: false,
}

// Group2
export type QueryContextPropsGroup4 = {
  selected: Array<ID>
  onSelect: (selectedId: ID) => void
  onSelectAll: () => void
  clearSelected: () => void
  itemIdForUpdate?: ID
  setItemIdForUpdate: Dispatch<SetStateAction<ID>>
  isAllSelected: boolean
  disabled: boolean
  selectedIdRow?: any | undefined
  setSelectedIdRow?: Dispatch<SetStateAction<ID>>
  isDisabledTablePro?: any | undefined
  disabledTablePro?: any
}
export const initialQueryGroup4: QueryContextPropsGroup4 = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false,
  setSelectedIdRow: () => {},
  selectedIdRow: {},
  isDisabledTablePro: () => {},
  disabledTablePro: false,

}
// Group7 child-one
// query request
export type QueryRequestContextPropsGroup7ChildOne = {
  state: QueryState
  updateState: (updates: Partial<QueryState>) => void
  fetchGetImTy?:any
  setFetchGetImTy?:any
}

export const initialQueryRequestGroup7ChildOne: QueryRequestContextPropsGroup7ChildOne = {
  state: initialQueryState,
  updateState: () => {},
  fetchGetImTy: 1,
  setFetchGetImTy: () => {},
}
// list view
export type QueryContextPropsGroup7ChildOne = {
  selected: Array<ID>
  onSelect: (selectedId: ID) => void
  onSelectAll: () => void
  clearSelected: () => void
  itemIdForUpdate?: ID
  setItemIdForUpdate: Dispatch<SetStateAction<ID>>
  isAllSelected: boolean
  disabled: boolean
  selectedIdRow?: any | undefined
  setSelectedIdRow?: Dispatch<SetStateAction<ID>>
  isDisabledModal?: any | undefined
  disabledModal?: any
  isOpenModal?: any | undefined
  openModal?: any
}
export const initialQueryGroup7ChildOne: QueryContextPropsGroup7ChildOne = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false,
  setSelectedIdRow: () => {},
  selectedIdRow: {},
  isDisabledModal: () => {},
  disabledModal: false,
  isOpenModal: () => {},
  openModal: false,
}
