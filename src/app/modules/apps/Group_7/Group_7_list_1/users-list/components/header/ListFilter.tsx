import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'

//
import { initialQueryState, KTSVG } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'

import { GetPg09 } from '../../core/_requests'

const ListFilter = () => {
  const {updateState, fetchGetImTy,setFetchGetImTy} = useQueryRequest()
  const { isLoading } = useQueryResponse()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])
   
  const {
    isLoading: loading,
    isFetching,
    isError,
    error,
    refetch,
    data,
  } = useQuery(
    [`gourp9`],
    () => {
      return GetPg09()
    },
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
  )

  return (
    <>
      {/* begin::Filter Button */}
      <button
        disabled={isLoading}
        type='button'
        className='btn btn-light-primary me-3'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-2' />
        Filter
      </button>
      {/* end::Filter Button */}
      {/* begin::SubMenu */}
      {/* begin::SubMenu */}
      <div className='menu menu-sub menu-sub-dropdown w-300px w-md-325px' data-kt-menu='true'>
        {/* begin::Header */}
        <div className='px-7 py-5'>
          <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
        </div>
        {/* end::Header */}

        {/* begin::Separator */}
        <div className='separator border-gray-200'></div>
        {/* end::Separator */}

        {/* begin::Content */}
        <div className='px-7 py-5' data-kt-list-one-table-filter='form'>
          {/* begin::Input group */}
          <div className='mb-10'>
            <label className='form-label fs-6 fw-bold'>Role:</label>
            <select
              className='form-select form-select-solid fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-list-one-table-filter='role'
              data-hide-search='true'
            onChange={(e)=>setFetchGetImTy(e.target.value)}
            value={fetchGetImTy}

            >
              {
                data &&
                data.map((item:any): any => {
                  return (
                    <option value={item.sd} key={item.sd}>{item.sdTx}</option>
                  )
                })

              }


            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export { ListFilter }
