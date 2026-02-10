'use client';

import { KeyboardEvent, ChangeEvent, useState } from 'react';
import { Button } from '@/app/ui/Button';
import { Card } from '@/app/ui/Card';
import { PlusIcon } from '@/app/ui/icons/PlusIcon';
import { TextArea } from '@/app/ui/TextArea';
import { CloseIcon } from '@/app/ui/icons/CloseIcon';
import { Chip } from '@/app/ui/Chip';
import { SliderIcon } from '@/app/ui/icons/SliderIcon';

type AssumptionsConstraintsProps = {
  assumptions: string[];
  setAssumptions: (assumptions: string[]) => void;
};

function AssumptionsConstraints({
  assumptions,
  setAssumptions,
}: AssumptionsConstraintsProps) {
  const [newAssumption, setNewAssumption] = useState<string>('');

  const handleAddAssumption = (): void => {
    if (newAssumption.trim()) {
      setAssumptions([...assumptions, newAssumption.trim()]);
      setNewAssumption('');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNewAssumption(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddAssumption();
    }
  };

  const handleDeleteAssumption = (index: number): void => {
    setAssumptions(assumptions.filter((_, i) => i !== index));
  };

  return (
    <Card>
      <fieldset>
        <div className="flex items-center gap-2">
          <SliderIcon />
          <legend className="text-md-primary text-lg font-semibold">
            Assumptions & Constraints
          </legend>
          <span className="bg-md-tertiary-ctnr text-md-on-tertiary-ctnr rounded-lg px-2 py-1 text-xs font-medium">
            Optional
          </span>
        </div>
        <div className="my-3 flex items-stretch gap-2.5">
          <TextArea
            id="assumptions-input"
            placeholder="Add assumptions and constraints (e.g., The table is within reach)"
            rows={1}
            size="lg"
            value={newAssumption}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button
            className="px-4"
            onClick={handleAddAssumption}
            variant="secondary"
            ariaLabel="Add assumption or constraint"
          >
            <PlusIcon />
          </Button>
        </div>
        {assumptions.length > 0 ? (
          <div className="flex max-h-28 flex-wrap gap-2 overflow-y-auto">
            {assumptions.map((assumption: string, index: number) => (
              <Chip key={index} variant="input" className="py-2 pl-3">
                <span>{assumption}</span>
                <Button
                  className="px-2"
                  onClick={() => handleDeleteAssumption(index)}
                  variant="ghost"
                  size="none"
                  ariaLabel="Remove assumption or constraint"
                >
                  <CloseIcon />
                </Button>
              </Chip>
            ))}
          </div>
        ) : (
          <Card variant="placeholder" aria-live="polite">
            <div className="text-md-outline font-medium">
              No assumptions added yet
            </div>
            <div className="text-md-outline">
              Add assumptions to provide additional context
            </div>
          </Card>
        )}
      </fieldset>
    </Card>
  );
}

// TODO: Default export to avoid TS71007:
//  Props must be serializable for components in the "use client" entry file.
//  "setAssumptions" is a function that's not a Server Action.
//  Rename "setAssumptions" either to "action" or
//  have its name end with "Action" e.g. "setAssumptionsAction" to indicate
//  it is a Server Action.
export default AssumptionsConstraints;
