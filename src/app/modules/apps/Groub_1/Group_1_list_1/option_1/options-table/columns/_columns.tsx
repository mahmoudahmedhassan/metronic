// @ts-nocheck
import {Column} from 'react-table'
import {ListOneInfoCell} from './InfoCell'
import {ListOneTwoStepsCell} from './TwoStepsCell'
import {ListOneActionsCell} from './ActionsCell'
import {ListOneCustomHeader} from './CustomHeader'
import {ListOne} from '../../core/_models'
import {ListOneSelectionHeader} from './SelectionHeader'
import {ListOneSelectionCell} from './SelectionCell'
import {ListOneLastLoginCell} from './LastLoginCell'
import * as moment from 'moment';

const ListOneColumns: ReadonlyArray<Column<ListOne>> = [
  // {
  //   Header: (props) => (
  //     <ListOneCustomHeader tableProps={props} title='select' className='min-w-60px' />
  //   ),
  //   Cell: ({...props}) => <ListOneSelectionCell id={props.data[props.row.index].id} />,

  //  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props}   className='text-end min-w-10px' />
    ),
    id:"id",
     Cell: ({...props}) => <ListOneSelectionCell id={props.data[props.row.index] }/>,
  },
 
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T202' className='min-w-60px' />
    ),
    accessor: 't202',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T203'className='min-w-100px' />
    ),
    accessor: 't203',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T204' className='min-w-60px' />
    ),
    accessor: 't204',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T205' className='min-w-60px' />
    ),
    accessor: 't205',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T206' className='min-w-60px' />
    ),
    accessor: 't206',
  },
 
]

export {ListOneColumns}
