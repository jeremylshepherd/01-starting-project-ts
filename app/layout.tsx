import MainHeader from '@/app/components/main-header/main-header';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
 return (
    <html lang="en">
      <body>
        <MainHeader routes={["Home", "News"]} />
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
