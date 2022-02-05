import '../styles/variable.scss'
import '../styles/mixin.scss'
import '../styles/globals.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
