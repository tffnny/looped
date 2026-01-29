import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="bg-card h-auto rounded-lg border border-gray-200 px-7 py-6">
      {children}
    </div>
  );
}
