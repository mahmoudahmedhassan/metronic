import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {initialQueryState, KTSVG} from '../../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'

const ListFilter = () => {
  const {updateState, fetchPG04Sw01,setFetchPG04Sw01} = useQueryRequest()
  console.log('fetchPG04Sw01',fetchPG04Sw01)
  const {isLoading} = useQueryResponse()
  const [role, setRole] = useState<string | undefined>()
  const [lastLogin, setLastLogin] = useState<string | undefined>()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({filter: undefined, ...initialQueryState})
  }

  const filterData = () => {
    updateState({
      filter: {role, last_login: lastLogin},
      ...initialQueryState,
    })
  }
  const handelChange =(e:any)=> {
    if(setFetchPG04Sw01){
      setFetchPG04Sw01(e.target.checked) 
    }
  }

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

        {/* begin::Content */}
        <div className='px-7 py-5' data-kt-user-table-filter='form'>
          <div className='mb-3 d-flex justify-content-center'>
            <div className='form-check form-switch form-check-custom form-check-solid'>
              <input
                className='form-check-input  h-20px w-30px'
                type='checkbox'
                // value={fetchPG04Sw01}
                id='flexSwitchDefault'
                // onChange={(e:any)=>setFetchPG04Sw01(e.target.checked)}
                onChange={(e)=>handelChange(e)}
               />
              <label className='form-check-label' htmlFor='flexSwitchDefault'>
                data
              </label>
            </div>
          </div>
        </div>
        {/* end::Content */}
      </div>
      {/* end::SubMenu */}
    </>
  )
}

export {ListFilter}
