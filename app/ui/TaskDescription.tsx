import { Card } from '@/app/ui/Card';
import { TextArea } from '@/app/ui/TextArea';
import { Chip } from '@/app/ui/Chip';
import { NotebookIcon } from '@/app/ui/icons/NotebookIcon';
import { LightBulbIcon } from '@/app/ui/icons/LightBulbIcon';

const EXAMPLE_TASKS = [
  'Pick up the red block and place it on the table',
  'Bring me a cup of water',
  'Sort the items into bins by color',
] as const;

type TaskDescriptionProps = {
  taskDescription: string;
  setTaskDescription: (taskDescription: string) => void;
};

export function TaskDescription({
  taskDescription,
  setTaskDescription,
}: TaskDescriptionProps) {
  return (
    <Card>
      <fieldset>
        <div className="flex items-center gap-2">
          <NotebookIcon />
          <legend className="text-md-primary text-lg font-semibold">
            Task Description
          </legend>
        </div>
        <TextArea
          id="task-description"
          className="mt-3 mb-8"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Tell the robot what to do... (e.g., Pick up the red block and place it on the table)"
          aria-describedby="task-description-help"
          rows={5}
          size="lg"
        />
        <div className="-mx-7 -mb-6 rounded-b-lg bg-[#FDF8F8] p-6">
          <div className="mb-2 flex items-center gap-1">
            <LightBulbIcon />
            <p
              id="task-description-help"
              className="text-md-outline text-xs font-bold uppercase"
            >
              Try these examples:
            </p>
          </div>
          <ul className="scroll scrollbar-hide flex max-w-full flex-nowrap gap-3 overflow-x-auto">
            {EXAMPLE_TASKS.map((example) => (
              <li key={example} className="shrink-0">
                <Chip
                  className="px-4 py-2 text-sm font-medium"
                  onClick={() => setTaskDescription(example)}
                  variant="assist"
                >
                  &quot;{example}&quot;
                </Chip>
              </li>
            ))}
          </ul>
        </div>
      </fieldset>
    </Card>
  );
}
