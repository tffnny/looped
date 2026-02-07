'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AssumptionsConstraints from '@/app/ui/AssumptionsConstraints';
import { TaskDescription } from '@/app/ui/TaskDescription';
import { Button } from '@/app/ui/Button';
import { SparklesIcon } from '@/app/ui/icons/SparklesIcon';

export default function Home() {
  const router = useRouter();

  const [taskDescription, setTaskDescription] = useState<string>('');
  const [assumptions, setAssumptions] = useState<string[]>([]);
  // TODO: Add type once backend response structure is known
  const [response, setResponse] = useState(null);

  const handleGeneratePlan = async (): Promise<void> => {
    if (!taskDescription.trim()) {
      return;
    }

    try {
      // TODO: Move to bottom when API is built
      router.push('/plan');

      const payload = {
        task: taskDescription,
        assumptions: assumptions,
      };

      // TODO: Replace with API endpoint
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      window.alert('API triggered'); // TODO: Remove

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.log('Error generating plan: ', error);
    } finally {
      // TODO: Add some sort of loading state
      // Ideas:
      // 1. isLoading state
      // 2. semi transparent spinner covering the page and contents
    }
  };

  return (
    <main className="flex h-full flex-1 flex-col justify-between gap-7">
      <TaskDescription
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
      />
      <AssumptionsConstraints
        assumptions={assumptions}
        setAssumptions={setAssumptions}
      />
      <div className="flex justify-between items-center">
        <p>Looped will propose a plan. You&apos;ll review and refine it.</p>
        <Button
          className="flex items-center gap-2 px-6 py-2.5"
          onClick={handleGeneratePlan}
          variant="primary"
          disabled={!taskDescription.trim()}
        >
          <SparklesIcon />
          Generate Plan
        </Button>
      </div>
    </main>
  );
}
