import Header from '../components/Header'
import Metatags from '../components/Metatags'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Metatags />
      <Header />
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
