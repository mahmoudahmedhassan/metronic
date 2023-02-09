import {FC, useState, createContext, useContext} from 'react'
import {
  QueryState,
  QueryRequestContextPropsListOne,
  initialQueryRequestListOne,
  WithChildren,
} from '../../../../../../_metronic/helpers'
 const QueryRequestContext = createContext<QueryRequestContextPropsListOne>(initialQueryRequestListOne)

const QueryRequestProvider: FC<WithChildren> = ({children}) => {
  const [state, setState] = useState<QueryState>(initialQueryRequestListOne.state)
  const [fetchState, setFetchState] = useState(initialQueryRequestListOne.fetchState)
   
  const updateState = (updates: Partial<QueryState>) => {
    const updatedState = {...state, ...updates} as QueryState
    setState(updatedState)
  }
 
  return (
    <QueryRequestContext.Provider value={{state, updateState , fetchState, setFetchState}}>
      {children}
    </QueryRequestContext.Provider>
  )
}

const useQueryRequest = () => useContext(QueryRequestContext)
export {QueryRequestProvider, useQueryRequest}
