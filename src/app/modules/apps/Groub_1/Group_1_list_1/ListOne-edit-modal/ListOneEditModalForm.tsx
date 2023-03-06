import { FC, useState, useCallback } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { isNotEmpty, toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import { initialListOneToPost, ListOneToPost } from '../core/_models'
import clsx from 'clsx'
import { useListView } from '../core/ListViewProvider'
import { ListOneListLoading } from '../components/loading/ListOneListLoading'
import { createListOne, postPG2Md01Bu1, updateListOne } from '../core/_requests'
import { useQueryResponse } from '../core/QueryResponseProvider'
import InputsGroup from './InputGroup'
import DropDwon from './DropDwon'
import SwitchButton from './SwitchButton'
import { Row, Col } from 'react-bootstrap'
import classes from '../../../../../../_metronic/assets/css/MediaQuery.module.css'
import { multiplyNumbers } from '../../../../../../_metronic/helpers/helperFn'
import { useIntl } from 'react-intl'
type Props = {
  isListOneLoading: boolean
  ListOne: any
}

const editListOneSchema = Yup.object().shape({

  PG2Md01Tx1: Yup.string().required('PG2Md01Tx1 is required'),
  PG2Md01Tx2: Yup.string().required('PG2Md01Tx2 is required'),
  PG2Md01Tx3: Yup.string().required('PG2Md01Tx3 is required'),
  PG2Md01Comb1: Yup.string().required('PG2Md01Comb1 is required'),
  PG2Md01Tx4: Yup.string().required('PG2Md01Tx4 is required'),
  PG2Md01Tx5: Yup.string().required('PG2Md01Tx5 is required'),
  // PG2Md01Tx6: Yup.string().required('PG2Md01Tx6 is required'),
  PG2Md01Tx7: Yup.string().required('PG2Md01Tx7 is required'),
  PG2Md01Tx8: Yup.string().required('PG2Md01Tx8 is required'),
  PG2Md01Tx9: Yup.string().required('PG2Md01Tx9 is required'),
  // PG2Md01Tx10: Yup.string().required('PG2Md01Tx10 is required'),
})

const ListOneEditModalForm: FC<Props> = ({ ListOne, isListOneLoading }) => {
  const intl = useIntl()

  const { setItemIdForUpdate, setOpenOptionOneID, setOpenOptionTwoID } = useListView()
  const { refetch } = useQueryResponse()
  const handleMultiplyNumbers: any = useCallback(
    (x: number, y: number) => multiplyNumbers(x, y),
    []
  )
  const [data, setData] = useState<ListOneToPost>(initialListOneToPost)
  // console.log('initialListOneToPost',initialListOneToPost)
  const handelClick =async (event:any) => {
    event.preventDefault();
    // rest of the code
    await postPG2Md01Bu1(data)
  }
  // const [ListOneForAdd] = useState<ListOneToPost>({
  //   ...initialListOneToPost,
  //   // PG2Md01Tx6: (initialListOneToPost.PG2Md01Tx4 && initialListOneToPost.PG2Md01Tx5) ? handleMultiplyNumbers(initialListOneToPost.PG2Md01Tx4, initialListOneToPost.PG2Md01Tx5) : 0
  // })
  

  // const cancel = (withRefresh?: boolean) => {
  //   if (withRefresh) {
  //     refetch()
  //   }
  //   setItemIdForUpdate(undefined)
  //   setOpenOptionOneID(undefined)
  //   setOpenOptionTwoID(undefined)
  // }

  // const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')

  // const formik = useFormik({
  //   initialValues: ListOneForAdd,
  //   // validationSchema: editListOneSchema,
  //   onSubmit: async (values, {setSubmitting}) => {
  //     console.log({
  //       ...values,
  //       PG2Md01Tx6: handleMultiplyNumbers(values.PG2Md01Tx4, values.PG2Md01Tx5),
  //       PG2Md01Tx10: handleMultiplyNumbers(values.PG2Md01Tx8, values.PG2Md01Tx9),
  //     })
  //     // setSubmitting(true)
  //     try {
  //       if (isNotEmpty(values.id)) {
  //         await updateListOne(values)
  //       } else {
  //         await createListOne({
  //           ...values,
  //           PG2Md01Tx6: handleMultiplyNumbers(values.PG2Md01Tx4, values.PG2Md01Tx5),
  //         })
  //         // initialListOneToPost.PG2Md01Tx6 =  handleMultiplyNumbers(formik.values.PG2Md01Tx4, formik.values.PG2Md01Tx5)
  //       }
  //     } catch (ex) {
  //       console.error(ex)
  //     } finally {
  //       setSubmitting(true)
  //       cancel(true)
  //     }
  //   },
  // })

  const handleChange = (e: { target: { value: any, name: any } }): any => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      userID:2,
      PG2Md01Tx10: handleMultiplyNumbers(data.PG2Md01Tx4, data.PG2Md01Tx5),
      //  PG2Md01Tx18: handleMultiplyNumbers(data.PG2Md01Tx8, data.PG2Md01Tx9),
    })
  }
 
  return (
    <>
      <form
        id='kt_modal_add_ListOne_form'
        className='form'
      // onSubmit={formik.handleSubmit}
      // noValidate
      >
        <Row>
          {/* section_one */}
          <div className={`d-flex ${classes.direction_column} ${classes.section_one}`}>
            <Col xs={12} sm={12} md={6}>
              <div className={classes.m_inline}>
                <InputsGroup
                  type='text'
                  placeholder={intl.formatMessage({id:"PG2Md01Tx3"})}
                  label={intl.formatMessage({id:"PG2Md01Tx3"})}
                  name='PG2Md01Tx3'
                  onChange={handleChange}
                  value={data.PG2Md01Tx3}

                // formik={formik}
                // isListOneLoading={isListOneLoading}
                />
                {/* {formik.errors.PG2Md01Tx3 && (
                  <div className='fv-plugins-message-container'>
                    <span role='alert'>{formik.errors.PG2Md01Tx3}</span>

                  </div>
                )} */}
                <DropDwon   dropData='PG2Md01Comb1' value={data.PG2Md01Comb1} setData={setData} />
              </div>
            </Col>

            <Col xs={12} sm={12} md={6}>
              <div>
                <InputsGroup
                  type='text'
                  placeholder={intl.formatMessage({id:"PG2Md01Tx1"})}
                  label={intl.formatMessage({id:"PG2Md01Tx1"})}
                  name='PG2Md01Tx1'
                  onChange={handleChange}
                  value={data.PG2Md01Tx1}


                // formik={formik}
                // isListOneLoading={isListOneLoading}
                />
                {/* {formik.errors.PG2Md01Tx1 && (
                  <div className='fv-plugins-message-container'>
                    <span role='alert'>{formik.errors.PG2Md01Tx1}</span>
                  </div>
                )} */}
                <InputsGroup
                  type='text'
                  placeholder={intl.formatMessage({id:"PG2Md01Tx2"})}
                  label={intl.formatMessage({id:"PG2Md01Tx2"})}
                  name='PG2Md01Tx2'
                  value={data.PG2Md01Tx2}
                  onChange={handleChange}
                />
            
              </div>
            </Col>
          </div>
          {/* section_one */}

          {/* section_two */}

          <div>
            <Row>
              <Col lg={9}>
                <div style={{ marginBottom: '50px' }}>
                  <div>
                    <Row>
                      <Col>
                        <InputsGroup
                          type='number'
                          placeholder={intl.formatMessage({id:"PG2Md01Tx4"})}
                          label={intl.formatMessage({id:"PG2Md01Tx4"})}
                          x={'X'}
                          name='PG2Md01Tx4'
                          value={data.PG2Md01Tx4}
                          onChange={handleChange}
                        />
                   
                      </Col>

                      <Col>
                        <InputsGroup
                          type='number'
                          placeholder={intl.formatMessage({id:"PG2Md01Tx5"})}
                          label={intl.formatMessage({id:"PG2Md01Tx5"})}
                          x={'='}
                          name='PG2Md01Tx5'
                          value={data.PG2Md01Tx5}
                          onChange={handleChange}
                        />
                 
                      </Col>
                      <Col>
                        <InputsGroup
                          type='text'
                           disabled='disabled'
                          result={handleMultiplyNumbers(
                            data.PG2Md01Tx4,
                            data.PG2Md01Tx5
                          )}
                        />
                      </Col>
                      <Col>
                        <InputsGroup
                          type='text'
                          placeholder={intl.formatMessage({id:"PG2Md01Tx6"})}
                          label={intl.formatMessage({id:"PG2Md01Tx6"})}
                          name='PG2Md01Tx6'
                          value={data.PG2Md01Tx6}
                          onChange={handleChange}
                        />
                 
                      </Col>
                    </Row>
                  </div>

                  <div>
                    <Row>
                      <Col>
                        <InputsGroup
                          type='number'
                          placeholder={intl.formatMessage({id:"PG2Md01Tx7"})}
                          label={intl.formatMessage({id:"PG2Md01Tx7"})}
                          x={'X'}
                          name='PG2Md01Tx7'
                          value={data.PG2Md01Tx7}
                          onChange={handleChange}                     
                        />
                   
                      </Col>

                      <Col>
                        <InputsGroup
                          type='number'
                          placeholder={intl.formatMessage({id:"PG2Md01Tx8"})}
                          label={intl.formatMessage({id:"PG2Md01Tx8"})}
                          x={'='}
                          name='PG2Md01Tx8'
                          value={data.PG2Md01Tx8}
                          onChange={handleChange}
                        />
                       
                      </Col>
                      <Col>
                        <InputsGroup
                          type='text'
                           disabled='disabled'
                           result={handleMultiplyNumbers(
                          data.PG2Md01Tx8,
                          data.PG2Md01Tx9
                        )}
                        />
                      </Col>
                      <Col>
                        <InputsGroup
                          type='text'
                          placeholder={intl.formatMessage({id:"PG2Md01Tx9"})}
                          label={intl.formatMessage({id:"PG2Md01Tx9"})}
                          name='PG2Md01Tx9'
                          value={data.PG2Md01Tx9}
                          onChange={handleChange}
                        />
                       
                      </Col>
                    </Row>
                  </div>
                </div>

                <div>
                  <Row>
                    <Col>
                      <InputsGroup
                        type='number'
                        placeholder={intl.formatMessage({id:"PG2Md01Tx10"})}
                        label={intl.formatMessage({id:"PG2Md01Tx10"})}
                        name="PG2Md01Tx10"
                        value={data.PG2Md01Tx10}
                        x={'X'}
                        onChange={handleChange}
                        result={handleMultiplyNumbers(
                        data.PG2Md01Tx4,
                        data.PG2Md01Tx5
                      )}
                      />
                    </Col>

                    <Col>
                      <InputsGroup
                        type='number'
                        placeholder={intl.formatMessage({id:"PG2Md01Tx11"})}
                        label={intl.formatMessage({id:"PG2Md01Tx11"})}
                        name="PG2Md01Tx11"
                        value={data.PG2Md01Tx11}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col>
                      <InputsGroup
                        type='text'
                        placeholder={intl.formatMessage({id:"PG2Md01Tx13"})}
                        label={intl.formatMessage({id:"PG2Md01Tx13"})}
                        name="PG2Md01Tx13"
                        value={data.PG2Md01Tx13}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col>
                      <InputsGroup
                        type='number'
                        placeholder={intl.formatMessage({id:"PG2Md01Tx14"})}
                        label={intl.formatMessage({id:"PG2Md01Tx14"})}
                        name="PG2Md01Tx14"
                        value={data.PG2Md01Tx14}
                        x={'+'}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col>
                      <InputsGroup
                        type='number'
                        placeholder={intl.formatMessage({id:"PG2Md01Tx15"})}
                        label={intl.formatMessage({id:"PG2Md01Tx15"})}
                        name="PG2Md01Tx15"
                        value={data.PG2Md01Tx15}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col>
                      <InputsGroup
                        type='text'
                        placeholder={intl.formatMessage({id:"PG2Md01Tx16"})}
                        label={intl.formatMessage({id:"PG2Md01Tx16"})}
                        name="PG2Md01Tx16"
                        value={data.PG2Md01Tx16}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col lg={3}>
                <div className={`${classes.switchButtom}`}>
                  <div className={classes.switchButtom_PGMd01Lb15}>
                    <h5>{intl.formatMessage({id:"PGMd01Lb15"})}</h5>
                    <SwitchButton
                      leble_1={intl.formatMessage({id:"Default_switch"})}
                      leble_2={intl.formatMessage({id:"Default_switch"})}
                      setData={setData}
                      data={data}
                      value={'swt01'}
                      cheked={data.swt01}
                    />
                    <SwitchButton
                      leble_1=" Default switch"
                      leble_2=" Default switch"
                      setData={setData}
                      data={data}
                      value={'swt02'}
                      cheked={data.swt02}
                     />
                  </div>
                  <div>
                    <SwitchButton
                      leble_1={intl.formatMessage({id:"Default_switch"})}
                      leble_2={intl.formatMessage({id:"Default_switch"})}
                      setData={setData}
                      data={data}
                      cheked={data.swt03}
                      value={'swt03'}
                     />
                    <SwitchButton
                      leble_1={intl.formatMessage({id:"Default_switch"})}
                      leble_2={intl.formatMessage({id:"Default_switch"})}
                      setData={setData}
                      data={data}
                      value={'swt04'}
                      cheked={data.swt04}
                     />
                    <SwitchButton
                      leble_1={intl.formatMessage({id:"Default_switch"})}
                      leble_2={intl.formatMessage({id:"Default_switch"})}
                      setData={setData}
                      data={data}
                      value={'swt05'}
                      cheked={data.swt05}
                     />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          {/* section_two */}
          {/* section_three */}
          <div>
            <Row>
              <Col lg={9}>
                <InputsGroup
                  type='text'
                  placeholder={intl.formatMessage({id:"PG2Md01Tx18"})}
                  label={intl.formatMessage({id:"PG2Md01Tx18"})}
                  name='PG2Md01Tx18'
                  value={data.PG2Md01Tx18}
                  onChange={handleChange}
                />
              </Col>
              <Col lg={3}>
                 <button
                  type='submit'
                  className='btn btn-primary w-100'
                  data-kt-users-modal-action='submit'
                  onClick={handelClick}
                >
                  <span className='indicator-label'>Submit</span>
                </button>
              </Col>
            </Row>
          </div>
        </Row>
      </form>
    </>
  )
}


export { ListOneEditModalForm }
