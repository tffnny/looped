'use client';

import TaskDescription from '@/app/ui/TaskDescription';
import AssumptionsConstraints from '@/app/ui/AssumptionsConstraints';
import Button from '@/app/ui/Button';

export default function Home() {
  function handleGeneratePlan() {}

  return (
    <main className="h-full">
      <TaskDescription />
      <AssumptionsConstraints />
      <Button onClick={handleGeneratePlan} href="/plan">
        Generate Plan
      </Button>
    </main>
  );
}
