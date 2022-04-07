import '../../styles/globals'
import type { AppProps } from 'next/app'
// eslint-disable-next-line no-use-before-define
import React from 'react'

function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
