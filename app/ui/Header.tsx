'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/app/ui/Button';
import { CircleNodesIcon } from '@/app/ui/icons/CircleNodesIcon';

export function Header() {
  const pathname = usePathname();
  const currentView = pathname === '/plan' ? 'plan' : 'input';

  return (
    <header>
      <div className="flex items-center gap-2">
        <CircleNodesIcon />
        <div>
          <h1 className="font-logo text-3xl font-bold">Looped</h1>
          <p className="text-sm">Human-in-the-loop robot task planner</p>
        </div>
      </div>

      {currentView === 'plan' && (
        <Button href="/" variant="secondary">
          Edit Task
        </Button>
      )}
    </header>
  );
}
