import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Header from '@organisms/header'
import {
  ModalsProvider,
  NavProvider,
  NewProjectProvider,
} from 'context/provider'
import Modal from '@organisms/modal'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable}`}>
      <NavProvider>
        <Header />
      </NavProvider>
      <ModalsProvider>
        <NewProjectProvider>
          <Component {...pageProps} />
          <Modal />
        </NewProjectProvider>
      </ModalsProvider>
    </div>
  )
}
