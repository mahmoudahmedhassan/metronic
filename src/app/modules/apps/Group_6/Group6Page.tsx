import {Route, Routes, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {ListWrapper} from './users-list/GroubList'

const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Group 6',
    path: '/group_6/group_6',
    isSeparator: false,
    isActive: false,
  },
]

const Groub5Page = () => {
  return (
    <Routes>
      <Route
        path='/group_6'
        element={
          <>
            <PageTitle breadcrumbs={Breadcrumbs}>group-6</PageTitle>
            <ListWrapper/>
          </>
        }
      />
      <Route index element={<Navigate to='/group_6'/>} />
    </Routes>
  )
}

export default Groub5Page
