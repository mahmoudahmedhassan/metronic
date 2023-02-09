// @ts-nocheck
import {Column} from 'react-table'
import {InfoCell} from './InfoCell'
import {LastLoginCell} from './LastLoginCell'
import {TwoStepsCell} from './TwoStepsCell'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {CustomHeader} from './CustomHeader'
import {SelectionHeader} from './SelectionHeader'
import {modal} from '../../core/_models'
 
const Columns: ReadonlyArray<Column<modal>> = 

 [
    {
        Header: (props) => <CustomHeader tableProps={props} title='T201' className='min-w-50px' />,
        accessor:'t201'
     
      },
      {
        Header: (props) => <CustomHeader tableProps={props} title='T202' className='min-w-100px' />,
        accessor:'t202'
     
      },
      {
        Header: (props) => <CustomHeader tableProps={props} title='T203' className='min-w-100px' />,
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
        accessor:'t206'
     
      },
      {
        Header: (props) => <CustomHeader tableProps={props} title='T207' className='min-w-50px' />,
        accessor:'t207'
     
      },
      {
        Header: (props) => <CustomHeader tableProps={props} title='T208' className='min-w-130px' />,
        accessor:'t108'
     
      },
    ];

export {Columns}
