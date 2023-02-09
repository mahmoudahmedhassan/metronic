import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {group, QueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/users/query`

// based url
const API_URL_UNSTABLE  = process.env.REACT_APP_API_URL_UNSTABLE
const GET_PG08 = `${API_URL_UNSTABLE}jobs/PG08`
 

const GetPg08 = (query: string): Promise<QueryResponse  > => {
  return axios
    .get(`${GET_PG08}`)
    .then((d: AxiosResponse<QueryResponse>) => d.data)
}

 

const getUsers = (query: string): Promise<QueryResponse  > => {
  return axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((d: AxiosResponse<QueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<group | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<group>>) => response.data)
    .then((response: Response<group>) => response.data)
}

const createUser = (user: group): Promise<group | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<group>>) => response.data)
    .then((response: Response<group>) => response.data)
}

const updateUser = (user: group): Promise<group | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<group>>) => response.data)
    .then((response: Response<group>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser,GetPg08,  }
