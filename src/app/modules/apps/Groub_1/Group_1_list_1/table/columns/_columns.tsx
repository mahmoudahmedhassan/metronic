// @ts-nocheck
import {Column} from 'react-table'
import {ListOneInfoCell} from './ListOneInfoCell'
import {ListOneTwoStepsCell} from './ListOneTwoStepsCell'
import {ListOneActionsCell} from './ListOneActionsCell'
import {ListOneCustomHeader} from './ListOneCustomHeader'
import {ListOne} from '../../core/_models'
import {ListOneSelectionHeader} from './ListOneSelectionHeader'
import {ListOneSelectionCell} from './ListOneSelectionCell'
import {ListOneLastLoginCell} from './ListOneLastLoginCell'
import * as moment from 'moment';

const ListOneColumns: ReadonlyArray<Column<ListOne>> = [
  // {
  //   Header: (props) => <ListOneSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   // Cell: ({...props}) => <ListOneSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='Sd' className='min-w-60px' />
    ),
    id: 'sd',
    // Cell: ({...props}) => <ListOneInfoCell ListOne={props.data[props.row.index]} />,
    accessor: 'sd',
  },
 
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T102' className='min-w-150px' />
    ),
    accessor: 't102',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T103' className='min-w-50px' />
    ),
    accessor: 't103',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T104' className='min-w-300px' />
    ),
    accessor: 't104',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T105' className='min-w-50px' />
    ),
    accessor: 't105',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T106' className='min-w-50px' />
    ),
    accessor: 't106',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T107' className='min-w-50px' />
    ),
    accessor: 't107',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T108' className='min-w-50px' />
    ),
    accessor: 't108',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T109' className='min-w-30px' />
    ),
    accessor: 't109',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T110' className='min-w-30px' />
    ),
    accessor: 't110',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T111' className='min-w-30px' />
    ),
    accessor: 't111',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T112' className='min-w-150px' />
    ),
    Cell: props => <div> {moment(props?.value).format('DD/MM/YYYY')} </div>,
    accessor: 't112',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T113' className='min-w-50px' />
    ),
    accessor: 't113',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T114' className='min-w-150px' />
    ),
    Cell: props => <div> {moment(props?.value)?.format('DD/MM/YYYY')} </div>,
    accessor: 't114',
  },

  // {
  //   Header: (props) => (
  //     <ListOneCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => (
  //     <ListOneLastLoginCell last_login={props.data[props.row.index].last_login} />
  //   ),
  // },
  // {
  //   Header: (props) => (
  //     <ListOneCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <ListOneTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <ListOneCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ListOneActionsCell id={props.data[props.row.index].sd} />,
  },
]

export {ListOneColumns}
