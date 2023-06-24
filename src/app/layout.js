import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar,Footer } from '../components'
import { ThemeProviderr } from '@/context/ThemeContext'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vootify',
  description: 'vote your favourite character',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
            strategy="lazyOnload"
            crossOrigin="anonymous"
          />
        
      </Head>
      <body className={inter.className}>
      <ThemeProviderr>
      <Navbar></Navbar>
        {children}
      <Footer></Footer>
      </ThemeProviderr>
      </body>
    </html>
  )
}
