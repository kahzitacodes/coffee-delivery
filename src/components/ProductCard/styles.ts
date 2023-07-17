import styled from 'styled-components';

export const ProductContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -2.5rem;
`;

export const ProductTag = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow.light};
  border-radius: 40px;
  padding: 0.25rem 0.5rem;

  span {
    color: ${({ theme }) => theme.colors.yellow.dark};
    font-size: ${({ theme }) => theme.fontBody.fontSize.tag};
    font-weight: ${({ theme }) => theme.fontBody.fontWeight.bold};
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
`;

export const ProductWrapTags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  justify-content: center;
  margin: 1rem 0;
`;

export const ProductContent = styled.div`
  text-align: center;

  h3 {
    color: ${({ theme }) => theme.colors.base.subtitle};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.base.label};
    font-size: ${({ theme }) => theme.fontBody.fontSize.small};
  }
`;

export const ProductFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1.25rem;

  .price {
    color: ${({ theme }) => theme.colors.base.text};
    align-items: baseline;
    display: flex;
    gap: 0.24rem;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }
`;
