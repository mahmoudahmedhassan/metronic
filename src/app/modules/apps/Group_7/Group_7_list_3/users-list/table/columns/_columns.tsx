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
    Header: (props) => <CustomHeader tableProps={props} title='T101' className='min-w-125px' />,
    accessor:'t101'
   },
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
    Header: (props) => <CustomHeader tableProps={props} title='T105' className='min-w-125px' />,
    accessor:'t106'
   },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T107' className='min-w-125px' />,
    accessor:'t107'
   },
   {
    Header: (props) => <CustomHeader tableProps={props} title='delete' className='min-w-60px' />,
    Cell: ({...props}) => <span><i className="fas fa-trash"  ></i></span>,
    accessor:'delete',
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
