'use client';

import { useState } from 'react';
import AssumptionsConstraints from '@/app/ui/AssumptionsConstraints';
import { TaskDescription } from '@/app/ui/TaskDescription';
import { GeneratePlan } from '@/app/ui/GeneratePlan';

export default function Home() {
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [assumptions, setAssumptions] = useState<string[]>([]);

  return (
    <main className="grid h-full grid-cols-3 grid-rows-1 gap-x-7">
      <div className="col-span-2 flex flex-col gap-6">
        <TaskDescription
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
        />
        <AssumptionsConstraints
          assumptions={assumptions}
          setAssumptions={setAssumptions}
        />
      </div>
      <GeneratePlan
        taskDescription={taskDescription}
        assumptions={assumptions}
      />
    </main>
  );
}
