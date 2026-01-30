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
    'rounded-lg bg-purple-200 px-3 py-2 border-0 focus:ring-2 focus:ring-purple-700 focus:outline-none resize-none';

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
