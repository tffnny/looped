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
      <body className="min-h-screen bg-neutral-50 px-10 py-8 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
