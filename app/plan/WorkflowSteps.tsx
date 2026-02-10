import { Card } from '@/app/ui/Card';
import { EditIcon } from '@/app/ui/icons/EditIcon';
import { Steps } from '@/app/types';
import { parseInstruction } from '@/app/plan/helpers';
import { Chip } from '@/app/ui/Chip';

type WorkflowStepsProps = {
  steps: Steps[];
};

export function WorkflowSteps({ steps }: WorkflowStepsProps) {
  return (
    <div>
      {steps.map((step, index) => {
        const { action, object } = parseInstruction(step.Instruction);

        return (
          <div
            key={index}
            className="grid grid-cols-[64px_1fr] justify-items-start"
          >
            <div className="flex flex-col items-center">
              <div className="bg-md-primary-ctnr text-md-primary flex h-10 w-10 items-center justify-center rounded-full font-semibold">
                {index + 1}
              </div>
              {index !== steps.length - 1 && (
                <div className="bg-md-outline-var w-0.5 flex-1" />
              )}
            </div>
            <Card className="mb-4 flex w-full flex-col gap-5 drop-shadow-lg drop-shadow-neutral-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Chip
                    variant="input"
                    className="w-fit px-2.5 py-1 text-xs uppercase"
                  >
                    {action}
                  </Chip>
                  <span className="font-semibold capitalize">{object}</span>
                </div>
                <div className="flex gap-2">
                  <EditIcon />
                  {/*TODO: Add delete functionality later*/}
                  {/*<DeleteIcon />*/}
                </div>
              </div>
              <div className="space-y-4">
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
            </Card>
          </div>
        );
      })}
    </div>
  );
}
