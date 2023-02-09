import {useMemo, useState,useEffect} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponse, useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {Columns} from './columns/_columns'
import {modal} from '../core/_models'
// import {UsersListLoading} from '../../components/loading/UsersListLoading'
// import {UsersListPagination} from '../components/pagination/UsersListPagination'
import {KTCardBody} from '../../../../../../../_metronic/helpers'
import { useListView } from '../core/ListViewProvider'
 import BootstrapTable from 'react-bootstrap-table-next';
//@ts-ignore
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';



const TableModal = () => {
  const {PG09Ch01Data}=useQueryResponse()
  
  const isLoading = useQueryResponseLoading()
  const data:any = useMemo(() => PG09Ch01Data, [PG09Ch01Data])
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
        </table> 
             
      
      </div>
 
    </KTCardBody>
  )
}

export {TableModal}
 
// function useQueryResponseResponse(): { setPG09Ch01Data: any } {
//   throw new Error('Function not implemented.')
// }

