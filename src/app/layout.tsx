import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wielaardmarine.nl'),
  title: {
    default: 'Wielaard Marine | Bootverzorging & polijsten Binnenmaas',
    template: '%s | Wielaard Marine',
  },
  description:
    'Handmatig polijstwerk en bootverzorging aan de Binnenmaas in de Hoeksche Waard, door Julian Wielaard. Daarnaast ook bootverhuur — sloepen zonder vaarbewijs.',
  keywords: [
    'boot polijsten',
    'bootverzorging hoeksche waard',
    'boot polijsten binnenmaas',
    'bootverhuur binnenmaas',
    'sloep huren hoeksche waard',
    'wielaard marine',
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Wielaard Marine',
    title: 'Wielaard Marine | Bootverzorging & polijsten Binnenmaas',
    description:
      'Handmatig polijstwerk en bootverzorging aan de Binnenmaas in de Hoeksche Waard, door Julian Wielaard.',
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
      <body className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
