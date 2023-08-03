import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZeroDev Web3 Auth',
  description: 'ZeroDev Web3 Auth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-800 text-slate-300`}
      >
        {children}
      </body>
    </html>
  )
};