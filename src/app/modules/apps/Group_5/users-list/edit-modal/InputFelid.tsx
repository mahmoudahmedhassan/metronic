import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
type propsInputGroup = {
    type?: any
    placeholder?: string
    label?: string
    name?: any
    onChange?: any
    x?: string
    defaultValue?: string|number
  }
function InputFelid(props: propsInputGroup) {
  return (
    <InputGroup className='mb-3'>
      <InputGroup.Text id='basic-addon1'>{props?.label}</InputGroup.Text>
      <Form.Control placeholder={props?.placeholder} aria-describedby='basic-addon1' defaultValue={props?.defaultValue}  />
    </InputGroup>
  )
}
export default InputFelid 