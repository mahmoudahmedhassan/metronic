/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect,memo } from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {ID, KTSVG, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
// import {  get_PG2MD01} from '../../core/_requests'

type Props = {
  id: ID
}

const ListOneActionsCell:   FC<Props> = ({id,id2}:any) => {
  const {setItemIdForUpdate, setOpenOptionOneID,setOpenOptionTwoID,setOptionsId} = useListView()
  const {query} = useQueryResponse()
   const queryClient = useQueryClient()
    useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  // const openEditModal = () => {
  //   setItemIdForUpdate(id)
  // }
  const handleOptionOne = () => {
    setOpenOptionOneID(id)
    // get_PG2MD01({value_1: id, value_2: 'Edit'})
    setOptionsId({value_1: id, value_2: 'Edit',})
   }
 
  const handleOptionTwo = () => {
    setOpenOptionTwoID(id)
    setOptionsId({value_1: id, value_2: id2,})
  }
  // const deleteItem = useMutation(() => deleteListOne(id), {
  //   // 💡 response of the mutation is passed to onSuccess
  //   onSuccess: () => {
  //     // ✅ update detail view directly
  //     queryClient.invalidateQueries([`ListOne-${query}`])
  //   },
  // })
 
  return (
    <>
      <a
        href='#'
        className='btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={handleOptionOne}>
            Option-One
          </a>
        </div>

        {/* end::Menu item */}

        {/* begin::Menu item */}
        {
          id2.length > 0 ? (
            <div className='menu-item px-3'>
            <a
              className='menu-link px-3'
              data-kt-list-one-table-filter='delete_row'
              // onClick={async () => await deleteItem.mutateAsync()}
              onClick={handleOptionTwo}
            >
              Option-Two
            </a>
          </div>
          ):null
        }
      
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  )
}  

 export {ListOneActionsCell}
