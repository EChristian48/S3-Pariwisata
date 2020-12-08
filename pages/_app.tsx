import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { defaultSeoConfig } from '~root/next-seo.config'
import Head from 'next/head'
import { customTheme } from '~root/chakra.theme'
import { WRAPPER_ID } from '~root/lib/constants'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='favicon.svg' type='image/x-icon' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />

        <link
          href='https://fonts.googleapis.com/css2?family=Coda:wght@400;800&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <DefaultSeo {...defaultSeoConfig} />

      <div id={WRAPPER_ID}>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </div>
    </>
  )
}

export default MyApp
