'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/app/ui/Button';
import { CircleNodesIcon } from '@/app/ui/icons/CircleNodesIcon';

export function Header() {
  const pathname = usePathname();
  const currentView = pathname === '/plan' ? 'plan' : 'input';

  return (
    <header>
      <div className="flex items-center gap-1">
        <CircleNodesIcon />
        <h1 className="text-3xl font-bold">Looped</h1>
      </div>
      <p>Human-in-the-loop robot task planner</p>
      {currentView === 'plan' && <Button href="/">Edit Task</Button>}
    </header>
  );
}
