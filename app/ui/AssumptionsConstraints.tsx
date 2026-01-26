import { Button } from '@/app/ui/Button';
import { Card } from '@/app/ui/Card';

export function AssumptionsConstraints() {
  return (
    <Card title="Assumptions & Constraints">
      <div>Add contextual information to guide plan execution</div>
      <div className="flex items-center gap-2">
        <input
          className="flex-1 rounded bg-gray-200 px-3 py-1"
          placeholder="e.g., Table is within reach"
        />
        {/* TODO: Add SVG icon */}
        <Button>+</Button>
      </div>
      <div className="rounded-xl border-2 border-dashed border-gray-200 px-3 py-1 text-sm">
        <div>No assumptions added yet</div>
        <div>Add assumptions to provide additional context</div>
      </div>
    </Card>
  );
}
