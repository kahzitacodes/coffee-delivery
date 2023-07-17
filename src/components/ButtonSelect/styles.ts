import styled, { css } from 'styled-components';
import { ButtonSelectStyledProps } from './type';

export const ButtonSelectContainer = styled.div<ButtonSelectStyledProps>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.base.button};
  padding: 0.875rem;
  display: flex;
  border-radius: 6px;
  gap: 0.875rem;
  width: 100%;
  height: 3.25rem;

  border: 1px solid ${({ theme }) => theme.colors.base.button};

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ checked, theme }) => checked ? theme.colors.purple.light : theme.colors.base.hover};
    cursor: ${({ checked }) => checked ? "default" : "pointer"};
  }


  ${({ checked }) => checked && css`
    background-color: ${({ theme }) => theme.colors.purple.light};
    border-color: ${({ theme }) => theme.colors.purple.default};
  ` }

  label {
      pointer-events: none;
      left: 3rem;
      color: ${({ theme }) => theme.colors.base.text};
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.fontBody.fontSize.xsmall};
    }
    svg {
      color: ${({ theme }) => theme.colors.purple.default};
    }

  input[type='radio'] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const SelectOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;
