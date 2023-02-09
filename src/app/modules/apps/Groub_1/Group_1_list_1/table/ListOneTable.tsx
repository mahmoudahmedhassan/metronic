import {useMemo, useState} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {ListOneColumns} from './columns/_columns'
import {ListOneToView} from '../core/_models'
import {ListOneListLoading} from '../components/loading/ListOneListLoading'
import {ListOneListPagination} from '../components/pagination/ListOneListPagination'
import {KTCardBody} from '../../../../../../_metronic/helpers'
import {search} from '../../../../../../_metronic/helpers/crud-helper/search/search'
import { useListView } from '../core/ListViewProvider'

const ListOneTable = () => {
  const {optionsId} = useListView()
  const [rowId, setRowId] = useState(null);
  const ListOne = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => ListOne, [ListOne])
  const columns = useMemo(() => ListOneColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_ListOne'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`}  rowID={rowId} onRowSelected={(id:any) =>{ setRowId(id)}} />
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
      <ListOneListPagination />
      {isLoading && <ListOneListLoading />}
    </KTCardBody>
  )
}

export {ListOneTable}
