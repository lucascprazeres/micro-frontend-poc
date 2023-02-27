import { GlobalStyle } from '@app/styles/global'
import type { AppProps } from 'next/app'

//@ts-ignore
import { CartContextProvider } from '@lucascprazeres/cart'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </CartContextProvider>
  )
}
