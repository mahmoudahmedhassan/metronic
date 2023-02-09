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
import SwitchButton from './SwitchButton'
import { Table } from '../taple getinfoprod/Table'
import { Console } from 'console'
import DropDwon from './DropDwon'

type Props = {
  isUserLoading: boolean
  user: modal
}
const EditModalForm: FC<Props> = () => {
  const { selectedIdRow } = useListView();
  const { data, error, loading } = UseCustomHookElite('jobs/getinfoprod', selectedIdRow)
  let firstObj: modal = data[0]
  // 
  const [isAllChecked, setAllChecked] = useState(false);
  const [apper, setApper] = useState(false);
  
  return (

    <div>
      <Row>
        <Col><InfoRow label='pG04Lb01a' label_api={firstObj?.pG04Lb01a} /></Col>
        <Col><InfoRow label="pG04Lb04a" label_api={firstObj?.pG04Lb04a} /></Col>
        <Col><InfoRow label="pG04Lb05a" label_api={firstObj?.pG04Lb05a} /></Col>
      </Row>
      <Row>
        <Col><InfoRow label='pG04Lb02a' label_api={firstObj?.pG04Lb02a} /></Col>
        <Col><InfoRow label='pG03Lb06' label_api={firstObj?.pG04Lb06a1} x="X" label_api2={firstObj?.pG04Lb06a2} /></Col>
        <Col><InfoRow label="pG04Lb07a" label_api={firstObj?.pG04Lb07a} /></Col>
      </Row>
      <Row>
        <Col><InfoRow label="pG04Lb03a" label_api={firstObj?.pG04Lb03a} /></Col>
      </Row>
      <Row><Col><InputFelid placeholder='pG04Tx02a' label='pG04Tx02a' defaultValue={firstObj?.pG04Tx02a} /></Col></Row>
      {apper && (
       <Row>
       <Col><DropDwon/></Col>
       <Col>
           <button type='submit'   className='btn btn-primary w-100' data-kt-users-modal-action='submit'>
             <span className='indicator-label'>PG04Md01Bu03</span>
           </button>
         </Col>
         <Col>
           <button type='submit' onClick={()=>setApper(false)}  className='btn btn-danger w-100' data-kt-users-modal-action='submit'>
             <span className='indicator-label'>PG04Md01Bu03</span>
           </button>
         </Col>
       </Row>
      )}

      <Col>{data?.length > 0 ? <Table tableData={data && data} setAllChecked={setAllChecked} setApper={setApper}/> : null}</Col>
      <Row>
        <Col><InputFelid placeholder='pG04Tx02a' label='pG04Tx02a' defaultValue={firstObj?.pG04Tx02a} /></Col>
        {
          <Col>
            <button type='submit' disabled={!isAllChecked} className='btn btn-primary w-100' data-kt-users-modal-action='submit'>
              <span className='indicator-label'>PG04Md01Bu03</span>
            </button>
          </Col>
        }
      </Row>
    </div>
  )
}

export { EditModalForm }
