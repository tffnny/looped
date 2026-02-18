import { Card } from '@/app/ui/Card';

type PlanSummaryProps = {
  exampleStepsCount: number;
};

export function PlanSummary({ exampleStepsCount }: PlanSummaryProps) {
  return (
    <Card variant="secondary" className="space-y-3">
      <div className="text-md-outline text-sm font-semibold uppercase">
        Plan Summary
      </div>
      <div className="flex items-center justify-between">
        <span>Total Operations</span>
        <span className="font-medium">{exampleStepsCount} Steps</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Estimated Cycle</span>
        <span className="font-medium">28.4s</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Confidence Score</span>
        <span className="text-success font-medium">98.2%</span>
      </div>
    </Card>
  );
}
