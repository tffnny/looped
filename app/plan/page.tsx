'use client';

import { useState } from 'react';
import { Card } from '@/app/ui/Card';
import { Button } from '@/app/ui/Button';
import { RefreshIcon } from '@/app/ui/icons/RefreshIcon';
import { AlertIcon } from '@/app/ui/icons/AlertIcon';
import { BadgeIcon } from '@/app/ui/icons/BadgeIcon';
import { EditIcon } from '@/app/ui/icons/EditIcon';
import { DeleteIcon } from '@/app/ui/icons/DeleteIcon';
import { CircleCheckIcon } from '@/app/ui/icons/CircleCheckIcon';
import { parseInstruction } from '@/app/plan/helpers';
import { ArrowRight } from '@/app/ui/icons/ArrowRight';

const EXAMPLE_STEPS = [
  {
    Instruction: 'Locate red block',
    Ambiguity: 'Multiple red blocks may exist',
  },
  {
    Instruction: 'Grasp red block',
  },
  {
    Instruction: 'Move red block',
    Assumption: 'Assumes the table is within reach',
  },
];

export default function Page() {
  const [steps, setSteps] = useState([]);

  const ambiguousSteps = EXAMPLE_STEPS.filter((step) => step.Ambiguity).length;

  return (
    <main className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="col-span-2">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-xl font-semibold">Plan Steps</div>
            <label className="border-success text-success flex items-center gap-1.5 rounded-lg border px-2 py-1 text-xs font-medium">
              <CircleCheckIcon />
              No issues found
            </label>
          </div>
          <div className="flex items-center gap-3">
            <Button
              className="flex items-center gap-2"
              variant="secondary"
              size="sm"
            >
              <AlertIcon />
              Critique Plan
            </Button>
            <Button
              className="flex items-center gap-2"
              variant="secondary"
              size="sm" // TODO: Make icon button styles automatically center
            >
              <RefreshIcon />
              Regenerate Plan
            </Button>
          </div>
        </div>
        <div className="space-y-3">
          {EXAMPLE_STEPS.map((step, index: number) => {
            const { action, object } = parseInstruction(step.Instruction);
            return (
              <Card
                className="flex items-start justify-between"
                key={index}
                variant={step.Ambiguity ? 'caution' : 'primary'}
              >
                <BadgeIcon>{index + 1}</BadgeIcon>
                {/* TODO: Decide if I want to add an AlertIcon here */}
                <div className="flex flex-1 flex-col pt-1 pl-6">
                  <div className="mb-2 flex items-center space-x-2">
                    <div className="rounded-lg bg-purple-50 px-3 py-0.5 text-sm">
                      {action}
                    </div>
                    <ArrowRight />
                    <div className="font-medium">{object}</div>
                  </div>
                  {step.Ambiguity && (
                    <>
                      <div className="text-sm">
                        <span className="font-medium">Ambiguity:</span>{' '}
                        {step.Ambiguity}
                      </div>
                    </>
                  )}
                  {step.Assumption && (
                    <>
                      <div className="text-sm">
                        <span className="font-medium">Assumption:</span>{' '}
                        {step.Assumption}
                      </div>
                    </>
                  )}
                </div>
                <div className="flex gap-4">
                  <Button
                    className="hover:bg-purple-50"
                    variant="ghost"
                    size="icon"
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    className="hover:bg-purple-50"
                    variant="ghost"
                    size="icon"
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="col-span-1 space-y-3">
        <Card>
          <div className="font-semibold">Plan Summary</div>
          <div className="flex items-center justify-between">
            <div>Total steps</div>
            <Button variant="ghost" size="xs">
              {EXAMPLE_STEPS.length + 1}
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>Issues found</div>
            <Button
              className={
                ambiguousSteps
                  ? 'font-medium text-yellow-400'
                  : 'text-background'
              }
              variant="ghost"
              size="xs"
            >
              {ambiguousSteps}
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>Assumptions</div>
            <Button variant="ghost" size="xs">
              {EXAMPLE_STEPS.filter((step) => step.Assumption).length}
            </Button>
          </div>
        </Card>
        <Card className="col-span-1 col-start-3 font-semibold">
          <div>All Issues</div>
        </Card>
        <Button className="w-full" variant="primary">
          Accept Plan
        </Button>
      </div>
    </main>
  );
}
