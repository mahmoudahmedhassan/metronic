import {Suspense, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {MasterInit} from '../_metronic/layout/MasterInit'
import {AuthInit} from './modules/auth'
const App = () => {
  const langToggle = JSON.parse(localStorage.getItem('i18nConfig') || '{}');
   // const isCheck = false
  // useEffect(() => {
  //   handleStyle()
  // }, [isCheck])

  // const handleStyle = () => {
  //   if (langToggle) {
  //     import('../_metronic/assets/css/updatedStyle.css')
  //   }
  // }
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
