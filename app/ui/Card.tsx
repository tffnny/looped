import type { ReactNode } from 'react';
import clsx from 'clsx';

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'caution' | 'placeholder';
};

export function Card({ children, className, variant = 'primary', ...props }: CardProps) {
  const baseStyles = 'h-auto rounded-lg px-7 py-6';

  const variants = {
    primary: 'border border-md-outline-var bg-surface-ctnr',
    caution: 'border-2 border-yellow-300 bg-yellow-50',
    placeholder: 'text-center text-sm border-2 border-dashed border-md-outline-var',
  };

  const cardStyles = clsx(baseStyles, variants[variant], className);

  return <div className={cardStyles} {...props}>{children}</div>;
}
