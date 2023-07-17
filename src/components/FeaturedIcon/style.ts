import styled, { css } from 'styled-components';
import { FeaturedIconStyledProps } from './types';

export const IconContainer = styled.div<FeaturedIconStyledProps>`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 2rem;
  justify-content: center;
  width: 2rem;
  aspect-ratio: 1 / 1;

  ${({ variant }) => {
    switch (variant) {
      case 'yellowDark':
        return css`
          background-color: ${({ theme }) => theme.colors.yellow.dark};
        `;
      case 'yellow':
        return css`
          background-color: ${({ theme }) => theme.colors.yellow.default};
        `;
      case 'purple':
        return css`
          background-color: ${({ theme }) => theme.colors.purple.default};
        `;
      case 'base':
        return css`
          background-color: ${({ theme }) => theme.colors.base.text};
        `;
    }
  }}

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
