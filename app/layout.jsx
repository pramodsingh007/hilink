import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={`${inter.className} relative`}>
        <Navbar></Navbar>
        <main className=' relative overflow-hidden '>
        {children}
        </main>
        <Footer></Footer>
        </body>
    </html>
  )
}