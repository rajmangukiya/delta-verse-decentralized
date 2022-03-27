import Link from 'next/link'
import Footer from './Footer'
import Navbar from './Navbar'
function Marketplace({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default Marketplace