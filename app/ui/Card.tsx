import type { ReactNode } from 'react';
import clsx from 'clsx';

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'caution';
};

export function Card({ children, className, variant = 'primary' }: CardProps) {
  const baseStyles = 'h-auto rounded-lg px-7 py-6';

  const variants = {
    primary: 'border border-purple-300 bg-white',
    caution: 'border border-yellow-300 border-2 bg-yellow-50',
  };

  const cardStyles = clsx(baseStyles, variants[variant], className);

  return <div className={cardStyles}>{children}</div>;
}
