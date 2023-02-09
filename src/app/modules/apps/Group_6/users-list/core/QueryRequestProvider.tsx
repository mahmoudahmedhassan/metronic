import {FC, useState, createContext, useContext} from 'react'
import {
  QueryState,
  QueryRequestContextProps,
  initialQueryRequest,
  WithChildren,
  QueryRequestContextPropsGroup3,
  initialQueryRequestGroup3
} from '../../../../../../_metronic/helpers'

const QueryRequestContext = createContext<QueryRequestContextPropsGroup3>(initialQueryRequestGroup3)

const QueryRequestProvider: FC<WithChildren> = ({children}) => {
  const [state, setState] = useState<QueryState>(initialQueryRequestGroup3.state)
  const [fetchPG04Sw01, setFetchPG04Sw01] = useState<QueryState>(initialQueryRequestGroup3.fetchPG04Sw01)

  const updateState = (updates: Partial<QueryState>) => {
    const updatedState = {...state, ...updates} as QueryState
    setState(updatedState)
  }

  return (
    <QueryRequestContext.Provider value={{state, updateState,fetchPG04Sw01,setFetchPG04Sw01}}>
      {children}
    </QueryRequestContext.Provider>
  )
}

const useQueryRequest = () => useContext(QueryRequestContext)
export {QueryRequestProvider, useQueryRequest}
