import './globals.css'
import { Outfit } from "next/font/google"
import { Inter } from "next/font/google"
import { Archivo } from 'next/font/google'
import { Manrope } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata = {
  title: 'Stella - Making Volunteer opportunities accessible',
  description: 'Reducing the opportunity disparity between schools and organizations/businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${archivo.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  )
}
