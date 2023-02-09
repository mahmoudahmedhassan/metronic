import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {initialQueryState, KTSVG} from '../../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'

const UsersListFilter = () => {
  const {updateState,setFetchState,fetchState} = useQueryRequest()
  const {isLoading} = useQueryResponse()
  // const [role, setRole] = useState<string | undefined>()
  // const [lastLogin, setLastLogin] = useState<string | undefined>()
  console.log(fetchState)

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  // const resetData = () => {
  //   updateState({filter: undefined, ...initialQueryState})
  // }

  // const filterData = () => {
  //   updateState({
  //     filter: {role, last_login: lastLogin},
  //     ...initialQueryState,
  //   })
  // }

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
        <div className='px-7 py-5' data-kt-user-table-filter='form'>
          {/* begin::Input group */}
          <div className='mb-10'>
            <label className='form-label fs-6 fw-bold'>Role:</label>
            <select
              className='form-select form-select-solid fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-user-table-filter='role'
              data-hide-search='true'
              onChange={(e) => setFetchState(e.target.value)}
              value={fetchState}
            >
              {/* <option value=''></option> */}
              <option value='PG05Tp01'>PG05Tp01</option>
              <option value='PG05Ch01'>PG05Ch01</option>
              <option value='PG05Ch02'>PG05Ch02</option>
              <option value='PG05Ch03'>PG05Ch03</option>
             </select>
          </div>
          {/* end::Input group */}
 
        </div>
        {/* end::Content */}
      </div>
      {/* end::SubMenu */}
    </>
  )
}

export {UsersListFilter}
