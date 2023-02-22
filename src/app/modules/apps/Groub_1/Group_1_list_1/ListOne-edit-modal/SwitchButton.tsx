import React, { Dispatch, SetStateAction } from 'react'
type LableProps = {
  leble_1?: string
  leble_2?: string
  setData?:Dispatch<SetStateAction<any>> | undefined
  data?:any
  value?:any
  cheked?:boolean
}

function SwitchButton(props: LableProps) {
   return (
    <div>
      <div className='mb-3 d-flex justify-content-center'>
        <div className='form-check form-switch form-check-custom form-check-solid'>
          <label className='form-check-label m-inline-' style={{ marginInlineEnd: '5px' }} htmlFor='flexSwitchDefault'>
            {props?.leble_1}
          </label>
          <input className='form-check-input h-20px w-30px'
            type='checkbox'
            id='flexSwitchDefault'
            onChange={(val) => props?.setData?.({ ...props?.data , [props?.value]: val.target.checked })}
            checked={props?.cheked}
            />
          <label className='form-check-label' htmlFor='flexSwitchDefault'>
            {props?.leble_2}
          </label>
        </div>
      </div>
    </div>
  )
}

export default SwitchButton

 