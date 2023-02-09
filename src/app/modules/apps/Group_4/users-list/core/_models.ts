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
  t101?: ID
  t102?: string
  t103?: string
  t104?: string
  t105?: number
  t106?: number
  t107?: number
  t108?: number
  t109?: number
  t1010?: number
  t111?: number
  t112?: string
  t113?: string
   
}
export type QueryResponse = Response<Array<group>>
export const initialgroup: group = {
  sd:0,
  t101: '',
  t102: '',
  t103: '',
  t104: '',
  t105: 0,
  t106: 512,
  t107: 1300,
  t108: 0,
  t109: 1,
  t110: 0,
  t111: 1,
  t112: "",
  t113: ""
}

// table pro 
 export type tablePro = {
  [x: string]: any
  sd?: ID
  t101?: ID
  t102?: string
  t103?: string
  t104?: string
  t105?: number
  t106?: number
  t107?: number
  t108?: number
 
   
}
export type QueryResponseTablePro = Response<Array<tablePro>>
export const initialTablePro: tablePro = {
  sd:0,
  t101: '',
  t102: '',
  t103: '',
  t104: '',
  t105: 0,
  t106: 512,
  t107: 1300,
  t108: 0,
  t109: 1,
  t110: 0,
  t111: 1,
  t112: "",
  t113: ""
}
// modal 

 
export type modal = {
  [x: string]: any
   pG04Tx01?: string | number
   pG04Tx02?: string | number
   pG04Tx03?: string | number
   pG04Tx04?: string | number
   dropDown01?: string | number
   dropDown02?: string | number
}
export type QueryResponseModal = Response<Array<modal>>
export const initialModal: modal = {
  pG04Tx01:"",
  pG04Tx02:"",
  pG04Tx03:"",
  pG04Tx04:"",
  dropDown01:"",
  dropDown02:"",
}
