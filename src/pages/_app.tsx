import GooglePixel from '@/components/GooglePixel'
import { theme } from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import OtherPixels from '@/components/OtherPixels'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GooglePixel/>
      <OtherPixels/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
