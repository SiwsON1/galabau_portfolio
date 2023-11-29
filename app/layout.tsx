import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Navbar from '@/components/navbar'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
 })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <div className="h-full">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <main className="h-full ">
        {children}
        </main>
    </div>
      </body>
    </html>
  )
}
