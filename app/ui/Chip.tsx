import type { ReactNode } from 'react';
import clsx from 'clsx';

type ChipProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

export function Chip({ children, className, variant = 'primary' }: ChipProps) {
  const baseStyles =
    'rounded-lg border p-3 flex items-center justify-between font-medium';

  const variants = {
    primary: 'border-gray-200',
    secondary: 'border-purple-300',
  };

  const chipStyles = clsx(baseStyles, variants[variant], className);

  return <div className={chipStyles}>{children}</div>;
}
