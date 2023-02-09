import {useMemo, useState,useEffect} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {Columns} from './columns/_columns'
import {modal} from '../core/_models'
// import {UsersListLoading} from '../../components/loading/UsersListLoading'
// import {UsersListPagination} from '../components/pagination/UsersListPagination'
import {KTCardBody} from '../../../../../../_metronic/helpers'
import { useListView } from '../core/ListViewProvider'
 import BootstrapTable from 'react-bootstrap-table-next';
//@ts-ignore
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';



const Table = ({tableData}:any) => {
  console.log('tableData',tableData)
  
  const [modifiedData, setModifiedData] = useState<any>(tableData);
  useEffect(() => {
    if(tableData.length > 0 ){
  let newArr = tableData.map((item:any) => {
      return {
        tableIndex:item.tableIndex,
        t201:item.t301,
        t202:item.t302,
        t203:item.t303,
        t204:item.t304,
        t205:item.t305,
        t206:item.t306,
        t207:item.t307,
        t208:item.t308,
      }
    });
       setModifiedData(newArr)
    }
       
  }, [tableData])

  // const listTwo = useQueryResponseData()
  // const isLoading = useQueryResponseLoading()
  const data = useMemo(() => modifiedData, [modifiedData])
  const [newTable, setNewTable] = useState<modal>([]);
   
  function beforeSaveCell(row:any) {
    let newData:Array<modal> = newTable.filter((item:modal) => item.id !== row.id);
    setNewTable([...newData, row]);
    console.log(row)
}

useEffect(() => {
    console.log(newTable)
}, [newTable])


  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        
             <BootstrapTable
                keyField="id"
                data={data}
                columns={Columns as any}
                cellEdit={cellEditFactory({
                    mode: 'click',
                    blurToSave: true,
                    beforeSaveCell
                })}
            />
       </div>
 
    </KTCardBody>
  )
}

export {Table}
 
