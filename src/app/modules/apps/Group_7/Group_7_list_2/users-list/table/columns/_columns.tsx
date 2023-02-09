// @ts-nocheck
import {Column} from 'react-table'
import {InfoCell} from './InfoCell'
import {LastLoginCell} from './LastLoginCell'
import {TwoStepsCell} from './TwoStepsCell'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {CustomHeader} from './CustomHeader'
import {SelectionHeader} from './SelectionHeader'
import {group} from '../../core/_models'

const Columns: ReadonlyArray<Column<group>> = [
 
  {
    Header: (props) => <CustomHeader tableProps={props} title='Sd' className='min-w-125px' />,
    accessor:'sd'
   },
  {
    Header: (props) => <CustomHeader tableProps={props} title='SdTx' className='min-w-125px' />,
    accessor:'sdTx'
   },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T2' className='min-w-125px' />,
    accessor:'t2'
   },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T3' className='min-w-125px' />,
    accessor:'t3'
   },
  
]

export {Columns}
