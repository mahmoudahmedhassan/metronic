/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {FC, useCallback, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import { group, modal} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {ListLoading} from '../components/loading/ListLoading'
import {createUser, updateUser} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import {multiplyNumbers} from '../../../../../../../_metronic/helpers/helperFn'
import UseCustomHookElite from '../../../../../../../_metronic/helpers/crud-helper/hooks/useCustomHookElite'
import InputFelid from './InputFelid'
import { Col, Row } from 'react-bootstrap'
import { InfoRow } from './InfoRow'
import SwitchButton from './SwitchButton'
import { Table } from '../table modal/Table'
import DropDwon from './DropDwon'

type Props = {
  isUserLoading: boolean
  user: modal
}
const EditModalForm: FC<Props> = () => {
  const {selectedIdRow} = useListView();
  console.log('selectedIdRow',selectedIdRow)
 const {data, error, loading}=UseCustomHookElite('jobs/getinfopress',selectedIdRow)
 let firstObj:modal = data[0]

  return (
    <div>
      <Row>
        <Col xs={12} md={6}><InputFelid placeholder='pG04Tx01' label='pG04Tx01' /></Col>
        <Col xs={12} md={6}><InputFelid placeholder='pG04Tx02' label='pG04Tx02' /></Col>
      </Row>
      <Row><Col><InputFelid placeholder='pG04Tx03' label='pG04Tx03' /></Col></Row>
       <Row>
        <Col>
         <button type='submit'className='btn btn-primary w-100'data-kt-users-modal-action='submit'>
           <span className='indicator-label'>Submit</span>
         </button>
        </Col>
        <Col>
         <button type='submit'className='btn btn-danger w-100'data-kt-users-modal-action='submit'>
           <span className='indicator-label'>Rest</span>
         </button>
        </Col>
        </Row>
     </div>
  )
}

export {EditModalForm}
 