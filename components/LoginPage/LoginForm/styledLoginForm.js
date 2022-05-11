import styled from "styled-components";

export const LoginFormContaier = styled.div`
  max-width: 450px;

  p {
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.font.smFont};
  }
`;
