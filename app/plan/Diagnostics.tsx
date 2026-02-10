import { Card } from '@/app/ui/Card';
import { NoIssuesFound } from '@/app/plan/NoIssuesFound';

export function Diagnostics() {
  return (
    <Card variant="secondary" className="space-y-3">
      <div className="text-md-outline text-sm font-semibold uppercase">
        Diagnostics{' '}
      </div>
      <NoIssuesFound />
    </Card>
  );
}
