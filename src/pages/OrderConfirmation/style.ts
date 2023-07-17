import styled from 'styled-components';

export const ConfirmationContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 2.5rem;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 3fr 2fr;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .title {
    color: ${({ theme }) => theme.colors.yellow.default};
  }

  .subtitle {
    font-size: ${({ theme }) => theme.fontBody.fontSize.xlarge};
  }
`;

export const CardContainer = styled.div`
  border-radius: 6px 44px 6px 44px;
  border: 1px solid rgba(219, 172, 44, 1);
  padding: 2.5rem;
`;

export const OrderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    align-items: center;
    display: flex;
    gap: 0.75rem;
  }
`;

export const OrderInfos = styled.div`
  display: flex;
  flex-direction: column;
  
  p {
    font-size: ${({ theme }) => theme.fontBody.fontSize.medium};
    color: ${({ theme }) => theme.colors.base.text};
  }
`;

export const ConfirmationImage = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;

    img {
      width: 100%;
    }
  }
`;