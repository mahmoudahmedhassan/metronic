/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useCallback, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { isNotEmpty, toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import { initialgroup, group, modal } from '../core/_models'
import clsx from 'clsx'
import { useListView } from '../core/ListViewProvider'
import { ListLoading } from '../components/loading/ListLoading'
import { createUser, updateUser } from '../core/_requests'
import { useQueryResponse } from '../core/QueryResponseProvider'
import { multiplyNumbers } from '../../../../../../_metronic/helpers/helperFn'
import UseCustomHookElite from '../../../../../../_metronic/helpers/crud-helper/hooks/useCustomHookElite'
import InputFelid from './InputFelid'
import { Col, Row } from 'react-bootstrap'
import { InfoRow } from './InfoRow'
import { Table } from '../table modal/Table'

type Props = {
  isUserLoading: boolean
  user: modal
}
const EditModalForm: FC<Props> = () => {
  const { selectedIdRow } = useListView();
  console.log('selectedIdRow', selectedIdRow)
  const { data, error, loading } = UseCustomHookElite('jobs/PG04Bt03', selectedIdRow)
  let firstObj: modal = data[0]

  return (
    <div>

      <Row>
        <Col><InfoRow label='pG04Md01Lb01a' label_api={firstObj?.pG04Md01Lb01a} /></Col>
        <Col><InfoRow label="pG04Md01Lb06a" label_api={firstObj?.pG04Md01Lb06a} /></Col>
      </Row>
      <Row>
        <Col><InfoRow label='pG04Md01Lb02a' label_api={firstObj?.pG04Md01Lb02a} /></Col>
        <Col><InfoRow label="pG04Md01Lb07a" label_api={firstObj?.pG04Md01Lb07a} /></Col>
      </Row>
      <Row>
        <Col><InfoRow label="pG04Md01Lb03a" label_api={firstObj?.pG04Md01Lb03a} /></Col>
      </Row>
      <Row>
        <Col><InfoRow label='pG04Md01Lb04a' label_api={firstObj?.pG04Md01Lb04a1} x="X" label_api2={firstObj?.pG04Md01Lb04a2} /></Col>
        <Col><InfoRow label="pG04Md01Lb08a" label_api={firstObj?.pG04Md01Lb08a} /></Col>
        <Col><InfoRow label="pG04Md01Lb05a" label_api={firstObj?.pG04Md01Lb05a} /></Col>
      </Row>
      <Row><Col>{data?.length > 0 ? <Table tableData={data && data} /> : null}</Col></Row>
      <Row>
        <Col>
          <button type='submit' className='btn btn-primary w-100' data-kt-users-modal-action='submit'>
            <span className='indicator-label'>PG04Md01Bu01</span>
          </button>
        </Col>
        <Col>
          <button type='submit' className='btn btn-primary w-100' data-kt-users-modal-action='submit'>
            <span className='indicator-label'>PG04Md01Bu02</span>
          </button>
        </Col>
        <Col>
          <button type='submit' className='btn btn-primary w-100' data-kt-users-modal-action='submit'>
            <span className='indicator-label'>PG04Md01Bu03</span>
          </button>
        </Col>
      </Row>

    </div>
  )
}

export { EditModalForm }
