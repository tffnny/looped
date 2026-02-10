import Link from 'next/link';
import clsx from 'clsx';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'icon';
  size?: 'xs' | 'icon' | 'label' | 'none'; // TODO: 'none' is temporary
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
  size = 'icon',
  type = 'button',
  ariaLabel,
  disabled,
}: ButtonProps) {
  const baseStyles = 'relative rounded-lg';

  // TODO: Remove variants no longer being used
  const variants = {
    primary:
      'bg-md-primary text-md-on-primary cursor-pointer ' +
      'before:absolute before:inset-0 before:bg-md-on-primary before:opacity-0 ' +
      'hover:before:opacity-[0.08]',
    secondary: 'cursor-pointer bg-md-secondary',
    tertiary: 'cursor-pointer',
    ghost: 'cursor-pointer',
    icon:
      'border border-md-outline-var ' +
      'before:absolute before:inset-0 before:bg-on-surface-var before:opacity-0 ' +
      'hover:before:opacity-[0.08]',
  };

  const disabledStyles = {
    primary:
      'font-medium cursor-not-allowed bg-on-surface/10 text-on-surface/38',
    secondary: 'cursor-not-allowed',
    tertiary: 'cursor-not-allowed',
    ghost: 'cursor-not-allowed',
    icon: 'cursor-not-allowed',
  };

  const sizes = {
    xs: 'p-1',
    icon: 'p-2',
    label: 'px-2 py-1',
    none: '',
  };

  const buttonStyles = clsx(
    baseStyles,
    disabled ? disabledStyles[variant] : variants[variant],
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
