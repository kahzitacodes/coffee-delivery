import styled from 'styled-components';

export const CartButtonBase = styled.button`
  align-items: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  height: 2.375rem;
  justify-content: center;
  width: 2.375rem;
  transition: all 0.24s ease-in-out;
  aspect-ratio: 1 / 1;
`;

export const CartButtonStyle = styled(CartButtonBase)`
  background-color: ${({ theme }) => theme.colors.yellow.light};
  position: relative;

  svg {
    fill: ${({ theme }) => theme.colors.yellow.dark};
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.yellow.default};
    }
  }
`;

export const AddToCartButtonStyle = styled(CartButtonBase)`
  background-color: ${({ theme }) => theme.colors.purple.default};

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple.dark};
  }
`;
