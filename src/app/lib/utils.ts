import { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return inputs.filter(Boolean).join(' ');
};