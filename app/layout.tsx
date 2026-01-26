import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import { ThemeToggle } from '@/app/ui/ThemeToggle';
import { Header } from '@/app/ui/Header';
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* TODO: Use nav */}
          <div className="flex w-full items-center justify-between">
            <Header />
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
