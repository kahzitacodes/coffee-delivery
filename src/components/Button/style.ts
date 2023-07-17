import styled, { css } from 'styled-components';
import { ButtonStyledProps } from './types';

export const ButtonContainer = styled.button<ButtonStyledProps>`
  align-items: center;
  text-transform: uppercase;
  border-radius: 6px;
  display: flex;
  border: 0;
  cursor: pointer;
  justify-content: center;
  transition: all .2s ease-in-out;

  ${({ variant }) => {
    switch (variant) {
      case 'base':
        return css`
          background-color: ${({ theme }) => theme.colors.base.button};
          color: ${({ theme }) => theme.colors.base.text};
          &:hover {
            background-color: ${({ theme }) => theme.colors.base.hover};
          }
          svg {
            color: ${({ theme }) => theme.colors.purple.default};
          }
        `;
      case 'yellow':
        return css`
          background-color: ${({ theme }) => theme.colors.yellow.default};
          color: ${({ theme }) => theme.colors.white};
          &:hover {
            background-color: ${({ theme }) => theme.colors.yellow.dark};
          }
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 0.5rem;
          gap: 0.25rem;
          height: 2rem;
          font-size: ${({ theme }) => theme.fontBody.fontSize.small};
        `;
      case 'lg':
        return css`
          height: 2.875rem;
          font-size: ${({ theme }) => theme.fontBody.fontSize.medium};
          font-weight: ${({ theme }) => theme.fontBody.fontWeight.bold};
        `;
    }
  }}
`;
