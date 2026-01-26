'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/app/ui/Button';
import { LightModeIcon } from '@/app/ui/icons/LightModeIcon';
import { DarkModeIcon } from '@/app/ui/icons/DarkModeIcon';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
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
    <Button onClick={toggleTheme} aria-label="Toggle theme">
      {resolvedTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </Button>
  );
}
