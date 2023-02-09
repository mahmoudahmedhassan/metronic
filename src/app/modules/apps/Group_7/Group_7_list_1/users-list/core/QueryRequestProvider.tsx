import {FC, useState, createContext, useContext} from 'react'
import {
  QueryState,
  WithChildren,
  QueryRequestContextPropsGroup7ChildOne,
  initialQueryRequestGroup7ChildOne
} from '../../../../../../../_metronic/helpers'

const QueryRequestContext = createContext<QueryRequestContextPropsGroup7ChildOne>(initialQueryRequestGroup7ChildOne)

const QueryRequestProvider: FC<WithChildren> = ({children}) => {
  const [state, setState] = useState<QueryState>(initialQueryRequestGroup7ChildOne.state)
  const [fetchGetImTy, setFetchGetImTy] = useState<QueryState>(initialQueryRequestGroup7ChildOne.fetchGetImTy)

  const updateState = (updates: Partial<QueryState>) => {
    const updatedState = {...state, ...updates} as QueryState
    setState(updatedState)
  }

  return (
    <QueryRequestContext.Provider value={{state, updateState,fetchGetImTy,setFetchGetImTy}}>
      {children}
    </QueryRequestContext.Provider>
  )
}

const useQueryRequest = () => useContext(QueryRequestContext)
export {QueryRequestProvider, useQueryRequest}
