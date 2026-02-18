type ParameterValue = string | number | boolean | null;

export type Step = {
  instruction: string;
  category: 'VISION' | 'PLAN' | 'MOTION' | 'ACTUATE';
  parameters: Record<string, ParameterValue>;
  description: string;
  assumptions?: string[];
};
