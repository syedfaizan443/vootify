import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar,Footer } from '../components'
import { ThemeProviderr } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vootify',
  description: 'vote your favourite character',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {
          (process.env.NODE_ENV === "production" && (
            <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
     crossorigin="anonymous"></script>
          ))
        }
      </head>
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
