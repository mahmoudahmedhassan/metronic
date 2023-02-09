import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
 
const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const Group1 = lazy(() => import('../modules/apps/Groub_1/Group_1_Page'))
  const Group2 = lazy(() => import('../modules/apps/Groub_2/Group2Page'))
  const Group3 = lazy(() => import('../modules/apps/Group_3/Group3Page'))
  const Group4 = lazy(() => import('../modules/apps/Group_4/Group4Page'))
  const Group5 = lazy(() => import('../modules/apps/Group_5/Group5Page'))
  const Group6 = lazy(() => import('../modules/apps/Group_6/Group6Page'))
  const Group7 = lazy(() => import('../modules/apps/Group_7/Group_7_Page'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route path='crafted/pages/profile/*'element={<SuspensedView><ProfilePage/></SuspensedView>}/>
        <Route path='group_1/*'element={<SuspensedView><Group1/></SuspensedView>}/>
        <Route path='group_2/*'element={<SuspensedView><Group2/></SuspensedView>}/>
        <Route path='group_3/*'element={<SuspensedView><Group3/></SuspensedView>}/>
        <Route path='group_4/*'element={<SuspensedView><Group4/></SuspensedView>}/>
        <Route path='group_5/*'element={<SuspensedView><Group5/></SuspensedView>}/>
        <Route path='group_6/*'element={<SuspensedView><Group6/></SuspensedView>}/>
        <Route path='group_7/*'element={<SuspensedView><Group7/></SuspensedView>}/>

        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
