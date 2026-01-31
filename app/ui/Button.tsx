import Link from 'next/link';
import clsx from 'clsx';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'disabled';
  size?: 'xs' | 'sm' | 'md' | 'icon' | 'label';
  // TODO: submit type probably won't be used in this project, check back later
  // Remove type if submit isn't used
  type?: 'button' | 'submit';
  ariaLabel?: string;
  disabled?: boolean;
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
  disabled,
}: ButtonProps) {
  const baseStyles = 'rounded-lg';

  // bg-[#0B5CFF]
  // TODO: Remove variants no longer being used
  const variants = {
    primary:
      'bg-purple-700 text-white font-medium cursor-pointer hover:bg-purple-600',
    secondary:
      'bg-white text-purple-900 border-purple-300 border rounded-lg hover:bg-purple-900/[8%] dark:border-none dark:text-white cursor-pointer',
    tertiary: 'cursor-pointer',
    ghost: 'cursor-pointer',
    disabled: 'cursor-not-allowed bg-gray-300',
  };

  const sizes = {
    xs: 'p-1',
    sm: 'py-2 px-3.5',
    md: 'py-2.5 px-6',
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
      disabled={disabled}
    >
      {children}
    </button>
  );
}
