import { Modal } from 'react-bootstrap';
import { table } from 'console'
import {ID, Response} from '../../../../../../_metronic/helpers'
// export type User = {
//   id?: ID
//   name?: string
//   avatar?: string
//   email?: string
//   position?: string
//   role?: string
//   last_login?: string
//   two_steps?: boolean
//   joined_day?: string
//   online?: boolean
//   initials?: {
//     label: string
//     state: string
//   }
// }
// export type UsersQueryResponse = Response<Array<User>>

// export const initialUser: User = {
//   avatar: 'avatars/300-6.jpg',
//   position: 'Art Director',
//   role: 'Administrator',
//   name: '',
//   email: '',
// }

// main table/
export type group = {
  [x: string]: any
  sd?: ID
  t101?: string
  t102?: string
  t103?: number
  t104?: number
  t105?: string
}
export type QueryResponse = Response<Array<group>>
export const initialgroup: group = {
  sd:0,
  t101: '',
  t102: '',
  t103: 0,
  t104: 0,
  t105: '',
}

// modal 

// {
//   "pG03Tx04a": 2,
//   "pG03Lb02a": 35080,
//   "pG03Lb05a": "Pro 35080Pro 35080Pro 35080Pro 35080Pro 35080Pro 35080Pro 35080Pro 35080",
//   "pG03Tx06": null,
//   "pG03Tx02a": "020-084-22-1550-09",
//   "pG03Lb04a": "Cs70",
//   "pG03Lb07a": 660,
//   "pG03Lb08a": 1400,
//   "pG03Sw02": false,
//   "pG03Sw03": true,
//   "pG03Tx05a": "Rk35080",
//   "pG03Tx03a": 0,
//   "tableIndex": "Q32465",
//   "t201": 1,
//   "t202": "G buyhin                                          ",
//   "t203": 100,
//   "t204": 40,
//   "t205": 125
// }
export type modal = {
  [x: string]: any
  tableIndex?: ID
  pG03Tx04a?: number
  pG03Lb02a?: number
  pG03Lb05a?: string
  pG03Tx06?: string
  pG03Tx02a?: string
  pG03Lb04a?: string
  pG03Lb07a?: number
  pG03Lb08a?: number
  pG03Sw02?: boolean
  pG03Sw03?: boolean
  pG03Tx05a?: string
  pG03Tx03a?: number
  t201?: number
  t202?: string
  t203?: number
  t204?: number
  t205?: number
}
export type QueryResponseModal = Response<Array<modal>>
export const initialModal: modal = {
  tableIndex:0,
  pG03Tx04a: 0,
  pG03Lb02a: 0,
  pG03Lb05a:'',
  pG03Tx06:'',
  pG03Tx02a:'',
  pG03Lb04a:'',
  pG03Lb07a:0,
  pG03Lb08a:0,
  pG03Sw02:false,
  pG03Sw03:false,
  pG03Tx05a:'',
  pG03Tx03a:0,
  t201:0,
  t202: '',
  t203: 0,
  t204: 0,
  t205:0,
}
