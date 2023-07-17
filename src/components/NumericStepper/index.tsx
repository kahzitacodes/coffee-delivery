import { Minus, Plus } from 'phosphor-react';
import { StepperButtonStyled, StepperContainer } from './styles';
import { NumericSteperProps } from './types';

export function NumericStepper({ value, size = "md", handleSub, handleAdd }: NumericSteperProps) {

  return (
    <StepperContainer size={size}>
      <StepperButtonStyled className="sub" title="subtrair 1 unidade" onClick={() => handleSub()}>
        <Minus size={16} />
      </StepperButtonStyled>

      <input type="number" value={value} readOnly />

      <StepperButtonStyled className="add" title="adicionar 1 unidade" onClick={() => handleAdd()}>
        <Plus size={16} />
      </StepperButtonStyled>
    </StepperContainer>
  );
}