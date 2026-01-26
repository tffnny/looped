import Card from '@/app/ui/Card';
import Button from '@/app/ui/Button';

export default function TaskDescription() {
  return (
    <Card title="Task Description">
      <div>Describe the task you want the robot to perform</div>
      <input
        className="w-full rounded bg-gray-200 px-3 py-1"
        placeholder="Example: Pick up the red block and place it on the table"
      />
      <div>Try these examples:</div>
      <div>
        {[
          'Pick up the red block and place it on the table.',
          'Bring me a cup of water.',
          'Sort the items into bins by color.',
        ].map((example) => (
          <Button key={example} className="text-sm">
            {example}
          </Button>
        ))}
      </div>
    </Card>
  );
}
