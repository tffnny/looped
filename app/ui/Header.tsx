'use client';

import { usePathname } from 'next/navigation';
import Button from '@/app/ui/Button';

export default function Header() {
  const pathname = usePathname();
  const currentView = pathname === '/plan' ? 'plan' : 'input';

  return (
    <header>
      <h1 className="text-2xl font-bold">Looped</h1>
      <p>Human-in-the-loop robot task planner</p>
      {currentView === 'plan' && <Button href="/">Edit Task</Button>}
    </header>
  );
}
