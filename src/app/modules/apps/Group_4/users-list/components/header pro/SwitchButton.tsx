import React from 'react'
type LableProps = {
  leble_1?: string
  leble_2?: string
  isShow?:any
}

function SwitchButton(props: LableProps) {
  return (
    <div>
      <div className='mb-3 d-flex justify-content-center mt-2'>
        <div className='form-check form-switch form-check-custom form-check-solid'>
          <label
            className='form-check-label m-inline-'
            style={{marginInlineEnd: '5px'}}
            htmlFor='flexSwitchDefault'
          >
            {props?.leble_1}
          </label>
          <input
            className='form-check-input  h-20px w-30px'
            type='checkbox'
            value=''
            id='flexSwitchDefault'
            onChange={(e)=>props?.isShow(e.target.checked)}
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
