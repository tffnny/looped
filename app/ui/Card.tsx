import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="h-auto rounded-lg border border-purple-300 bg-white px-7 py-6">
      {children}
    </div>
  );
}
