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
    Header: (props) => <CustomHeader tableProps={props} title='T102' className='min-w-125px' />,
    accessor:'t102'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T103' className='min-w-125px' />,
    accessor:'t103'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T104' className='min-w-125px' />,
    accessor:'t104'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T105' className='min-w-125px' />,
    accessor:'t105'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T106' className='min-w-125px' />,
    accessor:'t106'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T107' className='min-w-125px' />,
    accessor:'t107'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T108' className='min-w-125px' />,
    accessor:'t108'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T109' className='min-w-125px' />,
    accessor:'t109'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T110' className='min-w-125px' />,
    accessor:'t110'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T111' className='min-w-125px' />,
    accessor:'t111'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T112' className='min-w-125px' />,
    accessor:'t112'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T113' className='min-w-125px' />,
    accessor:'t113'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T114' className='min-w-125px' />,
    accessor:'t114'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T115' className='min-w-125px' />,
    accessor:'t115'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T116' className='min-w-125px' />,
    accessor:'t116'
 
  },
  
 
]

export {Columns}
