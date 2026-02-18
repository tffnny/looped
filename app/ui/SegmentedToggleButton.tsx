import { ReactNode, useState } from 'react';

type SegmentedButtonsProps = {
  segments: Array<{ label: string; icon: ReactNode }>;
  activeTabIndex: number;
  onSegmentClick: (index: number) => void;
};

export function SegmentedToggleButton({
  segments,
  activeTabIndex,
  onSegmentClick,
}: SegmentedButtonsProps) {
  return (
    <div className="bg-md-outline-var flex items-center gap-1 rounded-full p-1.5">
      {segments.map(({ label, icon }, index) => (
        <button
          key={index}
          className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm ${activeTabIndex === index ? 'bg-white' : 'hover:bg-white/30'}`}
          onClick={() => onSegmentClick(index)}
        >
          {icon}
          <span className="font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
}
