import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2rem 0;

  h2 {
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem 2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
