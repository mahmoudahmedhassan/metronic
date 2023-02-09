import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {User, UsersQueryResponse,ListTwoViewQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/users/query`

// based url
const API_URL_UNSTABLE  = process.env.REACT_APP_API_URL_UNSTABLE
const GET_PG05CH02 = `${API_URL_UNSTABLE}jobs/PG05Ch02`
const GET_PG05CH01 = `${API_URL_UNSTABLE}jobs/PG05Ch01`
const GET_PG05CH03 = `${API_URL_UNSTABLE}jobs/PG05Ch03`
const GET_PG05TP01 = `${API_URL_UNSTABLE}jobs/PG05Tp01`

const getPG05Ch02 = (query: string): Promise<ListTwoViewQueryResponse> => {
  return axios
    .get(`${GET_PG05CH02}?${query}`)
    .then((d: AxiosResponse<ListTwoViewQueryResponse>) => d.data)
}
const getPG05Ch01 = (query: string): Promise<ListTwoViewQueryResponse> => {
  return axios
    .get(`${GET_PG05CH01}?${query}`)
    .then((d: AxiosResponse<ListTwoViewQueryResponse>) => d.data)
}
const getPG05Ch03 = (query: string): Promise<ListTwoViewQueryResponse> => {
  return axios
    .get(`${GET_PG05CH03}?${query}`)
    .then((d: AxiosResponse<ListTwoViewQueryResponse>) => d.data)
}
const getPG05TP01 = (query: string): Promise<ListTwoViewQueryResponse> => {
  return axios
    .get(`${GET_PG05TP01}?${query}`)
    .then((d: AxiosResponse<ListTwoViewQueryResponse>) => d.data)
}


const getUsers = (query: string): Promise<UsersQueryResponse> => {
  return axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((d: AxiosResponse<UsersQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<User | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const createUser = (user: User): Promise<User | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateUser = (user: User): Promise<User | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser,getPG05Ch02,getPG05Ch01,getPG05Ch03,getPG05TP01}
