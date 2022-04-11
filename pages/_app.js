import Link from 'next/link'
import Footer from './Footer'
import Navbar from './Navbar'
// import '../styles/style.css'
import '../SASS/style.css'

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