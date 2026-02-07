import type { ReactNode } from 'react';
import clsx from 'clsx';

type ChipProps = {
  children: ReactNode;
  className?: string;
  variant?: 'assist' | 'input';
  onClick?: () => void;
};

export function Chip({ children, className, variant = 'input', onClick }: ChipProps) {
  const baseStyles =
    'relative rounded-lg flex items-center justify-between font-medium';

  const variants = {
    assist:
      'cursor-pointer border border-md-outline text-on-surface-var bg-surface ' +
      'before:absolute before:inset-0 before:bg-on-surface-var before:opacity-0 ' +
      'hover:before:opacity-[0.08]',
    input:
      'bg-md-secondary-ctnr text-md-on-secondary-ctnr ' +
      'before:absolute before:rounded-lg before:inset-0 before:bg-md-on-secondary-ctnr before:opacity-0 ' +
      'hover:before:opacity-[0.08]',
  };

  const chipStyles = clsx(baseStyles, variants[variant], className);

  return (
    <div className={chipStyles} onClick={onClick}>
      {children}
    </div>
  );
}
