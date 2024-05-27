import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Footer from '@/components/shared/Footer'
import { NavbarDemo } from "@/components/Navbar/NavbarDemo";
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Best Fitness Gym in Hawaii - Achieve Your Goals with Us',
  description: 'Join the best fitness gym in Hawaii! Offering top-notch fitness classes, personal training, and the best gym membership deals. Find us in Honolulu for your ultimate fitness experience.',
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
            <NavbarDemo/>
            {children}
            <SpeedInsights />
            <Analytics />
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
     
  )
}
