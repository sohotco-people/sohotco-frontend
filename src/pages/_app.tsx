import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Homemade_Apple } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
