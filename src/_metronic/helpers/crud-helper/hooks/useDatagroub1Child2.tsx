import {useQuery} from 'react-query'
import axios from 'axios'
const API_URL_UNSTABLE = process.env.REACT_APP_API_URL_UNSTABLE

const useDataGroub1Child2 = (url?: any, values?: any) => {
  let value_1 = values.value_1
  let value_1Array = value_1.split('')
  for (var i = 0; i < value_1Array.length; i++) {
    if (value_1Array[i] === '/') {
      value_1Array.splice(i, 1)
      i--
    }
  }
  let t101String = value_1Array.join(' ').replace(/ /g, '')
 
  const {data, isLoading, isError, isSuccess, error} = useQuery('data', async () => {
    const response =   await axios.get(`${API_URL_UNSTABLE}${ url}/${ t101String}/${values?.value_2}`)
    return response.data
  })

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  }
}

export default useDataGroub1Child2
