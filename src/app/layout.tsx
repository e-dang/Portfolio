import type {Metadata} from 'next';
import {Martian_Mono} from 'next/font/google';
import './globals.css';
import {Cursor} from '@/components/Cursor';

const martian = Martian_Mono({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Eric Dang',
  description: "Eric Dang's personal portfolio website",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth bg-[url('/background.svg')] bg-fixed text-white ">
      <body className={`${martian.className} h-screen w-screen overflow-y-auto overflow-x-hidden`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
