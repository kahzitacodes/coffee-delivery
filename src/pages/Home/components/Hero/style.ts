import styled from 'styled-components';
import background from '../../../../assets/background-hero.png';

export const HeroWrapper = styled.div`
  background: url(${background}) no-repeat center/cover;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 5.75rem 0;
  }
`;

export const HeroImage = styled.div`
  display: block;
  img {
    width: 100%;
  } 

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
   img {
    width: auto;
   } 
  }
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  gap: 2.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 3fr 1fr;
    gap: 2.5rem;
  }
`;

export const HeroContent = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontHeader.fontSize.large};
    margin-bottom: 1rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontHeader.fontSize.xlarge};
    }
  }
  p {
    font-size: ${({ theme }) => theme.fontBody.fontSize.large};
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`;

export const HeroList = styled.ul`
  margin-top: 2.125rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 1.25rem 1.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 3fr 4fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 4.125rem;
    grid-template-columns: 3fr 4fr;
    grid-template-rows: 1fr 1fr;
  }

  li {
    align-items: center;
    display: flex;
    gap: 0.75rem;

    span {
      font-size: ${({ theme }) => theme.fontBody.fontSize.medium};
      color: ${({ theme }) => theme.colors.base.text};
    }
  }
`;
