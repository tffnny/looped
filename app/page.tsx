'use client';

import { TaskDescription } from '@/app/ui/TaskDescription';
import { AssumptionsConstraints } from '@/app/ui/AssumptionsConstraints';
import { Button } from '@/app/ui/Button';
import { SparklesIcon } from '@/app/ui/icons/SparklesIcon';

export default function Home() {
  return (
    <main className="flex h-full flex-1 flex-col justify-between gap-7">
      <TaskDescription />
      <AssumptionsConstraints />
      <div className="flex justify-between">
        <p className="text-sm">
          Looped will propose a plan. You&apos;ll review and refine it.
        </p>
        <Button
          href="/plan"
          className="flex items-center gap-2"
          variant="primary"
        >
          <SparklesIcon />
          Generate Plan
        </Button>
      </div>
    </main>
  );
}
