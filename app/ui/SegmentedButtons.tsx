import { ReactNode } from 'react';

type SegmentedButtonsProps = {
  segments: Array<{ label: string; icon: ReactNode }>;
  onSegmentClick: (index: number) => void;
};

export function SegmentedButtons({
  segments,
  onSegmentClick,
}: SegmentedButtonsProps) {
  return (
    <div className="bg-md-secondary-ctnr flex cursor-pointer gap-0.5 overflow-hidden rounded-full font-medium">
      {segments.map(({ label, icon }, index) => (
        <button
          key={index}
          className="group relative cursor-pointer rounded-full px-4 py-2"
          onClick={() => onSegmentClick(index)}
        >
          <span className="group-hover:bg-md-on-secondary-ctnr/10 absolute inset-0 rounded-full" />
          <span className="text-md-on-secondary-ctnr flex items-center gap-1.5">
            {icon}
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}
