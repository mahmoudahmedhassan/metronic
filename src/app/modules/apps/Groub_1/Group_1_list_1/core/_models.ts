import { number } from 'yup'
import {ID, Response} from '../../../../../../_metronic/helpers'
 
 
// export type ListOne = {
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
// export const initialListOne: ListOne = {
//   avatar: 'avatars/300-6.jpg',
//   position: 'Art Director',
//   role: 'Administrator',
//   name: '',
//   email: '',
// }

export type ListOneToView = {
  sd?: ID
  t101?: string
  t102?: string
  t103?: string
  t104?: string
  t105?: number
  t106?: number
  t107?: number
  t108?: number
  t109?: number
  t110?: number
  t111?: number
  t112?: string
  t113?: string
  t114?: string
  sW_N?: boolean
  sW_S?: boolean
  sW_R?: boolean
  sW_ST?: boolean
}
export type ListOneViewQueryResponse = Response<Array<ListOneToView>>
 
export type ListOneToPost ={
  userID?: ID
  PG2Md01Tx1?:string
  PG2Md01Tx2?:string
  PG2Md01Tx3?:string
  PG2Md01Comb1?:string
  PG2Md01Tx4?:number
  PG2Md01Tx5?:number
  PG2Md01Tx6?:string
  PG2Md01Tx7?:number
  PG2Md01Tx8?: number
  PG2Md01Tx9?: string
  PG2Md01Tx10?: number
  PG2Md01Tx11?: number
  PG2Md01Tx12?:string
  PG2Md01Tx13?: number
  PG2Md01Tx14?: number
  PG2Md01Tx15?: string
  PG2Md01Tx16?: string
  swt01?: boolean
  swt02?: boolean
  swt03?: boolean
  swt04?: boolean
  swt05?: boolean
 }
 
export const initialListOneToPost: ListOneToPost = {
  userID:0,
  PG2Md01Tx1: '',
  PG2Md01Tx2: '',
  PG2Md01Tx3: '',
  PG2Md01Comb1: '',
  PG2Md01Tx4: 0,
  PG2Md01Tx5: 0,
  PG2Md01Tx6: '',
  PG2Md01Tx7: 0,
  PG2Md01Tx8: 0,
  PG2Md01Tx9: '',
  PG2Md01Tx10: 0,
  PG2Md01Tx11: 0,
  PG2Md01Tx12: '',
  PG2Md01Tx13: 0,
  PG2Md01Tx14: 0,
  PG2Md01Tx15: '',
  PG2Md01Tx16: '',
  swt01: true,
  swt02: true,
  swt03: true,
  swt04: true,
  swt05: true
}
// export type OptionsToPost ={
//   id?: ID
//   PG2Md01Tx1?:string
//   PG2Md01Tx2?:string
//   PG2Md01Tx3?:string
//   PG2Md01Comb1?:string
//   PG2Md01Tx4?:string
//   PG2Md01Tx5?:string
//   PG2Md01Tx6?:string
//   PG2Md01Tx7?:string
//   PG2Md01Tx8?: string
//   PG2Md01Tx9?: string
//   PG2Md01Tx10?: string
//   PG2Md01Tx11?: string
//   PG2Md01Tx12?:string
//   PG2Md01Tx13?: string
//   PG2Md01Tx14?: string
//   PG2Md01Tx15?: string
//   PG2Md01Tx16?: string
//   PG2Md01Tx17?: string
//   PG2Md01Tx18?: string
//   PG2Md01Tx19?: string
//   check_1?: boolean
//   check_2?: boolean
//   check_3?: boolean
//   check_4?: boolean
//   check_5?: boolean
//   check_6?: boolean
//   check_7?: boolean
//   check_8?: boolean
//   check_9?: boolean
 
// }
export type OptionsToPost = {
  id?:ID
  pG2Md02Tx11a?:number
  pG2Md01Tx1a?:number
  pG2Md01Comb1a?:number
  pG2Md01Tx2a?:string  
  pG2Md01Tx3a?:number
  pG2Md01Tx4a?:number
  pG2Md01Tx5a?:number
  pG2Md01Tx7a?:number
  pG2Md01Tx8a?:number
  pG2Md01Tx9a?:number
  pG2Md01Tx6a?:string
  pG2Md01Tx10a?:string
  pG2Md01Tx13a?:number 
  pG2Md01Tx11a?:number
  pG2Md01Tx12a?:number
  pG2Md01Tx16a?:number
  pG2Md01Tx17a?:string 
  pG2Md01Lb1a?:string
  pG2Md02Tx14a?:number
  pG2Md02Tx15a?:number
  pG2Md02Tx18a?:number
  pG2Md02Tx19a?:number
  pG2Md01Ch032a?:number
  pG2Md01Sw11a?:boolean
  pG2Md01Sw12a?:boolean
  pG2Md01Sw21a?:boolean
  pG2Md01Sw22a?: boolean
  pG2Md01Sw4a?:boolean
  pG2Md01Sw31a?:boolean
  pG2Md01Sw32a?:boolean
  pG2Md01Sw5a?:boolean
  pG2Md01Ch01a?:boolean
  pG2Md01Ch031a?:boolean
  pG2Md01Ch02a?:boolean
  pG2Md01Tx20a?:boolean

  t202?:number
  t203?:string
  t204?:number
  t205:number
  t206?: number
}
export const initialOptionsToPost: OptionsToPost = {
  id:0,
  pG2Md02Tx11a:0,
  pG2Md01Tx1a: 0,
  pG2Md01Comb1a:0,
  pG2Md01Tx2a:'',  
  pG2Md01Sw11a:false,
  pG2Md01Sw12a:false,
  pG2Md01Sw21a:false,
  pG2Md01Sw22a: false,
  pG2Md01Sw4a:false,
  pG2Md01Tx3a:0,
  pG2Md01Tx4a:0,
  pG2Md01Tx5a:0,
  pG2Md01Tx7a:0,
  pG2Md01Tx8a:0,
  pG2Md01Tx9a:0,
  pG2Md01Tx6a:'',
  pG2Md01Tx10a:'',
  pG2Md01Tx13a:0,
  pG2Md01Sw31a:false,
  pG2Md01Sw32a:false,
  pG2Md01Tx11a:0,
  pG2Md01Tx12a:0,
  pG2Md01Tx16a:0,
  pG2Md01Tx20a:false,
  pG2Md01Tx17a: '',
  pG2Md01Lb1a:'',
  pG2Md01Sw5a:false,
  pG2Md01Ch01a:false,
  pG2Md01Ch031a:false,
  pG2Md01Ch02a:false,
  pG2Md02Tx14a:0,
  pG2Md02Tx15a:0,
  pG2Md02Tx18a:0,
  pG2Md02Tx19a:0,
  pG2Md01Ch032a:0,
  t202:0,
  t203:'',
  t204:0,
  t205:0,
  t206:0,  
}


