import axios, { AxiosResponse } from 'axios'
import React from 'react'
import {Col, Row} from 'react-bootstrap'
import { useQuery } from 'react-query'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {getTablePro} from '../../core/_requests'
import DropDwon from './DropDwon'
import SwitchButton from './SwitchButton'

function ListHeaderPro() {
  const [show, isShow] = React.useState(false)
  const {selectedIdRow,disabledTablePro} = useListView();
  const {setData} = useQueryResponse();

    const setDataTable = async () => {
    const data = await getTablePro(selectedIdRow)
      setData?.(data)
  }

//   let kk=[]
//   const {data, isLoading, isError, isSuccess,refetch, error} = useQuery('data', async (): Promise<any | undefined> => {
//     return axios
//      .get(`https://tstauth.smartgate-egypt.com/jobs/Pg06Bt01/${selectedIdRow.value_1}/${selectedIdRow.value_2}`)
//      .then((res:AxiosResponse<any>) => {
//        console.log(kk.push(res.data,{...res.data}) );
//        return  setData?.(res.data) as unknown as any;
//      })
 
//  })
  // const setDataTable = () => {
  //   refetch()
  //  }
  // const { data, refetch, isLoading } = useQuery('myData', () => fetch(`https://tstauth.smartgate-egypt.com/jobs/Pg06Bt01/${selectedIdRow.value_1}/${selectedIdRow.value_2}`))
  // console.log("hdjhjdsjdjhds",data)

  return (
    <div>
      <Row>
        <Col md={6}>
          <Row>
            <Col xs={4}>
              <SwitchButton isShow={isShow} leble_1='Pg06Ch01' />
            </Col>
            <Col xs={8}> {show === true ? <DropDwon /> : null}</Col>
          </Row>
        </Col>

        <Col md={6}>
           <button
            type='submit'
            className='btn btn-primary w-100'
            data-kt-users-modal-action='submit'
            onClick={setDataTable}
            disabled={!disabledTablePro}
          >
            <span className='indicator-label'>Add</span>
          </button>
        </Col>
      </Row>
    </div>
  )
}

export default ListHeaderPro
