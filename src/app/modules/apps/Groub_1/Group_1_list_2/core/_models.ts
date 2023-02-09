import {ID, Response} from '../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  name?: string
  avatar?: string
  email?: string
  position?: string
  role?: string
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}
export type ListTwoToView = {
  // sd?: ID
  t101?: string
  t102?: number
  t103?: string
  t104?: string
  t105?: string
  t106?: number
  t107?: string
  t108?: string
}
export type ListTwoViewQueryResponse = Response<Array<ListTwoToView>>