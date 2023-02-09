import {Route, Routes, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {ListWrapper} from './users-list/GroubList'

const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Group 2',
    path: '/group_2/group_2',
    isSeparator: false,
    isActive: false,
  },
]

const Groub2Page = () => {
  return (
    <Routes>
      <Route
        path='/group_2'
        element={
          <>
            <PageTitle breadcrumbs={Breadcrumbs}>group-2</PageTitle>
            <ListWrapper/>
          </>
        }
      />
      <Route index element={<Navigate to='/group_2'/>} />
    </Routes>
  )
}

export default Groub2Page
