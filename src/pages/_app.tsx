import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Header from '@organisms/header'
import { LoginProvider, ModalsProvider, NavProvider } from 'context/provider'
import Modal from '@organisms/modal'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable}`}>
      <LoginProvider>
        <NavProvider>
          <Header />
        </NavProvider>
        <ModalsProvider>
          <Component {...pageProps} />
          <Modal />
        </ModalsProvider>
      </LoginProvider>
    </div>
  )
}
