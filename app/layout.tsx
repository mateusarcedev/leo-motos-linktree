import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://leo-motos-linktree.vercel.app'
const title = 'Leo Motos — Aluguel de Motos em Tefé, AM'
const description =
  'Alugue Honda BIZ, BROS ou TITAN em Tefé, Amazonas. Reserva pelo WhatsApp, sem burocracia. Aluguel por dia, semana ou mês, com retirada no Centro.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'aluguel de motos Tefé',
    'aluguel de moto Amazonas',
    'Leo Motos',
    'Honda BIZ aluguel',
    'Honda BROS aluguel',
    'Honda TITAN aluguel',
    'moto por dia Tefé',
  ],
  authors: [{ name: 'Leo Motos' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo_leo_motos.jpg',
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Leo Motos',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Leo Motos',
  description,
  image: `${siteUrl}/logo_leo_motos.jpg`,
  url: siteUrl,
  telephone: '+5597981227805',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Monteiro de Souza, 262 - Centro',
    addressLocality: 'Tefé',
    addressRegion: 'AM',
    postalCode: '69550-097',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -3.346688,
    longitude: -64.7108242,
  },
  areaServed: 'Tefé, AM',
  sameAs: ['https://wa.me/5597981227805', 'https://wa.me/5597984575014'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
