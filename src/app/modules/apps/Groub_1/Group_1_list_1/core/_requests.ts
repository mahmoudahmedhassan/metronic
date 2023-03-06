import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {ListOneToView, ListOneToPost, ListOneViewQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const API_URL_UNSTABLE = process.env.REACT_APP_API_URL_UNSTABLE
const GET_GETPRO = `${API_URL_UNSTABLE}Jobs/Getpro`
const GET_GETALL = `${API_URL_UNSTABLE}Jobs/Getall`
const GET_GETHID = `${API_URL_UNSTABLE}Jobs/GetHld`
const GET_GETFIN = `${API_URL_UNSTABLE}Jobs/Getfin`
const GET_PG2MD01 = `${API_URL_UNSTABLE}Jobs/PG2Md01`

const ListOne_URL = `${API_URL}/ListOne`
const GET_ListOne_URL = `${API_URL}/ListOne/query`
const POST_PG2MD01BU1 = `${API_URL_UNSTABLE}Jobs/PG2Md01Bu1`

const getProData = (query: string): Promise<ListOneViewQueryResponse> => {
  return axios.get(`${GET_GETPRO}`).then((response) => response.data)
}
const getAllData = (query: string): Promise<ListOneViewQueryResponse> => {
  return axios.get(`${GET_GETALL}`).then((response) => response.data)
}
const getHidData = (query: string): Promise<ListOneViewQueryResponse> => {
  return axios.get(`${GET_GETHID}`).then((response) => response.data)
}
const getFinData = (query: string): Promise<ListOneViewQueryResponse> => {
  return axios.get(`${GET_GETFIN}`).then((response) => response.data)
}

const postPG2Md01Bu1 = (values: ListOneToPost): Promise<ListOneToPost | undefined> => {

  // return axios
    // .post(`${POST_PG2MD01BU1}/${values}`, values)
    // .then((response: AxiosResponse<Response<ListOneToPost>>) => response.data)
    // .then((response: Response<ListOneToPost>) => response.data)

    console.log("values",values)
    return axios.post(`${POST_PG2MD01BU1}`,{values},{
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(values)
    })
 }

const get_PG2MD01 = (id?: any): Promise<ListOneToView | undefined> => {
  console.log("get_PG2MD01",id)
  return axios
    .get(`${GET_PG2MD01}/${id?.value_1}/${id?.value_2}`)
    .then((response: AxiosResponse<Response<ListOneToView>>) => response.data)
    .then((response: Response<ListOneToView>) => response.data)
}
const getListOneById = (id: any): Promise<ListOneToView | undefined> => {
  return axios
    .get(`${ListOne_URL}/${id}`)
    .then((response: AxiosResponse<Response<ListOneToView>>) => response.data)
    .then((response: Response<ListOneToView>) => response.data)
}

const createListOne = (ListOne: ListOneToPost) => {
  return axios.put(ListOne_URL, ListOne).then((response) => response.data)
}

const updateListOne = (ListOne: ListOneToPost): Promise<ListOneToPost | undefined> => {
  return axios
    .post(`${ListOne_URL}/${ListOne.userID}`, ListOne)
    .then((response: AxiosResponse<Response<ListOneToPost>>) => response.data)
    .then((response: Response<ListOneToPost>) => response.data)
}

const deleteListOne = (ListOneId: ID): Promise<void> => {
  return axios.delete(`${ListOne_URL}/${ListOneId}`).then(() => {})
}

const deleteSelectedListOne = (ListOneIds: Array<ID>): Promise<void> => {
  const requests = ListOneIds.map((id) => axios.delete(`${ListOne_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {
  getProData,
  deleteListOne,
  deleteSelectedListOne,
  getListOneById,
  createListOne,
  updateListOne,
  getAllData,
  getFinData,
  getHidData,
  postPG2Md01Bu1,
}
