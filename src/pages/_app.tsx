import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Header from '@organisms/header'
import { ModalsProvider, NavProvider } from 'context/provider'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable}`}>
      <NavProvider>
        <Header />
      </NavProvider>
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </div>
  )
}
