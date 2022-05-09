import styled from "styled-components";
import { mdScreen, smScreen, transitionFast } from "../../../global/GlobalStyle";

export const SignupOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem 0;
  margin-top: 3rem;
  width: 100%;
`;

export const SignupOptionsButton = styled.button`
  background: ${({ facebook }) => (facebook ? "#405a93" : "transparent")};
  color: ${({ facebook }) => (facebook ? "#fff" : "#55555a")};
  font-size: ${({ theme }) => theme.font.smFont};
  border: ${({ facebook }) => (facebook ? "0" : "1px solid #000")};
  outline: 0;
  border-radius: 31.5rem;
  padding: 0.875rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${transitionFast};
  width: 320px;
  margin: 0 auto;

  i {
    margin-right: 1rem;

    @media screen and (max-width: ${mdScreen}) {
      margin-right: 0.4rem;
    }
  }

  :hover {
    background: ${({ facebook }) => (facebook ? "#384f81" : "transparent")};
    transform: scale(1.1);
  }

  @media screen and (max-width: ${mdScreen}) {
    padding: 0.875rem 2rem;
    width: 100%;
  }

  @media screen and (max-width: ${smScreen}) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
`;

export const SignupOptionsFooter = styled.div`
  text-align: center;
  position: relative;
  color: #8a857f;
  font-size: 1.2rem;

  span {
    padding: 0 1rem;
  }

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    background-color: #8a857f;
    width: 100px;
    height: 1px;
  }

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 55%;
    background-color: #8a857f;
    width: 100px;
    height: 1px;
  }
`;
