import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 3fr 2fr;
    padding-top: 2.5rem;
  }
`;

const CardBase = styled.div`
  background-color: ${({ theme }) => theme.colors.base.card};
  padding: 2.125rem;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CardContainer = styled(CardBase)`
  background-color: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardCartContainer = styled(CardBase)`
  background-color: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CardTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  .titleContent {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .title {
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-size: ${({ theme }) => theme.fontBody.fontSize.medium};
  }

  .text {
    color: ${({ theme }) => theme.colors.base.text};
    font-size: ${({ theme }) => theme.fontBody.fontSize.small};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .row {
    display: flex;
    gap: 0.75rem;
  }

  .flex-1 {
    flex: 1;
  }

  .flex-2 {
    flex: 2;
  }

  .flex-3 {
    flex: 3;
  }
`;
