import { theme } from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
