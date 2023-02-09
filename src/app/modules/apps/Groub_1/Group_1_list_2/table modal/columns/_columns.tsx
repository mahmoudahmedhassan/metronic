// @ts-nocheck
import {Column} from 'react-table'
import {InfoCell} from './InfoCell'
import {LastLoginCell} from './LastLoginCell'
import {TwoStepsCell} from './TwoStepsCell'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {CustomHeader} from './CustomHeader'
import {SelectionHeader} from './SelectionHeader'
import {User} from '../../core/_models'
 
const Columns: ReadonlyArray<Column<User>> = [

 
  {
    Header: (props) => <CustomHeader tableProps={props} title='T101' className='min-w-60px' />,
    // Cell: ({...props}) => <SelectionHeader   />,
    accessor:'t101',
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='T102' className='min-w-60px' />,
    accessor:'t102',
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='cmb03' className='min-w-80px' />,
    accessor:'cmb03',
        Cell: ({...props}) => <ActionsCell drop={props.data[props.row.index].dropDownData1} />,
  },

  {
    Header: (props) => <CustomHeader tableProps={props} title='chk04' className='min-w-60px' />,
    accessor:'t103',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].chk04} />,
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='chk05' className='min-w-60px' />,
    accessor:'t105',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].chk05} />,
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='cmb06' className='min-w-60px' />,
    accessor:'cmb06',
    Cell: ({...props}) => <ActionsCell drop={props.data[props.row.index].dropDownData2} />,
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='delete' className='min-w-60px' />,
    Cell: ({...props}) => <span><i className="fas fa-trash"  ></i></span>,
    accessor:'delete',
  },
  
  // {
  //   Header: (props) => <CustomHeader tableProps={props} title='t101' className='min-w-125px' />,
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
