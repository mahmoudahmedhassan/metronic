import {FC, useState, createContext, useContext} from 'react'
import {
  QueryState,
  QueryRequestContextProps,
  initialQueryRequest,
   WithChildren,
  initialQueryRequestListTwo,
  QueryRequestContextPropsListTwo
} from '../../../../../../_metronic/helpers'

const QueryRequestContext = createContext<QueryRequestContextPropsListTwo>(initialQueryRequestListTwo)

const QueryRequestProvider: FC<WithChildren> = ({children}) => {
  const [state, setState] = useState<QueryState>(initialQueryRequestListTwo.state)
  const [fetchState, setFetchState] = useState(initialQueryRequestListTwo.fetchState)

  const updateState = (updates: Partial<QueryState>) => {
    const updatedState = {...state, ...updates} as QueryState
    setState(updatedState)
  }

  return (
    <QueryRequestContext.Provider value={{state, updateState,fetchState,setFetchState}}>
      {children}
    </QueryRequestContext.Provider>
  )
}

const useQueryRequest = () => useContext(QueryRequestContext)
export {QueryRequestProvider, useQueryRequest}
