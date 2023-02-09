/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {FC, useCallback, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {initialgroup, group, modal} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {ListLoading} from '../components/loading/ListLoading'
import {createUser, updateUser} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import {multiplyNumbers} from '../../../../../../_metronic/helpers/helperFn'
import UseCustomHookElite from '../../../../../../_metronic/helpers/crud-helper/hooks/useCustomHookElite'
import InputFelid from './InputFelid'
import { Col, Row } from 'react-bootstrap'
import { InfoRow } from './InfoRow'
import SwitchButton from './SwitchButton'
import { Table } from '../table modal/Table'

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
        <Col><InputFelid placeholder='pG03Tx02a' label='pG03Tx02a' defaultValue={firstObj?.pG03Tx02a}/></Col>
        <Col><InputFelid placeholder='pG03Tx03a' label='pG03Tx03a' defaultValue={firstObj?.pG03Tx03a}/></Col>
      </Row>
      <Row>
        <Col><InfoRow label='pG03Lb02a' label_api={firstObj?.pG03Lb02a} /></Col>
        <Col><InfoRow label="pG03Lb04a" label_api={firstObj?.pG03Lb04a}/></Col>
        <Col><InfoRow label='pG03Lb02a' label_api={firstObj?.pG03Lb07a} x="X" label_api2={firstObj?.pG03Lb08a}/></Col>
      </Row>
      <Row>
        <Col><InfoRow label="pG03Tx05a" label_api={firstObj?.pG03Lb05a}/></Col>
      </Row>
      <Col>{data?.length > 0 ? <Table tableData={data && data} /> : null}</Col>
      <Row><Col><InputFelid placeholder='pG03Tx05a' label='pG03Tx05a' defaultValue={firstObj?.pG03Tx05a}/></Col></Row>
      <Row><Col><InputFelid placeholder='pG03Tx06a' label='pG03Tx06a' defaultValue={firstObj?.pG03Tx06a}/></Col></Row>
      <Row>
        <Col><InfoRow label='pG03Lb02a' label_api={firstObj?.pG03Lb02a} /></Col>
        <Col><SwitchButton leble_1='no' leble_2='yes'/></Col>
        <Col><SwitchButton leble_1='no' leble_2='yes'/></Col>
      </Row>
      
    </div>
  )
}

export {EditModalForm}
 