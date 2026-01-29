import { Button } from '@/app/ui/Button';
import { Card } from '@/app/ui/Card';
import { TextArea } from '@/app/ui/TextArea';

const EXAMPLE_TASKS = [
  'Pick up the red block and place it on the table',
  'Bring me a cup of water',
  'Sort the items into bins by color',
  'Grab a Kleenex box and put it on the dinner table',
  'Organize the dishes by type',
  'Arrange the books by height',
] as const;

export function TaskDescription() {
  return (
    <Card>
      <fieldset>
        <legend className="text-lg font-semibold">Task Description</legend>
        <label htmlFor="task-description" className="text-card-muted">
          Describe what you want the robot to do in natural language
        </label>
        <TextArea
          id="task-description"
          className="my-3"
          placeholder="Example: Pick up the red block and place it on the table"
          aria-describedby="task-description-help"
          rows={4}
          size="lg"
        />
        <p id="task-description-help" className="mb-2 text-sm font-medium">
          Try these examples:
        </p>
        <ul className="scroll scrollbar-hide flex max-w-full flex-nowrap gap-3 overflow-x-auto">
          {EXAMPLE_TASKS.map((example) => (
            <li key={example} className="shrink-0">
              <Button
                className="text-sm font-medium"
                variant="secondary"
                size="sm"
              >
                {example}
              </Button>
            </li>
          ))}
        </ul>
      </fieldset>
    </Card>
  );
}
