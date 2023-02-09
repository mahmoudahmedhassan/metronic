import {Route, Routes, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {ListWrapper} from './users-list/GroubList'

const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Group 5',
    path: '/group_5/group_5',
    isSeparator: false,
    isActive: false,
  },
]

const Groub5Page = () => {
  return (
    <Routes>
      <Route
        path='/group_5'
        element={
          <>
            <PageTitle breadcrumbs={Breadcrumbs}>group-5</PageTitle>
            <ListWrapper/>
          </>
        }
      />
      <Route index element={<Navigate to='/group_5'/>} />
    </Routes>
  )
}

export default Groub5Page
