import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps {
  variant: 'base' | 'yellow';
  size: 'sm' | 'lg';
  label: string;
  icon?: JSX.Element;
  onClick?: (item: any | undefined) => void;
}
export interface ButtonStyledProps {
  variant: 'base' | 'yellow';
  size: 'sm' | 'lg';
}
