import { ReactNode } from 'react';

type BadgeIconProps = {
  children?: ReactNode;
};

export function BadgeIcon({ children }: BadgeIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="2.4em"
      height="2.4em"
      fill="var(--color-purple-100)"
    >
      <circle cx="12" cy="12" r="10" />
      <text
        x="12"
        y="12"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="10"
        fill="var(--color-purple-900)"
        fontWeight="500"
      >
        {children}
      </text>
    </svg>
  );
}
