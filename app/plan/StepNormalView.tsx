import { Card } from '@/app/ui/Card';
import { Chip } from '@/app/ui/Chip';
import { EditIcon } from '@/app/ui/icons/EditIcon';
import { Step } from '@/app/types';

type CardNormalViewProps = {
  step: Step;
  stepIndex: number;
  isFocused: boolean;
  setIsEditing: (value: number) => void;
};

const CATEGORY_COLORS = {
  VISION: 'bg-md-tertiary-ctnr text-md-tertiary',
  PLAN: 'bg-step-plan text-step-on-plan',
  MOTION: 'bg-step-motion text-step-on-motion',
  ACTUATE: 'bg-step-actuate text-step-on-actuate',
};

export function StepNormalView({
  step,
  stepIndex,
  isFocused,
  setIsEditing,
}: CardNormalViewProps) {
  return (
    <Card
      className={`mb-4 flex w-full flex-col gap-5 drop-shadow-lg drop-shadow-neutral-200 ${isFocused ? 'border-md-primary' : ''}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* TODO: Remove hover UX on Chip components in the Review Steps tab view*/}
          <Chip
            variant="input"
            className={`w-fit px-2.5 py-1 text-xs font-semibold uppercase ${CATEGORY_COLORS[step.category]}`}
          >
            {step.category}
          </Chip>
          <span className="font-semibold capitalize">{step.instruction}</span>
        </div>
        <div
          className={`flex gap-2 rounded-full p-2 hover:cursor-pointer ${isFocused ? 'bg-md-primary' : ''}`}
          onClick={() => setIsEditing(stepIndex)}
        >
          <EditIcon isFocused={isFocused} />
          {/*TODO: Add delete functionality later*/}
          {/*<DeleteIcon />*/}
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-md-outline text-xs font-semibold uppercase">
          Parameters
        </div>
        <div className="flex items-center gap-2">
          {Object.entries(step.parameters).map(([key, value]) => (
            <div
              key={key}
              className="text-md-on-secondary-ctnr bg-md-secondary-ctnr border-md-outline-var w-fit rounded-lg border px-2 py-1 text-xs font-medium"
            >
              <span>{key}=</span>
              <span>{String(value)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-sm">{step.description}</div>
    </Card>
  );
}
