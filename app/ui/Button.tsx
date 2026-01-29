import Link from 'next/link';
import clsx from 'clsx';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'disabled';
  size?: 'sm' | 'md' | 'icon' | 'label';
  // TODO: submit type probably won't be used in this project, check back later
  // Remove type if submit isn't used
  type?: 'button' | 'submit';
  ariaLabel?: string;
};

export function Button({
  children,
  onClick,
  href,
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseStyles = 'rounded-lg cursor-pointer ';

  // TODO: Remove variants no longer being used
  const variants = {
    primary: 'bg-gray-800 text-white',
    secondary:
      'bg-white text-gray-800 border-gray-200 border-[1.5] rounded-lg hover:bg-gray-200 dark:bg-slate-700 dark:border-none dark:text-white',
    ghost: 'bg-input',
    disabled: 'bg-gray-300 text-white',
  };

  const sizes = {
    sm: 'py-1.5 px-3',
    md: 'py-2.5 px-4',
    icon: 'p-2',
    label: 'px-2 py-1',
  };

  const buttonStyles = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className,
  );

  const isIconBtn = size === 'icon';

  if (href) {
    return (
      <Link href={href} className={buttonStyles} onClick={onClick} type={type}>
        {children}
      </Link>
    );
  }

  return (
    // TODO: Add button names and hide with CSS
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#accessibility
    <button
      onClick={onClick}
      className={buttonStyles}
      type={type}
      aria-label={isIconBtn ? ariaLabel : 'undefined'}
    >
      {children}
    </button>
  );
}
