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
    Header: (props) => <CustomHeader tableProps={props} title='T201' className='min-w-50px' />,
    accessor:'t201'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T202' className='min-w-150px' />,
    accessor:'t202'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T203' className='min-w-200px' />,
    accessor:'t203'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T204' className='min-w-50px' />,
    accessor:'t204'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T205' className='min-w-50px' />,
    accessor:'t205'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T206' className='min-w-50px' />,
    accessor:'t106'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T207' className='min-w-50px' />,
    accessor:'t207'
 
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T208' className='min-w-50px' />,
    accessor:'t208'
 
  },
 
 
  // {
  //   Header: (props) => <SelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  // },
  // {
  //   Header: (props) => <CustomHeader tableProps={props} title='Name' className='min-w-125px' />,
  //   id: 'name',
  //   Cell: ({...props}) => <InfoCell user={props.data[props.row.index]} />,
  // },
  // {
  //   Header: (props) => <CustomHeader tableProps={props} title='Role' className='min-w-125px' />,
  //   accessor: 'role',
  // },
  // {
  //   Header: (props) => (
  //     <CustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <LastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <CustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <TwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <CustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  // {
  //   Header: (props) => (
  //     <CustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
  //   ),
  //   id: 'actions',
  //   Cell: ({...props}) => <ActionsCell id={props.data[props.row.index].id} />,
  // },
]

export {Columns}
