import { ButtonContainer } from './style';
import { ButtonProps } from './types';

export function Button({ size, variant, label, icon, onClick }: ButtonProps) {
  return (
    <ButtonContainer size={size} variant={variant} onClick={onClick}>
      {icon && icon}
      {label}
    </ButtonContainer>
  );
}