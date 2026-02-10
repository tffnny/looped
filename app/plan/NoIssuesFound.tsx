import { CircleCheckIcon } from '@/app/ui/icons/CircleCheckIcon';
import { Card } from '@/app/ui/Card';

export function NoIssuesFound() {
  return (
    <Card className="flex flex-col items-center gap-3 px-16 py-12">
      <div className="bg-success-ctnr w-fit rounded-full p-3">
        <CircleCheckIcon />
      </div>
      <div className="font-semibold">No issues found</div>
      <div className="text-center text-sm">
        Looped has validated all steps for physical feasibility and safety
        constraints.
      </div>
    </Card>
  );
}
