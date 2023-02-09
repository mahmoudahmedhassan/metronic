import {FC, useState, useCallback} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {initialListOneToPost, ListOneToPost} from '../../core/_models'
import clsx from 'clsx'
import {useListView} from '../../core/ListViewProvider'
import {ListOneListLoading} from '../../components/loading/ListOneListLoading'
import {createListOne, updateListOne} from '../../core/_requests'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import InputsGroup from './InputGroup'
import DropDwon from './DropDwon'
import SwitchButton from './SwitchButton'
import {Row, Col} from 'react-bootstrap'
import classes from '../../../../../../../_metronic/assets/css/MediaQuery.module.css'
import {multiplyNumbers} from '../../../../../../../_metronic/helpers/helperFn'
import {Table} from '../options-table/Table'
import useData from '../../../../../../../_metronic/helpers/crud-helper/hooks/useData'
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

const ListOneEditModalForm: FC<Props> = ({ListOne, isListOneLoading}) => {
  const {setItemIdForUpdate, setOpenOptionOneID, setOpenOptionTwoID, optionsId} = useListView()
  const {refetch} = useQueryResponse()
  const handleMultiplyNumbers: any = useCallback(
    (x: number, y: number) => multiplyNumbers(x, y),
    []
  )
  const {data, isLoading, isError, isSuccess, error} = useData('Jobs/PG2Md01', optionsId)
  console.log(data)

  const [ListOneForAdd] = useState<ListOneToPost>({
    ...initialListOneToPost,
    // PG2Md01Tx6: (initialListOneToPost.PG2Md01Tx4 && initialListOneToPost.PG2Md01Tx5) ? handleMultiplyNumbers(initialListOneToPost.PG2Md01Tx4, initialListOneToPost.PG2Md01Tx5) : 0
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
    setOpenOptionOneID(undefined)
    setOpenOptionTwoID(undefined)
  }

  const formik = useFormik({
    initialValues: ListOneForAdd,
    // validationSchema: editListOneSchema,
    onSubmit: async (values, {setSubmitting}) => {
      console.log({
        ...values,
        PG2Md01Tx6: handleMultiplyNumbers(values.PG2Md01Tx4, values.PG2Md01Tx5),
        PG2Md01Tx10: handleMultiplyNumbers(values.PG2Md01Tx8, values.PG2Md01Tx9),
      })
      // setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateListOne(values)
        } else {
          await createListOne({
            ...values,
            PG2Md01Tx6: handleMultiplyNumbers(values.PG2Md01Tx4, values.PG2Md01Tx5),
          })
          // initialListOneToPost.PG2Md01Tx6 =  handleMultiplyNumbers(formik.values.PG2Md01Tx4, formik.values.PG2Md01Tx5)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <form
        id='kt_modal_add_ListOne_form'
        className='form'
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <Row>
          <Col lg={9}>
            {/* section_one */}
            <div className={`d-flex ${classes.direction_column} ${classes.section_one}`}>
              <Col xs={12} sm={12} md={6}>
                <div className={classes.m_inline}>
                  <InputsGroup
                    type='text'
                    placeholder='PG2Md01Tx3'
                    label='PG2Md01Tx3'
                    name={'PG2Md01Tx3'}
                    formik={formik}
                    isListOneLoading={isListOneLoading}
                  />
                  {formik.errors.PG2Md01Tx3 && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.PG2Md01Tx3}</span>
                    </div>
                  )}
                  <DropDwon />
                </div>
              </Col>

              <Col xs={12} sm={12} md={6}>
                <div>
                  <InputsGroup
                    type='text'
                    placeholder='PG2Md01Tx1'
                    label='PG2Md01Tx1'
                    name={'PG2Md01Tx1'}
                    formik={formik}
                    isListOneLoading={isListOneLoading}
                  />
                  {formik.errors.PG2Md01Tx1 && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.PG2Md01Tx1}</span>
                    </div>
                  )}
                  <InputsGroup
                    type='text'
                    placeholder='PG2Md01Tx2'
                    label='PG2Md01Tx2'
                    name={'PG2Md01Tx2'}
                    formik={formik}
                    isListOneLoading={isListOneLoading}
                  />
                  {formik.errors.PG2Md01Tx2 && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.PG2Md01Tx2}</span>
                    </div>
                  )}
                </div>
              </Col>
            </div>
            {/* section_one */}

            {/* section_two */}
            <div>
              <Row>
                <Col lg={9}>
                  <div style={{marginBottom: '50px'}}>
                    <div>
                      <Row>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='number'
                            placeholder='PG2Md01Tx4'
                            label='PG2Md01Tx4'
                            x={'X'}
                            name={'PG2Md01Tx4'}
                            formik={formik}
                            isListOneLoading={isListOneLoading}
                          />
                          {formik.errors.PG2Md01Tx4 && (
                            <div className='fv-plugins-message-container'>
                              <span role='alert'>{formik.errors.PG2Md01Tx4}</span>
                            </div>
                          )}
                        </Col>

                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='number'
                            placeholder='PG2Md01Tx5'
                            label='PG2Md01Tx5'
                            x={'='}
                            name={'PG2Md01Tx5'}
                            formik={formik}
                            isListOneLoading={isListOneLoading}
                          />
                          {formik.errors.PG2Md01Tx5 && (
                            <div className='fv-plugins-message-container'>
                              <span role='alert'>{formik.errors.PG2Md01Tx5}</span>
                            </div>
                          )}
                        </Col>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='text'
                            placeholder='PG2Md01Tx6'
                            disabled='disabled'
                            name={'PG2Md01Tx6'}
                            formik={formik}
                            isListOneLoading={isListOneLoading}
                            result={handleMultiplyNumbers(
                              formik.values.PG2Md01Tx4,
                              formik.values.PG2Md01Tx5
                            )}
                          />
                        </Col>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='text'
                            placeholder='PG2Md01Tx7'
                            label='PG2Md01Tx7'
                            name={'PG2Md01Tx8'}
                            formik={formik}
                            isListOneLoading={isListOneLoading}
                          />
                          {formik.errors.PG2Md01Tx7 && (
                            <div className='fv-plugins-message-container'>
                              <span role='alert'>{formik.errors.PG2Md01Tx7}</span>
                            </div>
                          )}
                        </Col>
                      </Row>
                    </div>

                    <div>
                      <Row>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='number'
                            placeholder='PG2Md01Tx8'
                            label='PG2Md01Tx8'
                            x={'X'}
                            name={'PG2Md01Tx8'}
                            formik={formik}
                            isListOneLoading={isListOneLoading}
                          />
                          {formik.errors.PG2Md01Tx8 && (
                            <div className='fv-plugins-message-container'>
                              <span role='alert'>{formik.errors.PG2Md01Tx8}</span>
                            </div>
                          )}
                        </Col>

                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='number'
                            placeholder='PG2Md01Tx9'
                            label='PG2Md01Tx9'
                            x={'='}
                            name={'PG2Md01Tx9'}
                            formik={formik}
                            isListOneLoading={isListOneLoading}
                          />
                          {formik.errors.PG2Md01Tx9 && (
                            <div className='fv-plugins-message-container'>
                              <span role='alert'>{formik.errors.PG2Md01Tx9}</span>
                            </div>
                          )}
                        </Col>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='text'
                            placeholder='PG2Md01Tx10'
                            disabled='disabled'
                            name={'PG2Md01Tx10'}
                            formik={formik}
                            isListOneLoading={isListOneLoading}
                            result={handleMultiplyNumbers(
                              formik.values.PG2Md01Tx8,
                              formik.values.PG2Md01Tx9
                            )}
                          />
                        </Col>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='text'
                            placeholder='PG2Md01Tx11'
                            label='PG2Md01Tx11'
                            name={'PG2Md01Tx11'}
                            formik={formik}
                            isListOneLoading={isListOneLoading}
                          />
                          {formik.errors.PG2Md01Tx11 && (
                            <div className='fv-plugins-message-container'>
                              <span role='alert'>{formik.errors.PG2Md01Tx11}</span>
                            </div>
                          )}
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div>
                    <Row>
                      <Col xs={12} md={4}>
                        <InputsGroup
                          type='number'
                          placeholder='PG2Md01Tx12'
                          label='PG2Md01Tx12'
                          x={'X'}
                          result={handleMultiplyNumbers(
                            formik.values.PG2Md01Tx4,
                            formik.values.PG2Md01Tx5
                          )}
                        />
                      </Col>

                      <Col xs={12} md={4}>
                        <InputsGroup type='number' placeholder='PG2Md01Tx13' label='PG2Md01Tx13' />
                      </Col>

                      <Col xs={12} md={4}>
                        <InputsGroup type='text' placeholder='PG2Md01Tx14' label='PG2Md01Tx14' />
                      </Col>
                    </Row>
                  </div>

                  <div>
                    <Row>
                      <Col xs={12} md={4}>
                        <InputsGroup
                          type='number'
                          placeholder='PG2Md01Tx15'
                          label='PG2Md01Tx15'
                          x={'+'}
                        />
                      </Col>

                      <Col xs={12} md={4}>
                        <InputsGroup type='number' placeholder='PG2Md01Tx16' label='PG2Md01Tx16' />
                      </Col>

                      <Col xs={12} md={4}>
                        <InputsGroup type='text' placeholder='PG2Md01Tx17' label='PG2Md01Tx17' />
                      </Col>
                    </Row>
                  </div>
                  <div style={{marginTop: '30px'}}>
                    <Row>
                      <Col>
                        <SwitchButton leble_1=' Default switch' />
                      </Col>
                      <Col>
                        <SwitchButton leble_1=' Default switch' />
                      </Col>
                      <Col>
                        <SwitchButton leble_1=' Default switch' />
                      </Col>
                      <Col>
                        <SwitchButton leble_1=' Default switch' />
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={3}>
                  <div className={`${classes.switchButtom}`}>
                    <div className={classes.switchButtom_PGMd01Lb15}>
                      <h5>PGMd01Lb15</h5>
                      <SwitchButton leble_1=' Default switch' leble_2=' Default switch' />
                      <SwitchButton leble_1=' Default switch' leble_2=' Default switch' />
                    </div>
                    <div>
                      <SwitchButton leble_1=' Default switch' leble_2=' Default switch' />
                      <SwitchButton leble_1=' Default switch' leble_2=' Default switch' />
                      <SwitchButton leble_1=' Default switch' leble_2=' Default switch' />
                      <SwitchButton leble_1=' Default switch' leble_2=' Default switch' />
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
                  <InputsGroup type='text' placeholder='PG2Md01Tx18' label='PG2Md01Tx18' />
                </Col>
                <Col lg={3}>
                  {/* <button className='btn btn-success w-100' type='submit'>Submit</button> */}
                  <button
                    type='submit'
                    className='btn btn-primary w-100'
                    data-kt-users-modal-action='submit'
                    // disabled={
                    //   isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched
                    // }
                    // disabled={false}
                  >
                    <span className='indicator-label'>Submit</span>
                    {/* {(formik.isSubmitting) && (
                    <span className='indicator-progress'>
                      Please wait...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )} */}
                  </button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={3}>
            <div>
              <Table />
            </div>
          </Col>
        </Row>
      </form>
    </>
  )
}

export {ListOneEditModalForm}
