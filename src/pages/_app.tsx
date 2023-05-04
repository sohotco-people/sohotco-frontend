import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Header from '@organisms/header'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable}`}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
