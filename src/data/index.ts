import uniqid from 'uniqid';
export type Option = {
  uid: string;
  value: number;
  text: string;
};
export const statuses: Option[] = [
  { uid: uniqid(), value: 0, text: 'all' },
  { uid: uniqid(), value: 1, text: 'completed' },
  { uid: uniqid(), value: 2, text: 'in progress' },
];
export const priorities: Option[] = [
  { uid: uniqid(), value: 0, text: 'all' },
  { uid: uniqid(), value: 1, text: 'low' },
  { uid: uniqid(), value: 2, text: 'normal' },
  { uid: uniqid(), value: 3, text: 'high' },
];
