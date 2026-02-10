'use client';

import { useState } from 'react';
import { PlanSummary } from '@/app/plan/PlanSummary';
import { WorkflowSteps } from '@/app/plan/WorkflowSteps';
import { Button } from '@/app/ui/Button';
import { RefreshIcon } from '@/app/ui/icons/RefreshIcon';
import { AlertIcon } from '@/app/ui/icons/AlertIcon';
import { Diagnostics } from '@/app/plan/Diagnostics';
import { SegmentedButtons } from '@/app/ui/SegmentedButtons';
import { PlayIcon } from '@/app/ui/icons/PlayIcon';

const EXAMPLE_STEPS = [
  {
    Instruction: 'Move red block 1',
    Assumption: 'Assumes the table is within reach',
  },
  {
    Instruction: 'Move red block 2',
    Assumption: 'Assumes the table is within reach',
  },
  {
    Instruction: 'Move red block 3',
    Assumption: 'Assumes the table is within reach',
  },
  {
    Instruction: 'Locate red block',
    Ambiguity: 'Multiple red blocks may exist',
    Assumption: 'Assumes there is only one red block',
  },
  {
    Instruction: 'Grasp red block',
  },
  {
    Instruction: 'Move red block',
    Assumption: 'Assumes the table is within reach',
  },
];

const BUTTON_SEGMENTS = [
  { label: 'Critique', icon: <AlertIcon /> },
  { label: 'Regenerate', icon: <RefreshIcon /> },
];

export default function Page() {
  const [steps, setSteps] = useState([]);

  const ambiguousSteps = EXAMPLE_STEPS.filter((step) => step.Ambiguity).length;

  const handleSegmentBtnClick = (index: number) => {
    if (index === 0) {
      console.log('Critique button clicked');
    } else if (index === 1) {
      console.log('Regenerate button clicked');
    }
  };

  return (
    <main className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="col-span-2">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SegmentedButtons
              segments={BUTTON_SEGMENTS}
              onSegmentClick={handleSegmentBtnClick}
            />
          </div>
        </div>
        <WorkflowSteps steps={EXAMPLE_STEPS} />
      </div>
      <div className="col-span-1 space-y-3">
        <PlanSummary exampleStepsCount={EXAMPLE_STEPS.length + 1} />
        <Diagnostics />
        <Button
          className="flex w-full items-center justify-center gap-4 py-4 font-black uppercase"
          variant="primary"
          size="none"
        >
          <PlayIcon />
          Execute Robot Plan
        </Button>
      </div>
    </main>
  );
}
