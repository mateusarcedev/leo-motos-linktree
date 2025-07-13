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
      <body>{children}</body>
    </html>
  )
}
