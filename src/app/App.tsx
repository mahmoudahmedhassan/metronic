import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { I18nProvider } from '../_metronic/i18n/i18nProvider';
import { LayoutProvider, LayoutSplashScreen } from '../_metronic/layout/core';
import { MasterInit } from '../_metronic/layout/MasterInit';
import { AuthInit } from './modules/auth';

// import '../_metronic/assets/sass/style.scss'
// import  '../_metronic/assets/sass/plugins.scss'
// import '../_metronic/assets/sass/style.react.scss'
import '../_metronic/assets/sass/style.react.scss'

const App = () => {

const langToggle = JSON.parse(localStorage.getItem('i18nConfig') || '{}');

  useEffect(() => {
    if (langToggle.selectedLang === "ar") {
      import("../_metronic/assets/css/style.rtl.css")
      import('../_metronic/assets/css/updatedStyle.css')
    }
     else{
       import ('../_metronic/assets/sass/style.scss')
       import ('../_metronic/assets/sass/plugins.scss')
       import ('../_metronic/assets/sass/style.react.scss')
       import('../_metronic/assets/css/updatedStyle.css')

    }
  }, [langToggle.selectedLang])

  // const handleStyle = () => {
  //   if (langToggle.selectedLang === "ar") {
  //     import ('../_metronic/assets/sass/style.react.scss')
  //     import ("../_metronic/assets/css/style.rtl.css")
  //     import('../_metronic/assets/css/updatedStyle.css')
  //   } 
  // }

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      {/* <Helmet>
        <link rel="stylesheet" href="css/style.css" />
      </Helmet>  */}
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

export { App }
