'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/app/ui/Button';
import { LightModeIcon } from '@/app/ui/icons/LightModeIcon';
import { DarkModeIcon } from '@/app/ui/icons/DarkModeIcon';

export function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client,
  // so now we can prevent hydration mismatch by not rendering until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button aria-label="Toggle theme">
        <div className="h-5 w-5" />
      </Button>
    );
  }

  function toggleTheme() {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  }

  return (
    <Button
      className="group"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      variant="icon"
      size="icon"
    >
      {resolvedTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </Button>
  );
}
