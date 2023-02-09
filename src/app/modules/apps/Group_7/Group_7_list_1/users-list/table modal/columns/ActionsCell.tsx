/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
// import {useMutation, useQueryClient} from 'react-query'
// import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
// import {ID, KTSVG, QUERIES} from '../../../../../../../_metronic/helpers'
// import {useListView} from '../../core/ListViewProvider'
// import {useQueryResponse} from '../../core/QueryResponseProvider'
// import {deleteUser} from '../../core/_requests'
 import Select from 'react-select'

type Props = {
  drop: []
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const ActionsCell: FC<Props> = ({drop}) => {
    return (
    <Select className='mb-3' options={options}  />
  )
}

export {ActionsCell}
