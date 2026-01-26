import type { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
};

export function Button({ children, onClick, href, className }: ButtonProps) {
  const baseButtonStyles =
    'text-white border py-2.5 px-4 rounded-xl bg-gray-800 gap-2';

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseButtonStyles} ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseButtonStyles} ${className}`}>
      {children}
    </button>
  );
}
