import type { Metadata } from 'next';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import { Ubuntu } from 'next/font/google';
import { Suspense } from 'react';
import { MainProvider } from '@/store/context/Main.context';
import { ThemeProvider } from '@/hooks/useThemeContext';
import { getUserGithub } from '@/services/api/github.api';
import { Footer } from '@/components/Footer';
import { ScrollEvent } from '@/components/ScrollEvent';
import HomeLoading from './loading';
import './globals.css';

const ubuntu = Ubuntu({ weight: "300", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Users',
  description: 'Random profiles of randomly generated people',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profileUser = await getUserGithub();

  return (
    <html lang="pt-BR" className="dark">
      <body className={ubuntu.className}>
        <MainProvider>
          <ThemeProvider>
            <Header />
            <main>
              <NavBar />
              <ScrollEvent>
                <Suspense fallback={<HomeLoading />}>
                  {children}
                </Suspense>
              </ScrollEvent>
            </main>
            <Footer
              avatarUser={profileUser.avatar_url}
              urlUser={profileUser.html_url}
            />
          </ThemeProvider>
        </MainProvider>
      </body>
    </html>
  )
}
