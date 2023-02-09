import {Formik} from 'formik'
import React, { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import classes from '../../../../../../../_metronic/assets/css/MediaQuery.module.css'
import clsx from 'clsx'
import {ErrorMessage, useField} from 'formik'
import { multiplyNumbers } from '../../../../../../../_metronic/helpers/helperFn'
type propsInputGroup = {
  type?: any
  placeholder?: string
  label?: string
  name?: any
  onChange?: any
  isListOneLoading?: any
  x?: string
  disabled?: any
  formik?: any
  result?:number
 
}

function InputsGroup(props: propsInputGroup) {
 
  return (
    <div>
      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>{props?.label}</InputGroup.Text>
        <Form.Control
          {...props}
            {...props?.formik?.getFieldProps(props?.name)}
           
          disabled={props?.disabled}
          value={props?.result}
         />
        <span className={classes.inputgroub_span}>{props?.x && props?.x}</span>
      </InputGroup>
      {/* <span className={classes.inputgroub_span}>{props?.x && props?.x}</span> */}

    </div>
  )
}

export default InputsGroup
