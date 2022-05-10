import styled from 'styled-components';

export const LoginPageHeaderContainer = styled.div``;

export const LoginPageHeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.mdFont};
  font-weight: ${({ theme }) => theme.weight.bold};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
`;