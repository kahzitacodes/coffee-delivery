import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;

  label {
    color: ${({ theme }) => theme.colors.base.label};
    font-size: ${({ theme }) => theme.fontBody.fontSize.medium};
    position: absolute;
    margin: 0.75rem;

    visibility: hidden;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.base.label};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.colors.base.label};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.base.label};
  }

  input {
    color: ${({ theme }) => theme.colors.base.text};
    font-size: ${({ theme }) => theme.fontBody.fontSize.medium};
    background-color: ${({ theme }) => theme.colors.base.input};
    border: 1px solid ${({ theme }) => theme.colors.base.button};
    border-radius: 4px;
    padding: 0.75rem;
    height: 2.625rem;
    width: 100%;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.yellow.dark};
    }
  }
`;
