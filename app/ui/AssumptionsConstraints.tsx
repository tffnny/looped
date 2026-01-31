'use client';

import { KeyboardEvent, ChangeEvent, useState } from 'react';
import { Button } from '@/app/ui/Button';
import { Card } from '@/app/ui/Card';
import { PlusIcon } from '@/app/ui/icons/PlusIcon';
import { TextArea } from '@/app/ui/TextArea';
import { CloseIcon } from '@/app/ui/icons/CloseIcon';
import { Chip } from '@/app/ui/Chip';

type AssumptionsConstraintsProps = {
  assumptions: string[];
  setAssumptions: (assumptions: string[]) => void;
};

export function AssumptionsConstraints({
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
          <legend className="text-lg font-semibold">
            Assumptions & Constraints
          </legend>
          <label className="rounded-lg bg-purple-50 px-2 py-1 text-xs font-medium">
            Optional
          </label>
        </div>
        <label
          htmlFor="assumptions-description"
          className="text-card-muted block"
        >
          Add contextual information to guide plan execution
        </label>
        <div className="my-3 flex items-stretch gap-2">
          <TextArea
            id="assumptions-description"
            placeholder="e.g., Table is within reach"
            rows={1}
            size="lg"
            value={newAssumption}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button
            className="px-2"
            onClick={handleAddAssumption}
            variant="secondary"
            ariaLabel="Add assumption or constraint"
          >
            <PlusIcon />
          </Button>
        </div>
        {assumptions.length > 0 ? (
          <div className="space-y-2">
            {assumptions.map((assumption: string, index: number) => (
              <Chip key={index} variant="secondary" className="text-purple-900">
                <span>{assumption}</span>
                <Button
                  onClick={() => handleDeleteAssumption(index)}
                  variant="ghost"
                  size="icon"
                >
                  <CloseIcon />
                </Button>
              </Chip>
            ))}
          </div>
        ) : (
          <div
            className="text-card-muted rounded-lg border-2 border-dashed border-purple-200 px-5 py-8 text-center text-sm"
            aria-live="polite"
          >
            <div>No assumptions added yet</div>
            <div>Add assumptions to provide additional context</div>
          </div>
        )}
      </fieldset>
    </Card>
  );
}
