import styled from 'styled-components';
import { NumericSteperStyledProps } from './types';

export const StepperContainer = styled.div<NumericSteperStyledProps>`
  align-self: center;
  display: flex;
  justify-content: space-between;
  position: relative;
    width: ${({ size }) => size === "sm" && "6rem"};;

  input {
    height: 2rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.base.button};
    border: none;
    height: ${({ size }) => size === "sm" ? "2rem" : "2.375rem"};
    text-align: center;
    width: ${({ size }) => size === "sm" ? "inherit" : "100%"};;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }
`;

export const StepperButtonStyled = styled.button`
  align-items: center;
  display: flex;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  height: 100%;

  svg {
    color: ${({ theme }) => theme.colors.purple.default};
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.purple.dark};
    }
  }

  &.add {
    right: 0.5rem;
  }

  &.sub {
    left: 0.5rem;
  }
`;
