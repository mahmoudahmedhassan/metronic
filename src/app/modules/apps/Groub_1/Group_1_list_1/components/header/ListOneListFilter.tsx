import {useEffect, useState} from 'react'
import { useIntl } from 'react-intl'
import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {initialQueryState, KTSVG} from '../../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import SwitchButton from '../../ListOne-edit-modal/SwitchButton'

const ListOneListFilter = () => {
  const intl = useIntl()

  const {updateState, setFetchState,fetchState } = useQueryRequest()
  // console.log(fetchState)
  const {isLoading} = useQueryResponse()
  const [role, setRole] = useState<string | undefined>()
  const [lastLogin, setLastLogin] = useState<string | undefined>()

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

// const handleFilterToFetch = (e: any) =>{
//   setFetchState(e.target.value)
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
        {intl.formatMessage({id:"Filter"})}
      </button>
      {/* end::Filter Button */}
      {/* begin::SubMenu */}
      <div className='menu menu-sub menu-sub-dropdown w-300px w-md-325px' data-kt-menu='true'>
        {/* begin::Header */}
        <div className='px-7 py-5'>
          <div className='fs-5 text-dark fw-bolder'> {intl.formatMessage({id:"Filter Options"})}</div>
        </div>
        {/* end::Header */}

        {/* begin::Separator */}
        <div className='separator border-gray-200'></div>
        {/* end::Separator */}

        {/* begin::Content */}
        <div className='px-7 py-5' data-kt-list-one-table-filter='form'>
          {/* begin::Input group */}
          <div className='mb-10'>
            <label className='form-label fs-6 fw-bold'>{intl.formatMessage({id:"Role"})}:</label>
            <select
              className='form-select form-select-solid fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-list-one-table-filter='role'
              data-hide-search='true'
              onChange={(e)=>setFetchState(e.target.value)}
              value={fetchState}
            >
              {/* <option value=''></option> */}
              <option value='pro'> {intl.formatMessage({id:"pro"})}</option>
              <option value='all'> {intl.formatMessage({id:"all"})}</option>
              <option value='hid'> {intl.formatMessage({id:"hid"})}</option>
              <option value='fin'> {intl.formatMessage({id:"fin"})}</option>
             </select>
          </div>
          {/* end::Input group */}
          <div>
            <SwitchButton leble_1={intl.formatMessage({id:"Default_switch"})} leble_2={intl.formatMessage({id:"Default_switch"})}/>
            <SwitchButton leble_1={intl.formatMessage({id:"Default_switch"})} leble_2={intl.formatMessage({id:"Default_switch"})}/>
            <SwitchButton leble_1={intl.formatMessage({id:"Default_switch"})} leble_2={intl.formatMessage({id:"Default_switch"})}/>
            <SwitchButton leble_1={intl.formatMessage({id:"Default_switch"})} leble_2={intl.formatMessage({id:"Default_switch"})}/>

          </div>

          {/* begin::Input group */}
          {/* <div className='mb-10'>
            <label className='form-label fs-6 fw-bold'>Last login:</label>
            <select
              className='form-select form-select-solid fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-list-one-table-filter='two-step'
              data-hide-search='true'
              onChange={(e) => setLastLogin(e.target.value)}
              value={lastLogin}
            >
              <option value=''></option>
              <option value='Yesterday'>Yesterday</option>
              <option value='20 mins ago'>20 mins ago</option>
              <option value='5 hours ago'>5 hours ago</option>
              <option value='2 days ago'>2 days ago</option>
            </select>
          </div> */}
          {/* end::Input group */}

          {/* begin::Actions */}
          {/* <div className='d-flex justify-content-end'>
            <button
              type='button'
              disabled={isLoading}
              onClick={filterData}
              className='btn btn-light btn-active-light-primary fw-bold me-2 px-6'
              data-kt-menu-dismiss='true'
              data-kt-list-one-table-filter='reset'
            >
              Reset
            </button>
            <button
              disabled={isLoading}
              type='button'
              onClick={resetData}
              className='btn btn-primary fw-bold px-6'
              data-kt-menu-dismiss='true'
              data-kt-list-one-table-filter='filter'
            >
              Apply
            </button>
          </div> */}
          {/* end::Actions */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::SubMenu */}
    </>
  )
}

export {ListOneListFilter}
