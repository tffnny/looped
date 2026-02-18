'use client';

import { useState } from 'react';
import { StepNormalView } from '@/app/plan/StepNormalView';
import { Step } from '@/app/types';
import { StepEditView } from '@/app/plan/StepEditView';

type ReviewStepsProps = {
  initialSteps: Step[];
};

export function ReviewSteps({ initialSteps }: ReviewStepsProps) {
  const [focusedStep, setFocusedStep] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [steps, setSteps] = useState<Step[]>(initialSteps);

  const handleSave = (index: number, updatedStep: Step) => {
    setSteps((prev) => prev.map((s, i) => (i === index ? updatedStep : s)));
  };

  return (
    <div>
      {steps.map((step, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-[64px_1fr] justify-items-start"
            onClick={() => setFocusedStep(index)}
          >
            <div className="flex flex-col items-center">
              <div
                className={`border-md-primary ring-md-primary-ctnr z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 font-semibold ring-4 ${focusedStep === index ? 'bg-md-primary text-md-on-primary' : 'bg-surface-ctnr text-md-primary'}`}
              >
                {index + 1}
              </div>
              {index !== steps.length - 1 && (
                <div className="bg-md-outline-var w-0.5 flex-1" />
              )}
            </div>
            {isEditing === index ? (
              <StepEditView
                step={step}
                setIsEditing={setIsEditing}
                onSave={(updatedStep) => handleSave(index, updatedStep)}
              />
            ) : (
              <StepNormalView
                step={step}
                stepIndex={index}
                isFocused={focusedStep === index}
                setIsEditing={setIsEditing}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
