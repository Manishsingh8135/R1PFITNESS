import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/shared/NewNavbar'
import Footer from '@/components/shared/Footer'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'R1p Fitness',
  description: 'Keep Moving',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <html lang="en" suppressHydrationWarning>
        <head />
        <body className='overflow-x-hidden'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
     
  )
}
