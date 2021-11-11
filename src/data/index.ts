export type Option = {
  value: number;
  text: string;
};
export const statuses: Option[] = [
  { value: 0, text: 'all' },
  { value: 1, text: 'completed' },
  { value: 2, text: 'in progress' },
];
export const priorities: Option[] = [
  { value: 0, text: 'all' },
  { value: 1, text: 'low' },
  { value: 2, text: 'normal' },
  { value: 3, text: 'high' },
];
