// /* eslint-disable react-hooks/exhaustive-deps */
// import {FC, useContext, useState, useEffect, useMemo} from 'react'
// import {useQuery} from 'react-query'
// import {
//   createResponseContext,
//   initialQueryResponse,
//   initialQueryState,
//   PaginationState,
//   QUERIES,
//   stringifyRequestQuery,
//   WithChildren,
// } from '../../../../../../_metronic/helpers'
// import {getUsers,getPG05Ch02} from './_requests'
// // import {User} from './_models'
// import {useQueryRequest} from './QueryRequestProvider'

// const QueryResponseContext = createResponseContext<any>(initialQueryResponse)
// const QueryResponseProvider: FC<WithChildren> = ({children}) => {
//   const {state} = useQueryRequest()
//   const [query, setQuery] = useState<string>(stringifyRequestQuery(state))
//   const updatedQuery = useMemo(() => stringifyRequestQuery(state), [state])

//   useEffect(() => {
//     if (query !== updatedQuery) {
//       setQuery(updatedQuery)
//     }
//   }, [updatedQuery])

//   const {
//     isLoading,
//     isFetching,
//     isError,
//     error,
//     refetch,
//     data: response,
//   } = useQuery(
//     `${QUERIES.USERS_LIST}-${query}`,
//     () => {
//       return getPG05Ch02(query)
//     },
//     {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
//   )

//   return (
//     <QueryResponseContext.Provider value={{isLoading,isError, isFetching,error, refetch, response, query}}>
//       {children}
//     </QueryResponseContext.Provider>
//   )
// }

// const useQueryResponse = () => useContext(QueryResponseContext)

// const useQueryResponseData = () => {
//   const {response} = useQueryResponse()
//   if (!response) {
//     return []
//   }

//   return response?.data || []
// }

// const useQueryResponsePagination = () => {
//   const defaultPaginationState: PaginationState = {
//     links: [],
//     ...initialQueryState,
//   }

//   const {response} = useQueryResponse()
//   if (!response || !response.payload || !response.payload.pagination) {
//     return defaultPaginationState
//   }

//   return response.payload.pagination
// }

// const useQueryResponseLoading = (): boolean => {
//   const {isLoading} = useQueryResponse()
//   return isLoading
// }

// export {
//   QueryResponseProvider,
//   useQueryResponse,
//   useQueryResponseData,
//   useQueryResponsePagination,
//   useQueryResponseLoading,
// }

/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext, useState, useEffect, useMemo} from 'react'
import {useQuery} from 'react-query'
import {
  createResponseContext,
  initialQueryResponse,
  initialQueryState,
  PaginationState,
  QUERIES,
  stringifyRequestQuery,
  WithChildren,
} from '../../../../../../_metronic/helpers'
import {getPG05Ch02, getPG05Ch01, getPG05Ch03, getPG05TP01} from './_requests'
// import {ListOne} from './_models'
import {useQueryRequest} from './QueryRequestProvider'

const QueryResponseContext = createResponseContext<any>(initialQueryResponse)
const QueryResponseProvider: FC<WithChildren> = ({children}) => {
  const {state, fetchState} = useQueryRequest()
  const [query, setQuery] = useState<string>(stringifyRequestQuery(state))
  const updatedQuery = useMemo(() => stringifyRequestQuery(state), [state])
  useEffect(() => {
    if (query !== updatedQuery) {
      setQuery(updatedQuery)
    }
  }, [updatedQuery])

  const {isFetching,isLoading,isError,error,refetch,data: response,} = useQuery<any, Error>(
    [`ListTwo`, {page: 1, pageSize: 10},fetchState],
    () => {
 
      switch (fetchState) {
        case 'PG05Ch02':
          return getPG05Ch02(query)
        case 'PG05Ch01':
          return getPG05Ch01(query)
        case 'PG05Ch03':
          return getPG05Ch03(query)
        case 'PG05Tp01':
          return getPG05TP01(query)
        default:
          return getPG05Ch02(query)
      }
    },

    {
      onError: (error) => console.log(`Something went wrong: ${error.message}`),
      cacheTime: 0,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  return (
    <QueryResponseContext.Provider
      value={{isLoading, isFetching, isError, error, refetch, response, query}}
    >
      {children}
    </QueryResponseContext.Provider>
  )
}

const useQueryResponse = () => useContext(QueryResponseContext)

const useQueryResponseData = () => {
  const {response} = useQueryResponse()
  if (!response) {
    return []
  }
  return response || []
}

const useQueryResponsePagination = () => {
  const defaultPaginationState: PaginationState = {
    links: [],
    ...initialQueryState,
  }

  const {response} = useQueryResponse()
  if (!response || !response.payload || !response.payload.pagination) {
    return defaultPaginationState
  }

  return response.payload.pagination
}

const useQueryResponseLoading = (): boolean => {
  const {isLoading} = useQueryResponse()
  return isLoading
}

export {
  QueryResponseProvider,
  useQueryResponse,
  useQueryResponseData,
  useQueryResponsePagination,
  useQueryResponseLoading,
}
