import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from '@mui/material'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <Container>
    <Navbar />
    <Component {...pageProps} />
  </Container>
}

export default MyApp
