import {useMemo, useState,useEffect} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {Columns} from './columns/_columns'
import {User} from '../core/_models'
import {UsersListLoading} from '../components/loading/UsersListLoading'
import {UsersListPagination} from '../components/pagination/UsersListPagination'
import {KTCardBody} from '../../../../../../_metronic/helpers'
import { useListView } from '../core/ListViewProvider'
import APiHook from '../../../../../../_metronic/helpers/crud-helper/hooks/APiHook'

const Table = ({tableData}:any) => {
  console.log('tableData',tableData)
  const{data:dropDownData1,loading:dropDownloading1,error:dropDownerror1}:any=APiHook('jobs/GetPG05Cmb01a')
  const{data:dropDownData2,loading:dropDownloading2,error:dropDownerror2}:any=APiHook('jobs/GetPG04Combo01a')
 
  const [modifiedData, setModifiedData] = useState<any>(tableData);
  useEffect(() => {
    if(tableData.length > 0 ){
  let newArr = tableData.map((item:any) => {
      return {
        t101:item.t101,
        t102:item.t102,
        cmb03:item.cmb03,
        chk04:item.chk04,
        chk05:item.chk05,
        cmb06:item.cmb06,
        dropDownData1:[...dropDownData1],
        dropDownData2:[...dropDownData2],
      }
    });
       setModifiedData(newArr)
    }
       
  }, [tableData,dropDownData1,dropDownData2]);

  // const listTwo = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => modifiedData, [modifiedData])
  const columns = useMemo(() => Columns, []);
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })


  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<User>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold'  {...getTableBodyProps()}  >
            {rows.length > 0 ? (
              rows.map((row: Row<User>, i) => {
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
        </table>
      </div>
      <UsersListPagination />
      {isLoading && <UsersListLoading />}
    </KTCardBody>
  )
}

export {Table}
 
