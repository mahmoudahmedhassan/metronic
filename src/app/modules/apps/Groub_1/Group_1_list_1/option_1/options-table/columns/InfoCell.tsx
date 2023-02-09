/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {ListOneToView} from '../../../core/_models'

type Props = {
  ListOne: ListOneToView
}

const ListOneInfoCell: FC<Props> = ({ListOne}) => (
<div>test</div>
  // <div className='d-flex align-items-center'>
  //   {/* begin:: Avatar */}
  //   <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
  //     <a href='#'>
  //       {ListOne.avatar ? (
  //         <div className='symbol-label'>
  //           <img src={toAbsoluteUrl(`/media/${ListOne.avatar}`)} alt={ListOne.name} className='w-100' />
  //         </div>
  //       ) : (
  //         <div
  //           className={clsx(
  //             'symbol-label fs-3',
  //             `bg-light-${ListOne.initials?.state}`,
  //             `text-${ListOne.initials?.state}`
  //           )}
  //         >
  //           {ListOne.initials?.label}
  //         </div>
  //       )}
  //     </a>
  //   </div>
  //   <div className='d-flex flex-column'>
  //     <a href='#' className='text-gray-800 text-hover-primary mb-1'>
  //       {ListOne.name}
  //     </a>
  //     <span>{ListOne.email}</span>
  //   </div>
  // </div>
)

export {ListOneInfoCell}
