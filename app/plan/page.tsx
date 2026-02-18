'use client';

import { useState } from 'react';
import { PlanSummary } from '@/app/plan/PlanSummary';
import { ReviewSteps } from '@/app/plan/ReviewSteps';
import { Button } from '@/app/ui/Button';
import { RefreshIcon } from '@/app/ui/icons/RefreshIcon';
import { TimelineIcon } from '@/app/ui/icons/TimelineIcon';
import { Diagnostics } from '@/app/plan/Diagnostics';
import { SegmentedToggleButton } from '@/app/ui/SegmentedToggleButton';
import { PlayIcon } from '@/app/ui/icons/PlayIcon';
import { Timeline } from '@/app/plan/Timeline';
import type { Step } from '@/app/types';

const EXAMPLE_STEPS: Step[] = [
  {
    instruction: 'Object Detection',
    category: 'VISION',
    parameters: {
      object_color: 'red',
      object_type: 'block',
    },
    description: 'Detect red block in RGB-D frame and estimate 6D pose.',
    assumptions: ['Block is visible (occlusion < 40%).'],
  },
  {
    instruction: 'Surface Detection',
    category: 'VISION',
    parameters: {
      surface_type: 'table',
    },
    description: 'Identify table plane and compute placement region.',
    assumptions: ['Placement area must be collision-free.'],
  },
  {
    instruction: 'Compute Grasp Pose',
    category: 'PLAN',
    parameters: {
      grasp_strategy: 'top_down',
      clearance_cm: 5,
      alignment: 'gravity_aligned',
    },
    description:
      'Generate a feasible grasp pose relative to the detected object pose.',
    assumptions: ['Gripper width compatible with block size.'],
  },
  {
    instruction: 'Plan Collision-Free Path to Grasp',
    category: 'MOTION',
    parameters: {
      collision_check: true,
    },
    description: 'Plan collision-free trajectory to pre-grasp pose.',
    assumptions: ['Must satisfy joint limits.', 'Avoid singularities.'],
  },
  {
    instruction: 'Open Gripper',
    category: 'ACTUATE',
    parameters: {
      release_height: '2cm',
      retreat_after_release: true,
    },
    description: 'Open the gripper to release the object.',
  },
];

const BUTTON_SEGMENTS = [
  { label: 'Review Steps', icon: <RefreshIcon /> },
  { label: 'Timeline', icon: <TimelineIcon /> },
];

export default function Page() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleSegmentBtnClick = (index: number) => {
    setActiveTabIndex(index);
    if (index === 0) {
      console.log('Review Steps button clicked');
    } else if (index === 1) {
      console.log('Timeline button clicked');
    }
  };

  return (
    <main className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="col-span-2">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SegmentedToggleButton
              segments={BUTTON_SEGMENTS}
              activeTabIndex={activeTabIndex}
              onSegmentClick={handleSegmentBtnClick}
            />
          </div>
        </div>
        {activeTabIndex === 0 ? (
          <ReviewSteps initialSteps={EXAMPLE_STEPS} />
        ) : (
          <Timeline />
        )}
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
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="secondary"
            className="flex w-full justify-center py-3 text-sm font-semibold uppercase"
            onClick={() => window.alert('WORKING ON IT!')}
          >
            Critique
          </Button>
          <Button
            variant="secondary"
            className="flex w-full justify-center py-3 text-sm font-semibold uppercase"
            onClick={() => window.alert('WORKING ON IT!')}
          >
            Regenerate
          </Button>
        </div>
      </div>
    </main>
  );
}
