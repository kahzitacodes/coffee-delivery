import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1.25rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 1120px;
    margin: 0 auto;
  }
`;
