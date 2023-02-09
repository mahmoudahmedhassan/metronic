import React from 'react'
import Select from 'react-select'
import APiHook from '../../../../../../../_metronic/helpers/crud-helper/hooks/APiHook'
 // const GET_GETPRO = `${API_URL_UNSTABLE}Jobs/Getpro`

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'},
]

function DropDwon() {
  const{data,loading,error}:any=APiHook('jobs/GetCname')
   // console.log(data,loading,error)
  return (
    <div>
      <Select className='mb-3' options={options} />
    </div>
  )
}

export default DropDwon
