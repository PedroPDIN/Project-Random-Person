import type { Metadata } from 'next'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import { Ubuntu } from 'next/font/google'
import { MainProvider } from '@/store/context/Main.context'
import './globals.css'

const ubuntu = Ubuntu({ weight: "300", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Users',
  description: 'Random profiles of randomly generated people',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={ubuntu.className}>
        <MainProvider>
          <Header />
          <NavBar />
          {children}
        </MainProvider>
      </body>
    </html>
  )
}
