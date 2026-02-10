'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/ui/Button';
import { SparklesIcon } from '@/app/ui/icons/SparklesIcon';
import { Card } from '@/app/ui/Card';

type GeneratePlanProps = {
  taskDescription: string;
  assumptions: string[];
};

const ROBOT_MODELS = ['UR5-e', 'Kuka IIWA 7', 'Panda'];
const WORKSPACES = ['Kitchen', 'Living Room', 'Dining Room'];

export function GeneratePlan({
  taskDescription,
  assumptions,
}: GeneratePlanProps) {
  const router = useRouter();

  // TODO: Add type
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
    <Card variant="secondary">
      <h2 className="text-2xl font-semibold">Plan Task</h2>
      <p>
        Looped is an LLM-powered engine that will decompose your natural
        language request into a robust, executable sequence of robot primitives.
      </p>
      <Card variant="primary">
        <div className="flex items-center justify-between">
          <label>Robot Model</label>
          <select>
            {ROBOT_MODELS.map((model) => (
              <option key={model}>{model}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label>Workspace</label>
          <select>
            {WORKSPACES.map((workspace) => (
              <option key={workspace}>{workspace}</option>
            ))}
          </select>
        </div>
      </Card>
      <Button
        className="flex items-center gap-2 px-6 py-2.5 font-medium"
        onClick={handleGeneratePlan}
        variant="primary"
        disabled={!taskDescription.trim()}
      >
        <SparklesIcon />
        Generate Plan
      </Button>
    </Card>
  );
}
