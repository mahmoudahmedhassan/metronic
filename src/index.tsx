
import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
//  TIP: Replace this style import with rtl styles to enable rtl mode

// en
// import './_metronic/assets/sass/style.scss'
// import './_metronic/assets/sass/plugins.scss'

 // ar
// import './_metronic/assets/sass/style.react.scss'
// import './_metronic/assets/css/style.rtl.css'

// updata style file
// import './_metronic/assets/css/updatedStyle.css'


// import './_metronic/assets/sass/style.scss'
// import './_metronic/assets/sass/plugins.scss'
// import './_metronic/assets/sass/style.react.scss'

// import './_metronic/assets/css/updatedStyle.css'


/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/

// en
//  import './_metronic/assets/sass/style.scss'
//  import './_metronic/assets/sass/plugins.scss'
//  import './_metronic/assets/sass/style.react.scss'

// ar
//  import './_metronic/assets/sass/style.react.scss'
//  import "./_metronic/assets/css/style.rtl.css";
//  import './_metronic/assets/css/updatedStyle.css'

import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
import { Provider } from 'react-redux';
import { store } from './redux/store'
 
 /**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *  
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
const lang = JSON.parse(localStorage.getItem('i18nConfig') || '{}');
// useEffect(() => {
//   const head = document.head;
//   const link = document.createElement('link');

//   link.type = 'text/css';
//   link.rel = 'stylesheet';

//   if (language === 'en') {
//     link.href = 'style-en.css';

//     const oldLink = document.getElementById('style-fr');
//     if (oldLink) {
//       head.removeChild(oldLink);
//     }
//   } else if (language === 'fr') {
//     link.href = 'style-fr.css';

//     const oldLink = document.getElementById('style-en');
//     if (oldLink) {
//       head.removeChild(oldLink);
//     }
//   }

//   link.id = `style-${language}`;
//   head.appendChild(link);
// }, [language]);

 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
setupAxios(axios)
Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <MetronicI18nProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MetronicI18nProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  )
}
