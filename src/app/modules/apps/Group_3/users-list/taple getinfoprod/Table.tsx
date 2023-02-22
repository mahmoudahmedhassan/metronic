// eslint-disable-next-line @typescript-eslint/no-redeclare
// import { useMemo, useState, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react'
import { useMemo, useState, useEffect,   } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from './columns/CustomHeaderColumn'
import { CustomRow } from './columns/CustomRow'
import { useQueryResponseData, useQueryResponseLoading } from '../core/QueryResponseProvider'
import { Columns } from './columns/_columns'
import { modal } from '../core/_models'
// import {UsersListLoading} from '../../components/loading/UsersListLoading'
// import {UsersListPagination} from '../components/pagination/UsersListPagination'
import { KTCardBody } from '../../../../../../_metronic/helpers'
import { useListView } from '../core/ListViewProvider'
import BootstrapTable from 'react-bootstrap-table-next';
//@ts-ignore
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import DataTable from 'react-data-table-component'
import { TRUE } from 'sass'
import { PostPG4Tb02 } from '../core/_requests'
 
let CheckInput = (props:any) => {
  return (
    <input
      style={{ visibility: "visible", height: "12px", width: "12px", cursor: "pointer" }}
      id={props.id}
      disabled={props.disabled}
      type="checkbox"
      checked={props.check}
      onChange={e => props.onChange(e, props.rowID, props.id)}
    />
  )
}

let NumberInput = (props:any) => {
   return (
    <div style={{ display: "flex" }}>
      <input
        id={props.id}
        disabled={props.disabled}
        type="number" min="0"
        value={props.value}
        onChange={e => props.onChange(e, props.rowID, props.id)}
        style={{ width: '35px' }} />
     </div>
  )
}
const Table = ({ tableData ,setAllChecked,setApper,pG04Md01Lb01a}: any) => {
   const [data, setData] = useState(tableData);
 
   useEffect(() => {
    let newArr = tableData.map((item: { tableIndex: any; t201: any; t202: any; t203: any; t204: any; t204tx: any; t205: any; t206: any; t207: any; t207tx: any; t208: any; t209: any; t209tx: any; t210: any; t211: any; t212: any; t212tx: any }) => {
      return {
        id: item.tableIndex,
        t201: item.t201,
        t202: item.t202,
        t203: item.t203,
        t204: item.t204,
        t204tx: item.t204tx,
        t205: item.t205,
        t206: item.t206,
        t207: item.t207,
        t207tx: item.t207tx,
        t208: item.t208,
        t209: item.t209,
        t209tx: item.t209tx,
        t210: item.t210,
        t211: item.t211,
        t212: item.t212,
        t212tx: item.t212tx,
      }
    });
    setData(newArr)
  }, [tableData]);

  // const listTwo = useQueryResponseData();
  // const isLoading = useQueryResponseLoading();
  // const columns = useMemo(() => Columns, []);
 
  useEffect(() => {
    let AllChecked = true;
    data.forEach((item: { t212: any }):any => {
      AllChecked = item.t212 && AllChecked;
    });
    if (AllChecked) {
      setAllChecked(AllChecked);
    }
  }, [data, setAllChecked])

  const onCheck = async (e: { target: { checked: any } }, rowId: any, selector: string) => {
     console.log('===>CHECK ', e.target.checked, rowId, selector);

    let newRow = data.find((row: { id: any }) => row.id === rowId);
    console.log("newRow", newRow)
    let nodeIndex = data.findIndex((row: { id: any }) => row.id === rowId)
    newRow[selector] = e.target.checked;

    if (nodeIndex === data.length - 1) {
      for (let item in newRow) {
        if (item === selector) break;
        if (newRow[item] === false)
          newRow[item] = null;
      }
    }

    let newData = [...data]
    newData[nodeIndex] = newRow
    setData([...newData])
    let nextIndex = Object.keys(newRow).findIndex(item => item === selector) + 1;
    let nextSelector = Object.keys(newRow)[nextIndex];
    let obj :any={}
    if (typeof newRow[nextSelector] !== "boolean") {

      // make an api call with new updated value
        obj.id =newRow.id;
        obj[nextSelector] = newRow[nextSelector];
        obj[selector] = newRow[selector]

       console.log("!!!!!",obj)
    } else {
      // make an api call with new updated value 
        obj.id = newRow.id
        obj[selector] = newRow[selector]
      console.log("?????", obj)
    }

     await PostPG4Tb02({id:rowId,t203:selector,pG04Lb01a:pG04Md01Lb01a,userUpdate:0,comNameTxt:obj.t204tx,comName:"ghjgj"})
  }

  const onNumberChange = (e: { target: { value: any } }, rowId: any, selector: string | number) => {
    console.log('N===> ', e.target.value, rowId, selector)
    let newRow = data.find((row: { id: any }) => row.id === rowId)
    let nodeIndex = data.findIndex((row: { id: any }) => row.id === rowId)
    newRow[selector] = e.target.value
    let newData = [...data]
    newData[nodeIndex] = newRow
    setData([...newData])
  }

  const columns = [
 
    {
      name: 'T201',
      selector: (row:any) => <span style={{ cursor: "pointer" }}>{row.t201}</span>,
      style: {
        backgroundColor: '#ffa07aa3',
      }
    },
    {
      name: 'T202',
      selector: (row:any) => <span>{row.t202}</span>,
      style: {
        backgroundColor: '#ffa07aa3'
      }
    },
    {
      name: 'T203',
      selector: (row: any) => <span style={{ cursor: "pointer" }} onDoubleClick={()=>setApper(true)}>{row.t203}</span>,

    },
    {
      name: 'T204',
      selector: (row: { t204: any }) => row.t204,
      cell: (row: { id: any; t204: null }):any => <CheckInput rowID={row.id} id={'t204'} onChange={onCheck} check={row.t204} disabled={row.t204 || row.t204 == null} />,
      style: {
        background:'#bdc3c7',
      }
    },

    {
      name: 'T204X',
      selector: (row: { t204tx: any }) => row.t204tx,
      cell: (row: { id: any; t204tx: any; t204: any }) => <NumberInput rowID={row.id} id={'t204tx'} onChange={onNumberChange} row={row} value={row.t204tx} disabled={row.t204} />,
      style: {
        background:'#bdc3c7',
         // background:' -webkit - linear - gradient(to right, #2c3e50, #bdc3c7)',   
        // background:' linear-gradient(to right, #2c3e50, #bdc3c7)' 
       }
    },

    {
      name: 'T205',
      selector: (row: { t205: any }) => row.t205,
      cell: (row: { id: any; t205: null }) => <CheckInput rowID={row.id} id={'t205'} onChange={onCheck} check={row.t205} disabled={row.t205 || row.t205 == null} />
    },
    {
      name: 'T206',
      selector: (row: { t206: any }) => row.t206,
      cell: (row: { id: any; t206: null }) => <CheckInput rowID={row.id} id={'t206'} check={row.t206} onChange={onCheck} row={row} value={row.t206} disabled={row.t206 || row.t206 == null} />
    },
    {
      name: 'T207',
      selector: (row: { t207: any }) => row.t207,
      cell: (row: { id: any; t207: null }) => <CheckInput rowID={row.id} id={'t207'} onChange={onCheck} check={row.t207} disabled={row.t207 || row.t207 == null} />,
      style:{background:'#f7b7337d'}
    },
    {
      name: 'T207X',
      selector: (row: { t207tx: any }) => row.t207tx,
      cell: (row: { id: any; t207tx: any; t207: any }) => <NumberInput rowID={row.id} id={'t207tx'} onChange={onNumberChange} row={row} value={row.t207tx} disabled={row.t207} />,
      style:{background:'#f7b7337d'}
    },
    {
      name: 'T208',
      selector: (row: { t208: any }) => row.t208,
      cell: (row: { id: any; t208: null }) => <CheckInput rowID={row.id} id={'t208'} onChange={onCheck} check={row.t208} disabled={row.t208 || row.t208 == null} />
    },
    {
      name: 'T209',
      selector: (row: { t209: any }) => row.t209,
      cell: (row: { id: any; t209: null }) => <CheckInput rowID={row.id} id={'t209'} onChange={onCheck} check={row.t209} disabled={row.t209 || row.t209 == null} />
    },
    {
      name: 'T209X',
      selector: (row: { t209tx: any }) => row.t209tx,
      cell: (row: { id: any; t209tx: any; t209: any }) => <NumberInput rowID={row.id} id={'t209tx'} onChange={onNumberChange} row={row} value={row.t209tx} disabled={row.t209} />,
      style: {backgroundColor:"#7fc9c3"}
    },
    {
      name: 'T210',
      selector: (row: { t210: any }) => row.t210,
      cell: (row: { id: any; t210: null }) => <CheckInput rowID={row.id} id={'t210'} onChange={onCheck} check={row.t210} disabled={row.t210 || row.t210 == null} />,
      style: {backgroundColor:"#7fc9c3"}

    },
    {
      name: 'T211',
      selector: (row: { t211: any }) => row.t211,
      cell: (row: { id: any; t211: null }) => <CheckInput rowID={row.id} id={'t211'} onChange={onCheck} check={row.t211} disabled={row.t211 || row.t211 == null} />
    },
    {
      name: 'T212',
      selector: (row: { t212: any }) => row.t212,
      cell: (row: { id: any; t212: null }) => <CheckInput rowID={row.id} id={'t212'} onChange={onCheck} check={row.t212} disabled={row.t212 || row.t212 == null} />,
      style: {backgroundColor:"#f0cfe3"}

    },
    {
      name: 'T212X',
      selector: (row: { t212tx: any }) => row.t212tx,
      cell: (row: { id: any; t212tx: any; t212: any }) => <NumberInput rowID={row.id} id={'t212tx'} onChange={onNumberChange} row={row} value={row.t212tx} disabled={row.t212} />,
      style: {backgroundColor:"#f0cfe3"}
    },

  ]
  const customStyles = {
    rows: {
      style: {
        minHeight: '30px', // override the row height
       },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <DataTable
          keyField="id"
          columns={columns as any}
          customStyles={customStyles}
          data={data}
        />
      </div>

    </KTCardBody>
  )
}

export { Table }

