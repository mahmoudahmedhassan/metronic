import {useQuery} from 'react-query'
import axios, { AxiosResponse } from 'axios'
import {Response} from '../../../../_metronic/helpers'
import { OptionsToPost } from '../../../../app/modules/apps/Groub_1/Group_1_list_1/core/_models'
const API_URL_UNSTABLE = process.env.REACT_APP_API_URL_UNSTABLE

const useData = (url: any, values?: any, ) => {
   
  const {data, isLoading, isError, isSuccess, error} = useQuery('data', async (): Promise<any | undefined> => {
    return axios
     .get(`${API_URL_UNSTABLE}${url}/${values?.value_1}/${values?.value_2}`)
     .then((res:AxiosResponse<Response<any>>) => {
       console.log(res.data);
       return res.data as unknown as any;
     })
    //.then((response: AxiosResponse<Response<OptionsToPost>>) => response.data)
    //.then((response: Response<OptionsToPost>) => response.data)
 })
   
  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  }
}

export default useData
