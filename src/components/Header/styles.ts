import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 4.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 6.5rem;
  }
`;

export const HeaderLogo = styled.div`
  height: 40px;
  width: 84.95px;

  img {
    width: 100%;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const HeaderLocation = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple.light};
  gap: 0.25rem;
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;

  svg {
    fill: ${({ theme }) => theme.colors.purple.default};
  }

  span {
    font-size: ${({ theme }) => theme.fontBody.fontSize.small};
    color: ${({ theme }) => theme.colors.purple.dark};
  }
`;

export const CartWrapper = styled.div`
  position: relative;
`;

export const BadgeCounter = styled.span`
  background-color: ${({ theme }) => theme.colors.yellow.dark};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontBody.fontSize.xsmall};
  font-weight: ${({ theme }) => theme.fontBody.fontWeight.bold};
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  height: 1.25rem;
  width: 1.25rem;
  z-index: 2;
  top: -0.5rem;
  right: -0.5rem;
  border-radius: 50%;
`;
