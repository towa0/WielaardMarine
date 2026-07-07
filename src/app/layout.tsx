import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wielaardmarine.nl'), // ← update to your real domain
  title: {
    default: 'WielaardMarine | Bootverzorging & Bootverhuur Binnenmaas',
    template: '%s | WielaardMarine',
  },
  description:
    'Professioneel bootverzorging en polijsten door Julian Wielaard. Bootverhuur aan de Binnenmaas in de Hoeksche Waard. Geen vaarbewijs vereist voor onze sloepen.',
  keywords: [
    'boot polijsten',
    'bootverzorging hoeksche waard',
    'boot polijsten binnenmaas',
    'bootverhuur binnenmaas',
    'sloep huren hoeksche waard',
    'sloep huren rotterdam omgeving',
    'varen binnenmaas',
    'wielaard marine',
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'WielaardMarine',
    title: 'WielaardMarine | Bootverzorging & Bootverhuur Binnenmaas',
    description:
      'Professioneel bootverzorging en bootverhuur aan de Binnenmaas in de Hoeksche Waard. Opgericht door Julian Wielaard vanuit passie voor het water.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={spaceGrotesk.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
