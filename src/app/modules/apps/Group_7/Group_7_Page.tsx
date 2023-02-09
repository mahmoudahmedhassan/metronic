/* eslint-disable jsx-a11y/anchor-is-valid */
import {Navigate, Route, Routes} from 'react-router-dom'
import ChildOne from './MainComponents/ChildOne'
import ChildTwo from './MainComponents/ChildTwo'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import ChildThree from './MainComponents/ChildThree'
import ChildFour from './MainComponents/ChildFour'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Child_1',
    path: '/group_7/child_1',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Child_2',
    path: '/group_7/child_2',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Child_3',
    path: '/group_7/child_3',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Child_4',
    path: '/group_7/child_4',
    isSeparator: false,
    isActive: false,
  },
]
const Grop7page = () => {
  return (
    <Routes>
      <Route>
        <Route
          path='child_1'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Child_One</PageTitle>
              <ChildOne/>
            </>
          }
        />
        <Route
          path='child_2'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Child_Tow</PageTitle>
              <ChildTwo/>
            </>
          }
        />
        <Route
          path='child_3'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Child_Three</PageTitle>
              <ChildThree/>
            </>
          }
        />
        <Route
          path='child_4'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Child_Four</PageTitle>
              <ChildFour/>
            </>
          }
        />

        <Route index element={<Navigate to='group_7/child_1' />} />
      </Route>
    </Routes>
  )
}

export default Grop7page
