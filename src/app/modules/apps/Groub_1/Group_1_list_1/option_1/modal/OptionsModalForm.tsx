import { FC, useState, useCallback } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { isNotEmpty, toAbsoluteUrl } from '../../../../../../../_metronic/helpers'
import { initialListOneToPost, ListOneToPost } from '../../core/_models'
import clsx from 'clsx'
import { useListView } from '../../core/ListViewProvider'
import { ListOneListLoading } from '../../components/loading/ListOneListLoading'
import { createListOne, updateListOne } from '../../core/_requests'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import InputsGroup from './InputGroup'
import DropDwon from './DropDwon'
import SwitchButton from './SwitchButton'
import { Row, Col } from 'react-bootstrap'
import classes from '../../../../../../../_metronic/assets/css/MediaQuery.module.css'
import { multiplyNumbers } from '../../../../../../../_metronic/helpers/helperFn'
import { Table } from '../options-table/Table'
import useData from '../../../../../../../_metronic/helpers/crud-helper/hooks/useData'
import { useIntl } from 'react-intl'
type Props = {
  isListOneLoading: boolean
  ListOne: any
}

const ListOneEditModalForm: FC<Props> = ({ ListOne, isListOneLoading }) => {
  const intl = useIntl()

  const { setItemIdForUpdate, setOpenOptionOneID, setOpenOptionTwoID, optionsId } = useListView()
  const { refetch } = useQueryResponse()
  const handleMultiplyNumbers: any = useCallback(
    (x: number, y: number) => multiplyNumbers(x, y),
    []
  )
  const { data, isLoading, isError, isSuccess, error } = useData('Jobs/PG2Md01', optionsId)
  console.log(data, isLoading, isError, isSuccess)

  const [ListOneForAdd] = useState<ListOneToPost>({
    ...initialListOneToPost,
    // PG2Md01Tx6: (initialListOneToPost.PG2Md01Tx4 && initialListOneToPost.PG2Md01Tx5) ? handleMultiplyNumbers(initialListOneToPost.PG2Md01Tx4, initialListOneToPost.PG2Md01Tx5) : 0
  })

  // const cancel = (withRefresh?: boolean) => {
  //   if (withRefresh) {
  //     refetch()
  //   }
  //   setItemIdForUpdate(undefined)
  //   setOpenOptionOneID(undefined)
  //   setOpenOptionTwoID(undefined)
  // }

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
  //       if (isNotEmpty(values.userID)) {
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

  return (
    <>
      <form
        id='kt_modal_add_ListOne_form'
        className='form'
      // onSubmit={formik.handleSubmit}
      // noValidate
      >
        <Row>
          <Col lg={9}>
            {/* section_one */}
            <div className={`d-flex ${classes.direction_column} ${classes.section_one}`}>
              <Col xs={12} sm={12} md={6}>
                <div className={classes.m_inline}>
                  <InputsGroup
                    type='text'
                    placeholder={intl.formatMessage({ id: "pG2Md01Tx3a" })}
                    label={intl.formatMessage({ id: "pG2Md01Tx3a" })}
                    name={'pG2Md01Tx3a'}
                  />
                  <DropDwon />
                </div>
              </Col>

              <Col xs={12} sm={12} md={6}>
                <div>
                  <InputsGroup
                    type='text'
                    placeholder={intl.formatMessage({ id: "pG2Md01Tx1a" })}
                    label={intl.formatMessage({ id: "pG2Md01Tx1a" })}
                    name={'pG2Md01Tx1a'}
                  />

                  <InputsGroup
                    type='text'
                    placeholder={intl.formatMessage({ id: "pG2Md01Tx2a" })}
                    label={intl.formatMessage({ id: "pG2Md01Tx2a" })}
                    name={'pG2Md01Tx2a'}
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
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='number'
                            placeholder={intl.formatMessage({ id: "pG2Md01Tx4a" })}
                            label={intl.formatMessage({ id: "pG2Md01Tx4a" })}
                            name={'pG2Md01Tx4a'}
                            x={'X'}

                          />

                        </Col>

                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='number'
                            placeholder={intl.formatMessage({ id: "pG2Md01Tx5a" })}
                            label={intl.formatMessage({ id: "pG2Md01Tx5a" })}
                            name={'pG2Md01Tx5a'}
                            x={'='}

                          />

                        </Col>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='text'
                            disabled='disabled'
                          //  result={handleMultiplyNumbers(
                          //    PG2Md01Tx4,
                          //    PG2Md01Tx5
                          // )}
                          />
                        </Col>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='text'
                            placeholder={intl.formatMessage({ id: "pG2Md01Tx6a" })}
                            label={intl.formatMessage({ id: "pG2Md01Tx6a" })}
                            name={'pG2Md01Tx6a'}

                          />

                        </Col>
                      </Row>
                    </div>

                    <div>
                      <Row>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='number'
                            placeholder={intl.formatMessage({ id: "pG2Md01Tx7a" })}
                            label={intl.formatMessage({ id: "pG2Md01Tx7a" })}
                            name={'pG2Md01Tx7a'}
                            x={'X'}
                          />

                        </Col>

                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='number'
                            placeholder={intl.formatMessage({ id: "pG2Md01Tx8a" })}
                            label={intl.formatMessage({ id: "pG2Md01Tx8a" })}
                            name={'pG2Md01Tx8a'}
                            x={'='}

                          />

                        </Col>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='text'
                            disabled='disabled'

                          // result={handleMultiplyNumbers(
                          //   formik.values.PG2Md01Tx8,
                          //   formik.values.PG2Md01Tx9
                          // )}
                          />
                        </Col>
                        <Col xs={12} md={3}>
                          <InputsGroup
                            type='text'
                            placeholder={intl.formatMessage({ id: "pG2Md01Tx9a" })}
                            label={intl.formatMessage({ id: "pG2Md01Tx9a" })}
                            name={'pG2Md01Tx9a'}
                          />

                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div>
                    <Row>
                      <Col xs={12} md={4}>
                        <InputsGroup
                          type='number'
                          placeholder={intl.formatMessage({ id: "pG2Md01Tx10a" })}
                          label={intl.formatMessage({ id: "pG2Md01Tx10a" })}
                          name={'pG2Md01Tx10a'}
                          x={'X'}
                        // result={handleMultiplyNumbers(
                        //   formik.values.PG2Md01Tx4,
                        //   formik.values.PG2Md01Tx5
                        // )}
                        />
                      </Col>

                      <Col xs={12} md={4}>
                        <InputsGroup
                          type='number'
                          placeholder={intl.formatMessage({ id: "pG2Md01Tx11a" })}
                          label={intl.formatMessage({ id: "pG2Md01Tx11a" })}
                          name={'pG2Md01Tx11a'}
                        />
                      </Col>

                      <Col xs={12} md={4}>
                        <InputsGroup
                          type='text'
                          placeholder={intl.formatMessage({ id: "pG2Md01Tx12a" })}
                          label={intl.formatMessage({ id: "pG2Md01Tx12a" })}
                          name={'pG2Md01Tx12a'}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div>
                    <Row>
                      <Col xs={12} md={4}>
                        <InputsGroup
                          type='number'
                          placeholder={intl.formatMessage({ id: "pG2Md01Tx13a" })}
                          label={intl.formatMessage({ id: "pG2Md01Tx13a" })}
                          name={'pG2Md01Tx13a'}
                          x={'+'}
                        />
                      </Col>

                      <Col xs={12} md={4}>
                        <InputsGroup
                          type='number'
                          placeholder={intl.formatMessage({ id: "pG2Md01Tx14a" })}
                          label={intl.formatMessage({ id: "pG2Md01Tx14a" })}
                          name={'pG2Md01Tx14a'}
                        />
                      </Col>

                      <Col xs={12} md={4}>
                        <InputsGroup
                          type='text'
                          placeholder={intl.formatMessage({ id: "pG2Md01Tx15a" })}
                          label={intl.formatMessage({ id: "pG2Md01Tx15a" })}
                          name={'pG2Md01Tx15a'}
                        />
                      </Col>
                    </Row>
                  </div>
                  <div style={{ marginTop: '30px' }}>
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
                    placeholder={intl.formatMessage({ id: "pG2Md01Tx16a" })}
                    label={intl.formatMessage({ id: "pG2Md01Tx16a" })}
                    name={'pG2Md01Tx16a'}
                  />
                </Col>
                <Col lg={3}>
                  <button
                    type='submit'
                    className='btn btn-primary w-100'
                    data-kt-users-modal-action='submit'
                  >
                    <span className='indicator-label'>Submit</span>
                  </button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={3}>
            <div>
              <div>{data?.length > 0 ? (<Table tableData={data} />) : null}</div>
            </div>
            <Row>
              <Col>
                <InputsGroup
                  type='text'
                  placeholder={intl.formatMessage({ id: "pG2Md01Tx17a" })}
                  label={intl.formatMessage({ id: "pG2Md01Tx17a" })}
                  name={'pG2Md01Tx17a'}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InputsGroup
                  type='text'
                  placeholder={intl.formatMessage({ id: "pG2Md01Tx18a" })}
                  label={intl.formatMessage({ id: "pG2Md01Tx18a" })}
                  name={'pG2Md01Tx18a'}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InputsGroup
                  type='text'
                  placeholder={intl.formatMessage({ id: "pG2Md01Tx19a" })}
                  label={intl.formatMessage({ id: "pG2Md01Tx19a" })}
                  name={'pG2Md01Tx19a'}
                />
                </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </>
  )
}

export { ListOneEditModalForm }
