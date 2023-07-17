import { PaymentMethodType } from '../../reducers/cart/reducer';

interface ButtonSelectProps {
  name: string;
  label: string;
  id: string;
  icon: JSX.Element;
  value: string;
  btnValue?: string;
  checked?: boolean;
  handleChange?: (e: any) => void;
}

export interface SelectOptionsProps {
  buttons: ButtonSelectProps[];
  name: string;
  handleChange: Function;
  value: string;
}

export interface ButtonSelectStyledProps {
  checked: boolean;
}