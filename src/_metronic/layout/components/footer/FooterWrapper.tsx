import clsx from 'clsx'
import {useLayout} from '../../core'
import {Footer} from './Footer'


const FooterWrapper = () => {
  const {config} = useLayout()
  if (!config.app?.footer?.display) {
    return null
  }
  const footerStyle: React.CSSProperties ={
    position: 'fixed',
    bottom: '0',
    width: '100%',
    zIndex: '-1',
    // marginTop:"100px"
  }

  return (
    <div className='app-footer' id='kt_app_footer' style={footerStyle}>
      {config.app.footer.containerClass ? (
        <div className={clsx('app-container', config.app.footer.containerClass)}>
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  )
}

export {FooterWrapper}
