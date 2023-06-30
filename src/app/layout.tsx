import Navbar from '@/components/Navbar'
import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'eCommerce Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
