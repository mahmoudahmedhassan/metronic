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
      <ListOneCustomHeader tableProps={props} title='T102' className='min-w-60px' />
    ),
    accessor: 't103',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T103'className='min-w-60px' />
    ),
    accessor: 't11',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T104' className='min-w-60px' />
    ),
    accessor: 't110',
  },
  {
    Header: (props) => (
      <ListOneCustomHeader tableProps={props} title='T105' className='min-w-60px' />
    ),
    accessor: 't109',
  },
 
 
]

export {ListOneColumns}
