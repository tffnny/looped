import { Card } from '@/app/ui/Card';
import { Chip } from '@/app/ui/Chip';
import { InputOutlined } from '@/app/ui/InputOutlined';
import { Button } from '@/app/ui/Button';
import { SaveIcon } from '@/app/ui/icons/SaveIcon';
import { Step } from '@/app/types';
import { useState } from 'react';
import { CloseIcon } from '@/app/ui/icons/CloseIcon';
import { AddIcon } from '@/app/ui/icons/AddIcon';

type CardEditViewProps = {
  step: Step;
  setIsEditing: (index: number | null) => void; // TODO: Dispatch<SetStateAction<number | null>>
  onSave: (updatedStep: Step) => void;
};

export function StepEditView({
  step,
  setIsEditing,
  onSave,
}: CardEditViewProps) {
  const [title, setTitle] = useState<string>(step.instruction);
  const [description, setDescription] = useState<string>(step.description);
  const [assumptions, setAssumptions] = useState<string[]>(
    step.assumptions ?? [],
  );

  const handleDeleteAssumption = (indexToDelete: number) => {
    setAssumptions((prev) =>
      prev.filter((_, index) => index !== indexToDelete),
    );
  };

  const handleAddParameter = () => {
    window.alert('Feature coming soon!');
  };

  return (
    <Card className="border-md-primary mb-4 flex w-full flex-col gap-6 drop-shadow-lg drop-shadow-neutral-200">
      <Chip variant="input" className="w-fit px-2.5 py-1 text-xs uppercase">
        Editing Mode
      </Chip>
      <InputOutlined label="Step Title" value={title} onChange={setTitle} />
      <InputOutlined
        label="Instructions"
        value={description}
        onChange={setDescription}
      />
      <div>
        <div className="text-md-outline mb-2 text-sm font-semibold uppercase">
          Configuration Parameters
        </div>
        <div className="flex items-center gap-2">
          {/* TODO: De-dup, also used in StepNormalView */}
          {/* TODO: Make each parameter into a dropdown select */}
          {Object.entries(step.parameters).map(([key, value]) => (
            <div
              key={key}
              className="text-md-on-secondary-ctnr bg-md-secondary-ctnr border-md-outline-var w-fit rounded-lg border px-2 py-1 text-xs font-medium"
            >
              <span>{key}=</span>
              <span>{String(value)}</span>
            </div>
          ))}
          <div
            className="border-md-outline-var cursor-pointer rounded-full border-[1.5] border-dashed p-0.5"
            onClick={() => handleAddParameter()}
          >
            <AddIcon fill="var(--outline-variant)" />
          </div>
        </div>
      </div>
      {assumptions.length !== 0 && (
        <div>
          <div className="text-md-outline mb-2 text-sm font-semibold uppercase">
            Assumptions and Constraints
          </div>
          <div className="flex items-center gap-2">
            {/* TODO: De-dup, also used in StepNormalView */}
            {assumptions.map((assumption, index) => (
              <Chip
                key={index}
                variant="input"
                className="py-1.5 pl-2 text-xs font-medium"
              >
                <span>{assumption}</span>
                <Button
                  className="px-2"
                  onClick={() => handleDeleteAssumption(index)}
                  variant="ghost"
                  size="none"
                >
                  <CloseIcon />
                </Button>
              </Chip>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-end gap-2 font-medium">
        <Button
          variant="secondary"
          className="px-4"
          onClick={() => setIsEditing(null)}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          className="gap-2 px-4"
          onClick={() => {
            onSave({ ...step, instruction: title, description, assumptions });
            setIsEditing(null);
          }}
        >
          <SaveIcon />
          Save Changes
        </Button>
      </div>
    </Card>
  );
}
