import React from 'react'
// import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {CardsWidget20} from '../../../../_metronic/partials/widgets'
import {useQueryResponseData, useQueryResponseLoading} from './core/QueryResponseProvider'
import {ListViewProvider} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import useChartDataHook from './core/useChartDataHook'
import CountUp from 'react-countup'
import PieChart from './PieChart'
import { LoadingComponent } from '../../../../_metronic/layout/components/loading/LoadingComponent'

function DashboardConatiner() {
  return (
    <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <DashboardWrapper />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  )
}
function DashboardWrapper() {
  const response = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const {data} = useChartDataHook(response)
  // console.log(isLoading)
  // console.log(data)
  return (
    <>
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        {/* begin::Col */}
       
        {data?.map((item: any, index: any) => {
          return (
            <div className='col-md-6 col-lg-6 col-xl-3 col-xxl-3 mb-md-5 mb-xl-10' key={index}>
              <CardsWidget20
                className='h-md-100 mb-5 mb-xl-10'
                description={item.title}
                color='#fff'
                img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                countEl={<CountUp start={0} end={item?.all} duration={3} />}
                chartPie ={ <PieChart chartData={item} />}
              />
            </div>
          )
        })}
        {/* end::Col */}

        {/* begin::Col */}
        {/* <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget17 className='h-md-50 mb-5 mb-xl-10' />
          <ListsWidget26 className='h-lg-50' />
        </div> */}
        {/* end::Col */}

        {/* begin::Col */}
        {/* <div className='col-xxl-6'>
          <EngageWidget10 className='h-md-100' />
        </div> */}
        {/* end::Col */}
      </div>
      {isLoading && <LoadingComponent/>}
    </>
  )
}

export default DashboardConatiner
