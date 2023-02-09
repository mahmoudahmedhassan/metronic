import { Modal } from 'react-bootstrap';
import { table } from 'console';
import {ID, Response} from '../../../../../../../_metronic/helpers'
  
// main table/
export type group = {
  [x: string]: any
  sd?: ID
  t101?: string
  t102?: string
  t103?: number
  t104?: number
  t105?: string
  t106?: number
  t107?: string
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