import styled from 'styled-components';

export const ProductContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};
  padding-bottom: 2rem;
`;

export const ProductImage = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;

  h4 {
    color: ${({ theme }) => theme.colors.base.subtitle};
    margin-bottom: 0.5rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    justify-content: space-between;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;
      gap: 0.5rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: column;
      gap: 0.25rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      flex-direction: row;
      gap: 0.5rem;
    }
  }

  .price {
    color: ${({ theme }) => theme.colors.base.text};
    font-weight: ${({ theme }) => theme.fontBody.fontWeight.bold};
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }
`;
