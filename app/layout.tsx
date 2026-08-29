import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leo Motos',
  description: 'Aluguel de motos em Tefé, Amazonas.',
  icons: {
    icon: '/logo_leo_motos.png',
  },
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
      </head>
      <body>{children}</body>
    </html>
  )
}
