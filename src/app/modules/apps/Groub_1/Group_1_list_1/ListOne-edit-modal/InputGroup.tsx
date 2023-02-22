import {Formik} from 'formik'
import React, { ChangeEvent, useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import classes from '../../../../../../_metronic/assets/css/MediaQuery.module.css' 
import clsx from 'clsx'
import {ErrorMessage, useField} from 'formik'
import { multiplyNumbers } from '../../../../../../_metronic/helpers/helperFn'
type propsInputGroup = {
  type?: any
  placeholder?: string
  label?: string
  name?: any
  // onChange?: any
  isListOneLoading?: any
  x?: string
  disabled?: any
  formik?: any
  result?:number
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void | undefined) | undefined
  value?: string | number 
 
}

function InputsGroup(props: propsInputGroup) {
   return (
    <div>
      <InputGroup size="sm" className='mb-3'>
        <InputGroup.Text  id="inputGroup-sizing-sm">{props?.label}</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          {...props}
            {...props?.formik?.getFieldProps(props?.name)}
           
          disabled={props?.disabled}
          value={ props?.result ? props?.result : props?.value}
          // onChange={props?.onChange}
          onChange={props?.onChange}
         />
        <span className={classes.inputgroub_span}>{props?.x && props?.x}</span>

      </InputGroup>
 
    </div>
  )
}

export default InputsGroup
