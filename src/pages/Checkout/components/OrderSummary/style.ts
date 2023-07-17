import styled from 'styled-components';

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SummaryRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SummaryItems = styled.span`
  color: ${({ theme }) => theme.colors.base.text};
`;

export const SummaryTotal = styled.span`
  color: ${({ theme }) => theme.colors.base.text};
  font-weight: ${({ theme }) => theme.fontBody.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontBody.fontSize.large};
`;