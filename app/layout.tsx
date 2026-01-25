import type { Metadata } from 'next';
import Header from '@/app/ui/Header';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Looped',
  description: 'Human-in-the-loop robot task planner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full bg-gray-50 antialiased">
        {' '}
        <Header />
        {children}
      </body>
    </html>
  );
}
