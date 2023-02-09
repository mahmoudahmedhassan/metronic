/* eslint-disable react/jsx-no-undef */
import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {initialQueryState, KTSVG} from '../../../../../../../_metronic/helpers'
 import {useQueryResponse} from '../../core/QueryResponseProvider'
 import moment from 'moment';
 import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

 
const ListFilter = () => {
    const {isLoading} = useQueryResponse()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

 
  let initialDate = new Date()
  initialDate.setHours(8, 0, 0)
  const [startDate, setStartDate] = useState<Date | null>(initialDate)
 
  const [endDate, setEndDate] = useState<Date | null>(new Date())

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
          <div>
            <div className='datePickerWrapper'>
            <DatePicker
              selected={startDate}
              onChange={(date:Date | null) => setStartDate(date)}
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={15}
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm aa'
            /> 
            </div>
       
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={15}
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm aa'
            />
          </div>
        </div>
        {/* end::Content */}
      </div>
      {/* end::SubMenu */}
    </>
  )
}

export {ListFilter}
