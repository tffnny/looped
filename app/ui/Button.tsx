import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
};

export default function Button({ children, onClick, href }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return <button onClick={onClick}>{children}</button>;
}
