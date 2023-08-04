import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZeroDev Web3 Auth',
  description: 'ZeroDev Web3 Auth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-slate-200">
        {children}
      </body>
    </html>
  )
};