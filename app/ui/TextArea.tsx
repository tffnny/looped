import { KeyboardEvent, ChangeEventHandler } from 'react';
import clsx from 'clsx';

type InputProps = {
  id?: string;
  placeholder?: string;
  className?: string;
  size?: 'lg';
  rows?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
};

export function TextArea({
  id,
  placeholder,
  className,
  size = 'lg',
  rows,
  value,
  onChange,
  onKeyDown,
}: InputProps) {
  const baseStyles =
    'rounded-lg px-4 py-3 border border-md-outline resize-none placeholder:text-on-surface-var' +
    'focus:ring focus:ring-2 focus:ring-md-primary focus:outline-none ' +
    'hover:border-on-surface';

  const sizes = {
    lg: 'w-full',
  };

  const buttonStyles = clsx(baseStyles, sizes[size], className);

  // TODO: border-input to change border color once theme is figured out
  return (
    <textarea
      id={id}
      className={buttonStyles}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
