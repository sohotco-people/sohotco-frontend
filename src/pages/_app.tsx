import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Header from '@organisms/header'
import {
  ModalsProvider,
  NavProvider,
  NewProjectProvider,
  LoginProvider,
} from 'context/provider'
import Modal from '@organisms/modal'
import SignIn from '@templates/signIn'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable}`}>
      <LoginProvider>
        <NavProvider>
          <Header />
        </NavProvider>
        <ModalsProvider>
          <NewProjectProvider>
            <Component {...pageProps} />
            <Modal />
            <SignIn />
          </NewProjectProvider>
        </ModalsProvider>
      </LoginProvider>
    </div>
  )
}
