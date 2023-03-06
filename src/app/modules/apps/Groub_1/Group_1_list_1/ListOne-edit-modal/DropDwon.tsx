import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers'
import React, { Dispatch, SetStateAction } from 'react'
import Select from 'react-select'
import APiHook from '../../../../../../_metronic/helpers/crud-helper/hooks/APiHook'
// const GET_GETPRO = `${API_URL_UNSTABLE}Jobs/Getpro`
import Form from 'react-bootstrap/Form';
type LableProps = {

  setData?:Dispatch<SetStateAction<any>> | undefined
  data?:any
  value?:any
  dropData?:any
 }
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

function DropDwon (props: LableProps) {
  const { data, loading, error }: any = APiHook('jobs/GetCname')
  // console.log(data,loading,error)

  return (
    <div>
      {/* <Select className='mb-3' options={options} onChange={setData} /> */}
      <Form.Select
        aria-label="Default select example"
        onChange={(val) => props?.setData?.({ ...props?.data , [props?.dropData]: val.target.value })}

        >
        {/* <option>Open this select menu</option>
        <option value='1'>kk</option> */}
       {
          data.map((item: { cid: readonly string[] | React.Key | null | undefined; pG2Md01Comb1: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }):any =>{
            return (
                 <option  value={item.cid != null ? item.cid : ''} >{item.pG2Md01Comb1}</option>
 
            )
          })
        }  

      </Form.Select>
    </div>
  )
}

export default DropDwon
