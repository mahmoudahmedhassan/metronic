import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {initialUser, User} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {UsersListLoading} from '../components/loading/UsersListLoading'
import {createUser, updateUser} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import useDataGroub1Child2 from '../../../../../../_metronic/helpers/crud-helper/hooks/useDatagroub1Child2'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import {InfoRow} from './InfoRow'
import {Table} from '../table modal/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

type Props = {
  isUserLoading: boolean
  user: User
}

const EditModalForm: FC<Props> = () => {
  const {selectedIdRow} = useListView()

  const {data, isLoading, isError, isSuccess, error} = useDataGroub1Child2(
    'jobs/PG05TbInfo',
    selectedIdRow
  )
  // console.log(data)
  let firstObj = data && data[0]

  return (
    <>
      <Row>
        <Col>
          <InfoRow label='PG5Md1lbo1' label_api={firstObj?.pg5Md1Lb01a} />
        </Col>
        <Col>
          <InfoRow label='PG5Md1lbo4' label_api={firstObj?.pg5Md1Lb04a} />
        </Col>
        <Col>
          <InfoRow label='PG5Md1lbo6' label_api={firstObj?.pg5Md1Lb06a} />
        </Col>
      </Row>
      <Row>
        <Col>
          <InfoRow label='PG5Md1lbo2' label_api={firstObj?.pg5Md1Lb02a} />
        </Col>
        <Col>
          <InfoRow
            label='PG5Md1lbo5'
            label_api={firstObj?.pg5Md1Lb05a1}
            label_api2={firstObj?.pg5Md1Lb05a2}
          />
        </Col>
        <Col>
          <InfoRow label='PG5Md1lbo7' label_api={firstObj?.pg5Md1Lb07a} />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <InfoRow label='PG5Md1lbo3' label_api={firstObj?.pg5Md1Lb03a} />
        </Col>
        <Col lg={4}>
          <InfoRow label='PG5Md1lbo8' label_api={firstObj?.pg5Md1Lb08a} />
        </Col>
      </Row>
      <Row>
        <Col>
          <InfoRow label='PG5Md1lbo9' label_api={firstObj?.pg5Md1Lb09a} />
        </Col>
      </Row>
      <Row>
        <Col>{data?.length > 0 ? <Table tableData={data && data} /> : null}</Col>
      </Row>
      <Row>
        <Col md={9}>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon1'>PG5Md1lbo10</InputGroup.Text>
            <Form.Control
              placeholder='PG5Md1lbo10'
              aria-label='PG5Md1lbo10'
              aria-describedby='basic-addon1'
            />
          </InputGroup>
        </Col>
        <Col md={3}> <button className='btn btn-success w-100' type='submit'>Submit</button>  </Col>
      </Row>
    </>
  )
}

export {EditModalForm}
