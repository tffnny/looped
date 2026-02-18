type InputOutlinedProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function InputOutlined({ label, value, onChange }: InputOutlinedProps) {
  return (
    <div className="relative">
      <label className="text-md-primary absolute -top-2 left-4 bg-white px-1 text-sm font-medium">
        {label}
      </label>
      {/* TODO: Improve resizing for Instructions for when it becomes long */}
      <input
        className="w-full rounded-lg border px-4 pt-4 pb-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {/* TODO: Add error handling */}
    </div>
  );
}
