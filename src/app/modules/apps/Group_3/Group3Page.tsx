import {Route, Routes, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {ListWrapper} from './users-list/GroubList'

const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Group 3',
    path: '/group_3/group_3',
    isSeparator: false,
    isActive: false,
  },
]

const Groub3Page = () => {
  return (
    <Routes>
      <Route
        path='/group_3'
        element={
          <>
            <PageTitle breadcrumbs={Breadcrumbs}>group-3</PageTitle>
            <ListWrapper/>
          </>
        }
      />
      <Route index element={<Navigate to='/group_3'/>} />
    </Routes>
  )
}

export default Groub3Page
