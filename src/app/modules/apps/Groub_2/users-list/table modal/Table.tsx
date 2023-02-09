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
        t201:item.t201,
        t202:item.t202,
        t203:item.t203,
        t204:item.t204,
        t205:item.t205,
         
      }
    });
       setModifiedData(newArr)
    }
       
  }, [tableData])

  // const listTwo = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => modifiedData, [modifiedData])
  const [newTable, setNewTable] = useState<modal>([]);
  const columns = useMemo(() => Columns, []);
  // const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
  //   columns,
  //   data,
  // })
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
        {/* <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<modal>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold'  {...getTableBodyProps()}  >
            {rows.length > 0 ? (
              rows.map((row: Row<modal>, i: any) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table> */}
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
 
