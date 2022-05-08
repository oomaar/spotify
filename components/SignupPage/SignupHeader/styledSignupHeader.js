import styled from 'styled-components';

export const SignupHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignupHeaderLogo = styled.div`
  font-size: calc(${({ theme }) => theme.font.smFont} + 1rem);
  display: flex;
  align-items: center;

  i {
    margin-right: 0.2rem;
  }
`;

export const SignupHeaderText = styled.p`
  margin: 40px 0px 0px;
  font-size: 2rem;
  color: #000;
  font-weight: ${({ theme }) => theme.weight.bold};
`;