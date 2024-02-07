import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Footer from '@/components/shared/Footer'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'R1p Fitness',
  description: 'Keep Moving',
  icons: {
    icon: '/assets/riplogo1.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <html lang="en" suppressHydrationWarning>
        <head />
        <body className='overflow-x-hidden bg-black'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Navbar/> */}
            {children}
            <SpeedInsights />
            <Analytics />
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
     
  )
}
