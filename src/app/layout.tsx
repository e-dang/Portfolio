import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Eric Dang',
  description: "Eric Dang's personal portfolio website",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth bg-[url('/background.svg')] bg-fixed text-white ">
      <body className={`${inter.className} h-screen w-screen overflow-y-auto overflow-x-hidden`}>{children}</body>
    </html>
  );
}
