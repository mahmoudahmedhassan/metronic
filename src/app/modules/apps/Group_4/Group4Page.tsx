import {Route, Routes, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {ListWrapper} from './users-list/GroubList'

const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Group 4',
    path: '/group_4/group_4',
    isSeparator: false,
    isActive: false,
  },
]

const Groub2Page = () => {
  return (
    <Routes>
      <Route
        path='/group_4'
        element={
          <>
            <PageTitle breadcrumbs={Breadcrumbs}>group-4</PageTitle>
            <ListWrapper/>
          </>
        }
      />
      <Route index element={<Navigate to='/group_4'/>} />
    </Routes>
  )
}

export default Groub2Page
