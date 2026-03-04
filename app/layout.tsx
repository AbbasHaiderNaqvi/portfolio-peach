import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ramsha Ali — Graphic Designer',
  description:
    'Ramsha Ali is a creative graphic designer specializing in brand identity, UI/UX, and visual storytelling. Based globally, crafting designs that connect and inspire.',
  generator: 'v0.app',
  keywords: ['graphic designer', 'brand identity', 'UI/UX', 'Ramsha Ali', 'portfolio'],
  openGraph: {
    title: 'Ramsha Ali — Graphic Designer',
    description: 'Creative graphic designer crafting brand identities and visual stories.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#E8715A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
