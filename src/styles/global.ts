import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --input-background: ${({ theme }) => theme.colors.base.input};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea{
    font-family: ${({ theme }) => theme.fontBody.family};
    font-weight: 400;
    font-size: 1rem;
  }

  p {
    line-height:  ${({ theme }) => theme.fontBody.lineHeight[130]};
  }
  
  h1, .h1,
  h2, .h2 ,
  h3, .h3,
  h4, .h4{
    font-family: "Baloo 2";
    font-weight: ${({ theme }) => theme.fontHeader.fontWeight.extraBold};
    line-height: ${({ theme }) => theme.fontHeader.lineHeight};
  }

  h1, .h1 {
    font-size: ${({ theme }) => theme.fontHeader.fontSize.xlarge};
  }

  h2, .h2 {
    font-size: ${({ theme }) => theme.fontHeader.fontSize.large};
  }

  h3, .h3 {
    font-size: ${({ theme }) => theme.fontHeader.fontSize.medium};
  }

  h4, .h4 {
    font-size: ${({ theme }) => theme.fontHeader.fontSize.small};
  }

  h5, .h5 {
    font-size: ${({ theme }) => theme.fontHeader.fontSize.xsmall};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {

  }
`;
