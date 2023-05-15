import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="google-site-verification" content="2XjcVEA6YGc75W2NoemfDvNR42kEn8gGF5jbztZG6zM" />
      <meta name="verify-v1" content="2XjcVEA6YGc75W2NoemfDvNR42kEn8gGF5jbztZG6zM"></meta>
      <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Outfit:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
     
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
