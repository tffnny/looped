'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/app/ui/Button';
import { CircleNodesIcon } from '@/app/ui/icons/CircleNodesIcon';
import { ThemeToggle } from '@/app/ui/ThemeToggle';
import { LeftArrow } from '@/app/ui/icons/LeftArrow';

export function Header() {
  const pathname = usePathname();
  const currentView = pathname === '/plan' ? 'plan' : 'input';

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-md-primary rounded-lg p-2">
          <CircleNodesIcon />
        </div>
        <div>
          <h1 className="font-logo text-2xl font-bold">Looped</h1>
          <p className="text-md-outline text-xs uppercase">
            Human-in-the-loop robot task planner
          </p>
        </div>
      </div>
      <div className="flex items-center">
        {currentView === 'plan' && (
          <Button href="/" variant="tertiary" className="hover:bg-purple-900/8">
            <div className="flex items-center gap-2">
              <LeftArrow />
              Edit Task
            </div>
          </Button>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
