import React from 'react'
type LableProps ={
  leble_1?:string,
  leble_2?:string,
}

function SwitchButton(props:LableProps) {
  return (
    <div>
      <div className='mb-3 d-flex justify-content-center'>
        <div className='form-check form-switch form-check-custom form-check-solid'>
          <label className='form-check-label ' style={{marginInlineEnd:'0px',fontSize:"12px"}}  htmlFor='flexSwitchDefault'>
           {props?.leble_1}
          </label>
          <input className='form-check-input  h-20px w-30px' type='checkbox' value='' id='flexSwitchDefault' />
          <label className='form-check-label' htmlFor='flexSwitchDefault' style={{marginInlineEnd:'0px',fontSize:"12px"}}>
             {props?.leble_2}
          </label>
        </div>
      </div>
    </div>
  )
}

export default SwitchButton
