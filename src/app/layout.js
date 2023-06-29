
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '../components'
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
      <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        {/* <!-- Google tag (gtag.js) --> */}
        
        <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
        <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
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
