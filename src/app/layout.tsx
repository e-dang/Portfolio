import {Navbar} from '@/components/Navbar';
import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Eric Dang',
  description: "Eric Dang's personal portfolio website",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} h-screen w-screen overflow-y-auto overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
