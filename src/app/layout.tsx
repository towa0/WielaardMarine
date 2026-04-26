import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wielaardmarine.nl'), // ← update to your real domain
  title: {
    default: 'WielaardMarine | Bootverhuur & Onderhoud Binnenmaas',
    template: '%s | WielaardMarine',
  },
  description:
    'Bootverhuur en onderhoudsservice aan de Binnenmaas in de Hoeksche Waard. Verhuur van sloepen, motorjachten en kajuitboten voor dag- en weekverhuur. Geen vaarbewijs vereist voor onze sloepen.',
  keywords: [
    'bootverhuur binnenmaas',
    'sloep huren hoeksche waard',
    'bootonderhoud numansdorp',
    'bootverhuur hoeksche waard',
    'sloep huren rotterdam omgeving',
    'varen binnenmaas',
    'wielaard marine',
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'WielaardMarine',
    title: 'WielaardMarine | Bootverhuur & Onderhoud Binnenmaas',
    description:
      'Bootverhuur en onderhoud aan de Binnenmaas in de Hoeksche Waard. Dag- en weekverhuur, geen vaarbewijs vereist voor sloepen.',
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
    <html lang="nl">
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
