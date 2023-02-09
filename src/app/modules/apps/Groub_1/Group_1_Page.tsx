/* eslint-disable jsx-a11y/anchor-is-valid */
import {Navigate, Route, Routes} from 'react-router-dom'
import ChildOne from "./MainComponents/Grop_1_Child_1"
import ChildTwo from "./MainComponents/Grop_1_Child_2"
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Child_1',
    path: '/group_1/child_1',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Child_2',
    path: '/group_1/child_2',
    isSeparator: false,
    isActive: false,
  },
]
const Grop1page = () => {
  return (
    <Routes>
      <Route>
        
        <Route
          path='child_1'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Child_One</PageTitle>
              <ChildOne />
            </>
          }
        />
        <Route
          path='child_2'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Child_Tow</PageTitle>
              <ChildTwo />
            </>
          }
        />

        <Route index element={<Navigate to='group_1/child_1' />} />
       </Route>
    </Routes>
  )
}

export default Grop1page
