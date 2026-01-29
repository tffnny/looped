import { Button } from '@/app/ui/Button';
import { Card } from '@/app/ui/Card';
import { PlusIcon } from '@/app/ui/icons/PlusIcon';
import { TextArea } from '@/app/ui/TextArea';

export function AssumptionsConstraints() {
  return (
    <Card>
      <fieldset>
        <div className="flex items-center gap-2">
          <legend className="text-lg font-semibold">
            Assumptions & Constraints
          </legend>
          <Button
            className="rounded-lg text-xs font-medium"
            variant="ghost"
            size="label"
          >
            Optional
          </Button>
        </div>
        <label
          htmlFor="assumptions-description"
          className="text-card-muted block"
        >
          Add contextual information to guide plan execution
        </label>
        <div className="my-3 flex items-center gap-2">
          <TextArea
            id="assumptions-description"
            placeholder="e.g., Table is within reach"
            rows={1}
            size="lg"
          />
          <Button variant="secondary" ariaLabel="Add assumption or constraint">
            <PlusIcon />
          </Button>
        </div>
        <div
          className="text-card-muted rounded-lg border-2 border-dashed border-gray-200 px-5 py-8 text-center text-sm"
          aria-live="polite"
        >
          <div>No assumptions added yet</div>
          <div>Add assumptions to provide additional context</div>
        </div>
      </fieldset>
    </Card>
  );
}
