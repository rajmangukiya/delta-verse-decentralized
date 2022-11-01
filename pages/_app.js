import Link from 'next/link'
import Footer from './Footer'
import Navbar from './Navbar'
function Marketplace({ Component, pageProps }) {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height: '1000px'}}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default Marketplace