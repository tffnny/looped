import clsx from 'clsx';

type InputProps = {
  id?: string;
  placeholder?: string;
  className?: string;
  size?: 'lg';
  rows?: number;
};

export function TextArea({
  id,
  placeholder,
  className,
  size = 'lg',
  rows,
}: InputProps) {
  const baseStyles =
    'rounded-lg bg-input px-3 py-2 border border-transparent focus:ring resize-none';

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
    />
  );
}
