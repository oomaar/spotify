import styled from "styled-components";
import { transitionFast } from "../../../global/GlobalStyle";

const LoginPageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100vw;
`;

const LoginPageButton = styled.button`
  color: #000;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: ${transitionFast};

  :hover {
    background-color: ${({ theme }) => theme.colors.success};
    color: #fff;
  }
`;

export { LoginPageContainer, LoginPageButton };
