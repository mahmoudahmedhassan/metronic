import React from 'react'
import classes from '../../../../../../_metronic/assets/css/MediaQuery.module.css'
export type InfoRowProps = {
    label?: string|number
    label_api?: string|number
    label_api2?: string|number
}
function InfoRow(props: InfoRowProps) {
  return (
    <div className='d-flex mb-4 '>
      <div className={classes.label}>{props?.label}</div>
      <div className={classes.label_api}>{props?.label_api} {props?.label_api2 && 'X' + props?.label_api2}</div>
    </div>
  )
}

export {InfoRow}
