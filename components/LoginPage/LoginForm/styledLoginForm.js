import styled from "styled-components";

export const LoginFormContaier = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;

  p {
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.font.smFont};
  }
`;

export const LoginFormOrText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  hr {
    margin: 0px 12px;
    border: 0;
    border-top: 1px solid rgb(217, 218, 220);
    background-color: rgb(217, 218, 220);
    width: 100%;
  }
`;
