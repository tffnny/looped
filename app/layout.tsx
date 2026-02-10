import { ThemeProvider } from 'next-themes';
import { Exo, Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeToggle } from '@/app/ui/ThemeToggle';
import { Header } from '@/app/ui/Header';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Looped',
  description: 'Human-in-the-loop robot task planner',
};

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-exo',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roboto.variable} ${exo.variable}`}
    >
      <body className="flex min-h-screen flex-col gap-5 overflow-y-auto antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* TODO: Use nav */}
          <Header />
          <div className="flex-1 pb-12">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
