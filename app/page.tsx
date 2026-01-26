'use client';

import TaskDescription from '@/app/ui/TaskDescription';
import AssumptionsConstraints from '@/app/ui/AssumptionsConstraints';
import Button from '@/app/ui/Button';
import SparklesIcon from '@/app/ui/icons/SparklesIcon';

export default function Home() {
  return (
    <main className="">
      <TaskDescription />
      <AssumptionsConstraints />
      Looped will propose a plan. You&apos;ll review and refine it.
      <Button href="/plan" className="flex items-center">
        <SparklesIcon />
        Generate Plan
      </Button>
    </main>
  );
}
